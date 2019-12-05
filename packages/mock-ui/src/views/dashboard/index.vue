<template>
  <div class="dashboard-wrap">
    <div class="projectWrapper">
      <Project
        v-for="item in projectList"
        :key="item.projectID"
        :projectID="item.projectID"
        :name="item.name"
        :baseUrl="item.baseUrl"
        @editClick="handleEditClick"
      ></Project>
    </div>
    <div class="create" @click="create">+</div>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>

<style lang="less">
@import "./index.less";
</style>
