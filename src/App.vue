<template>
  <v-app>
      <Top/>
    <v-main>
      <router-view />
    </v-main>
    <v-footer app>
      <Bottom/>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'main',
  data: () => ({
    
  }),
};
</script>
