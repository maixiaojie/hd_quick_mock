<template>
  <div class="api-wrap">
    <a-row>
      <a-col :span="16">
        <div id="container"></div>
      </a-col>
      <a-col :span="8">
        <div class="right">
          <div class="tips"></div>
          <a-form :form="form" layout="vertical" class="info-form">
            <a-form-item label="Method" required>
              <a-select
                @change="handleMethodChange"
                v-decorator="[
              'info.method', {initialValue: 'get',rules: []}]"
              >
                <a-select-option value="get">get</a-select-option>
                <a-select-option value="post">post</a-select-option>
                <a-select-option value="put">put</a-select-option>
                <a-select-option value="delete">delete</a-select-option>
                <a-select-option value="patch">patch</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item label="Url" required>
              <a-input
                @blur="handleUrlBlur"
                addonBefore="/"
                type="text"
                v-decorator="[
              'info.url', {rules: [{required: true, message: '必需参数'}]}]"
                placeholder
              ></a-input>
            </a-form-item>
            <a-form-item label="描述" required>
              <a-input
                @blur="handleUrlDesc"
                v-decorator="[
              'info.desc', {rules: [{required: true, message: '必需参数'}]}]"
                type="text"
                placeholder
              ></a-input>
            </a-form-item>
            <a-form-item>
              <a-button @click="create" block style="margin-top:30px;" type="default">创建</a-button>
            </a-form-item>
          </a-form>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>

<style lang="less">
@import "./index.less";
</style>
