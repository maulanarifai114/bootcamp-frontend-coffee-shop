<template>
  <div>
    <button :class="color" class="w-100" type="submit" @click.prevent="$emit('click')">
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
      type: Number
    }
  }
}
</script>

<style lang="scss" scoped>
.nonActiveImg {
  display: none;
}
</style>
