<template>
  <v-app>
      <Top app class="header"/>
    <v-main>
        <router-view />
    </v-main>
    <v-footer app v-show="isFooter">
      <Bottom />
    </v-footer>
  </v-app>
</template>

<script>
import Top from '@/components/layout/Top';
import Bottom from '@/components/layout/Bottom';

export default {
  name: 'app',
  components: {Top, Bottom},
  data: function() {
    return {
      isFooter: true,
    };
  },
  created() {
    this.$EventBus.$on(
        this.CONST.EVENTS.HIDE_FOOTER_MENU,
        function(v) {
          this.isFooter = !v;
        }.bind(this),
    );
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
