<template>
  <v-bottom-navigation
  absolute
  :class="`elevation-10`"
  color="purple accent-3"
  > 
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-btn :to="{path:'/'}">
      <font-awesome-icon icon="landmark" class="fa-2x"></font-awesome-icon>
    </v-btn>
    <v-spacer class="pa-md-4"></v-spacer>
    <v-btn :to="{path:'/chat'}">
      <font-awesome-icon icon="comments" class="fa-2x"></font-awesome-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn :to="{path:'/more'}">
      <font-awesome-icon icon="ellipsis-h" class="fa-2x"></font-awesome-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
  </v-bottom-navigation>
</template>

<script>
  export default {
  }
</script>