<template>
  <v-card>
        <v-card-title class="justify-center">안내</v-card-title>
        <v-spacer></v-spacer>
        <v-card-subtitle class="text-center pb-0">
          <pre v-text="userData.nickName + '님을 \n 차단 하시겠습니까?'"></pre>
        </v-card-subtitle>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="purple" text @click="close">취소</v-btn>
          <v-btn color="purple" text @click.prevent.stop="() => this.$EventBus.$emit(this.CONST.EVENTS.SAVE_MODAL, 'SAVE')">탈퇴하기</v-btn>
        </v-card-actions>
      </v-card>
</template>

<script>
export default {
  name: 'Popup',
  props:['userData'],
  data () {
      return {
          point: 30,
        }
    },
  methods: {
     close: function(){
       this.$emit("close", false);
     },
  },
}
</script>