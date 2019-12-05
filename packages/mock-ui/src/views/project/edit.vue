<template>
    <div  class="project-edit-wrap">
        <a-form :form="form" layout="vertical" class="info-form">
            <a-form-item label="项目名称" required>
              <a-input
                @blur="handleNameBlur"
                addonBefore="/"
                type="text"
                v-decorator="[
              'info.name', {rules: [{required: true, message: '必需参数'}]}]"
                placeholder
              ></a-input>
            </a-form-item>
            <a-form-item label="项目基础url" required>
              <a-input
                @blur="handleUrlBlur"
                addonBefore="/"
                type="text"
                v-decorator="[
              'info.url', {rules: [{required: true, message: '必需参数'}]}]"
                placeholder
              ></a-input>
            </a-form-item>
            <a-form-item label="项目描述" required>
              <a-input
                @blur="handleDescBlur"
                v-decorator="[
              'info.desc', {rules: [{required: true, message: '必需参数'}]}]"
                type="text"
                placeholder
              ></a-input>
            </a-form-item>
            <a-form-item>
              <a-button @click="create" block style="margin-top:30px;" type="primary">创建</a-button>
            </a-form-item>
          </a-form>
    </div>
</template>
<script lang="ts" src="./edit.ts"></script>

<style lang="less">
@import "./edit.less";
</style>
