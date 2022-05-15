<swiper-item v-for="(item,i) in swiperList" :key="i">
  <navigator class="swiper-item" :url="'/subpkg/goods_detail/good_detail?good_id='+item.goods_id">
    <image :src="item.image_src"></image>
  </navigator>
</swiper-item>