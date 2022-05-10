export default{
  install(app){
    console.log('vue 插件',app)
    app.config.globalProperties.$name="vue-version-v3.2"
  }
}