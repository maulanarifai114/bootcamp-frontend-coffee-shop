<template>
  <div>
    <select :id="id" class="w-100 " @change="$emit('change', $event.target.value)">
      <option :value="value" disabled selected class="disabled">{{label}}</option>
      <!-- <option value="fav">Favorite & Promo</option> -->
      <option value="1">Coffee</option>
      <option value="2">Non Coffee</option>
      <option value="3">Foods</option>
    </select>
  </div>
</template>

<script>
export default {
	name: 'InputCat',
	props: ['label', 'value', 'id']
}
</script>

<style lang="scss" scoped>

.disabled {
  color: #9F9F9F!important;
}

select {
  -webkit-appearance:none;
  height: 83px;
  border: 1px solid #9F9F9F;
  border-radius: 20px;
  padding: 0 33px;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 138.84%;
  letter-spacing: 0.03em;
  color: #353535;
  margin: 0 0 20px 0;
}

select:focus {
  outline: 0;
}

select::placeholder {
  color: #9F9F9F;
}
</style>
