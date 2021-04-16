<template>
  <v-card >
        <v-card-title class="justify-center">안내</v-card-title>
        <v-spacer></v-spacer>
        <v-card-subtitle class="text-center pb-0">

          <span v-if="eventType === CONST.EVENTS.DO_OUT_ALL_ROOM" class="pt-0 pb-0" v-text="'모든 채팅방을 나가시겠습니까?'"></span>

          <span v-else-if="eventType === CONST.EVENTS.DO_OUT_ROOM" class="pt-0 pb-0" v-text="'채팅방을 나가시겠습니까?'"></span>

          <v-card-subtitle  v-else-if="eventType === CONST.EVENTS.DO_BLOCK" class="text-center pt-0 pb-0">
            <span class="purple--text font-weight-bold">{{userData.nickName}}</span> 님을 차단 하시겠습니까?
          </v-card-subtitle>

          <v-card-subtitle  v-else-if="eventType === CONST.EVENTS.DO_DECLARATION" class="text-center pt-0 pb-0">
            <span class="purple--text font-weight-bold">{{userData.nickName}}</span> 님을 신고 하시겠습니까?
          </v-card-subtitle>

          <v-card-subtitle  v-else-if="eventType === CONST.EVENTS.DO_SECESSION" class="text-center pt-0 pb-0">
            서비스를 탈퇴하면 채팅, 포인트 등<br/> 활동정보가 모두 삭제됩니다.<br/>
            정말로 탈퇴하시겠습니까?
          </v-card-subtitle>

          <v-card-subtitle  v-else-if="eventType === CONST.EVENTS.GET_USER_DETAIL" class="text-center pt-0 pb-0">
            채팅을 시작하면 <span class="purple--text font-weight-bold">{{ point }}</span> 포인트가 사용됩니다.<br/>
            <span class="purple--text font-weight-bold">{{userData.nickName}}</span> 님과 채팅을 시작할까요?
          </v-card-subtitle>
        </v-card-subtitle>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="purple" text @click="close">취소</v-btn>
          <v-btn color="purple" text @click.prevent.stop="goEventList">
            <span v-if="eventType === CONST.EVENTS.DO_OUT_ALL_ROOM">나가기</span>
            <span v-else-if="eventType === CONST.EVENTS.DO_OUT_ROOM">나가기</span>
            <span v-else-if="eventType === CONST.EVENTS.DO_BLOCK">차단하기</span>
            <span v-else-if="eventType === CONST.EVENTS.DO_DECLARATION">신고하기</span>
            <span v-else-if="eventType === CONST.EVENTS.DO_SECESSION">탈퇴하기</span>
            <span v-else-if="eventType === CONST.EVENTS.GET_USER_DETAIL">대화하기</span>
          </v-btn>
        </v-card-actions>
      </v-card>
</template>
<script>
import CONST from "@/constants";
export default {
  name: 'Popup',
  props:['userData', 'eventType'],
  data () {
      return {
          CONST: CONST,
          point: 30,
        }
    },
  methods: {
    close(){
      this.$emit("close", false);
    },
    goEventList(){
      if (this.eventType === CONST.EVENTS.GET_USER_DETAIL) this.doChat();
      if (this.eventType === CONST.EVENTS.DO_OUT_ALL_ROOM) this.doOutAllChatRoom();
      if (this.eventType === CONST.EVENTS.DO_OUT_ROOM) this.doOutChatRoom();
      if (this.eventType === CONST.EVENTS.DO_BLOCK) this.doBlock();
      if (this.eventType === CONST.EVENTS.DO_DECLARATION) this.doDeclaration();
      if (this.eventType === CONST.EVENTS.DO_SECESSION) this.doSecession();
    },
    doChat(){
      this.$EventBus.$emit(CONST.EVENTS.SET_FOOTER_MENU, CONST.MENU_NAME.CHAT);
      this.$router.push({path:'/chat/' + this.userData.userIdx, query:{userData:this.userData}});
      this.close();
    },
    doOutAllChatRoom(){
      this.$EventBus.$emit(CONST.EVENTS.CHAT_LIST_LOADING);
      this.close();
    },
    doOutChatRoom(){
      console.log('채팅방 삭제')
      this.goChatList();
    },
    doBlock(){
      console.log('차단완료')
      this.goChatList();
    },
    doDeclaration(){
      console.log('신고완료')
      this.goChatList();
    },
    doSecession(){
      console.log('탈퇴')
      this.close();
      this.$EventBus.$emit(CONST.EVENTS.SET_FOOTER_MENU, CONST.MENU_NAME.HOME);
      this.$router.replace('/')
    },
    goChatList(){
      this.close();
      this.$EventBus.$emit(CONST.EVENTS.HIDE_FOOTER_MENU, false);
      this.$router.replace('/chatList')
    },
  },
}
</script>