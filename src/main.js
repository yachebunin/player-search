import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import PlayerProfile from './views/PlayerProfile.vue';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  { path: '/profile/:id', component: PlayerProfile }
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
