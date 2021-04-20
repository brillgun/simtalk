<template>
  <v-container>
    <v-toolbar flat height="40px" :ref="'scrollTop'"></v-toolbar>
    <v-list
        v-for="(item, i) in chatList" :key="i">
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
              {{item.reply}}
              <span class="red--text text--lighten-1" v-if="item.nonRead === 0">●</span>
            </v-list-item-title>
            <v-list-item-subtitle>
              <span :class="item.gender === 'M' ? 'blue--text' : 'red--text'" class="mr-1">
                {{ item.nickName }}
                <span class="mr-1" v-text="item.gender === 'M' ? '남자' : '여자'"></span>
                <span>{{ item.age + '세' }}</span>
              </span>
              <span class="mr-1"> {{item.dist}} km</span>
              <span> {{item.connectDate}} 일 전</span>
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
  import CONST from "@/constants";

  export default {
    name: 'Chat',
    data () {
      return {
        chatList: [],
      }
    },
    created() {
      this.$EventBus.$on(
          this.CONST.EVENTS.LIST_LOADING,
          function(v) {
            if (v === CONST.EVENTS.DO_OUT_ALL_ROOM)
            this.doDeleteList();
          }.bind(this),
      );
    },
    mounted() {
      this.$EventBus.$emit(CONST.EVENTS.SET_TOP_MENU_TITLE, CONST.TOP_TITLE.CHAT);
      this.$EventBus.$emit(CONST.EVENTS.SET_FOOTER_MENU, CONST.MENU_NAME.CHAT);
      this.$refs['scrollTop'].$el.scrollIntoView();
      this.getRoomList();
    },
    methods: {
      getRoomList(){
        this.chatList = []
        const max = 20
        const min = 2
        const count = Math.floor(Math.random() * (max - min) + min);
        for (let i = 0; i < count; i++) {
          let nickName = Math.random().toString(36).substr(2,11);
          const maxCount = 3
          const minCount = 1
          const randomCount = Math.floor(Math.random() * (maxCount - minCount) + minCount);
          let nonRead = randomCount % 2 ? 0 : 1;
          let gender = randomCount % 2 ? 'M' : 'W';
          this.chatList.push(
              {
                roomIdx: '20210415E' + i,
                userIdx: 2020,
                photo: 'https://cdn.vuetifyjs.com/images/lists/' + (randomCount + 1) + '.jpg',
                nickName: nickName,
                reply: 'I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?',
                nonRead: nonRead,
                gender: gender,
                dist: count + randomCount + i,
                connectDate : count,
                age: 30,
              }
          )
        }
        console.log('getRoomList ===>');
      },
      doDeleteList(){
        console.log('채팅목록 삭제완료');
        this.chatList = []
      },
      goChat(userData){
        this.$router.push({path:'/chat/' + userData.userIdx, query:{userData:userData}})
      }
    }
  }
</script>
