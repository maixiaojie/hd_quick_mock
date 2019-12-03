<template>
  <div class="api-wrap">
    <a-row>
      <a-col :span='18'>
        <div id="container"></div>
      </a-col>
      <a-col :span='6'>
        <Button @click="getValue">获取值</Button>
      </a-col>
    </a-row>
    
  </div>
</template>

<script lang="ts" src="./index.ts"></script>

<style lang="less">
  @import './index.less';
</style>
