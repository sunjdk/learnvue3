<template>
  <div>
    主题设置
  </div>
</template>

<script setup>
import { ref } from "vue";

const showSettings = ref(true);

function openSetting() {
  showSettings.value = true;
}

defineExpose({
  openSetting,
})
</script>

<style>

</style>