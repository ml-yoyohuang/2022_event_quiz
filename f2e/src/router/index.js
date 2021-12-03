import Vue from 'vue';
import VueRouter from 'vue-router';


const Home = () => import('@/pages/Home');
const Admin = () => import('@/pages/Admin');
const Screen = () => import('@/pages/Screen');

Vue.use(VueRouter);

export const routes = [
  { path: '/', component: Home },
  { path: '/chill', component: Admin },
  { path: '/screen', component: Screen },
];

const router = new VueRouter({
  mode: 'hash',
  routes,
});
/* router.beforeEach((to, from, next) => {
  next();
}); */

export default router;
