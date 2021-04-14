<template>
<v-app-bar
      app
      color="white"
      :class="`elevation-2`"
      >
          <v-img :src="logo" max-width="30px" height="30px"></v-img>
          <span class="pl-2 font-weight-bold " v-if="title === 'HOME' || $route.name === 'Home'">광장</span>
          <span class="pl-2 font-weight-bold " v-if="title === 'CHAT' || $route.name === 'Chat'">채팅</span>
          <span class="pl-2 font-weight-bold " v-if="title === 'MORE' || $route.name === 'More'">더보기</span>
      <v-btn icon right id="right-btn" v-show="showBtn">
        <div class="text-center">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  icon
                  v-bind="attrs"
                  v-on="on"
              >
                <font-awesome-icon icon="bars" class="fa-lg"></font-awesome-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                  v-for="(item, index) in menuList"
                  :key="index"
                  link
              >
                <v-list-item-title @click="clickEvent(item)">{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-btn>
    </v-app-bar>
</template>
<script>
import logo from '@/assets/simtalk-logo-fill.png'
import CONST from "@/constants";

export default {
  name: 'Top',
  data: function() {
    return {
      title: '광장',
      logo: logo,
      menuList: [],
      homeMenu: [
        { title: '최신순', params: 'newest'},
        { title: '거리순', params: 'distance'},
      ],
      chatListMenu:[
        {title: '모든 채팅방 나가기', params: 'doOutAllChat'}
      ],
      chatMenu:[
        { title: '채팅방 나가기', params: 'doOutChat'},
        { title: '차단하기', params: 'doBlock'},
        { title: '신고하기', params: 'doDeclaration'},
      ],
      showBtn: true,
    };
  },
  created: function() {
    this.$EventBus.$on(
        this.CONST.EVENTS.SET_HEADER_TITLE,
        function(title) {
          this.title = title;
        }.bind(this),
    );
  },
  updated() {
    if(this.$route.name === 'Home'){
        this.showBtn = true
        this.menuList = this.homeMenu;
    } else if (this.$route.name === 'ChatList'){
        this.showBtn = true
      this.menuList = this.chatListMenu;
    } else if (this.$route.name === 'Chat'){
        this.showBtn = true
      this.menuList = this.chatMenu;
    } else {
      this.showBtn = false
    }
  },
  methods: {
    clickEvent(item){
      if (this.$route.name === 'Home'){
        this.$EventBus.$emit(CONST.EVENTS.HOME_LIST_LOADING,item.params);
      } else if (this.$route.name === 'ChatList'){
        this.$EventBus.$emit(CONST.EVENTS.CHAT_LIST_LOADING,item.params);
        console.log(item)
      }
    }
  }
}
</script>
<style scoped>
  #right-btn{
    right: 14px;
    position: absolute;
  }
</style>