<template>
  <v-container>
    <v-toolbar flat height="50px"></v-toolbar>
    <v-list
        class="pt-0 pb-0"
        v-for="(item, i) in pointList" :key="i">
      <v-list-item
          @click="buyPoint(item)"
      >
        <v-list-item-content>
          <v-list-item-title>
            - {{ item.point.format() }} 포인트
          </v-list-item-title>
          <v-list-item-subtitle class="" v-if="item.bonusPoint > 0">
            + {{ item.bonusPoint.format() }} 보너스 포인트
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-content>
          <v-list-item-title class="text-right">
            ₩ {{ item.price.format() }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider
          :inset="item.inset"
      ></v-divider>
    </v-list>
      <v-card-title class="justify-center mt-5">
        <h5 class="font-weight-regular">
        회원님의 포인트는 총 {{ loginUser.point.format() }} 입니다.</h5></v-card-title>
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
      pointList: [
        {point: 2000,  price: 2500,  bonusPoint: 0,   },
        {point: 5000,  price: 5900,  bonusPoint: 300, },
        {point: 10000, price: 12000, bonusPoint: 7000,},
        {point: 20000, price: 25000, bonusPoint: 2000,},
        {point: 30000, price: 37000, bonusPoint: 5000,},
      ],
    }),
    mounted() {
      this.$EventBus.$emit(CONST.EVENTS.SET_FOOTER_MENU, CONST.MENU_NAME.MORE);
    },
    methods:{
      buyPoint(item){
        console.log(item)
      },
    },
  }
</script>
