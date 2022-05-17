import { createStore } from "vuex";

const store=createStore({
  modules:{
    app,
    settings
  },
  getters
})

export default store