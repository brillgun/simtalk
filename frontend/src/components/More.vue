<template>
  <v-container>
    <v-toolbar flat height="40px"></v-toolbar>
    <v-dialog v-model="dialog" persistent max-width="350">
      <Secession v-on:close="popupClose"/>
    </v-dialog>
    <v-list flat>
      <v-list-item-group
          color="purple"
      >
        <v-list-item
            v-for="(item, i) in items"
            :key="i"
            @click="doClickEvent(item.event)"
        >
          <v-list-item-icon>
            <v-icon large v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="" v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-container>
</template>

<script>
import Secession from '@/components/popup/Secession';
  export default {
    name: 'more',
    components:{Secession},
    data: () => ({
      dialog: false,
      items: [
        { event: 'profile', text: '프로필',           icon: 'mdi-account-circle' },
        { event: 'point', text: '포인트충전',        icon: 'mdi-cash' },
        { event: 'block', text: '차단된 계정',       icon: 'mdi-close-circle' },
        { event: 'qna', text: '문의하기',         icon: 'mdi-help-circle' },
        { event: 'terms', text: '이용약관',         icon: 'mdi-comment-alert-outline' },
        { event: 'policy', text: '개인정보 보호정책',   icon: 'mdi-flag' },
        { event: 'secession', text: '탈퇴하기',         icon: 'mdi-logout' },
      ],
    }),
    methods:{
        doClickEvent(eventType){
          if (eventType === 'profile'){
              this.$router.replace('/profile')
          } else if (eventType === 'point'){
              this.$router.replace('/point')
          } else if (eventType === 'block'){
              this.$router.replace('/block')
          } else if (eventType === 'qna'){
              this.$router.replace('/qna')
          } else if (eventType === 'terms'){
              this.$router.replace('/terms')
          } else if (eventType === 'policy'){
              this.$router.replace('/policy')
          } else if (eventType === 'secession'){
              this.openPopup();
          }
        },
        openPopup: function() {
          this.dialog = !this.dialog;
        },
        popupClose(param){
          this.dialog = param;
        },
    },
  }
</script>
