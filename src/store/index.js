import { createStore } from "vuex";
import getters from "./getters";
import app from "./modules/app";
import permission from "./modules/permission";
import settings from "./modules/settings";
import tagsView from "./modules/tagsView";


const store=createStore({
  modules:{
    app:app,
    settings:settings,
    tagsView:tagsView,
    permission:permission
  },
  getters:getters
})

export default store