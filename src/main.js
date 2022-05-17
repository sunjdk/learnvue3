import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import registerDirectives from './directives'
import pluginObject from './plugins/plugins_object'
import pluginFunction from './plugins/plugins_function'
import router from './router'
import App from './App.vue'


const app=createApp(App)
app.use(ElementPlus)
app.use(router)

app.mount('#app')
