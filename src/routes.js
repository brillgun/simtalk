import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home';
import Chat from './components/Chat';
import More from './components/More';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
      { path: '/', component: Home , name: 'Home', props: true},
      { path: '/chat', component: Chat , name: 'Chat', props: true},
      { path: '/more', component: More , name: 'More', props: true},
    ]
  })