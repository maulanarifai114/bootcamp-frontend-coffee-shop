<template>
  <div class="w-100">
    <button :class="color" type="button">
      {{label}}
    </button>
  </div>
</template>

<script>
export default {
  name: 'ButtonAuth',
  props: {
    color: String,
    label: String
  }
}
</script>

<style lang="scss" scoped>
.nonActiveImg {
  display: none;
}
</style>
