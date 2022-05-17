const getters={
  sidebar:state=>state.app.sidebar,
  size:state=>state.app.size,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
}

export default getters