import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

Vue.use(Vuex)

// import Films from './views/Films.vue'
// import Cinema from './views/Cinema.vue';
// import Center from './views/Center.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    // 一级路由
    {
      path: '/',
      component: () => import('./views/Home.vue'),
      children: [
        {
          // 默认跳到Films/NowPlay
          path: '',
          redirect: 'Films/NowPlay'
        },
        {
          // 首页
          path: 'Films',
          name: 'Films',
          component: () => import('./views/Films.vue'),
          children: [
            {
              // nowplay 页
              path: 'Nowplay',
              name: 'Nowplay',
              compontent: () => import('./components/NowPlay/index.vue')
            },
            {
              // SoonPlay 页
              path: 'SoonPlay',
              name: 'SoonPlay',
              compontent: () => import('./components/SoonPlay/index.vue')
            }
          ]
        },
        {
          // 影院页
          path: 'Cinema',
          name: 'Cinema',
          component: () => import('./views/Cinema.vue')
        },
        {
          // 个人中心页
          path: 'Center',
          name: 'Center',
          component: () => import('./views/Center.vue')
        }
      ]
    },
    // 9.9团购页
    {
      path: '/Booking',
      name: 'Booking',
      component: () => import('./views/Booking.vue')
    },
    // 详情页
    {
      path: '/Filmdetail',
      component: () => import('./views/Filmdetail.vue')
    },
    // 用户页
    {
      path: '/User',
      component: () => import('./views/User.vue')
    },
    {
      path: '*',
      redirect: '/Films/NomPlay'
    }
  ]
});
export default router;
