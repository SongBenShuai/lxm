<template>
  <template v-if="props.item && !props.item.child">
    <el-menu-item :index="props.item.frontpath">
      <template #title>
        <!-- <svg-icon :icon="props.item.icon"></svg-icon> -->
        <el-button
          :icon="props.item.icon"
          size="small"
          style="border: none; background: none; padding: 0"
        ></el-button>
        <span>{{ props.item.name }}</span>
      </template>
    </el-menu-item>
  </template>
  <template v-if="props.item && props.item.child">
    <el-sub-menu :index="props.item.frontpath + props.item.name">
      <template #title>
        <el-button
          :icon="props.item.icon"
          size="small"
          style="border: none; background: none; padding: 0"
        ></el-button>
        <span>{{ props.item.name }}</span>
      </template>
      <item-terr
        v-for="childrenItem in props.item.child"
        :key="childrenItem.name"
        :item="childrenItem"
      ></item-terr>
    </el-sub-menu>
  </template>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    default: () => {}
  }
})
</script>

<style lang="scss" scoped></style>
