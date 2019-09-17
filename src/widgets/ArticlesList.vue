<template>
	<div class="articles-block">
		
		<Spiner v-if="loading" :color="'primary'"></Spiner>
		
		<div class="button-panel">
			<Button v-if="canEdit" @click="onChangeStateArticleModal(true)">Add article</Button>
		</div>

		<div v-if="!articles && !loading">
			<h2>There is no articles, please add some...</h2>
		</div>

		<div v-if="articles && !loading">
			<transition-group name="list" class="articles-list">
				<div v-for="article in articles" :key="article.id" class="articles-item">
					<Article :article="article" :canEdit="canEdit"></Article>
				</div>
			</transition-group>
		</div>
		
		<Modal v-model="articleModal" v-if="canEdit">
			<template v-slot:header>
				<h2 class="modal-title">Add article</h2>
				<p class="modal-subtitle">Fill the fields and then click 'Add' button</p>
			</template>

			<template v-slot:body>
				<form>
					<div class="form-group">
						<label for="article-title">Title</label>
						<Input v-model="editingArtile.title" title="Article title" :placeholder="'Enter title...'" id="article-title"/>
					</div>

					<div class="form-group">
						<label for="article-text">Text</label>
						<textarea 
							v-model="editingArtile.text" 
							title="Article text" 
							placeholder="Enter text..." 
							id="article-text" 
							class="form-control">
						</textarea>
					</div>
				</form>
				
				<div v-if="articlesError" class="badge badge-danger">
					{{articlesError}}
				</div>
			</template>

			<template v-slot:footer>
				<Button name="btn-dark" @click="onChangeStateArticleModal(false)">Close</Button>
				<Button name="btn-success" @click="onCreateArticle">Add</Button>
			</template>
		</Modal>
	</div>
</template>

<script>
	import { mapState, mapActions } from "vuex";
	import Article from "@/widgets/Article";
	import Spiner from "@/components/Spiner";
	import Modal from "@/components/Modal";

	export default {
		name: 'ArticlesList',

		components: {
			Article,
			Spiner,
			Modal
		},

		props: {
			canEdit: {
				type: Boolean,
				default: false
			},
		},

		data() {
			return {
				editingArtile: {
					title: '',
					text: ''
				},
				articlesError: '',
				articleModal: false
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

			async onCreateArticle() {
				this.articlesError = null

				if (this.canEdit) {
					try {
						await this.addArticle(this.editingArtile)
						this.onChangeStateArticleModal(false)
					} catch (error) {
						this.articlesError = error
					}
				}
			},

			onChangeStateArticleModal (value) {
				this.articleModal = value
				this.articlesError = null
			}
		},

		mounted () {
			if (!this.articles) {
				this.fetchArticles()
			}
		}
	}
</script>

<style lang="scss" scoped>

	.button-panel {
		float: left;
		margin-bottom: 20px;
	}

	.articles-block {
		min-height: 50vh;
	}

	.articles-list {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		text-align: left;
		margin: 0 -15px 0;
	}

	.articles-item {
		box-sizing: border-box;
		padding: 0 15px;
		flex: 1 1 50%;
		max-width: 50%;
	}

	.list-enter-active, .list-leave-active {
		transition: all 0.5s;
	}
	.list-enter, .list-leave-to {
		opacity: 0;
		transform: scale(0.8) translateY(20px);
	}
</style>