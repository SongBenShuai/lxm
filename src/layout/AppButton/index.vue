<template>
  <div>
    <el-container>
      <el-aside width='250px'>
        <Aside></Aside>
      </el-aside>
      <el-main>
        <TagsView></TagsView>
        <Main></Main>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import Aside from './Aside'
import Main from './Main'
import TagsView from '../../components/TagsView'
</script>

<style scoped lang='scss'>

.TagsView {
  padding-left: 30px;
}

.el-main {
  padding: 130px 0 0 0;
}
</style>
