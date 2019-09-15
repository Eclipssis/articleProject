<template>
	<section class="content">
		<slot></slot>
	</section>
</template>
<style lang="scss" scoped>
	$footer-height: 83px;
	$header-height: 52px;

	.content {
		min-height: calc(100vh - #{$header-height + $footer-height});
	}
</style>