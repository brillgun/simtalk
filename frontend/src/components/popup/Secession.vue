<template>
  <v-card>
        <v-card-title class="justify-center">안내</v-card-title>
        <v-spacer></v-spacer>
        <v-card-subtitle class="text-center pb-0">
          서비스를 탈퇴하면 채팅, 포인트 등<br/> 활동정보가 모두 삭제됩니다.<br/>
          정말로 탈퇴하시겠습니까?
        </v-card-subtitle>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="purple" text @click="close">취소</v-btn>
          <v-btn color="purple" text @click="doSecession">탈퇴하기</v-btn>
        </v-card-actions>
      </v-card>
</template>

<script>
export default {
  name: 'Secession',
  props: ['userData'],
  data () {
      return {
          point: 30,
        }
    },
  methods: {
     close: function(){
       this.$emit("close", false);
     },
     doSecession: function(){
       console.log('탈퇴')
       this.close();
     }
  },
}
</script>