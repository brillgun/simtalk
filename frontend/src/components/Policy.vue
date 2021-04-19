<template>
  <v-container>
    <v-toolbar flat height="50px"></v-toolbar>
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
