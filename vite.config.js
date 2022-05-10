import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import cesium from 'vite-plugin-cesium'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx({
    // options are passed on to @vue/babel-plugin-jsx
  }),cesium()],
  server:{
    port:3000,
    host:true,
    open:true    
  }  
})
