<template>
  <div class="d-flex flex-row justify-content-between w-100 mb-5">
    <div class="input-group">
      <div class="input-group-prepend">
        <button class="btn" type="button" @click="minusAmount()">-</button>
      </div>
      <input type="text" class="form-control" placeholder="0" disabled v-model="this.$store.state.detailP.amount">
      <div class="input-group-append">
        <button class="btn" type="button" @click="plusAmount()">+</button>
      </div>
    </div>
    <p class="price">IDR {{price}}</p>
  </div>
</template>

<script>
export default {
	name: 'AmountPrice',
	props: [
		'prices',
		'stock'
	],
	data () {
		return {
		}
	},
	methods: {
		plusAmount () {
			this.$store.commit('SET_AMOUNT_PLUS')
		},
		minusAmount () {
			this.$store.commit('SET_AMOUNT_MINUS')
		}
	},
	computed: {
		price () {
			return this.$store.getters.currentPrice
		}
	}
}
</script>

<style lang="scss" scoped>

.price {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 52px;
  text-align: center;
  color: #000000;
}

.input-group {
  width: 181px;
  height: 63px;
}

.btn {
  border: 1px solid #9F9F9F;
  width: 54px;
  font-family: Poppins;
  font-size: 25px;
  font-style: normal;
  font-weight: 900;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: center;
  color: #6A4029;
  border-radius: 10px;
}

.btn:focus {
  border: 1px solid #9F9F9F;
  box-shadow: none;
  background-color: rgb(245, 245, 245);
}

.btn:hover {
  color: rgba(106, 64, 41, 0.8);
}

.form-control {
  border: 1px solid #9F9F9F;
  height: 100%;
  font-family: Poppins;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: center;
  color: #6A4029;
  background-color: white!important;
}

.form-control:focus {
  border: 1px solid #9F9F9F;
  box-shadow: none;
}
</style>
