<template>
  <div>
    <v-container style="overflow-y: auto;">
        <v-toolbar flat height="40px"></v-toolbar>
        <pre class="text-center notice grey--text mt-4 mb-4" v-text="notice">
        </pre>
        <div v-for="(vo, i) in talkList" :key="i">
          <div id="chatBox-area">
            <div class="card-content chat-content">
              <div class="content">
                <div class="chat-message-group" :class="{'writer-user' : vo.userIdx === loginUser.userIdx}">
                  <div class="chat-messages">
                    <div class="chat-thumb mr-2" v-if="vo.userIdx === userData.userIdx">
                      <v-list-item-avatar class="mr-0">
                        <v-img :src="userData.photo"></v-img>
                      </v-list-item-avatar>
                    </div>
                    <div class="chat-thumb float-right ml-2" v-if="vo.userIdx === loginUser.userIdx">
                      <v-list-item-avatar class="mr-0">
                        <v-img :src="loginUser.photo"></v-img>
                      </v-list-item-avatar>
                    </div>
                    <div class="message">
                      {{ vo.text }}
                      <div class="from">{{ vo.regDate }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <v-footer color="white" :height="scrollHeight + 'px'" id="container" :ref="'container-area'"></v-footer>
    </v-container>
    <v-footer app color="white">
    <v-row>
      <v-col>
        <v-text-field
            v-model="message"
            outlined
            placeholder="내용을 입력하세요."
            type="text"
            color="purple"
            v-on:keyup.enter.prevent.stop="sendMessage"
            hide-details
            maxlength="30"
        >
          <template v-slot:prepend>
            <label for="avatar" class="mr-1">
              <v-icon v-text="'mdi-camera'"></v-icon>
            </label>
            <input type="file"
                   id="avatar" name="avatar"
                   class="d-none"
                   @change="uploadFile"
                   accept="image/png, image/jpeg">
          </template>
          <template v-slot:append>
            <v-progress-circular
                v-if="loading"
                size="24"
                color="purple"
                indeterminate
            ></v-progress-circular>
            <v-icon
                v-if="message !== '' && !loading"
                width="24"
                height="24"
                color="purple"
                v-text="'mdi-send'"
                @click="sendMessage"
            ></v-icon>
          </template>
        </v-text-field>
      </v-col>
    </v-row>
  </v-footer>
  </div>
</template>

<script>
  export default {
    name: 'Chat',
    props: ['userData'],
    data () {
      return {
        loginUser: {
          userIdx: 1,
          photo: 'https://source.unsplash.com/100x100/?human/34759'
        },
        notice: '온라인에서 금전을 요구하거나 타 메신저로\n 유도하는 경우 사기일 수 있으니 주의하세요.',
        message: '',
        loading: false,
        selectedItem: 1,
        talkList: null,
        scrollHeight: 0,
      }
    },
    mounted() {
      this.getMessageList();
      this.$EventBus.$emit('SET_HEADER_TITLE', 'CHAT');
      this.$EventBus.$emit('HIDE_FOOTER_MENU', true);
    },
    updated() {
    },
    methods: {
      getMessageList(){
        this.talkList = [];
        const max = 10
        const min = 0
        const count = Math.random() * (max - min) + min;
        for (let i = 0; i < count; i++) {
          let userIdx = i % 2 ? 1 : 2020;
          let text = Math.random().toString(36).substr(2,11);
          this.talkList.push(
              { text: text,  userIdx: userIdx, regDate: '6:10 PM'}
          )
        }
      },
      sendMessage () {
        if (this.message.trim() ===''){
          return false;
        }
        let currentTime = this.$moment().format('h:mm A');
        this.loading = true
        this.talkList.push({ text: this.message,  userIdx: 1, regDate: currentTime},);
        this.message = ''
        this.loading = false
        // setTimeout(() => {
        //   this.message = ''
        //   this.loading = false
        // }, 300)
        this.toEndScroll();
      },
      uploadFile(e){
          console.log(e.target.files)
      },
      toEndScroll: async function(){
        this.scrollHeight = 10;
        await this.$nextTick()
        this.$refs['container-area'].$el.scrollIntoView();
        this.scrollHeight = 0;
      }
    }
  }
</script>
<style scoped>
  .notice{
    font-size: 12px;
  }
  .chat-message-group{

  }
  .chat-message-group .chat-thumb{
    float: left;
  }
  .chat-message-group .chat-messages{
    width: 100%;
    float: left;
    margin: 2px 0;
  }
  .chat-message-group .message{
    max-width: 70%;
    width: auto;
    float: left;
    padding: 6px 10px;
    background: #ecf1f8;
    font-size: 13px;
    border-radius: 5px;
    margin-bottom: 3px;
  }
  .chat-messages .from{
    display: block;
    width: auto;
    text-align: left;
    font-size: 11px;
  }
  .chat-thumb img{
    border-radius: 40px;
  }
  .writer-user .chat-messages{
    float: right;
    width: 100%;
    text-align: right;
  }
  .writer-user .chat-messages .message{
    max-width: 80%;
    float: right;
    background: #683db8;
    color: #FFF;
    word-break: keep-all;
  }
  .writer-user .chat-messages .from{
    display: block;
    text-align: right;
  }
</style>
