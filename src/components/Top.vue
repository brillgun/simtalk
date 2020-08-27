<template>
<v-app-bar
      app
      color="white"
      :class="`elevation-2`"
      >
          <v-img src="../assets/simtalk-logo-fill.png" max-width="30px" height="30px"></v-img>
          <span color="purple accent-3" class="pl-2 font-weight-bold " v-if="$route.name == 'Home'">광장</span>
          <span color="purple accent-3" class="pl-2 font-weight-bold " v-if="$route.name == 'Chat'">채팅</span>
          <span color="purple accent-3" class="pl-2 font-weight-bold " v-if="$route.name == 'More'">더보기</span>
      <!-- <v-btn icon>
        <font-awesome-icon icon="ellipsis-v" class="fa-lg"></font-awesome-icon>
      </v-btn> -->
    </v-app-bar>
</template>
<script>
export default {
  props: {
    name: String
  }
}
</script>