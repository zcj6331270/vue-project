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
              path: 'NowPlay',
              name: 'NowPlay',
              component: () => import('./components/NowPlay/index.vue')
            },
            {
              // SoonPlay 页
              path: 'SoonPlay',
              name: 'SoonPlay',
              component: () => import('./components/SoonPlay/index.vue')
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
      path: '/Films/:filmId',
      name: 'FilmDetail',
      component: () => import('./views/FilmDetail.vue')
      // beforeEnter (to, from, next) {
      //   next()
      // }
    },
    // 用户页
    {
      path: '/User',
      component: {
        template: `
        <div>
          <router-view></router-view>
        </div>
      `
      },
      children: [
        {
          path: 'Card',
          name: 'Card',
          component: () => import('./views/card.vue'),
          beforeEnter (to, from, next) {
            // 判断是否登录，如果没有登录的话，跳转到登录页
            if (localStorage.getItem('username')) {
              next()
            } else {
              // 注意，如果需要实现，拦截到登陆页面之后，登录成功回跳到那个页面。
              // localStorage.setItem('myNeedPage', '/user/card');
              // next('/user/login');
              console.log(to.fullPath);
              next({
                path: '/User/Login',
                query: {
                  // 登录完成之后重新跳回登录之前的页面,而不是跳到登录页面
                  redirect: to.fullPath
                }
              })
            }
          }
        },
        {
          path: 'Login',
          name: 'Login',
          component: () => import('./views/Login.vue'),
          beforeEnter (to, from, next) {
            // 判断是否登录，如果没有登录的话，跳转到登录页
            if (localStorage.getItem('username')) {
              next()
            } else {
              // 注意，如果需要实现，拦截到登陆页面之后，登录成功回跳到那个页面。
              // localStorage.setItem('myNeedPage', '/user/card');
              // next('/user/login');
              console.log(to.fullPath);
              next({
                path: '/User/Login',
                query: {
                  // 登录完成之后重新跳回登录之前的页面,而不是跳到登录页面
                  redirect: to.fullPath
                }
              })
            }
          }
        }
      ]
    },
    {
      path: '/shopCar',
      name: 'shopCar',
      component: () => import('./views/shopCar.vue')
    },
    {
      path: '*',
      redirect: '/Films/NomPlay'
    }
  ]
});
export default router;
