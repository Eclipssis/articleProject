<template>
	<div>
		<div v-if="article" class="article-single">
			<h1 class="article-title">{{ article.title }}</h1>
			<p class="article-text">{{ article.text }}</p>
			
		</div>

		<div class="text-left">
			<router-link to="/articles" >
				<Button name="btn-dark">Back</Button>
			</router-link>
		</div>
		
	</div>
</template>

<script>
	export default {
		name: 'ArticleRead',

		data() {
			return {
				article: null
			}
		},

		beforeRouteEnter (to, from, next) {
			console.log('to', to)
			console.log('from', from)
			next(vm => {
				vm.article = to.params.article
			})
		}
	}
</script>
<style lang="scss" scoped>
	.article-single {
		text-align: left;
		padding: 15px;
		margin-bottom: 20px;
		background: #ffffff9e;
		border-radius: 5px; 
		box-shadow: 0px 0px 15px 0px #6f747e0c;
	}

	.article-text {
		margin-bottom: 20px;
	}
</style>