<template>
  <div class='aside'>
    <el-menu
      active-text-color='#79bbff'
      class='el-menu-vertical-demo'
      text-color='#000'
      router
    >
      <item-terr v-for='v in menu' :key='v.name' :item='v'></item-terr>
    </el-menu>
  </div>
</template>

<script setup>
import ItemTerr from './ItemTerr'
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()

const menu = computed(() => {
  return store.getters.menuList
})
console.log('555', menu)
</script>

<style scoped lang='scss'>
.aside {
  background-color: white;
  position: fixed;
  top: 64px;
}

.el-menu {
  width: 250px;
  height: 100vh;
}
</style>
