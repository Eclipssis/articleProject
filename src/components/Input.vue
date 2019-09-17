<template>
  <div class="input-wrap">
		<input 
			class="form-control" 
			:type="localType" 
			:value="value" 
			@input="$emit('input', $event.target.value)"
		/>
		<i v-if="type === 'password'" class="fas" :class="eyeType" @click="togglePassword"></i>
	</div>
</template>

<script>
export default {
  name: "Input",

  props: {
		value: {
      type: String,
      default: ""
		},

    type: {
      type: String,
      default: "text"
		}
	},

	data() {
		return {
			localType: this.type
		}
	},

	computed: {
		eyeType() {
			return this.localType === 'password' ? 'fa-eye' : 'fa-eye-slash'
		}
	},
	
	methods: {
		togglePassword() {
			this.localType = this.localType === 'password' ? 'text' : 'password'
		}
	}
};
</script>

<style lang="scss" scoped>

.input-wrap {
  position: relative;
}

.form-control {
  height: 30px;
  font-size: 16px;
  padding: 3px 10px;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  color: #495057;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:focus {
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 5px 0.2rem rgba(0, 123, 255, 0.25);
  }

  label {
    font-size: 22px;
  }
}

.fas {
  position: absolute;
  top: 50%;
  margin-top: -8px;
  right: 10px;
	cursor: pointer;
	color: #222d32;
}
</style>
