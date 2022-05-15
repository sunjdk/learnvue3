<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
  <swiper-item v-for="(item,i) in swiperList" :key="i">
    <view class="swiper-item">
      <image :src="item.image_src"></image>
    </view>
  </swiper-item>
</swiper>