<template>
	<article class="article">
		<div class="article-body">
			<div v-if="canEdit" class="article-controls">
				<span @click="changeStateEditModal(true)" class="article-icon edit-icon" title="Edit article">
					<span class="icon-text">add</span>
					<i class="fas fa-edit"></i>
				</span>

				<span @click="changeStateDeleteModal(true)" class="article-icon delete-icon" title="Delte article">
					<span class="icon-text">delete</span>
					<i class="fas fa-trash-alt"></i>
				</span>
			</div>

			<h2 class="article-title">
				{{article.title}}
			</h2>
			<p class="article-text">
				{{article.text}}
			</p>
			<router-link :to="{ name: 'ArticleRead', params: {id: article.id, article: article }}" class="article-more">Read more</router-link>
		</div>

		<Modal v-model="modals.delete.open" v-if="canEdit">
			<template v-slot:header>
				<h2 class="modal-title">Delete article</h2>
				<p class="modal-subtitle">Are you sure to delete this article ?</p>
			</template>

			<template v-slot:body>
				<div v-if="modals.delete.errorMessage" class="badge badge-danger">
					{{ modals.delete.errorMessage }}
				</div>
			</template>

			<template v-slot:footer>
				<Button name="btn-dark" @click="changeStateDeleteModal(false)">Close</Button>
				<Button name="btn-danger" @click="onDeleteArticle">Delete</Button>
			</template>
		</Modal>

		<Modal v-model="modals.edit.open" v-if="canEdit">
			<template v-slot:header>
				<h2 class="modal-title">Edit article</h2>
				<p class="modal-subtitle">To edit article click on 'Edit' button</p>
			</template>

			<template v-slot:body>
				<form v-if="!modals.edit.errorMessage">
					<div class="form-group">
						<label for="article-title">Title</label>
						<Input v-model="localArticle.title" title="Article title" :placeholder="'Enter title...'" id="article-title"/>
					</div>

					<div class="form-group">
						<label for="article-text">Text</label>
						<textarea 
							v-model="localArticle.text" 
							title="Article text" 
							placeholder="Enter text..." 
							id="article-text" 
							class="form-control">
						</textarea>
					</div>
				</form>
				
				<div v-if="modals.edit.errorMessage" class="badge badge-danger">
					{{modals.edit.errorMessage}}
				</div>
			</template>

			<template v-slot:footer>
				<Button name="btn-dark" @click="changeStateEditModal(false)">Close</Button>
				<Button name="btn-success" @click="onEditArticle">Edit</Button>
			</template>
		</Modal>
	</article>
</template>

<script>
	import Modal from "@/components/Modal";
	import { mapActions } from "vuex";

	export default {
		name: 'Article',

		components: {
			Modal
		},

		props: {
			article: {
				type: Object,
				default: () => {}
			},

			canEdit:{
				type: Boolean,
				default: false
			}
		},

		data() {
			return {
				localArticle: JSON.parse(JSON.stringify(this.article)),
				modals: {
					edit: {
						open: false,
						errorMessage: ''
					},
					delete: {
						open: false,
						errorMessage: ''
					}
				}
			}
		},

		methods: {
			...mapActions({
				deleteArticle: 'articles/deleteArticle',
				updateArticle: 'articles/updateArticle'
			}),

			changeStateEditModal(value) {
				this.modals.edit.open = value
				this.modals.edit.errorMessage = null
			},

			changeStateDeleteModal(value) {
				this.modals.delete.open = value
			},

			async onDeleteArticle () {
				if(this.canEdit) {
					this.modals.delete.errorMessage = null
					try {
						this.deleteArticle(this.localArticle)
					} catch (error) {
						this.modals.delete.errorMessage = error
					} finally {
						this.changeStateDeleteModal(false)
					}
				}
			},

			async onEditArticle () {
				if (this.canEdit) {
					this.modals.edit.errorMessage = null
					try {
						this.updateArticle(this.localArticle)
					} catch (error) {
						this.modals.edit.errorMessage = error
					} finally {
						this.changeStateEditModal(false)
					}
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.article {
		position: relative;
		display: inline-block;
		width: 100%;
		margin-bottom: 20px;
		text-align: left;
		box-shadow: 0px 0px 15px 0px #3b414d2e;
		border: 1px solid #3b414d24;
		border-radius: 5px;
		&-body {
			padding: 15px 20px;
			background: #ffffff;
			border-radius: 5px;
		}

		&-title {
			margin-bottom: 10px;
		}

		&-text {
			overflow: hidden;
			max-height: 105px;
			margin-bottom: 10px;
			&:after {
				content: '...'
			}
		}
		
		&-more {
			font-size: 14px;
			color: #007bff;
			text-decoration: underline;
			&:hover {
				text-decoration: none;
			}
		}

		&-controls {
			position: absolute;
			top: 8px;
			right: 8px;
			
		}
		
		&-icon {
			cursor: pointer;
			margin: 5px;
			font-size: 13px;
		}

		.icon-text {
			display: inline-block;
			margin-right: 4px;
			font-weight: 500;
			font-size: 12px;
		}
	}
</style>