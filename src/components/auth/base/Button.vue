<template>
  <div>
    <button :class="color" class="w-100" type="submit" @click="$emit('click')">
      <img src="../../../assets/auth/google.png" alt="" :class="nonActiveImg > 0 ? 'nonActiveImg' : ''">
      {{label}}
    </button>
  </div>
</template>

<script>
export default {
  name: 'ButtonAuth',
  props: {
    color: String,
    label: String,
    nonActiveImg: {
      type: Boolean
    }
  }
}
</script>

<style lang="scss" scoped>
.nonActiveImg {
  display: none;
}
</style>
