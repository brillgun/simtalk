import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
      { path: '/', component: () => import('../components/Home.vue'), name: 'HOME', props: true},
      { path: '/chatList', component: () => import('../components/ChatList.vue'), name: 'CHAT_LIST', props: true},
      { path: '/chat/:userIdx', component: () => import('../components/Chat.vue'), name: 'CHAT', props: true},
      { path: '/more', component: () => import('../components/More.vue'), name: 'MORE', props: true},
      { path: '/profile', component: () => import('../components/Profile.vue'), name: 'PROFILE', props: true},
      { path: '/point', component: () => import('../components/More.vue'), name: 'POINT', props: true},
      { path: '/block', component: () => import('../components/More.vue'), name: 'BLOCK', props: true},
      { path: '/qna', component: () => import('../components/More.vue'), name: 'QNA', props: true},
      { path: '/terms', component: () => import('../components/More.vue'), name: 'TERMS', props: true},
      { path: '/policy', component: () => import('../components/More.vue'), name: 'POLICY', props: true},
      { path: '*', component: () => import('../components/ViewNotFound.vue') },
    ]
  })