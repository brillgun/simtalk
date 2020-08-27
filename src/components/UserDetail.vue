<template>
  <v-card>
        <v-card-title class="headline">Use Google's location service?</v-card-title>
        <v-card-subtitle>{{userData}}</v-card-subtitle>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="close">닫기</v-btn>
          <v-btn color="green darken-1" text @click="chat(userData.userIdx)">대화하기</v-btn>
        </v-card-actions>
      </v-card>
</template>

<script>
export default {
  props: {
    userData: {},
  },
  data () {
      return {
        }
    },
  methods: {
        close: function(){
          this.$emit("close", false);
        },
        chat: function(idx){
          window.location.href = "/chat?" + idx
        }
  },
}
</script>