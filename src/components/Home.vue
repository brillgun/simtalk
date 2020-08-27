<template>
  <v-container fluid
  >   
      <!-- SEARCH BAR -->
      <Search/>

      <!-- LIST  -->
      <v-dialog v-model="dialog" persistent max-width="350">
        <UserDetail v-on:close="popupClose" :userData="userData" />
      </v-dialog>

      <v-row class="pa-2" align="start" justify="start">
        <v-col class="pa-1"
          v-for="(user, i) in userList"
          :key="user.title"
          :cols="user.flex"
        >
          <v-item v-slot:default="{ active }">
          <v-card 
            :color="active ? 'primary' : ''"
              class="d-flex align-center"
              dark
              @click="cardDetail(userList[i])"
           >
            <v-img
              :src="user.photo == 'O' ? 'https://source.unsplash.com/100x100/?human/' + i : 'https://image.flaticon.com/icons/svg/187/187159.svg'"
              class="white--text align-end"
              dark
              height="100px"
            >
            <div class="fill-height bottom-gradient">
                <p class="pl-1 mb-13 caption font-weight-regular" v-text="user.dist + 'km'"></p>
                <div class="text-right pr-1">
                  <span class="subtitle-2 pr-1" v-if="user.gender == 'M'">
                    <font-awesome-icon icon="mars"></font-awesome-icon>
                  </span>
                  <span class="subtitle-2 pr-1" v-if="user.gender != 'M'">
                    <font-awesome-icon icon="venus"></font-awesome-icon>
                  </span>
                <span class="d-inline-block subtitle-2 font-weight-bold" v-text="user.name"></span>
                </div>
            </div>
            </v-img>
          </v-card>
          </v-item>
        </v-col>
      </v-row>
      <v-footer height="50px"></v-footer>
    </v-container>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      userList: [
        { userIdx: 2020132601, name: '홍길동', photo: 'O' , gender: 'M', dist: 4, flex: 4 },
        { userIdx: 2020132602, name: '홍길동', photo: 'O' , gender: 'W', dist: 5, flex: 4 },
        { userIdx: 2020132603, name: '홍길동', photo: 'X' , gender: 'M', dist: 7, flex: 4 },
        { userIdx: 2020132701, name: '홍길동', photo: 'O' , gender: 'W', dist: 7, flex: 4 },
        { userIdx: 2020132702, name: '홍길동', photo: 'O' , gender: 'W', dist: 7, flex: 4 },
        { userIdx: 2020132601, name: '홍길동', photo: 'O' , gender: 'M', dist: 7, flex: 4 },
        { userIdx: 2020132601, name: '홍길동', photo: 'X' , gender: 'M', dist: 7, flex: 4 },
        { userIdx: 2020132501, name: '홍길동', photo: 'O' , gender: 'W', dist: 7, flex: 4 },
        { userIdx: 2020132602, name: '홍길동', photo: 'X' , gender: 'M', dist: 5, flex: 4 },
        { userIdx: 2020132801, name: '홍길동', photo: 'O' , gender: 'W', dist: 5, flex: 4 },
        { userIdx: 2020132801, name: '홍길동', photo: 'O' , gender: 'M', dist: 5, flex: 4 },
        { userIdx: 2020132801, name: '홍길동', photo: 'O' , gender: 'M', dist: 1, flex: 4 },
        { userIdx: 2020132801, name: '홍길동', photo: 'X' , gender: 'W', dist: 5, flex: 4 },
        { userIdx: 2020132801, name: '홍길동', photo: 'O' , gender: 'M', dist: 5, flex: 4 },
        { userIdx: 2020132601, name: '홍길동', photo: 'O' , gender: 'M', dist: 2, flex: 4 },
        { userIdx: 2020132601, name: '홍길동', photo: 'X' , gender: 'W', dist: 5, flex: 4 },
        { userIdx: 2020132601, name: '홍길동', photo: 'O' , gender: 'W', dist: 5, flex: 4 },
        { userIdx: 2020132601, name: '홍길동', photo: 'O' , gender: 'M', dist: 0, flex: 4 },
        { userIdx: 2020132601, name: '홍길동', photo: 'O' , gender: 'W', dist: 5, flex: 4 },
        { userIdx: 2020132601, name: '홍길동', photo: 'X' , gender: 'M', dist: 5, flex: 4 },
        { userIdx: 2020132601, name: '홍길동', photo: 'O' , gender: 'W', dist: 0, flex: 4 },
        { userIdx: 2020132801, name: '홍길동', photo: 'O' , gender: 'W', dist: 5, flex: 4 },
        { userIdx: 2020132601, name: '홍길동', photo: 'X' , gender: 'M', dist: 5, flex: 4 },
        { userIdx: 2020132601, name: '홍길동', photo: 'O' , gender: 'W', dist: 0, flex: 4 },
        { userIdx: 2020132601, name: '홍길동', photo: 'O' , gender: 'M', dist: 5, flex: 4 },

      ],
    }),
    methods: {
      cardDetail: function(i) {
          this.dialog = !this.dialog;
          this.userData = i;
      },
      popupClose(param){
        this.dialog = param;
      }
    },
  }
</script>

<style scoped>
.bottom-gradient {
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 72px);
  }
</style>