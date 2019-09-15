<template>
	<footer class="footer">
		<p>{{ new Date().getFullYear() }}, Articles Project</p>
		<div class="owner-block">
			<p>Developing: Illya Puchkovskiy</p>
			<p class="phone-number">+38 (095) 135-42-47</p>
		</div>
	</footer>
</template>

<script>
	export default {
		name: 'Footer'
	}
</script>
<style lang="scss" scoped>
	@import "../assets/styles/_variables.scss";

	.footer {
		display: flex;
		flex-direction: column;
		flex: 0 0 auto;
		justify-content: space-between;
		align-items: center;
		padding: 15px 40px;
		background: #3b414d;
		color: #fff;
		line-height: 1.8;
	}

	.owner-block {
		text-align: center;
	}

	.phone-number {
		font-size: 14px;
	}

	@media (min-width: $breakpoint-tablet) {
		.footer {
			flex-direction: row;
		}

		.owner-block {
			text-align: left;
		}
	}
</style>
