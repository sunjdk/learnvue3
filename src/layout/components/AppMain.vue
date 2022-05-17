<template>
  <section class="app-main">
    <router-view v-slot="{ Component, route }">
      <transition name="fade-transform" mode="out-in">
        <keep-alive :include="cachedViews">
          <component :is="Component" :key="route.path"/>
        </keep-alive>
      </transition>
    </router-view>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

let store = useStore()
const route = useRoute()

store.dispatch('tagsView/addCachedView', route)

const cachedViews = computed(() => {
    return store.state.tagsView.cachedViews
})
</script>

<style lang="scss" scoped>
.app-main {
    box-sizing: border-box;
    min-height: calc(100vh - 50px);
    position: relative;
    overflow: hidden;
    margin: 10px 20px 0;
}

.fixed-header + .app-main {
  padding-top: 50px;
}

.hasTagsView {
  .app-main {
    /* 84 = navbar + tags-view = 50 + 34 */
    min-height: calc(100vh - 84px);
  }

  .fixed-header + .app-main {
    padding-top: 84px;
  }
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 17px;
  }
}
</style>