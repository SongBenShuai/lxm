<template>
  <div class='box'>
    <div
      :style="{ width: !$store.getters.isCollapse ? '1230px' : '1420px' }"
      class='tags'
    >
      <el-tabs
        v-model='$route.path'
        type='card'
        @tab-remove='removeTab'
        @tab-click='activeTabs'
      >
        <el-tab-pane
          v-for='item in tagList'
          :key='item.path'
          :closable="item.path === '/' ? false : true"
          :label='item.title'
          :name='item.path'
        >
        </el-tab-pane>
      </el-tabs>

      <el-dropdown @command='handleCommand'>
        <span class='el-dropdown-link'>
          <el-icon class='down'>
          <ArrowDown />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command='other'>关闭其他</el-dropdown-item>
            <el-dropdown-item command='all'>关闭所有</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { onBeforeRouteUpdate, useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()
const router = useRouter()
const route = useRoute()

// 监听路由
onBeforeRouteUpdate((to) => {
  const route = {
    path: to.path,
    title: to.meta.title
  }
  store.dispatch('tags/addTag', route)
})

// 获取tags信息
const tagList = computed(() => {
  return store.getters.tagList
})

// 选中时事件
function activeTabs(val) {
  // console.log(val)
  router.push(val.props.name)
}

// 删除单个tag
function removeTab(path) {
  // console.log(path)
  store.dispatch('tags/delTag', path)
}

function handleCommand(val) {
  if (val === 'other') handleCloseOther()
  if (val === 'all') handleCloseAll()
}

// 关闭其他
function handleCloseOther() {
  // alert('关闭其他')
  store.dispatch('tags/handleCloseOther', route.path)
}

// 关闭所有
function handleCloseAll() {
  // alert('关闭所有')
  store.dispatch('tags/handleCloseAll')
}
</script>

<style lang='scss' scoped>
.box {
  width: 100%;
  background: #f3f4f6;
  height: 55px;
  position: fixed;
  top: 64px;
  z-index: 1000;
  padding-left: 10px;
}

.tags {
  display: flex;
  justify-content: space-between;
  position: fixed;
}

.el-tabs--card {
  width: calc(100% - 35px);
}

::v-deep .el-tabs__item {
  background: #fff;
  margin: 0 4px;
  border-radius: 5px;
}

::v-deep .el-tabs--card > .el-tabs__header .el-tabs__nav {
  border: none;
}

::v-deep .el-tabs--card > .el-tabs__header {
  border-bottom: none;
}

.down {
  background: #fff;
  padding: 10px 10px;
  border-radius: 3px;
  margin-top: 5px;
  position: fixed;
  right: 20px;
  font-size: 30px;
}
</style>
