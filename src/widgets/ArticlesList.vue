<template>
	<div class="articles-list">
		<div v-for="(article, index) in articles" :key="index">
			<Article :article="article"></Article>
		</div>
	</div>
</template>

<script>
	import Article from "@/widgets/Article";
	
	export default {
		name: 'ArticlesList',

		components: {
			Article
		},

		props: {
			articles: {
				type: Array,
				default: () => []
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>