import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import cesium from 'vite-plugin-cesium'

// https://vitejs.dev/config/
export default defineConfig(({mode,command})=>{
  const env=loadEnv(mode,process.cwd())
  return {
    plugins: [vue(), vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),cesium()],
    server:{
      port:3000,
      host:true,
      open:true    
    }  
    
  }
  
})
