import { createApp } from 'vue'
import registerDirectives from './directives'
import pluginObject from './plugins/plugins_object'
import pluginFunction from './plugins/plugins_function'
import App from './App.vue'

const app=createApp(App)
registerDirectives(app)
app.use(pluginObject)
app.use(pluginFunction)
app.mount('#app')
