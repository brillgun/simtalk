<template>
  <v-container>
    <v-toolbar flat height="40px"></v-toolbar>
    <v-list flat
            class="pt-0 pb-0"
            v-for="(item, i) in items"
            :key="i"
    >
      <v-list-item
          @click="doClickEvent(item.event)">
        <v-list-item-icon>
          <v-icon class="purple--text" large v-text="item.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="" v-text="item.text"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
<!--      <v-divider-->
<!--          :inset="item.inset"-->
<!--      ></v-divider>-->
    </v-list>
  </v-container>
</template>

<script>
import CONST from "@/constants";
  export default {
    name: 'more',
    data: () => ({
      CONST: CONST,
      eventType: '',
      loginUser: null,
      items: [
        { event: CONST.MENU_NAME.PROFILE, text: '프로필',           icon: 'mdi-account-circle' },
        { event: CONST.MENU_NAME.POINT, text: '포인트충전',        icon: 'mdi-cash' },
        { event: CONST.MENU_NAME.BLOCK, text: '차단된 회원',       icon: 'mdi-close-circle' },
        { event: CONST.MENU_NAME.QNA, text: '문의하기',         icon: 'mdi-help-circle' },
        { event: CONST.MENU_NAME.TERMS, text: '이용약관',         icon: 'mdi-comment-alert-outline' },
        { event: CONST.MENU_NAME.POLICY, text: '개인정보 보호정책',   icon: 'mdi-flag' },
        { event: CONST.EVENTS.DO_SECESSION, text: '탈퇴하기',         icon: 'mdi-logout' },
      ],
    }),
    mounted() {
      this.$EventBus.$emit(CONST.EVENTS.SET_FOOTER_MENU, CONST.MENU_NAME.MORE);
    },
    methods:{
        doClickEvent(eventType){
          if (eventType !== CONST.EVENTS.DO_SECESSION)
            this.$EventBus.$emit(CONST.EVENTS.SET_TOP_MENU_TITLE, CONST.TOP_TITLE[eventType]);

          if (eventType === CONST.MENU_NAME.PROFILE){
              this.$router.replace('/profile')
          } else if (eventType === CONST.MENU_NAME.POINT){
              this.$router.replace('/point')
          } else if (eventType === CONST.MENU_NAME.BLOCK){
              this.$router.replace('/block')
          } else if (eventType === CONST.MENU_NAME.QNA){
              this.$router.replace('/qna')
          } else if (eventType === CONST.MENU_NAME.TERMS){
              this.$router.replace('/terms')
          } else if (eventType === CONST.MENU_NAME.POLICY){
              this.$router.replace('/policy')
          } else if (eventType === CONST.EVENTS.DO_SECESSION){
              this.eventType = eventType;
              this.openPopup();
          }
        },
        openPopup: function() {
          this.$EventBus.$emit(CONST.EVENTS.OPEN_MODAL, this.eventType, this.loginUser);
        },
    },
  }
</script>
