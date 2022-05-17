const state={
  visitedViews:[],
  cachedViews:[]
}

const mutations={
  // 添加浏览组件
  ADD_VISITED_VIEW:(state,view)=>{
    /**
     * some() 方法用于检测数组中的元素是否满足指定条件（函数提供）。some() 方法会依次执行数组的每个元素：
     *  如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。如果没有满足条件的元素，则返回false。
     *  注意： some() 不会对空数组进行检测。
     *  注意： some() 不会改变原始数组。
     */
    if(state.visitedViews.some(v=>v.path===view.path)) return
    state.visitedViews.push(
      Object.assign({},view,{
        title:view.meta.title || 'no-name'
      })
    )
  },
  // 添加缓存组件
  ADD_CACHED_VIEW:(state,view)=>{
    if(state.cachedViews.includes(view.name)) return
    if(!view.meta.noCache){
      state.cachedViews.push(view.name)
    }
  },
  // 删除浏览过组件方法
  DEL_VISITED_VIEW:(state,view)=>{
    /**
     * entries() 方法返回一个数组的迭代对象，该对象包含数组的键值对 (key/value)。迭代对象中数组的索引值作为 key， 数组元素作为 value。
     */
    for(const [i,v] of state.visitedViews.entries()){
      if(v.path===view.path){
        state.visitedViews.splice(i,1)
        break;
      }
    }
  },
  // 删除缓存过组件方法
  DEL_CACHED_VIEW:(state,view)=>{
    const index=state.cachedViews.indexOf(view.name)
    index>-1 && state.cachedViews.splice(index,1)
  },
  // 删除其他浏览过组件方法
  DEL_OTHERS_VISITED_VIEWS:(state,view)=>{
    /**
     * filter() 方法创建数组，其中填充了所有通过测试的数组元素（作为函数提供）。注释：filter() 不会对没有值的数组元素执行该函数。
      注释：filter() 不会改变原始数组。
      affix附上; 贴上; 粘上;
     */
    state.visitedViews=state.visitedViews.filter(v=>{
      return v.meta.affix || v.path===view.path
    })
  },
  // 删除其他缓存过组件方法
  DEL_OTHERS_CACHED_VIEWS:(state,view)=>{
    const index=state.cachedViews.indexOf(view.name)
    if(index>-1){
      // slice() 方法可提取字符串的某个部分，并以新的字符串返回被提取的部分。
      state.cachedViews=state.cachedViews.slice(index,index+1)
    }else{
      state.cachedViews=[]
    }
  },
  // 删除所有浏览过组件
  DEL_ALL_VISITED_VIEWS:state=>{
    const affixTags=state.visitedViews.filter(tag=>tag.meta.affix)
    state.visitedViews=affixTags
  },
  //删除所有缓存过组件
  DEL_ALL_CACHED_VIEWS:state=>{
    state.cachedViews=[]
  },
  //更新浏览过组件方法
  UPDATE_VISITED_VIEW:(state,view)=>{
    for(let v of state.visitedViews){
      if(v.path===view.path){
        v=Object.assign(v,view)
        break
      }
    }
  },
  // 删除当前标签右侧的标签页
  DEL_RIGHT_VIEWS:(state,view)=>{
    /**
     * findIndex() 方法返回传入一个测试条件（函数）符合条件的数组第一个元素位置。
      findIndex() 方法为数组中的每个元素都调用一次函数执行：
      当数组中的元素在测试条件时返回 true 时, findIndex() 返回符合条件的元素的索引位置，之后的值不会再调用执行函数。
      如果没有符合条件的元素返回 -1
      注意: findIndex() 对于空数组，函数是不会执行的。
      注意: findIndex() 并没有改变数组的原始值。
     */
    const index=state.visitedViews.findIndex(v=>v.path===view.path)
    if(index===-1) return
    state.visitedViews=state.visitedViews.filter((item,idx)=>{
      if(idx<=index || (item.meta && item.meta.affix)) return true
      const i=state.cachedViews.indexOf(item.name)
      /**
       * splice() 方法用于添加或删除数组中的元素。注意：这种方法会改变原始数组。
       */
      if(i>-1) state.cachedViews.splice(i,1)

      return false
    })    
  },
  // 删除左侧标签页
  DEL_LETF_VIEWS:(state,view)=>{
    const index=state.visitedViews.findIndex(v=>v.path===view.path)
    if(index===-1) return
    state.visitedViews=state.visitedViews.filter((item,idx)=>{
      if(idx>=index || (item.meta && item.meta.affix)) return true
      const i=state.cachedViews.indexOf(item.name)
      if(i>-1) state.cachedViews.splice(i,1)

      return false
    })

  }
}

const actions={
  addView({dispatch},view){
    dispatch('addVisitedView',view)
    dispatch('addCachedView',view)
  },
  addVisitedView({commit},view){
    commit('ADD_VISITED_VIEW',view)
  },
  addCachedView({commit},view){
    commit('ADD_CACHED_VIEW',view)
  },
  delView({dispatch,state},view){
    return new Promise(resolve=>{
      dispatch('delVisitedView',view)
      dispatch('delCachedView',view)
      resolve({
        visitedViews:[...state.visitedViews],
        cachedViews:[...state.cachedViews]
      })
    })
  },
  delVisitedView({commit,state},view){
    return new Promise(resolve=>{
      commit('DEL_VISITED_VIEW',view)
      resolve({...state.visitedViews})
    })
  },
  delCachedView({commit,state},view){
    return new Promise(resolve=>{
      commit('DEL_CACHED_VIEW',view)
      resolve([...state.cachedViews])
    })
  },
  delOthersViews({dispatch,state},view){
    return new Promise(resolve=>{
      dispatch('delOthersVisitedViews',view)
      dispatch('delOthersCachedViews',view)
      resolve({
        visitedViews:[...state.visitedViews],
        cachedViews:[...state.cachedViews]
      })
    })
  },
  delOthersVisitedViews({commit,state},view){
    return new Promise(resolve=>{
      commit('DEL_OTHERS_VISITED_VIEWS',view)
      resolve([...state.visitedViews])
    })
  },
  delOthersCachedViews({commit,state},view){
    return new Promise(resolve=>{
      commit('DEL_OTHERS_CACHED_VIEWS',view)
      resolve([...state.cachedViews])
    })
  },
  delAllViews({dispatch,state},view){
    return new Promise(resolve => {
      dispatch('delAllVisitedViews', view)
      dispatch('delAllCachedViews', view)
      resolve({
        visitedViews: [...state.visitedViews],
        cachedViews: [...state.cachedViews]
      })
    })
  },
  delAllVisitedViews({ commit, state }) {
    return new Promise(resolve => {
      commit('DEL_ALL_VISITED_VIEWS')
      resolve([...state.visitedViews])
    })
  },
  delAllCachedViews({ commit, state }) {
    return new Promise(resolve => {
      commit('DEL_ALL_CACHED_VIEWS')
      resolve([...state.cachedViews])
    })
  },
  updateVisitedView({ commit }, view) {
    commit('UPDATE_VISITED_VIEW', view)
  },

  delRightTags({ commit }, view) {
    return new Promise(resolve => {
      commit('DEL_RIGHT_VIEWS', view)
      resolve([...state.visitedViews])
    })
  },

  delLeftTags({ commit }, view) {
    return new Promise(resolve => {
      commit('DEL_LEFT_VIEWS', view)
      resolve([...state.visitedViews])
    })
  }
}


export default {
  namespaced: true,
  state,
  mutations,
  actions
}