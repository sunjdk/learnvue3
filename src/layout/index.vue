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
    <div class="navbar">
      导航区域
    </div>
    <div class="tag-view">
      标签页区域
    </div>
    <div class="app-main">
      
    </div>
    <div class="settings">
      <el-drawer v-model="drawer" :size="size" title="主题设置" :direction="direction" :before-close="handleClose"><span>这是主题设置子组件</span></el-drawer>
    </div>
  </div>
</div>
</template>

<script setup>
import { ref } from "vue"


const direction=ref("rtl")
const drawer = ref(false)
const size=ref("100")

function handleClose(){
  drawer.value=false
}
</script>

<style lang="scss" scoped>
ul,
li {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
</style>
