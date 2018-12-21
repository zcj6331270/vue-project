<template>
  <div class="films-list">

    <!-- <Banner></Banner> -->
<van-swipe :autoplay="3000" indicator-color="white">
  <van-swipe-item><img src="../images/pic-1.jpg" alt=""></van-swipe-item>
  <van-swipe-item><img src="../images/pic-2.jpg" alt=""></van-swipe-item>
  <van-swipe-item><img src="../images/pic-3.jpg" alt=""></van-swipe-item>
  <van-swipe-item><img src="../images/pic-4.jpg" alt=""></van-swipe-item>
</van-swipe>
    <!-- 定位城市 -->
    <div class="city-fixed">
      <!-- <span>{{ curCity }}</span> -->
      <i class="iconfont icon-xiala"></i>
    </div>
    <!-- /定位城市 -->
    <!-- tab-bar -->
    <div class="tab-bar-wrapper">
      <ul class="tab-bar">
        <li :class="{'z-act': $route.path === '/Films/NowPlay'}" @click="switchList('NowPlay')">
          <span>正在热映</span>
        </li>
        <li :class="{'z-act': $route.path === '/Films/SoonPlay'}" @click="switchList('SoonPLAY')">
          <span>即将上映</span>
        </li>
      </ul>
    </div>
    <!-- /tab-bar -->
    <!-- <router-view name="NowPlay"></router-view> -->
    <router-view></router-view>

  </div>
</template>
<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=123456.ZCJ"></script>
<script>

import Vue from 'vue'
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe).use(SwipeItem);

export default {
  name: 'Films',
  // 切换路由
  methods: {
    switchList (type) {
      if (type === 'NowPlay') {
        this.$router.push({
          name: 'NowPlay'
        })
      } else {
        this.$router.push('/Films/SoonPlay')
      }
    }
  }
}
</script>
<style lang="scss">
/* @import '../styles/common/px2rem.scss'; */
@import "@/styles/common/px2rem.scss";
// @import "swiper/dist/css/swiper.min.css";

.films-list {
  flex: 1;
  overflow-y: auto;
}

.van-swipe {
  height: px2rem(210);

  .swiper-pagination-bullet {
    width: px2rem(10);
    height: px2rem(10);
  }
  .swiper-pagination-bullet-active {
    background: yellowgreen;
  }

  img {
    width: 100%;
  }
}

.city-fixed {
  position: absolute;
  top: px2rem(18);
  left: px2rem(8);
  z-index: 999;
  height: px2rem(30);
  line-height: px2rem(30);
  font-size: px2rem(14);
  color: #fff;
  border-radius: px2rem(15);
  text-align: center;
  padding: 0 px2rem(5);
  background: rgba(0, 0, 0, 0.2);
}

.tab-bar-wrapper {
  position: sticky;
  z-index: 999;
  top: px2rem(0);
  height: px2rem(50);
  border-bottom: px2rem(1) solid #ededed;
  background: #fff;
  .tab-bar {
    display: flex;
    height: px2rem(50);
    line-height: px2rem(50);
    align-items: center;
    li {
      flex: 1;
      text-align: center;
      font-size: px2rem(14);
      span {
        padding: 0 px2rem(10);
      }
      &.z-act {
        color: #ff5f16;
      }
    }
  }
}
</style>
