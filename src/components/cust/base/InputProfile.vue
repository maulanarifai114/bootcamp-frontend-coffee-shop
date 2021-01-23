<template>
  <div class=" d-flex flex-column ">
    <label :for="id">{{label}}</label>
    <input :type="type" :id="id" :value="value" :placeholder="placeholder" disabled v-if="editmode <= 0" class="disabled">
    <input :type="type" :id="id" :value="value" :placeholder="placeholder" v-if="editmode> 0" @input="$emit('input', $event.target.value)">
  </div>
</template>

<script>
export default {
	name: 'InputProfile',
	props: ['id', 'label', 'type', 'value', 'placeholder', 'editmode']
}
</script>

<style lang="scss" scoped>
label {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #9F9F9F;
}

input {
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 1em;
  color: #000000;
  background-color: white!important;
  border: none;
  border-bottom: 1px solid black;
  padding: 10px 0;
  transition: .3s;
}

input:focus {
  outline: none;
}

.disabled {
  border-bottom: 1px solid rgb(200, 200, 200)!important;
  transition: .3s;
}
</style>
