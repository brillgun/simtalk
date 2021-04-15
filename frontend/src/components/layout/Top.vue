<template>
  <v-toolbar
      color="white"
      elevation="0"
  >
    <v-dialog v-model="dialog" persistent max-width="350">
      <Popup v-on:close="popupClose" :userData="userData"/>
    </v-dialog>

    <!-- 뒤로가기-->
    <v-btn v-if="$route.name === 'Chat'" class="left-btn" right top icon @click="goChatList">
      <font-awesome-icon icon="angle-left" class="fa-lg"></font-awesome-icon>
      <span class="pl-2 font-weight-bold">리스트</span>
    </v-btn>

    <v-chip-group v-if="$route.name !== 'Chat'" class="logo-area">
          <v-img :src="logo" width="24px"></v-img>
          <v-toolbar-title class="pl-2 gray--text font-weight-bold " v-if="title === 'HOME' || $route.name === 'Home'">광장</v-toolbar-title>
          <v-toolbar-title class="pl-2 gray--text font-weight-bold " v-else-if="title === 'CHAT' || $route.name === 'Chat'">채팅</v-toolbar-title>
          <v-toolbar-title class="pl-2 gray--text font-weight-bold " v-else-if="title === 'MORE' || $route.name === 'More'">더보기</v-toolbar-title>
    </v-chip-group>

    <span class="mr-auto ml-auto" v-if="$route.name === 'Chat'">
      {{userName}}
    </span>

    <v-app-bar-nav-icon icon right class="right-btn" v-show="$route.name === 'Home' || $route.name === 'Chat' || $route.name === 'ChatList'">
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
    </v-app-bar-nav-icon>
  </v-toolbar>
</template>
<script>
import logo from '@/assets/simtalk-logo-fill.png'
import CONST from "@/constants";
import Popup from '@/components/popup/Popup';
export default {
  name: 'Top',
  components: {Popup},
  data: function() {
    return {
      title: '광장',
      userName: '대화상대명',
      userData: null,
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
      active: false,
      dialog: false,
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
  mounted() {
  },
  updated() {
    if (typeof this.$route.params.userData !== 'undefined' && this.$route.params.userData !== null){
      this.userData = this.$route.params.userData;
      this.userName = this.userData.nickName;
    }
    if(this.$route.name === 'Home'){
        this.menuList = this.homeMenu;
    } else if (this.$route.name === 'ChatList'){
      this.menuList = this.chatListMenu;
    } else if (this.$route.name === 'Chat'){
      this.menuList = this.chatMenu;
    }
  },
  methods: {
    clickEvent(item){
      if (this.$route.name === 'Home'){
        this.$EventBus.$emit(CONST.EVENTS.HOME_LIST_LOADING,item.params);
      } else if (this.$route.name === 'ChatList'){
        this.$EventBus.$emit(CONST.EVENTS.CHAT_LIST_LOADING,item.params);
      } else if (this.$route.name === 'Chat'){
        if (item.params === 'doOutChat'){
          this.openPopup();
        } else if (item.params === 'doBlock'){
          this.openPopup();
        } else if (item.params === 'doDeclaration'){
          this.openPopup();
        }
      }
    },
    goChatList(){
      this.$EventBus.$emit('HIDE_FOOTER_MENU', false);
      this.$router.replace('/chatList')
    },
    delRoom(){
      console.log('delete', this.userData.userIdx, this.userData.roomIdx);
      this.goChatList();
    },
    doBlock(){
      let str = this.userData.nickName + '님을 차단하시겠습니까?'
      if (confirm(str)){
        console.log('차단완료')
        this.goChatList();
      }
    },
    doDeclaration(){
      let str = this.userData.nickName + '님을 신고하시겠습니까?'
      if (confirm(str)){
        console.log('신고완료')
        this.goChatList();
      }
    },
    openPopup(){
      this.dialog = !this.dialog;
    },
    popupClose(param){
      this.dialog = param;
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