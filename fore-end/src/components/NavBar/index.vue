// NavBar 组件
<template>
    <ul class="nav-bar">
      <li>
        <img src="./images/films.png" alt="">
        <span>电影</span>
      </li>
      <li>
        <img src="./images/cinemas.png" alt="">
        <span>影院</span>
      </li>
      <li>
        <img src="./images/uugroupon.png" alt="">
        <span>9.9拼团</span>
      </li>
      <li>
        <img src="./images/center.png" alt="">
        <span>我的</span>
      </li>
    </ul>
</template>

<script>
export default{
  name: 'NavBar' // 也可以不写，不写就是默认文件名，推荐写
}
</script>

<style lang="scss" scoped>
@import '../../styles/common/px2rem.scss';
.nav-bar {
  flex-shrink: 0; // 不受兄弟压缩
  display: flex;
  height: px2rem(50);
  border-top: px2rem(1) solid #ededed;
  img {
    width: px2rem(21);
    height: px2rem(21);
  }
  li {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: px2rem(12);

    .img {
      display: block;
      width: px2rem(22);
      height: px2rem(22);
      background-size: 100%;
    }

    &.films {
      .img {
        background-image: url('./images/films.png');
      }
      &.z-act .img {
        background-image: url('./images/films_on.png');
      }
    }
    &.cinemas {
      .img {
        background-image: url('./images/cinemas.png');
      }
      &.z-act .img {
        background-image: url('./images/cinemas_on.png');
      }
    }
    &.center {
      .img {
        background-image: url('./images/center.png');
      }
      &.z-act .img {
        background-image: url('./images/center_on.png');
      }
    }

    &.z-act {
      color: #ff5f16;
    }
  }
}
</style>
