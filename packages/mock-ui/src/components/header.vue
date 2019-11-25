<template>
  <header id="header">
    <a-row>
      <a-col :span="6">
        <router-link id="logo" to="/">
          <img
            src="http://yxs-app.oss-cn-beijing.aliyuncs.com/7afea67a09b7b83b2c8ab219d2bd8b10"
            alt="logo"
          />
          <span>Mocks</span>
        </router-link>
      </a-col>
      <a-col :span="18">
        <div class="userWrapper">
          <a-dropdown :trigger="['click']">
            <a class="ant-dropdown-link">
              <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              <span class="username">文玉杰</span>
              <a-icon type="down" />
            </a>
            <a-menu slot="overlay">
              <a-menu-item key="0">修改密码</a-menu-item>
              <a-menu-item key="1">用户信息</a-menu-item>
              <a-menu-item key="3">个人中心</a-menu-item>
              <a-menu-item key="4">退出登录</a-menu-item>
            </a-menu>
          </a-dropdown>
        </div>
        <div class="menuWrapper">
          <a-menu v-model="current" mode="horizontal" @select="MenuSelect">
            <a-menu-item key="dashboard">工作台</a-menu-item>
            <a-menu-item key="recover">发现</a-menu-item>
          </a-menu>
        </div>
      </a-col>
    </a-row>
  </header>
</template>
<script lang="ts" src="./header.ts"></script>
<style lang="less">
@header-height: 64px;
@border-color: #e8e8e8;

#header {
  background: #fff;
  box-shadow: 0 2px 8px #f0f1f2;
  position: relative;
  z-index: 10;
  max-width: 100%;
  height: @header-height;
  #logo {
    overflow: hidden;
    padding-left: 40px;
    float: left;
    height: 64px;
    line-height: 64px;
    text-decoration: none;
    white-space: nowrap;
    img {
      height: 32px;
      margin-right: 16px;
    }
    span {
      font-size: 18px;
      color: #314659;
      font-weight: 500;
      vertical-align: middle;
    }
  }
}
.userWrapper {
  float: right;
  height: @header-height;
  line-height: @header-height;
  padding: 0 50px 0 40px;
  .ant-dropdown-link {
    vertical-align: middle;
    color: #2c3e50;
    .username {
      padding: 0 5px;
    }
  }
}
.menuWrapper {
  float: left;
  height: @header-height;
  line-height: @header-height;
  .ant-menu-horizontal {
    height: @header-height;
    line-height: @header-height;
    border-bottom: 0;
  }
  .ant-menu-horizontal > .ant-menu-item:hover,
  .ant-menu-horizontal > .ant-menu-submenu:hover,
  .ant-menu-horizontal > .ant-menu-item-active,
  .ant-menu-horizontal > .ant-menu-submenu-active,
  .ant-menu-horizontal > .ant-menu-item-open,
  .ant-menu-horizontal > .ant-menu-submenu-open,
  .ant-menu-horizontal > .ant-menu-item-selected,
  .ant-menu-horizontal > .ant-menu-submenu-selected {
    border-bottom: 0;
    border-top: 2px solid #1890ff;
  }
  .ant-menu-horizontal > .ant-menu-item,
  .ant-menu-horizontal > .ant-menu-submenu {
    border-bottom: 0;
  }
}
</style>