<template>
  <v-app>
      <Top/>
    <v-main>
      <router-view />
    </v-main>
    <v-footer app>
      <Bottom v-show="isFooter"/>
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
