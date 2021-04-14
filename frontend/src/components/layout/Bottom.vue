<template>
  <v-bottom-navigation
  absolute
  :class="`elevation-10`"
  color="purple accent-3"
  > 
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-btn @click="goMenu('HOME')" :class="menuName === this.CONST.MENU_NAME.HOME ? 'v-btn--active' : ''">
      <font-awesome-icon icon="landmark" class="fa-2x"></font-awesome-icon>
    </v-btn>
    <v-spacer class="pa-md-4"></v-spacer>
    <v-btn @click="goMenu('CHAT')" :class="menuName === this.CONST.MENU_NAME.CHAT ? 'v-btn--active' : ''">
      <font-awesome-icon icon="comments" class="fa-2x"></font-awesome-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn @click="goMenu('MORE')" :class="menuName === this.CONST.MENU_NAME.MORE ? 'v-btn--active' : ''">
      <font-awesome-icon icon="ellipsis-h" class="fa-2x"></font-awesome-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: 'Bottom',
  data: function() {
    return {
      menuName: 'HOME',
    };
  },
  created: function() {
  },
  mounted() {
  },
  methods: {
    goMenu(name){
      this.menuName = name;
      this.$EventBus.$emit('SET_HEADER_TITLE', name);
      if (name === this.CONST.MENU_NAME.HOME)  this.$router.push('/').catch(()=>{});
      else if (name === this.CONST.MENU_NAME.CHAT) this.$router.push('chatList').catch(()=>{});
      else if (name === this.CONST.MENU_NAME.MORE)  this.$router.push('more').catch(()=>{});
    }
  }
}
</script>