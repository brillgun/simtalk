<template>
  <v-app>
    <!-- Detail Popup-->
    <v-dialog v-model="dialog" persistent max-width="350">
      <Popup v-on:close="popupClose" :userData="userData" :eventType="eventType"/>
    </v-dialog>
    <Top app class="header"/>
    <v-main>
      <div style="height: 100%" @click="notActiveTopMenu">
        <router-view />
      </div>
    </v-main>
    <v-footer app v-show="isFooter">
      <Bottom />
    </v-footer>
  </v-app>
</template>

<script>
import Top from '@/components/layout/Top';
import Bottom from '@/components/layout/Bottom';
import Popup from '@/components/popup/Popup';
import CONST from "@/constants";

export default {
  name: 'app',
  components: {Top, Bottom,Popup},
  data: function() {
    return {
      eventType: '',
      isFooter: true,
      userData: null,
      loginUser: null,
      dialog: false,
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    };
  },
  created() {
    this.getLoginUser();
    this.$EventBus.$on(
        CONST.EVENTS.HIDE_FOOTER_MENU,
        function(v) {
          this.isFooter = !v;
        }.bind(this),
    );
    this.$EventBus.$on(
        CONST.EVENTS.OPEN_MODAL,
        function(t, param) {
          this.openPopup();
          this.eventType = t;
          this.userData = param;
        }.bind(this),
    );
  },
  methods:{
    notActiveTopMenu(){
      this.$EventBus.$emit(CONST.EVENTS.CLOSE_TOP_MENU);
    },
    openPopup(){
      this.dialog = !this.dialog;
    },
    popupClose(param){
      this.dialog = param;
    },
    getLoginUser(){
      console.log('getLoginUser ===>')
      this.loginUser = {
        userIdx: 1,
        nickName: 'pubis',
        age: 30,
        gender: 'M',
        comment: '같이 놀아요',
        point: 2890,
      }
    },
  }
};
</script>
<style scoped>
.header{
  position: fixed;
  z-index: 1;
  width: 100%;
}
</style>
