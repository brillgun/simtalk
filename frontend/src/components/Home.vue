<template>
  <v-container fluid class="pt-2"
  >
    <v-toolbar flat height="60px"></v-toolbar>
      <!-- SEARCH BAR -->
      <Search/>

      <!-- Detail Popup-->
      <v-dialog v-model="dialog" persistent max-width="350">
        <UserDetail v-on:close="popupClose" :userData="userData" />
      </v-dialog>

      <!-- LIST  -->
      <v-row class="pa-2" align="start" justify="start">
        <v-col class="pa-1"
          v-for="(user, i) in userList"
          :key="user.title"
          :cols="4"
        >
          <v-item-group>
            <v-item v-slot:default="{ active }">
            <v-card
              :color="active ? 'primary' : ''"
                class="d-flex align-center"
                dark
                @click="cardDetail(userList[i])"
             >
              <v-img
                :src="user.photo !== null || user.photo !== '' ? user.photo + i : basicPhoto"
                class="white--text align-end"
                dark
                height="100px"
              >
              <div class="fill-height bottom-gradient">
                  <div class="text-right pr-2 pl-2">
                  <span class="pl-2 pr-1 caption font-weight-regular dist" v-text="user.dist + 'km'"></span>
                    <span class="subtitle-2 pr-1" >
                      <font-awesome-icon icon="mars" v-if="user.gender === 'M'"></font-awesome-icon>
                      <font-awesome-icon icon="venus" v-else></font-awesome-icon>
                    </span>
                    <span class="d-inline-block subtitle-2 font-weight-bold" v-text="user.nickName"></span>
                  </div>
              </div>
              </v-img>
            </v-card>
            </v-item>
          </v-item-group>
        </v-col>
      </v-row>
      <v-footer app height="60px"></v-footer>
    </v-container>
</template>

<script>
import Search from '@/components/popup/Search';
import UserDetail from '@/components/popup/UserDetail';
  export default {
    name:'Home',
    components:{Search, UserDetail},
    data: () => ({
      dialog: false,
      userData: null,
      sort:'newest',
      basicPhoto: 'https://image.flaticon.com/icons/svg/187/187159.svg',
      userList: [
        { userIdx: 2020, nickName: '닉네임입니다 그래서요 암요', photo: 'https://source.unsplash.com/100x100/?human/' , gender: 'M', dist: 4, },
        { userIdx: 2020, nickName: '닉네임입니다 그래서요 암요', photo: 'https://source.unsplash.com/100x100/?human/' , gender: 'W', dist: 5, },
        { userIdx: 2020, nickName: '닉네임입니다 그래서요 암요', photo: 'https://source.unsplash.com/100x100/?human/' , gender: 'M', dist: 7, },
        { userIdx: 2020, nickName: '닉네임입니다 그래서요 암요', photo: 'https://source.unsplash.com/100x100/?human/' , gender: 'W', dist: 7, },
        { userIdx: 2020, nickName: '닉네임입니다 그래서요 암요', photo: 'https://source.unsplash.com/100x100/?human/' , gender: 'W', dist: 7, },
        { userIdx: 2020, nickName: '닉네임입니다 그래서요 암요', photo: 'https://source.unsplash.com/100x100/?human/' , gender: 'M', dist: 7, },
        { userIdx: 2020, nickName: '닉네임입니다 그래서요 암요', photo: 'https://source.unsplash.com/100x100/?human/' , gender: 'M', dist: 7, },
        { userIdx: 2020, nickName: '닉네임입니다 그래서요 암요', photo: 'https://source.unsplash.com/100x100/?human/' , gender: 'W', dist: 7, },
        { userIdx: 2020, nickName: '닉네임입니다 그래서요 암요', photo: 'https://source.unsplash.com/100x100/?human/' , gender: 'M', dist: 5, },
        { userIdx: 2020, nickName: '닉네임입니다 그래서요 암요', photo: 'https://source.unsplash.com/100x100/?human/' , gender: 'W', dist: 5, },
        { userIdx: 2020, nickName: '닉네임입니다 그래서요 암요', photo: 'https://source.unsplash.com/100x100/?human/' , gender: 'M', dist: 5, },
        { userIdx: 2020, nickName: '닉네임입니다 그래서요 암요', photo: 'https://source.unsplash.com/100x100/?human/' , gender: 'M', dist: 1, },
        { userIdx: 2020, nickName: '닉네임입니다 그래서요 암요', photo: 'https://source.unsplash.com/100x100/?human/' , gender: 'W', dist: 5, },
        { userIdx: 2020, nickName: '닉네임입니다 그래서요 암요', photo: 'https://source.unsplash.com/100x100/?human/' , gender: 'M', dist: 5, },
        { userIdx: 2020, nickName: '닉네임입니다 그래서요 암요', photo: 'https://source.unsplash.com/100x100/?human/' , gender: 'M', dist: 2, },
        { userIdx: 2020, nickName: '닉네임입니다 그래서요 암요', photo: 'https://source.unsplash.com/100x100/?human/' , gender: 'W', dist: 5, },
        { userIdx: 2020, nickName: '닉네임입니다 그래서요 암요', photo: 'https://source.unsplash.com/100x100/?human/' , gender: 'W', dist: 5, },
        { userIdx: 2020, nickName: '닉네임입니다 그래서요 암요', photo: 'https://source.unsplash.com/100x100/?human/' , gender: 'M', dist: 0, },
        { userIdx: 2020, nickName: '닉네임입니다 그래서요 암요', photo: 'https://source.unsplash.com/100x100/?human/' , gender: 'W', dist: 5, },
        { userIdx: 2020, nickName: '닉네임입니다 그래서요 암요', photo: 'https://source.unsplash.com/100x100/?human/' , gender: 'M', dist: 5, },
        { userIdx: 2020, nickName: '닉네임입니다 그래서요 암요', photo: 'https://source.unsplash.com/100x100/?human/' , gender: 'W', dist: 0, },
        { userIdx: 2020, nickName: '닉네임입니다 그래서요 암요', photo: 'https://source.unsplash.com/100x100/?human/' , gender: 'W', dist: 5, },
        { userIdx: 2020, nickName: '닉네임입니다 그래서요 암요', photo: 'https://source.unsplash.com/100x100/?human/' , gender: 'M', dist: 5, },
        { userIdx: 2020, nickName: '닉네임입니다 그래서요 암요', photo: 'https://source.unsplash.com/100x100/?human/' , gender: 'W', dist: 0, },
        { userIdx: 2020, nickName: '닉네임입니다 그래서요 암요', photo: 'https://source.unsplash.com/100x100/?human/' , gender: 'M', dist: 5, },
        { userIdx: 2020, nickName: '닉네임입니다 그래서요 암요', photo: 'https://source.unsplash.com/100x100/?human/' , gender: 'M', dist: 5, },
        { userIdx: 2020, nickName: '닉네임입니다 그래서요 암요', photo: 'https://source.unsplash.com/100x100/?human/' , gender: 'M', dist: 5, },
        { userIdx: 2020, nickName: '닉네임입니다 그래서요 암요', photo: 'https://source.unsplash.com/100x100/?human/' , gender: 'M', dist: 5, },
        { userIdx: 2020, nickName: '닉네임입니다 그래서요 암요', photo: 'https://source.unsplash.com/100x100/?human/' , gender: 'M', dist: 5, },
        { userIdx: 2020, nickName: '닉네임입니다 그래서요 암요', photo: 'https://source.unsplash.com/100x100/?human/' , gender: 'M', dist: 5, },
        { userIdx: 2020, nickName: '닉네임입니다 그래서요 암요', photo: 'https://source.unsplash.com/100x100/?human/' , gender: 'M', dist: 5, },
      ],
    }),
    created() {
      this.$EventBus.$on(
          this.CONST.EVENTS.HOME_LIST_LOADING,
          function(v) {
            this.sort = v;
            this.getDataList();
          }.bind(this),
      );
    },
    mounted() {
      this.getDataList();
    },
    methods: {
      cardDetail: function(i) {
          this.dialog = !this.dialog;
          this.userData = i;
      },
      popupClose(param){
        this.dialog = param;
      },
      getDataList(){
        console.log('getDataList ===> sort: ' + this.sort);
      }
    },
  }
</script>

<style scoped>
.bottom-gradient {
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, transparent 52px);
  }
.subtitle-2{width: 100%; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;}
</style>