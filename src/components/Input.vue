<template>
  <div class="input-wrap">
    <input 
      class="form-control" 
      :placeholder="placeholder"
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
    },

    placeholder: {
      type: String,
      default: ""
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
  display: inline-block;
  vertical-align: middle;
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
