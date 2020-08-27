import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import { router } from './routes.js'
import "@/fontAwesome.js";

import Top from './components/Top';
import Bottom from './components/Bottom';
import Search from './components/Search';
import UserDetail from './components/UserDetail';
Vue.component("Top", Top);
Vue.component("Bottom", Bottom);
Vue.component("Search", Search);
Vue.component("UserDetail", UserDetail);

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')

