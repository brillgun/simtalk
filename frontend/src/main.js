import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import { router } from './router/index'
import "@/fontAwesome.js";
import VueMoment from 'vue-moment';
import VueSession from 'vue-session';
import CONST from '@/constants';
import Common from '@/plugins/common';
var sessionOptions = {
  persist: true,
};
Vue.prototype.$EventBus = new Vue();
Vue.prototype.CONST = CONST;
Vue.use(VueSession, sessionOptions);
Vue.use(VueMoment);
Vue.use(Common);

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')

