<template>
<div class="app-wrapper">
  <div class="graw-bg">
    <el-icon :size="20">
      <Expand />
    </el-icon>
  </div>
  <!-- 左侧菜单 -->
  <div class="siderbar-container">
    <ul>
      <li>
        <router-link to="/">一级菜单1</router-link>
      </li>
      <li>
        <router-link to="/">一级菜单2</router-link>
      </li>
      <li>
        <router-link to="/">一级菜单3</router-link>
      </li>
      <li>
        <router-link to="/">一级菜单4</router-link>
      </li>
      <li>
        <router-link to="/">一级菜单5</router-link>
      </li>
      <ul>
        <li>
          <router-link to="/">二级菜单1</router-link>
        </li>
        <li>
          <router-link to="/">二级菜单2</router-link>
        </li>
        <li>
          <router-link to="/">二级菜单3</router-link>
        </li>
        <li>
          <router-link to="/">二级菜单4</router-link>
        </li>
      </ul>
    </ul>
  </div>
  <!-- 页面主区域 -->
  <div class="main-contain">
    <!-- 导航区域 -->
    <navbar @setLayout="setLayout" />
    <!-- 标签页 -->
    <tags-view></tags-view>
    <!-- 页面主区域 -->
    <app-main></app-main>
    <!-- 主题设置控件 -->
    <settings ref="settingRef" />
  </div>
</div>
</template>

<script setup>
import { ref } from "vue"




import AppMain from './components/AppMain.vue'
import TagsView from './components/TagsView/index.vue'
import Settings from './components/Settings/set.vue'
import Navbar from "./components/Navbar.vue"

const direction=ref("rtl")
const drawer = ref(false)
const size=ref("100")
const settingRef = ref(null);
function setLayout() {
  settingRef.value.openSetting();
}

function handleClose(){
  drawer.value=false
}
</script>


<style lang="scss" scoped>

.app-wrapper {

  position: relative;
  background-color: #F7F9FC;

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - 250px);
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}

.mobile .fixed-header {
  width: 100%;
}
</style>
