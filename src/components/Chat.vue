<template>
  <v-container>
    {{idx}}
  </v-container>
</template>

<script>
  export default {
    name: 'Chat',
      props: {
        idx: String,
       },
    data: () => ({
    }),
  }
</script>
