<template>
  <v-toolbar
      color="white"
      elevation="0"
      @click="notActiveTopMenu"
  >
    <v-chip-group v-if="$route.name === CONST.MENU_NAME.HOME || $route.name === CONST.MENU_NAME.MORE || $route.name === CONST.MENU_NAME.CHAT_LIST" class="logo-area">
          <v-img :src="logo" width="24px"></v-img>
          <v-toolbar-title class="pl-2 gray--text font-weight-bold ">
            {{ title }}</v-toolbar-title>
    </v-chip-group>

    <!-- 뒤로가기-->
    <v-btn v-else class="left-btn" right top icon @click="goBackMenu">
      <font-awesome-icon icon="angle-left" class="fa-lg"></font-awesome-icon>
      <span class="pl-2 font-weight-bold" v-if="$route.name === CONST.MENU_NAME.CHAT">{{ title }}</span>
      <span class="pl-2 font-weight-bold" v-else>더보기</span>
    </v-btn>

    <span class="mr-auto ml-auto" v-if="$route.name !== CONST.MENU_NAME.HOME && $route.name !== CONST.MENU_NAME.MORE && $route.name !== CONST.MENU_NAME.CHAT_LIST">
      <span v-if="$route.name === CONST.MENU_NAME.CHAT">{{userName}}</span>
      <span v-else>{{title}}</span>
    </span>

    <v-app-bar-nav-icon icon right class="right-btn" v-show="$route.name === CONST.MENU_NAME.HOME || $route.name === CONST.MENU_NAME.CHAT || $route.name === CONST.MENU_NAME.CHAT_LIST">
      <div class="text-center">
        <v-menu
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                icon
                v-bind="attrs"
                v-on="on"
                @click="activeMenu"
            >
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </template>

          <v-list v-show="active">
            <v-list-item
                v-for="(item, i) in menuList"
                :key="i"
                link
            >
              <v-list-item-title @click="clickEvent(item)">{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar-nav-icon>
  </v-toolbar>
</template>
<script>
import logo from '@/assets/simtalk-logo-fill.png'
import CONST from "@/constants";

export default {
  name: 'Top',
  data: function() {
    return {
      CONST: CONST,
      title: CONST.TOP_TITLE.HOME,
      userName: '대화상대명',
      userData: null,
      logo: logo,
      menuList: [],
      eventType: '',
      homeMenu: [
        { title: '최신순', params: 'newest'},
        { title: '거리순', params: 'distance'},
      ],
      chatListMenu:[
        {title: '모든 채팅방 나가기', params: CONST.EVENTS.DO_OUT_ALL_ROOM}
      ],
      chatMenu:[
        { title: '채팅방 나가기', params: CONST.EVENTS.DO_OUT_ROOM},
        { title: '차단하기', params: CONST.EVENTS.DO_BLOCK},
        { title: '신고하기', params: CONST.EVENTS.DO_DECLARATION},
      ],
      active: false,
    };
  },
  created: function() {
    this.$EventBus.$on(
        this.CONST.EVENTS.SET_TOP_MENU_TITLE,
        function(title) {
          this.title = title;
        }.bind(this),
    );
    this.$EventBus.$on(
        this.CONST.EVENTS.CLOSE_TOP_MENU,
        function() {
          this.notActiveTopMenu();
        }.bind(this),
    );
  },
  mounted() {
  },
  updated() {
    if (typeof this.$route.query.userData !== 'undefined' && this.$route.query.userData !== null){
      this.userData = this.$route.query.userData;
      this.userName = this.userData.nickName;
    }
    if(this.$route.name === this.CONST.MENU_NAME.HOME){
        this.menuList = this.homeMenu;
    } else if (this.$route.name === this.CONST.MENU_NAME.CHAT_LIST){
      this.menuList = this.chatListMenu;
    } else if (this.$route.name === this.CONST.MENU_NAME.CHAT){
      this.menuList = this.chatMenu;
    }
  },
  watch: {
  },
  methods: {
    activeMenu() {
      this.active = true;
    },
    notActiveTopMenu(){
      if (this.active) this.active = false
    },
    clickEvent(item){
      if (this.$route.name === this.CONST.MENU_NAME.HOME){
        this.$EventBus.$emit(CONST.EVENTS.LIST_LOADING, CONST.MENU_NAME.HOME,item.params);
        this.close();
      } else{
        this.eventType = item.params;
        this.openPopup();
      }
    },
    goBackMenu(){
      this.$EventBus.$emit(this.CONST.EVENTS.HIDE_FOOTER_MENU, false);
      if (this.$route.name === CONST.MENU_NAME.CHAT){
        this.$router.replace('/chatList')
      } else{
        this.$EventBus.$emit(CONST.EVENTS.SET_TOP_MENU_TITLE, CONST.TOP_TITLE.MORE);
        this.$router.replace('/more')
      }
    },
    openPopup(){
      this.$EventBus.$emit(this.CONST.EVENTS.OPEN_MODAL, this.eventType, this.userData);
    },
    close(){
      this.$emit("close", false);
    },
  }
}
</script>
<style scoped>
  .logo-area{
    position: absolute;
    left: 18px;
  }
  .left-btn{
    left: 30px;
    position: absolute;
  }
  .right-btn{
    right: 14px;
    position: absolute;
  }
</style>