<template>
<div :class="classObj" class="app-wrapper">
  <div class="graw-bg">
    <el-icon :size="20">
      <Expand />
    </el-icon>
  </div>

  <!-- 左侧菜单 -->
  <sidebar class="sidebar-container" />
  <!-- 页面主区域 -->
  <div :class="{ hasTagsView: needTagsView }" class="main-container">
      <div :class="{ 'fixed-header': fixedHeader }">
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
</div>
</template>

<script setup>
import { computed, ref, watchEffect } from "vue"
import { useWindowSize } from '@vueuse/core'
import { useStore } from "vuex"
import AppMain from './components/AppMain.vue'
import TagsView from './components/TagsView/index.vue'
import Settings from './components/Settings/set.vue'
import Sidebar from './components/Sidebar/index.vue'
import Navbar from "./components/Navbar.vue"

const direction=ref("rtl")
const drawer = ref(false)
const size=ref("100")
const settingRef = ref(null);

const store = useStore();
const theme = computed(() => store.state.settings.theme);
const sideTheme = computed(() => store.state.settings.sideTheme);
const sidebar = computed(() => store.state.app.sidebar);
const device = computed(() => store.state.app.device);
const needTagsView = computed(() => store.state.settings.tagsView);
const fixedHeader = computed(() => store.state.settings.fixedHeader);

const classObj = computed(() => ({
  hideSidebar: !sidebar.value.opened,
  openSidebar: sidebar.value.opened,
  withoutAnimation: sidebar.value.withoutAnimation,
  mobile: device.value === 'mobile'
}))

const { width, height } = useWindowSize();
const WIDTH = 992; // refer to Bootstrap's responsive design

watchEffect(() => {
  if (device.value === 'mobile' && sidebar.value.opened) {
    store.dispatch('app/closeSideBar', { withoutAnimation: false })
  }
  if (width.value - 1 < WIDTH) {
    store.dispatch('app/toggleDevice', 'mobile')
    store.dispatch('app/closeSideBar', { withoutAnimation: true })
  } else {
    store.dispatch('app/toggleDevice', 'desktop')
  }
})


function setLayout() {
  settingRef.value.openSetting();
}

function handleClose(){
  drawer.value=false
}
</script>


<style lang="scss" scoped>
  @import "../assets/style/mixin.scss";
  @import "../assets/style/variables.module.scss";
  @import "../assets/style/sidebar.scss";

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
