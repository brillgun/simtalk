<template>
  <v-card>
        <v-card-title class="justify-center">안내</v-card-title>
        <v-card-subtitle class="text-center">
          채팅을 시작하면 {{ point }} 포인트가 사용됩니다.<br/>
          {{userData.nickName}} 님과 채팅을 시작할까요?</v-card-subtitle>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="close">닫기</v-btn>
          <v-btn color="green darken-1" text @click="chat(userData.userIdx)">대화하기</v-btn>
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
        chat: function(userIdx){
          this.$router.push({ name: 'Chat', params: { userIdx: userIdx }});
        }
  },
}
</script>