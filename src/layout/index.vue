<template>
  <div>
    <el-container>
      <el-header>
        <app-hrader></app-hrader>
      </el-header>
      <el-main>
        <app-button></app-button>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import AppHrader from './AppHrader'
import AppButton from './AppButton'
</script>

<style scoped lang='scss'>
.el-header {
  width: 100%;
  height: 64px;
  background: #4338ca;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
}

.el-main {
  padding: 0
}
</style>
