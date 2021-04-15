<template>
  <v-container fluid class="pt-2"
  >
    <v-toolbar flat height="60px" :ref="'scrollTop'"></v-toolbar>
      <!-- SEARCH BAR -->
      <Search/>
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
                @click="openPopup(userList[i])"
             >
              <v-img
                :src="user.photo !== null || user.photo !== '' ? user.photo : basicPhoto"
                class="white--text align-end"
                dark
                height="100px"
              >
              <div class="fill-height bottom-gradient">
                  <div class="text-right pr-2 pl-2">
                  <span class="pl-2 pr-1 caption font-weight-regular dist" v-text="user.dist + 'km'"></span>
                    <span class="caption pr-1 font-weight-regular dist">{{user.age + '세'}}</span>
                    <span class="subtitle-2 pr-1" >
                      <font-awesome-icon icon="mars" v-if="user.gender === 'M'"></font-awesome-icon>
                      <font-awesome-icon icon="venus" v-else></font-awesome-icon>
                    </span>
                    <span class="d-inline-block subtitle-2 font-weight-bold">{{user.nickName}}</span>
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
import CONST from "@/constants";

  export default {
    name:'Home',
    components:{Search},
    data: () => ({
      userData: null,
      sort:'newest',
      eventType: 'userDetail',
      basicPhoto: 'https://image.flaticon.com/icons/svg/187/187159.svg',
      userList: [],
    }),
    created() {
      this.$EventBus.$on(
          CONST.EVENTS.HOME_LIST_LOADING,
          function(v) {
            this.sort = v;
            this.getUserList();
          }.bind(this),
      );
    },
    mounted() {
      this.$EventBus.$emit(CONST.EVENTS.SET_TOP_MENU_TITLE, CONST.TOP_TITLE.HOME);
      this.$EventBus.$emit(CONST.EVENTS.SET_FOOTER_MENU, CONST.MENU_NAME.HOME);
      this.$refs['scrollTop'].$el.scrollIntoView();
      this.getUserList();
    },
    methods: {
      openPopup: function(selectUserData) {
        this.$EventBus.$emit(CONST.EVENTS.OPEN_MODAL, this.eventType, selectUserData);
      },
      getUserList(){
        console.log('getUserList ===> sort: ' + this.sort);
        this.userList = [];
        const max = 50;
        const min = 1;
        const listCount = Math.floor(Math.random() * (max - min) + min);
        for (let i = 0; i < listCount; i++) {
          let nickName = Math.random().toString(36).substr(2,11);
          const genderMax = 3
          const genderMin = 1
          const randomGenderCount = Math.floor(Math.random() * (genderMax - genderMin) + genderMin);
          const photoMax = 6
          const photoMin = 1
          const randomPhotoCount = Math.floor(Math.random() * (photoMax - photoMin) + photoMin);
          let gender = randomGenderCount % 2 ? 'M' : 'W';
          this.userList.push(
              {
                userIdx: 2020,
                nickName: nickName,
                photo: 'https://cdn.vuetifyjs.com/images/lists/' + randomPhotoCount + '.jpg',
                gender: gender,
                dist: randomGenderCount + randomPhotoCount + i,
                age: 30,
              },
          )
        }
      }
    },
  }
</script>

<style scoped>
  .bottom-gradient {
      background-image: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, transparent 52px);
  }
  .subtitle-2{
    width: 100%;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
  }
</style>