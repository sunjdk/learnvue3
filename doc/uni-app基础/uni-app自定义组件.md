1.在项目根目录的components目录上，鼠标右键，选择 新建组件，填写组件信息后，最后点击创建按钮:
  a.组件名 my-search
  b.使用scss的组件
  c.创建同名目录
  d.创建
2.在分类页面的UI结构中，直接以标签的形式使用my-search自定义组件:

组件调用

```javascript
<my-search :bgColor="'pink'" :radius="3" @myclick="gotoSearch"></my-search>



gotoSearch(){
  console.log("ok")
  uni.navigateTo({
    url:'/subpkg/search/search'
  })
}
```


app 首页搜索组件吸顶效果实现

```javascript

<view class="search-box">
  <my-search @click="gotoSearch"></my-search>
</view>



gotoSearch(){
  uni.navigatTo({
    url:'/subpkg/search/search'
  })
}



.serach-box{
  //设置定位效果为“吸顶”
  position:sticky;
  top:0;
  z-index:999
}
```
