<template>
	<header class="header">
		<router-link :to="'/'" class="logo-header">
			<span class="logo logo-light"></span>
		</router-link>

		<nav>
			
			<div class="user-panel">
				User name
				<i class="fas fa-user"></i>
			</div>

			<ul class="nav-bar">
				<li class="nav-item">
					<a class="nav-link">
						Edit articles
						<i class="fas fa-newspaper"></i>
					</a>
				</li>
				<li class="nav-item">
					<a class="nav-link">
						Login
						<i class="fas fa-sign-in-alt"></i>
					</a>
				</li>
				<li class="nav-item">
					<a class="nav-link">
						Logout
						<i class="fas fa-sign-out-alt"></i>
					</a>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script>
	export default {
		name: 'Header'
	}
</script>

<style lang="scss" scoped>
	.header {
		display: flex;
		padding: 0 40px;
		background: #3b414d;
		justify-content: space-between;
		align-items: center;
		color: #ffffff;
	}

	.logo-header {
		padding: 15px 0;
		.logo {
			position: relative;
			top: 2px;
		}
	}

	.user-panel {
		display: inline-block;
		padding: 0 15px;
	}
	
	.nav-bar {
		display: inline-flex;

		.nav-item {
			display: flex;
			align-items: center;
			height: 52px;
			.nav-link {
				display: flex;
				align-items: center;
				height: 52px;
				cursor: pointer;
				padding: 0 15px;
				transition: all 0.2s ease;
				&:hover {
					background: #f98e3c;
				}

				.fas {
					position: relative;
					top: 1px;
				}
			}
		}
	}

	.fas {
		margin-left: 10px;
	}
</style>