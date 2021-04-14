<template>
  <v-container>
    {{userIdx}}
  </v-container>
</template>

<script>
  export default {
    name: 'Chat',
    props: ['userIdx'],
    data () {
      return {
      }
    },
    mounted() {
      this.$EventBus.$emit('SET_HEADER_TITLE', 'CHAT');
      if (this.userIdx !== '' && typeof this.userIdx !== 'undefined') this.$EventBus.$emit('HIDE_FOOTER_MENU', true);
    },
    methods: {

    }
  }
</script>
