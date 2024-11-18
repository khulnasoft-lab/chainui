import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { initBots, useBotStore } from '@/stores/ftbotwrapper';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      allowAnonymous: true,
    },
  },
  {
    path: '/trade',
    name: 'Chaindrift Trading',
    component: () => import('@/views/TradingView.vue'),
  },
  {
    path: '/graph',
    name: 'Chaindrift Graph',
    component: () => import('@/views/ChartsView.vue'),
  },
  {
    path: '/logs',
    name: 'Chaindrift Logs',
    component: () => import('@/views/LogView.vue'),
  },
  {
    path: '/backtest',
    name: 'Chaindrift Backtest',
    component: () => import('@/views/BacktestingView.vue'),
  },
  {
    path: '/dashboard',
    name: 'Chaindrift Dashboard',
    component: () => import('@/views/DashboardView.vue'),
  },
  {
    path: '/balance',
    name: 'Chaindrift Balance',
    component: () => import('@/components/ftbot/BotBalance.vue'),
  },
  {
    path: '/open_trades',
    component: () => import('@/views/MobileTradesListView.vue'),
  },

  {
    path: '/trade_history',
    component: () => import('@/views/MobileTradesListView.vue'),
    props: { history: true },
  },
  {
    path: '/pairlist',
    component: () => import('@/components/ftbot/PairListLive.vue'),
  },
  {
    path: '/settings',
    name: 'Chaindrift Settings',
    component: () => import('@/views/SettingsView.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/LoginView.vue'),
    meta: {
      allowAnonymous: true,
    },
  },
  {
    path: '/pairlist_config',
    name: 'Pairlist Configuration',
    component: () => import('@/views/PairlistConfigView.vue'),
  },
  {
    path: '/(.*)*',
    name: '404',
    component: () => import('@/views/Error404View.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  // Init bots here...
  initBots();
  const botStore = useBotStore();
  if (!to.meta?.allowAnonymous && !botStore.hasBots) {
    // Forward to login if login is required
    next({
      path: '/login',
      query: { redirect: to.fullPath },
    });
  } else {
    next();
  }
});

export default router;
