<template>
	<div class="">
    <v-toolbar flat height="80px"></v-toolbar>
		<div class="pos-absolute-center text-center">
      <v-img src="https://pikdone.com/wp-content/uploads/2020/04/freepik-page-not-found-concept-illustration-free-vector-ai-eps_5ea7429dc105d.jpeg"></v-img>
			<h3 class="purple--text">Oops! 요청하신 페이지를 찾을 수 없습니다.</h3>
      <v-btn elevation="0" color="purple" class="white--text font-weight-bold mt-3" @click="goHome">뒤로가기</v-btn>
		</div>
	</div>
</template>

<script>

export default {
	name: 'ViewNotFound',
	mounted() {
	},
	methods: {
    goHome(){
      this.$router.push('/');
    }
	},
};
</script>

<style scoped></style>
