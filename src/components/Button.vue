<template>
  <button class="btn" :type="type" :class="name" @click="$emit('click', $event)">
    <slot></slot>
		<Spiner :size="'small'" v-if="loading"></Spiner>
  </button>
</template>

<script>
import Spiner from "@/components/Spiner";

export default {
  name: "Button",

	components: {
		Spiner
	},

  props: {
    name: {
      type: String,
      default: "btn-primary"
    },
    
    type: {
      type: String,
      default: "button"
    },
		
		loading: {
      type: Boolean,
      default: false
		}
  }
};
</script>

<style lang="scss" scoped>

$btn-primary-bg: #007bff;
$btn-success-bg: #28a745;
$btn-danger-bg: #dc3545;
$btn-dark-bg: #343a40;

.btn {
  display: inline-block;
	font: 1rem/1.5 "Roboto", Helvetica, Arial, sans-serif;
  text-align: center;
  vertical-align: middle;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.45rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  color: #fff;
}

.btn + .btn {
  margin-left: 10px;
} 

.btn-primary {
  background-color: $btn-primary-bg;
  border-color: $btn-primary-bg;
  &:hover {
    background-color: darken($btn-primary-bg, 10%);
    border-color: darken($btn-primary-bg, 15%);
  }
}

.btn-success {
  background-color: $btn-success-bg;
  border-color: $btn-success-bg;
  &:hover {
    background-color: darken($btn-success-bg, 10%);
    border-color: darken($btn-success-bg, 15%);
  }
}

.btn-danger {
  background-color: $btn-danger-bg;
  border-color: $btn-danger-bg;
  &:hover {
    background-color: darken($btn-danger-bg, 10%);
    border-color: darken($btn-danger-bg, 15%);
  }
}

.btn-dark {
  background-color: $btn-dark-bg;
  border-color: $btn-dark-bg;
  &:hover {
    background-color: darken($btn-dark-bg, 10%);
    border-color: darken($btn-dark-bg, 15%);
  }
}


</style>
