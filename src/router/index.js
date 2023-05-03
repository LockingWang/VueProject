import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/login',
    component: () => import('../views/LoginView.vue'),
  },
  {
    path: '/dashboard',
    component: () => import('../views/DashboardView.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/ProductView.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/OrdersView.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/CouponsView.vue'),
      },
    ],
  },
  {
    path: '/user',
    component: () => import('../views/UserBoard.vue'),
    children: [
      {
        path: 'home',
        component: () => import('../components/UserHome.vue'),
      },
      {
        path: 'products',
        component: () => import('../components/UserProducts.vue'),
      },
      {
        path: 'product/:productId',
        component: () => import('../components/UserProduct.vue'),
      },
      {
        path: 'favorite',
        component: () => import('../components/UserFavorite.vue'),
      },
      {
        path: 'searchOrder',
        component: () => import('../components/UserSearchOrder.vue'),
      },
      {
        path: 'userCheckout',
        component: () => import('../views/UserCheckout.vue'),
        children: [
          {
            path: 'cart',
            component: () => import('../components/UserCart.vue'),
          },
          {
            path: 'userInfo',
            component: () => import('../components/UserInfo.vue'),
          },
          {
            path: 'order/:orderId',
            component: () => import('../components/UserOrder.vue'),
          },
          {
            path: 'payment',
            component: () => import('../components/UserPayment.vue'),
          },
        ],
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../components/NotFound.vue'),
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
