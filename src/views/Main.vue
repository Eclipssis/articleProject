<template>
	<div class="main-page">
		<h1 class="text-left">ARTICLES</h1>
		<ArticlesList></ArticlesList>
	</div>
</template>

<script>
	import ArticlesList from "@/widgets/ArticlesList";

	export default {
		name: 'Main',

		components: {
			ArticlesList
		},

		data() {
			return {
			}
		},
	}
</script>

<style lang="scss" scoped>

</style>