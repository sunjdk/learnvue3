5.2 搜索建议
#5.2.1 渲染搜索页面的基本结构
### 1. 定义如下的 UI 结构：

```javascript
<view class="search-box">
  <uni-search-bar @input="input" :radius="100" cancelButton="none"></uni-search-bar>
</view>

```
### 2.修改 components -> uni-search-bar -> uni-search-bar.vue 组件，将默认的白色搜索背景改为 #C00000 的红色背景：

```javascript
.uni-searchbar {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: row;
  position: relative;
  padding: 16rpx;
  /* 将默认的 #FFFFFF 改为 #C00000 */
  background-color: #c00000;
}

```
### 3. 实现搜索框的吸顶效果：

```javascript
.search-box {
  position: sticky;
  top: 0;
  z-index: 999;
}

```
### 4.定义如下的 input 事件处理函数：

```javascript
methods: {
  input(e) {
    // e.value 是最新的搜索内容
    console.log(e.value)
  }
}

```
5.2.2 实现搜索框自动获取焦点

## 1.修改 components -> uni-search-bar -> uni-search-bar.vue 组件，把 data 数据中的 show 和 showSync 的值，从默认的 false 改为 true 即可：
```javascript
data() {
  return {
    show: true,
    showSync: true,
    searchVal: ""
  }
}

```
## 2. 使用手机扫码预览，即可在真机上查看效果。

# 5.2.3 实现搜索框的防抖处理

### 1.在 data 中定义防抖的延时器 timerId 如下：
```javascript
data() {
  return {
    // 延时器的 timerId
    timer: null,
    // 搜索关键词
    kw: ''
  }
}

```
### 2.修改 input 事件处理函数如下：
```javascript
input(e){
  clearTimeout(this.timer)
  this.timer=setTimeout(()=>{
    this.kw=e.value
    console.log(this.kw)
  },500)
}

```
#5.2.4 根据关键词查询搜索建议列表
### 1.在 data 中定义如下的数据节点，用来存放搜索建议的列表数据：
```javascript
data() {
  return {
    // 搜索结果列表
    searchResults: []
  }
}

```
### 2.在防抖的 setTimeout 中，调用 getSearchList 方法获取搜索建议列表：
```javascript
this.timer=setTimeout(()=>{
  this.kw=e.value
  this.getSearchList()
},500)

```
### 3.在 methods 中定义 getSearchList 方法如下：
```javascript
async getSearchList(){
  if(this.kw===''){
    this.searchResults=[]
    return
  }
  const {data:res}=await uni.$http.get('/api/public/v1/goods/qsearch',{query:this.kw})
  if(res.meta.status!==200) return uni.$showMsg()
  this.searchResults=res.message
}

```
#5.2.5 渲染搜索建议列表
### 1.定义如下的 UI 结构：
```javascript
<view class="sugg-list">
  <view class="sugg-item" v-for="(item, i) in searchResults" :key="i" @click="gotoDetail(item.goods_id)">
    <view class="goods-name">{{item.goods_name}}</view>
    <uni-icons type="arrowright" size="16"></uni-icons>
  </view>
</view>



.sugg-list {
  padding: 0 5px;

  .sugg-item {
    font-size: 12px;
    padding: 13px 0;
    border-bottom: 1px solid #efefef;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .goods-name {
      // 文字不允许换行（单行文本）
      white-space: nowrap;
      // 溢出部分隐藏
      overflow: hidden;
      // 文本溢出后，使用 ... 代替
      text-overflow: ellipsis;
      margin-right: 3px;
    }
  }
}



```
### 2.点击搜索建议的 Item 项，跳转到商品详情页面：
```javascript

gotoDetail(goods_id) {
  uni.navigateTo({
    // 指定详情页面的 URL 地址，并传递 goods_id 参数
    url: '/subpkg/goods_detail/goods_detail?goods_id=' + goods_id
  })
}
```


5.3 搜索历史
#5.3.1 渲染搜索历史记录的基本结构
在 data 中定义搜索历史的假数据：

```javascript

data() {
  return {
    // 搜索关键词的历史记录
    historyList: ['a', 'app', 'apple']
  }
}



<!-- 搜索历史 -->
<view class="history-box">
  <!-- 标题区域 -->
  <view class="history-title">
    <text>搜索历史</text>
    <uni-icons type="trash" size="17"></uni-icons>
  </view>
  <!-- 列表区域 -->
  <view class="history-list">
    <uni-tag :text="item" v-for="(item, i) in historyList" :key="i"></uni-tag>
  </view>
</view>




.history-box {
  padding: 0 5px;

  .history-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    font-size: 13px;
    border-bottom: 1px solid #efefef;
  }

  .history-list {
    display: flex;
    flex-wrap: wrap;

    .uni-tag {
      margin-top: 5px;
      margin-right: 5px;
    }
  }
}
```


5.3.2 实现搜索建议和搜索历史的按需展示
当搜索结果列表的长度不为 0的时候（searchResults.length !== 0），需要展示搜索建议区域，隐藏搜索历史区域

当搜索结果列表的长度等于 0的时候（searchResults.length === 0），需要隐藏搜索建议区域，展示搜索历史区域

使用 v-if 和 v-else 控制这两个区域的显示和隐藏，示例代码如下：


```javascript

<!-- 搜索建议列表 -->
<view class="sugg-list" v-if="searchResults.length !== 0">
  <!-- 省略其它代码... -->
</view>

<!-- 搜索历史 -->
<view class="history-box" v-else>
  <!-- 省略其它代码... -->
</view>

```

5.3.3 将搜索关键词存入 historyList
直接将搜索关键词 push 到 historyList 数组中即可

```javascript
methods: {
  // 根据搜索关键词，搜索商品建议列表
  async getSearchList() {
    // 省略其它不必要的代码...

    // 1. 查询到搜索建议之后，调用 saveSearchHistory() 方法保存搜索关键词
    this.saveSearchHistory()
  },
  // 2. 保存搜索关键词的方法
  saveSearchHistory() {
    // 2.1 直接把搜索关键词 push 到 historyList 数组中
    this.historyList.push(this.kw)
  }
}

```

上述实现思路存在的问题：

关键词前后顺序的问题（可以调用数组的 reverse() 方法对数组进行反转）

关键词重复的问题（可以使用 Set 对象进行去重操作）

#5.3.4 解决关键字前后顺序的问题
data 中的 historyList 不做任何修改，依然使用 push 进行末尾追加

定义一个计算属性 historys，将 historyList 数组 reverse 反转之后，就是此计算属性的值：

```javascript

computed:{
  historys(){
    return [...this.historyList].reverse()
  }
}

```

页面中渲染搜索关键词的时候，不再使用 data 中的 historyList，而是使用计算属性 historys：

```javascript
<view class="history-list">
  <uni-tag :text="item" v-for="(item,i) in historys" :key="i"></uni-tag>
</view>

```

5.3.5 解决关键词重复的问题
修改 saveSearchHistory 方法如下：

```javascript

saveSearchHistory(){
  const set=new Set(this.historyList)
  set.delete(this.kw)
  set.add(this.kw)
  this.historyList=Array.from(set)
  //持久化
  uni.setStorageSync('kw',JSON.stringfy(this.historyList))
}

```

在 onLoad 生命周期函数中，加载本地存储的搜索历史记录：

```javascript
onLoad(){
  this.historyList=JSON.parse(uni.getStorageSync('kw') || '[]')
}

```

5.3.7 清空搜索历史记录
为清空的图标按钮绑定 click 事件：

```javascript
<uni-icons type="trash" size="17" @click="cleanHistory"></uni-icons>



// 清空搜索历史记录
cleanHistory() {
  // 清空 data 中保存的搜索历史
  this.historyList = []
  // 清空本地存储中记录的搜索历史
  uni.setStorageSync('kw', '[]')
}



```

5.3.8 点击搜索历史跳转到商品列表页面
为搜索历史的 Item 项绑定 click 事件处理函数：

```javascript

<uni-tag :text="item" v-for="(item, i) in historys" :key="i" @click="gotoGoodsList(item)"></uni-tag>


// 点击跳转到商品列表页面
gotoGoodsList(kw) {
  uni.navigateTo({
    url: '/subpkg/goods_list/goods_list?query=' + kw
  })
}



```



```javascript


```