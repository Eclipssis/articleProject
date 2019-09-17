<template>
	<section class="content">
		<slot></slot>
	</section>
</template>
<style lang="scss" scoped>
	$footer-height: 83px;
	$header-height: 52px;
	$content-padding-y: 30px;

	.content {
		max-width: 1200px;
		width: 100%;
		padding: $content-padding-y 30px;
		margin: 0 auto;
		min-height: calc(100vh - #{$header-height + $footer-height + $content-padding-y * 2});
	}
</style>