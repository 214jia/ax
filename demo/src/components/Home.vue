<template>
  <div class="home-container">
    <MyHeader></MyHeader>
    <div class="home-main-box">
      <MyAside></MyAside>
    <div class="home-main-body">
      <router-view></router-view>
    </div>
    </div>
  </div>
</template>
<script setup>
import MyHeader from './subcomponents/MyHeader.vue'
import MyAside from './subcomponents/MyAside.vue'
</script>
<style lang="less" scoped>
.home-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  .home-main-box {
    height: 100%;
    display: flex;
    .home-main-body {
      padding: 15px;
     // flex: 1;
    }
  }
}
</style>