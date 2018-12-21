<template>
  <div id="header">
    <div class="logo"><img src="../images/film-1.jpg" alt=""></div>
    <div class="price">
      <span>价格</span>：<span>29元</span>
    </div>
    <div class="xinxi">
      <!-- <van-checkbox v-model="checked">复选框</van-checkbox> -->
      <span>数量</span>
      <button class="btn" @click.stop="reduceFilm(item)">-</button>
        <input type="text" >
        <button class="btn" @click.stop="addFilm(item)">+</button>
    </div>
    <div>
      <van-submit-bar
      :price="3050"
       button-text="提交订单"
      @submit="onSubmit"
      />
    </div>
  </div>
</template>
<script>
// import axios from 'axios';

import Vue from 'vue';
import { SubmitBar } from 'vant';

Vue.use(SubmitBar);

export default {
  name: 'shopCar',
  methods: {
    onSubmit () {

    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/styles/common/px2rem.scss';
#header{
  height: px2rem(500);
  display: flex;
  flex-direction: column;
    .logo {
    // flex: 1;
    width: px2rem(375);
    height: px2rem(210);
    // background: url(../images/logo.jpg) no-repeat;
    background-size: 100%;
    margin-bottom: px2rem(60);
  }
  .btn{
    width:px2rem(40);
    height:px2rem(30);
    background: palegoldenrod;
    // margin-left: px2rem(10);
  }
  input{
    height: px2rem(30);
  }
  span{
    font-size: px2rem(26);
    height:px2rem(40);
    line-height:px2rem(40);
    margin-left: px2rem(10);

  }
  .price{
    font-size: px2rem(26);
    height:px2rem(40);
    line-height:px2rem(40);
    color: chocolate;
    margin-left:px2rem(40)
  }
}

</style>
