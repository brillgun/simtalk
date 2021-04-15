import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
      { path: '/', component: () => import('../components/Home.vue'), name: 'Home', props: true},
      { path: '/chatList', component: () => import('../components/ChatList.vue'), name: 'ChatList', props: true},
      { path: '/chat/:roomIdx', component: () => import('../components/Chat.vue'), name: 'Chat', props: true},
      { path: '/more', component: () => import('../components/More.vue'), name: 'More', props: true},
      { path: '*', component: () => import('../components/ViewNotFound.vue') },
    ]
  })