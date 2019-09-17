<template>
	<div class="articles-block">
		
		<Spiner v-if="loading" :color="'primary'"></Spiner>

		
		<div v-if="articles && !loading">
			<transition-group name="list" class="articles-list">
				<div v-for="article in articles" :key="article.id" class="articles-item">
					<Article :article="article"></Article>
				</div>
			</transition-group>
		</div>
		
		<div v-if="articles && !loading" class="text-left">
			<Button v-if="canEdit" @click="onAddArticle">Add article</Button>
		</div>
	</div>
</template>

<script>
	import { mapState, mapActions } from "vuex";
	import Article from "@/widgets/Article";
	import Spiner from "@/components/Spiner";

	export default {
		name: 'ArticlesList',

		components: {
			Article,
			Spiner
		},

		props: {
			canEdit: {
				type: Boolean,
				default: false
			},
		},

		data() {
			return {
				articlesError: ''
			}
		},

		computed: {
			...mapState({
				articles: state => state.articles.articles,
				loading: state => state.articles.loading
			})
		},

		methods: {
			...mapActions({
				fetchArticles: 'articles/fetchArticles',
				addArticle: 'articles/addArticle',
			}),

			async onAddArticle () {
				try {
					await this.addArticle()
				} catch (error) {
					this.articlesError = error
				}
			}
		},

		mounted () {
			this.fetchArticles()
		}
	}
</script>

<style lang="scss" scoped>

	.articles-block {
		min-height: 50vh;
	}

	.articles-list {
		display: flex;
		flex-wrap: wrap;
		text-align: left;
		margin: 0 -15px;
	}

	.articles-item {
		box-sizing: border-box;
		padding: 0 15px;
		flex: 1 1 50%;
		max-width: 50%;
	}

	.list-enter-active, .list-leave-active {
		transition: all 1s;
	}
	.list-enter, .list-leave-to {
		opacity: 0;
		transform: scale(0.75) translateY(30px);
	}
</style>