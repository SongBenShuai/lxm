<template>
  <div class='el-header'>
    <div class='container-left'>
      <el-icon>
        <ElemeFilled />
      </el-icon>
      <span>全栈编程</span>
    </div>
    <span style='cursor: pointer'>
      <el-icon><Fold /></el-icon>
    </span>
    <span style='cursor: pointer'>
      <el-icon><Refresh /></el-icon>
    </span>
    <div class='container-right'>
      <span
        class='FullScreen'
        style='cursor: pointer'
        :fullscreen='fullscreen'
        @click='screen'
      >
        <el-icon v-if='!fullscreen'><FullScreen /></el-icon>
        <el-icon v-else><Aim /></el-icon>
      </span>
      <el-avatar style='cursor: pointer' :size='25' :src='userInfo.avatar' />

      <el-dropdown trigger='click' @command='handleCommand'>
        <span class='el-dropdown-link' style='cursor: pointer'>
          {{ userInfo.username
          }}<el-icon class='ArrowDown'><ArrowDown /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command='upPwd'>修改密码</el-dropdown-item>
            <el-dropdown-item command='logOut'>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import {
  FullScreen,
  Refresh,
  Fold,
  ArrowDown,
  ElemeFilled,
  Aim
} from '@element-plus/icons-vue'
import screenfull from 'screenfull'
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import API from '../api/login'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useRouter } from 'vue-router'

const router = useRouter()

const store = useStore()
const fullscreen = ref(false)

// 全屏
function screen() {
  screenfull.toggle()
  fullscreen.value = !fullscreen.value
}

// 用户数据
const userInfo = computed(() => {
  return store.getters.userInfo
})
// handleCommand方法
const handleCommand = (val) => {
  if (val === 'upPwd') {
    handleUpdatePassword()
  }
  if (val === 'logOut') {
    handleLoginOut()
  }
}
// 修改密码
const handleUpdatePassword = () => {
  alert('修改密码')
}
// 退出登录.
const handleLoginOut = () => {
  ElMessageBox.confirm('是否要退出登录？', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(async () => {
      const res = await API.logOut()
      router.push('/login')
      store.dispatch('user/logout')

      ElMessage({
        type: 'success',
        message: res.data
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '退出登录失败'
      })
    })
}
</script>

<style scoped lang='scss'>
.el-header {
  padding: 0;
  height: 64px;
  background: #4338ca;
  display: flex;
  align-items: center;

  .container-left {
    width: 235px;
    text-align: center;
    line-height: 64px;
    font-size: 20px;
    color: white;
  }

  .container-right {
    margin-left: 950px;
    height: 64px;
    display: flex;
    align-items: center;

    .el-dropdown-link {
      font-size: 16px;
      color: white;
      margin-top: -1px;
      margin-left: 10px;
    }
  }
}

.el-icon {
  font-size: 16px;
  color: white;
  margin: 0 8px;
}

.FullScreen {
  margin-right: 30px;
}

.el-avatar {
  margin-top: -4px;
}

.ArrowDown {
  font-size: 14px;
}
</style>
