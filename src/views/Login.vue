<template>
    <div class="loginBox">
        login
        <el-button type="danger">Primary</el-button>
        <el-button :plain="true" @click="open">Show message</el-button>
        <i class="iconfont icon-phone"></i>
        <i class="iconfont icon-yanzhengyanzhengma"></i>
        <!-- <Home></Home> -->

    </div>
</template>
<script setup>
// import Home from '@/views/Home.vue';
const open = () => {
    ElMessage('This is a message.')
}
</script>
<style lang='scss' scoped></style>s