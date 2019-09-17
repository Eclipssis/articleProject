<template>
	<article class="article">
		<!-- TODO: Add image to article in future -->
		<!-- <div class="article-image">
			<img src="../image-src" alt="image-alt">
		</div> -->
		<div class="article-body">
			<h2 class="article-title">
				{{article.title}}
			</h2>
			<p class="article-text">
				{{article.text}}
			</p>
			<router-link to="/hell" class="article-more">Read more</router-link>
		</div>
	</article>
</template>

<script>
	export default {
		name: 'Article',

		props: {
			article: {
				type: Object,
				default: () => {}
			},
		},
	}
</script>

<style lang="scss" scoped>
	.article {
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
	}
</style>