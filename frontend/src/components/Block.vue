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
            @click="notBlock(item)"
        >
          <v-list-item-avatar>
            <v-img :src="item.photo"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>
              {{item.nickName}}
            </v-list-item-title>
            <v-list-item-subtitle>
              <span :class="item.gender === 'M' ? 'blue--text' : 'red--text'" class="mr-1">
                <span class="mr-1" v-text="item.gender === 'M' ? '남자' : '여자'"></span>
                <span>{{ item.age + '세' }}</span>
              </span>
            </v-list-item-subtitle>
          </v-list-item-content>

            <v-btn class="purple" dark>해제</v-btn>
        </v-list-item>
        <v-divider
            :inset="item.inset"
        ></v-divider>
    </v-list>
    <v-list-item-title class="text-center mt-8" v-if="chatList.length < 1">차단된 회원 없습니다.</v-list-item-title>
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
            if (v === CONST.MENU_NAME.BLOCK){
              this.getRoomList();
            }
          }.bind(this),
      );
    },
    mounted() {
      this.$EventBus.$emit(CONST.EVENTS.SET_TOP_MENU_TITLE, CONST.TOP_TITLE.BLOCK);
      this.$EventBus.$emit(CONST.EVENTS.SET_FOOTER_MENU, CONST.MENU_NAME.MORE);
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
        console.log('getBlockList ===>');
      },
      doDeleteList(){
        console.log('채팅목록 삭제완료');
        this.chatList = []
      },
      notBlock(userData){
        let eventType = CONST.EVENTS.NOT_BLOCK;
        this.$EventBus.$emit(CONST.EVENTS.OPEN_MODAL, eventType, userData);
      }
    }
  }
</script>
