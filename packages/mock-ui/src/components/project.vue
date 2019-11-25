<template>
  <div class="card">
    <p class="name">{{name}}</p>
    <p class="url">项目id：{{projectID}}</p>
    <p class="url">访问url：{{baseUrl}}</p>
    <div class="operation">
      <div title="编辑" @click="toEdit"><a-icon type="edit" /></div>
      <div title="收藏"><a-icon type="heart" /></div>
      <div title="删除"><a-icon type="delete" /></div>
    </div>
  </div>
</template>
<script lang="ts" src="./project.ts"></script>
<style lang="less">
.card {
  color: white;
  width: 270px;
  float: left;
  border-radius: 6px;
  padding: 12px;
  margin: 12px 15px;
  background: #b24592; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom right,
    #f15f79,
    #b24592
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #f15f79,
    #b24592
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  p.name {
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 10px;
  }
  p.url {
    background: white;
    color: tomato;
    margin: 0;
    font-size: 14px;
    padding: 10px 8px;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  .operation {
    display: flex;
    border: 1px solid white;
    padding: 6px 0;
    border-radius: 6px;
    div {
      flex: 1;
      cursor: pointer;
      text-align: center;
    }
  }
}
</style>