<template>
  <section class="app-main">
    <router-view v-slot="{Component,route}">
      <transition name="fade-transform" mode="out-in">
        <keep-alive>
          <component :is="Component" :key="route.path"></component>
        </keep-alive>
      </transition>
    </router-view>
  </section>
</template>

<script setup>
import { useRoute } from "vue-router"


const route=useRoute()
</script>

<style>

</style>