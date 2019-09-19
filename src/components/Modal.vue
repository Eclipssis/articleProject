<template>
	<transition v-if="value" name="modal">
    <div class="modal">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header"></slot>
          </div>

          <div class="modal-body">
            <slot name="body"></slot>
          </div>

          <div class="modal-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
	export default {
		name: "Modal",

		props: {
			value: {
				type: Boolean,
				default: false
			},
		},
	}
</script>

<style lang="scss">
@import "../assets/styles/_variables.scss";

.modal {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
	transition: opacity 0.3s ease;
	
	&-wrapper {
		display: table-cell;
		vertical-align: middle;
	}

	&-container {
		max-width: 500px;
		margin: 0 auto;
		background-color: #fff;
		border-radius: 6px;
		border: 1px solid rgba(0,0,0,.2);
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
		transition: all 0.3s ease;
	}

	&-header h3 {
		margin-top: 0;
		color: #42b983;
	}

	&-body {
		text-align: center;
		padding: 15px 20px 5px;
	}

	&-footer {
		padding: 15px;
		text-align: right;
	}

	&-header {
		text-align: left;
		padding: 15px;
	}

	&-title {
		text-transform: uppercase;
		margin-bottom: 5px;
		padding-right: 100px;
	}

	&-subtitle {
		font-size: 13px;
		font-weight: 500;
	}

	.btn {
		margin-left: 10px;
	}

	.form-group {
		justify-content: center;
	}

	.form-control[type='text'], 
	textarea.form-control {
		min-width: 200px;
	}
}



.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

@media (min-width: $breakpoint-tablet) {
	.modal {
		.form-control[type='text'], 
		textarea.form-control {
			min-width: 315px;
		}
	}
}
</style>