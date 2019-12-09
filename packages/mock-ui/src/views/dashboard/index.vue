<template>
  <div class="dashboard-wrap">
    <div class="projectWrapper">
      <a-empty v-if="projectList.length == 0" />
      <div v-if="projectList.length !== 0" class="page-wrapper">
        <a-pagination
          showQuickJumper
          :showTotal="total => `共 ${total} 条`"
          :defaultCurrent="pageNum"
          :pageSize="pageSize"
          :total="total_num"
          @change="pageChange"
        />
      </div>
      <Project
        v-show="projectList.length !== 0"
        v-for="item in projectList"
        :key="item._id"
        :projectID="item._id"
        :name="item.name"
        :baseUrl="item.url"
        @editClick="handleEditClick"
      ></Project>
    </div>
    <div title="创建新项目" class="create" @click="create">+</div>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>

<style lang="less">
@import "./index.less";
</style>
