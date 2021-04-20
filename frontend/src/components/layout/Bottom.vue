<template>
  <div @click="notActiveTopMenu">
    <v-footer
    absolute
    elevation="0"
    color="white"
    height="60"
    >
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-btn icon @click="goMenu(CONST.MENU_NAME.HOME)" name="footer-btn" :color="this.menuName === CONST.MENU_NAME.HOME ? 'purple' : ''">
        <font-awesome-icon icon="landmark" class="fa-2x"></font-awesome-icon>
      </v-btn>
      <v-spacer class=""></v-spacer>
      <v-spacer class=""></v-spacer>
      <v-btn icon @click="goMenu(CONST.MENU_NAME.CHAT)" name="footer-btn" :color="this.menuName === CONST.MENU_NAME.CHAT ? 'purple' : ''">
        <font-awesome-icon icon="comments" class="fa-2x"></font-awesome-icon>
      </v-btn>
      <v-spacer class=""></v-spacer>
      <v-spacer class=""></v-spacer>
      <v-btn icon @click="goMenu(CONST.MENU_NAME.MORE)" name="footer-btn" :color="this.menuName === CONST.MENU_NAME.MORE ? 'purple' : ''">
        <font-awesome-icon icon="ellipsis-h" class="fa-2x"></font-awesome-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
    </v-footer>
  </div>
</template>

<script>
import CONST from "@/constants";
export default {
  name: 'Bottom',
  data: function() {
    return {
      menuName: this.CONST.MENU_NAME.HOME,
      CONST: CONST,
    };
  },
  created: function() {
    this.$EventBus.$on(
        this.CONST.EVENTS.SET_FOOTER_MENU,
        function(v) {
          let button = document.getElementsByName('footer-btn');
          for (let i = 0; i < button.length; i++) {
            button[i].classList.remove('v-btn--active')
          }
          this.menuName = v;
        }.bind(this),
    );
  },
  mounted() {
  },
  updated() {
  },
  watch:{
  },
  methods: {
    notActiveTopMenu(){
      this.$EventBus.$emit(CONST.EVENTS.CLOSE_TOP_MENU);
    },
    goMenu(name){
      this.menuName = name;
      this.$EventBus.$emit(CONST.EVENTS.SET_TOP_MENU_TITLE, CONST.TOP_TITLE[name]);
      if (name === CONST.MENU_NAME.HOME)  this.$router.push('/').catch(()=>{});
      else if (name === CONST.MENU_NAME.CHAT) this.$router.push('chatList').catch(()=>{});
      else if (name === CONST.MENU_NAME.MORE)  this.$router.push('more').catch(()=>{});
    }
  }
}
</script>