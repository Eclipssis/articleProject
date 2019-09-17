<template>
	<div class="articles-edit-page">
		<h1 class="text-left">ARTICLES EDITING</h1>
		
		<router-link to="/articles">
			<Button name="btn-dark pull-right">Back</Button>
		</router-link>

		<ArticlesList :canEdit="canEdit"></ArticlesList>
	</div>
</template>

<script>
	import ArticlesList from "@/widgets/ArticlesList";
	import { mapState } from 'vuex';

	export default {
		name: "ArticlesEdit",
		
		components: {
			ArticlesList
		},

		computed: {
			...mapState({
				canEdit: state => state.auth.user ? true : false
			})
		},
	}
</script>

<style lang="scss" scoped>

</style>