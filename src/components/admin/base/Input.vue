<template>
  <div class="d-flex flex-column">
    <label :for="id" class="label">{{label}}</label>
    <input @input="$emit('input', $event.target.value)" :value="value" :type="type" :id="id" :placeholder="placeholder" class="placeholder input" required maxlength="max">
  </div>
</template>

<script>
export default {
	name: 'InputAuth',
	props: ['id', 'type', 'placeholder', 'label', 'max', 'value']
}
</script>

<style lang="scss" scoped>

.input {
  height: 75px;
  border: 1px solid rgba(186, 186, 186, 0.35);
  border-radius: 20px;
  padding: 0 27px;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  color: #353535;
}

.input:focus {
  outline: none;
}

.placeholder::placeholder {
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  color: #9F9F9F;
}

.label {
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 30px;
  color: #6A4029;
  margin: 0 0 22px 0;
}

</style>
