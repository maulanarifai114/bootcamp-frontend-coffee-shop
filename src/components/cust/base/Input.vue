<template>
  <div class="d-flex flex-column">
    <label :for="id" class="label">{{label}}</label>
    <input :type="type" :id="id" :placeholder="placeholder" class="placeholder input" required>
  </div>
</template>

<script>
export default {
  name: 'InputAuth',
  props: ['id', 'type', 'placeholder', 'label']
}
</script>

<style lang="scss" scoped>

.input {
  width: 256px;
  height: 47px;
  border: 1px solid rgba(186, 186, 186, 0.35);
  border-radius: 10px;
  padding: 0 14px;
}

.input:focus {
  outline: none;
}

.placeholder::placeholder {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 22px;
  color: #9F9F9F;
}

.label {
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  color: #4F5665;
}

</style>
