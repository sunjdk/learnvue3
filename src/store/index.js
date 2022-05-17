import { createStore } from "vuex";
import getters from "./getters";
import app from "./modules/app";
import settings from "./modules/settings";


const store=createStore({
  modules:{
    app:app,
    settings:settings
  },
  getters:getters
})

export default store