<script setup>
import { reactive } from 'vue';
import zhCn from 'element-plus/es/locale/lang/zh-cn'
const config = {
  max: 3
}

</script>

<template>
  <el-config-provider :locale="zhCn" :message="config">
    <RouterView></RouterView>
  </el-config-provider>

</template>

<style scoped></style>
