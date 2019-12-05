<template>
  <div class="project-wrap">
    <a-row>
      <a-col :span="18">
        <div class="project-detail">
          <h2>{{info.name}}</h2>
          <p>项目id：{{info.projectID}}</p>
          <p>项目url：{{info.baseUrl}}</p>
          <p>项目描述：{{info.desc}}</p>
        </div>
      </a-col>
      <a-col :span="6">
        <div class="operation">
          <div class="btn create" @click="create">添加接口</div>
          <div class="btn edit" @click="toEditProject">编辑项目</div>
          <div class="btn delete">删除项目</div>
        </div>
      </a-col>
    </a-row>
    <a-table class="mytable" :columns="columns" :dataSource="tableData" rowKey="api_id" bordered>
      <span slot="operate" slot-scope="record, index">
        <a-tag
          @click="detail(record, index)"
          color="green"
        >查看</a-tag>
      </span>
    </a-table>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>

<style lang="less">
@import "./index.less";
</style>
