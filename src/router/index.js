import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/login',
    component: () => import('../views/ManagerPage/LoginView.vue'),
  },
  {
    path: '/dashboard',
    component: () => import('../views/ManagerPage/DashboardView.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/ManagerPage/ProductView.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/ManagerPage/OrdersView.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/ManagerPage/CouponsView.vue'),
      },
    ],
  },
  {
    path: '',
    component: () => import('../views/UserPage/UserBoard.vue'),
    children: [
      {
        path: 'home',
        component: () => import('../views/UserPage/UserHome.vue'),
      },
      {
        path: 'products',
        component: () => import('../views/UserPage/UserProducts.vue'),
      },
      {
        path: 'product/:productId',
        component: () => import('../views/UserPage/UserProduct.vue'),
      },
      {
        path: 'favorite',
        component: () => import('../views/UserPage/UserFavorite.vue'),
      },
      {
        path: 'searchOrder',
        component: () => import('../views/UserPage/UserSearchOrder.vue'),
      },
      {
        path: 'userCheckout',
        component: () => import('../views/UserPage/UserCheckout.vue'),
        children: [
          {
            path: 'cart',
            component: () => import('../views/UserPage/UserCart.vue'),
          },
          {
            path: 'userInfo',
            component: () => import('../views/UserPage/UserInfo.vue'),
          },
          {
            path: 'order/:orderId',
            component: () => import('../views/UserPage/UserOrder.vue'),
          },
          {
            path: 'payment',
            component: () => import('../views/UserPage/UserPayment.vue'),
          },
        ],
      },
      {
        path: 'couponGame',
        component: () => import('../views/UserPage/CouponGame.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior() {
    return {
      top: 0,
    };
  },
  routes,
});

export default router;
