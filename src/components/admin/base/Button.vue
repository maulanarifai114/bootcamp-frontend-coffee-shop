<template>
  <div class="mx-auto">
    <button :class="color" type="button" @click.prevent="$emit('trigger')">
      {{label}}
    </button>
  </div>
</template>

<script>
export default {
	name: 'ButtonAuth',
	props: ['color', 'label']
}
</script>

<style lang="scss" scoped>
.nonActiveImg {
  display: none;
}
</style>
