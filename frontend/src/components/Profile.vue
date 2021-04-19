<template>
  <v-container>
    <v-toolbar flat height="50px"></v-toolbar>
    <v-card
        elevation="0"
        class="overflow-hidden"
        color=""
    >
      <v-toolbar
          flat
          color="purple"
      >
        <v-icon class="white--text">mdi-account</v-icon>
        <v-toolbar-title class="font-weight-normal white--text">
          프로필
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
            elevation="0"
            color="white purple--text"
            @click="save">
          SAVE
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <v-text-field
            :disabled="!isEditing"
            color="purple"
            label="이름"
            v-model="loginUser.nickName"
        ></v-text-field>
        <v-radio-group
            v-model="loginUser.gender"
            row
        >
          <v-radio
              :disabled="!isEditing"
              color="purple"
              label="남자"
              value="M"
          ></v-radio>
          <v-radio
              :disabled="!isEditing"
              color="purple"
              label="여자"
              value="W"
          ></v-radio>
        </v-radio-group>
        <v-select
            :disabled="!isEditing"
            v-model="loginUser.age"
            :items="ageList"
            item-text="codeNm"
            item-value="codeCd"
            label="나이"
            return-object
            single-line
            color="purple"
        ></v-select>
        <v-select
            :disabled="!isEditing"
            v-model="loginUser.location"
            :items="locationList"
            item-text="codeNm"
            item-value="codeCd"
            label="지역"
            return-object
            single-line
            color="purple"
        ></v-select>
        <v-card-subtitle v-show="!isEditing" class="left purple--text">한번 저장한 정보는 수정이 불가능합니다.</v-card-subtitle>
        <v-container
            class="px-0"
            fluid
        >
          <v-switch
              v-model="locationYn"
              :label="`위치정보 공개: ${locationYn === true ? '공개' : '비공개' }`"
              color="purple"
              inset
          ></v-switch>
          <v-switch
              v-model="useYn"
              :label="`프로필 공개: ${useYn === true ? '공개' : '비공개' }`"
              color="purple"
              inset
          ></v-switch>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
      </v-card-actions>
      <v-snackbar
          v-model="hasSaved"
          :timeout="1000"
          absolute
          centered
          center
          color="purple"
          class="font-weight-bold text-center"
      >
        저장되었습니다.
      </v-snackbar>
    </v-card>
  </v-container>
</template>

<script>
import CONST from "@/constants";
  export default {
    name: 'more',
    data: () => ({
      CONST: CONST,
      loginUser: {
        userIdx: 1,
        nickName: '닉네임별명',
        gender: 'W',
        age: 30,
        location: 'SEJONG',
        point: 1500,
      },
      locationYn: true,
      useYn: true,
      hasSaved: false,
      isEditing: true,
      model: null,
      locationList: [
        {codeCd: 'GAN', codeNm: '강원',},
        {codeCd: 'KYU', codeNm: '경기',},
        {codeCd: 'KNA', codeNm: '경남',},
        {codeCd: 'KBU', codeNm: '경북',},
        {codeCd: 'KWA', codeNm: '광주',},
        {codeCd: 'DAE', codeNm: '대구',},
        {codeCd: 'DJU', codeNm: '대전',},
        {codeCd: 'BUS', codeNm: '부산',},
        {codeCd: 'SEO', codeNm: '서울',},
        {codeCd: 'SEJONG', codeNm: '세종',},
        {codeCd: 'ULS', codeNm: '울산',},
        {codeCd: 'INC', codeNm: '인천',},
        {codeCd: 'JUN', codeNm: '전남',},
        {codeCd: 'JUB', codeNm: '전라',},
        {codeCd: 'JEJ', codeNm: '제주',},
        {codeCd: 'CHN', codeNm: '충남',},
        {codeCd: 'CHB', codeNm: '충북',},
      ],
      ageList:[
        {codeCd: 10, codeNm: '10대'},
        {codeCd: 20, codeNm: '20대'},
        {codeCd: 30, codeNm: '30대'},
        {codeCd: 40, codeNm: '40대'},
        {codeCd: 50, codeNm: '50대'},
        {codeCd: 60, codeNm: '60대'},
        {codeCd: 70, codeNm: '70대'},
      ],
    }),
    mounted() {
      this.$EventBus.$emit(CONST.EVENTS.SET_FOOTER_MENU, CONST.MENU_NAME.MORE);
    },
    methods:{
      customFilter (item, queryText, itemText) {
        console.log(itemText);
        const textOne = item.name.toLowerCase()
        const textTwo = item.abbr.toLowerCase()
        const searchText = queryText.toLowerCase()
        return textOne.indexOf(searchText) > -1 ||
            textTwo.indexOf(searchText) > -1
      },
      save () {
        this.isEditing = false
        this.hasSaved = true
      },
    },
  }
</script>
