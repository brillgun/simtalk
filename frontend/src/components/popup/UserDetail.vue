<template>
  <v-card>
        <v-card-title class="justify-center">안내</v-card-title>
        <v-spacer></v-spacer>
        <v-card-subtitle class="text-center pb-0">
          채팅을 시작하면 <span class="purple--text font-weight-bold">{{ point }}</span> 포인트가 사용됩니다.<br/>
          <span class="purple--text font-weight-bold">{{userData.nickName}}</span> 님과 채팅을 시작할까요?</v-card-subtitle>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="purple" text @click="close">닫기</v-btn>
          <v-btn color="purple" text @click="chat(userData)">대화하기</v-btn>
        </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'UserDetail',
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
        chat: function(data){
          this.$EventBus.$emit('SET_FOOTER_MENU', 'CHAT');
          this.$router.push({name:'Chat', params:{userData:data}})
        }
  },
}
</script>