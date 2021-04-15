<template>
  <v-container>
    <v-toolbar flat height="40px"></v-toolbar>
    <v-list v-for="(item, i) in chatList" :key="i">
        <v-subheader
            v-if="item.header"
            v-text="item.header"
        ></v-subheader>

        <v-list-item
            v-else
            @click="goChat(item)"
        >
          <v-list-item-avatar>
            <v-img :src="item.photo"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>
              {{item.nickName}}
              <span class="red--text text--lighten-1" v-if="item.nonRead === 0">●</span>
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ item.reply }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider
            :inset="item.inset"
        ></v-divider>
    </v-list>
    <v-list-item-title class="text-center mt-8" v-if="chatList.length < 1">채팅방이 없습니다.</v-list-item-title>
    <v-footer app color="white" height="80px"></v-footer>
  </v-container>
</template>

<script>
  export default {
    name: 'Chat',
    data () {
      return {
        chatList: [
          {
            roomIdx: 2020729357,
            userIdx: 2020,
            photo: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            nickName: 'Brunch this weekend?',
            reply: 'I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?',
            nonRead: 0,
          },
          {
            roomIdx: 20213749679,
            userIdx: 2020,
            photo: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            nickName: 'Summer BBQ',
            reply: 'Do you want to hang out?',
            nonRead: 1,
          },
          {
            roomIdx: 20208543968,
            userIdx: 2020,
            photo: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
            nickName: 'Oui oui',
            reply: 'I\'ll be in your errands this weekend. Do you want to hang out?',
            nonRead: 0,
          },
          {
            roomIdx: 202137495694,
            userIdx: 2020,
            photo: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
            nickName: 'Birthday gift',
            reply: 'I\'ll be in your neighborhood doing errands this to hang.',
            nonRead: 0,
          },
          {
            roomIdx: 20204378931,
            userIdx: 2020,
            photo: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
            nickName: 'Recipe to try',
            reply: 'I\'ll be in your errands this weekend. Do you want.',
            nonRead: 1,
          },
          {
            roomIdx: 20204378931,
            userIdx: 2020,
            photo: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
            nickName: 'Recipe to try',
            reply: 'I\'ll be in your errands this weekend. Do you want.',
            nonRead: 1,
          },
          {
            roomIdx: 20204378931,
            userIdx: 2020,
            photo: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
            nickName: 'Recipe to try',
            reply: 'I\'ll be in your errands this weekend. Do you want.',
            nonRead: 1,
          },
          {
            roomIdx: 20204378931,
            userIdx: 2020,
            photo: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
            nickName: 'Recipe to try',
            reply: 'I\'ll be in your errands this weekend. Do you want.',
            nonRead: 1,
          },
          {
            roomIdx: 20204378931,
            userIdx: 2020,
            photo: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
            nickName: 'Recipe to try',
            reply: 'I\'ll be in your errands this weekend. Do you want.',
            nonRead: 1,
          },
          {
            roomIdx: 20204378931,
            userIdx: 2020,
            photo: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
            nickName: 'Recipe to try',
            reply: 'I\'ll be in your errands this weekend. Do you want.',
            nonRead: 1,
          },
          {
            roomIdx: 20204378931,
            userIdx: 2020,
            photo: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
            nickName: 'Recipe to try',
            reply: 'I\'ll be in your errands this weekend. Do you want.',
            nonRead: 1,
          },
        ],
      }
    },
    created() {
      this.$EventBus.$on(
          this.CONST.EVENTS.CHAT_LIST_LOADING,
          function() {
            this.doDeleteList();
          }.bind(this),
      );
    },
    mounted() {
      this.$EventBus.$emit('SET_HEADER_TITLE', 'CHAT');
    },
    methods: {
      getDataList(){
        console.log('getDataList ===> sort: ');
      },
      doDeleteList(){
        this.chatList = []
      },
      goChat(data){
        this.$router.push({name:'Chat', params:{userData:data}})
      }
    }
  }
</script>
