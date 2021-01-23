<template>
  <div class="d-flex flex-column">
    <!-- <label :for="id" class="label">{{label}}</label> -->
    <input :type="type" :id="id" :placeholder="placeholder" @change="$emit('change', $event.target.value)" :value="value" class="placeholder input" v-if="allow === 1" >
    <input :type="type" :id="id" :placeholder="placeholder" @change="$emit('change', $event.target.value)" :value="value" class="placeholder input" v-else disabled>
  </div>
</template>

<script>
export default {
	name: 'Input',
	props: ['id', 'type', 'placeholder', 'label', 'allow', 'value']
}
</script>

<style lang="scss" scoped>

.input {
  width: 256px;
  height: 47px;
  border: 1px solid rgba(186, 186, 186, 0.35);
  border-radius: 10px;
  padding: 0 14px;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 22px;
  color: #000;
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
