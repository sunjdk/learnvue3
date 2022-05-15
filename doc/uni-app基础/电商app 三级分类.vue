<template>
  <view>
    <view class="scroll-view-container">
      <scroll-view class="left-scroll-view" scroll-y :style="{height:wh+'px'}">
        <block v-for="(item,i) in cateList" :key="i">
          <view class="left-scroll-view-item" :class="['left-scroll-view-item',i===active ? 'active' : '']">{{item.cat_name}}</view>
        </block>
      </scroll-view>
    </view>
    <view class="right-scroll-view" scroll-y :style="{height:wh+'px'}">
      <view class="left-scroll-view-item">zzzz</view>
      <view class="left-scroll-view-item">zzzz</view>
      <view class="left-scroll-view-item">zzzz</view>
    </view>
  </view>
</template>