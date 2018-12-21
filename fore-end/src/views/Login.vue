<template>
  <div id="header">
    <div class="logo"><img src="../images/aec6406c7d3a3cb8520bdb165f42f977.jpg" alt=""></div>
    <div class="sj"><input type="text" placeholder="手机号" v-model="phoneInput">
    <span>获取验证码</span></div>
    <div class="yzm"><input type="password" placeholder="验证码" v-model="codeInput"></div>
    <button @click="getlogin" :disabled="isDisabled" >登陆</button>
    <!-- <button @click="handleLogin" :disabled="isDisabled">登录</button> -->

  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
      phoneInput: '',
      codeInput: ''
    }
  },
  computed: {
    isDisabled () {
      // 手机号和验证码都为真返回false,false才能点击登录.
      if (this.phoneInput && this.codeInput) {
        return false;
      } else {
        // 为true不能点击登录,点击事件不能触发
        return true;
      }
    }
  },
  methods: {
    getlogin () {
      // console.log(22222)
      axios.get('/static/api/users.json', {
        params: {
          phoneInput: this.phoneInput,
          codeInput: this.codeInput
        }
      }).then(res => {
        var result = res.data;
        if (result.phone === this.phoneInput && result.code === this.codeInput) {
          console.log('登陆成功');
          // 写入本地存储
          localStorage.setItem('username', 'hahaha')
          // 获取到query里redicte 里的值
          let redirect = this.$route.query.redirect || '/Center';
          // 登陆成功重定向
          this.$router.replace(redirect)
        } else {
          alert('账号或密码登陆错误')
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/styles/common/px2rem.scss';

#header {
  height: px2rem(500);
  display: flex;
  flex-direction: column;

  .logo {
    // flex: 1;
    width: px2rem(100);
    height: px2rem(100);
    // background: url(../images/logo.jpg) no-repeat;
    background-size: 100%;
    margin: px2rem(100) auto;
  }

  .sj,
  .yzm {
    display: flex;
    height: px2rem(55);
    margin: px2rem(10) px2rem(25);
    border-bottom: px2rem(1) solid #ccc;

    input {
      width: 70%;
      font-size: px2rem(18);
    }

    span {
      width: 30%;
      font-size: px2rem(18);
      color: #ccc;
      display: flex;
      align-self: center;
    }
  }

  button {
    display: flex;
    justify-content: center;
    height: px2rem(80);
    margin: px2rem(20) px2rem(25);
    background: #ff5f16;
    font-size: px2rem(20);
    text-align: center;
    color: white;

    &[disabled] {
      background: #ccc;
    }
  }
}
</style>
