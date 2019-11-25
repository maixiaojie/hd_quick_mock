<template>
  <div class="index-wrap">
    <Header></Header>
    <div class="wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>

<style lang="less">
  @import './index.less';
</style>
