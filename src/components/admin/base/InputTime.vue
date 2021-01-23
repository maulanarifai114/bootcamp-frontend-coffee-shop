<template>
  <div>
    <select :id="id" class="w-100 " @change="$emit('change', $event.target.value)">
      <option :value="value" disabled selected class="disabled">{{label}}</option>
      <option value="00">00:00</option>
      <option value="01">01:00</option>
      <option value="02">02:00</option>
      <option value="03">03:00</option>
      <option value="04">04:00</option>
      <option value="05">05:00</option>
      <option value="06">06:00</option>
      <option value="07">07:00</option>
      <option value="08">08:00</option>
      <option value="09">09:00</option>
      <option value="10">10:00</option>
      <option value="11">11:00</option>
      <option value="12">12:00</option>
      <option value="13">13:00</option>
      <option value="14">14:00</option>
      <option value="15">15:00</option>
      <option value="16">16:00</option>
      <option value="17">17:00</option>
      <option value="18">18:00</option>
      <option value="19">19:00</option>
      <option value="20">20:00</option>
      <option value="21">21:00</option>
      <option value="22">22:00</option>
      <option value="23">23:00</option>
    </select>
  </div>
</template>

<script>
export default {
	name: 'InputTime',
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
