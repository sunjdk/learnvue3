<view class="right-img-box">
  <view class="right-img-item" v-for="(item2,i2) in item.productList" :key="i2" v-if="i2!==0">
    <image :src="item2.image_src" :mode="widthFixs"></image>
  </view>
</view>