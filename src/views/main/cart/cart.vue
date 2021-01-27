<template>
	<div class="jumbotron jumbotron-fluid">
		<div class="container">
			<div class="row">
				<h1 class="title-checkout">Checkout your item now!</h1>
			</div>
			<div class="row">
				<!-- Left Side -->
				<div class="box box-sm col-lg mb-5 mb-lg-0 d-flex flex-column align-items-center">
					<!-- Title Order -->
					<div class="order-summary">Order Summary</div>
					<!-- Order List -->
					<div class=" all-order d-flex flex-row w-100" v-for="(item, index) in data_list" :key="index">
						<div>
							<div class="wrap-order-img">
								<img :src="item.img" alt="img">
							</div>
						</div>
						<div class=" d-flex flex-column justify-content-between order-list">
							<div class="item-name">{{item.name}}</div>
							<div>X {{item.qty}}</div>
							<div class="item-size">{{item.size}}</div>
						</div>
						<div class=" d-flex flex-fill align-items-center justify-content-end order-list">
							<div>IDR {{item.price.toLocaleString('id-ID')}}</div>
						</div>
					</div>
					<!-- Total Etc. -->
					<div class="line w-100"></div>
					<div class="wrap-total d-flex flex-column align-items-start w-100">
						<!-- Subtotal -->
						<div class="sub-total d-flex w-100">
							<div class="sub-total-idr flex-grow-1 d-flex justify-content-between flex-column">
								<div>SUBTOTAL</div>
								<div>TAX & FEES</div>
								<div>SHIPPING</div>
							</div>
							<div class="idr">
								<div>IDR</div>
								<div>IDR</div>
								<div>IDR</div>
							</div>
							<div>
								<div class="price">{{data_total.subtotal.toLocaleString('id-ID')}}</div>
								<div class="price">{{data_total.tax_fees.toLocaleString('id-ID')}}</div>
								<div class="price">{{data_total.shipping.toLocaleString('id-ID')}}</div>
							</div>
						</div>
						<!-- Total -->
						<div class="wrap-total d-flex w-100">
							<div class="total flex-grow-1">TOTAL</div>
							<div class="total total-idr">IDR</div>
							<div class="total">{{data_total.total.toLocaleString('id-ID')}}</div>
						</div>
						<!-- End -->
					</div>
				</div>
				<!-- Empty Size -->
				<div class="col-lg-1 col-xl-2"></div>
				<!-- Right Side -->
				<div class="col-lg-5">
					<!-- Address -->
					<div class=" d-flex justify-content-between wrap-subtitle">
						<h3>Address Detail</h3>
						<h6 class=" align-self-end" @click="changeEdit" v-if="editMode === 0">edit</h6>
						<h6 class=" align-self-end" @click="changeEdit" v-else>save</h6>
					</div>
					<div class="box mb-box font-poppins">
						<!-- Delivery To -->
						<div class=" d-flex">
							<div class="subtitle-delivery">Delivery to</div>
						</div>
						<input v-if="editMode === 1" type="text" v-model="name" class="input-address w-100" placeholder="Enter Your Name...">
						<input v-else type="text" v-model="name" class="input-address disabled-address w-100" placeholder="Enter Your Name..." disabled>
						<!-- Full Address -->
						<div class="wrap-full-address">
							<textarea v-if="editMode === 1" v-model="fulladdress" name="fullAdd" id="fullAdd" cols="2" class="input-address-thin w-100" placeholder="Enter Your Full Address..."></textarea>
							<textarea v-else v-model="fulladdress" name="fullAdd" id="fullAdd" cols="2" class="input-address-thin disabled-address-thin w-100" disabled placeholder="Enter Your Full Address..."></textarea>
						</div>
						<!-- Phone -->
						<div>
							<input v-if="editMode === 1" type="text" v-model="phone" class="input-address-thin w-100" placeholder="Enter Your Phone Number...">
							<input v-else type="text" v-model="phone" class="input-address-thin disabled-address-thin w-100" placeholder="Enter Your Phone Number..." disabled>
						</div>
					</div>
					<!-- Payment -->
					<div class=" d-flex justify-content-between wrap-subtitle">
						<h3>Payment Methods</h3>
					</div>
					<div class="box mb-box font-poppins">
						<!-- Card -->
						<div class=" d-flex">
							<input type="radio" v-model="payment_method_id" value="1" id="card" class=" d-none">
							<label for="card" class="d-flex align-items-center mt-0">
								<div v-if="payment_method_id === '1'" class="active-method">
									<div class="active-little"></div>
								</div>
								<div v-else class="inactive-method"></div>
								<div class="box-payment orange d-flex justify-content-center align-items-center">
									<img src="../../../assets/img/card.svg" alt="card">
								</div>
								<h4>Card</h4>
							</label>
						</div>
						<!-- Bank -->
						<div class="wrap-mid-payment">
							<input type="radio" v-model="payment_method_id" value="2" id="bank" class=" d-none">
							<label for="bank" class="d-flex align-items-center">
								<div v-if="payment_method_id === '2'">
									<div class="active-method">
										<div class="active-little"></div>
									</div>
								</div>
								<div v-else>
									<div class="inactive-method"></div>
								</div>
								<div>
									<div class="box-payment choco d-flex justify-content-center align-items-center">
										<img src="../../../assets/img/bank.svg" alt="card">
									</div>
								</div>
								<h4>Bank account</h4>
							</label>
						</div>
						<!-- Cash On Delivery -->
						<div class=" d-flex">
							<input type="radio" v-model="payment_method_id" value="3" id="cod" class=" d-none">
							<label for="cod" class="d-flex align-items-center mb-0">
								<div v-if="payment_method_id === '3'">
									<div class="active-method">
										<div class="active-little"></div>
									</div>
								</div>
								<div v-else>
									<div class="inactive-method"></div>
								</div>
								<div>
									<div class="box-payment yellow d-flex justify-content-center align-items-center">
										<img src="../../../assets/img/cod.svg" alt="card">
									</div>
								</div>
								<h4>Cash on delivery</h4>
							</label>
						</div>
					</div>
					<!-- Button Payment -->
					<button @click.prevent="paymentConfirm">Confirm and Pay</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
	title: 'Payment',
	name: 'Cart',
	data () {
		return {
			data_total: {
				subtotal: 0,
				tax_fees: 0,
				shipping: 0,
				total: 0
			},
			data_list: [],
			name: this.$store.state.profile.first_name,
			fulladdress: this.$store.state.profile.address,
			phone: this.$store.state.profile.phone_number,
			payment_method_id: '1',
			editMode: 0
		}
	},
	methods: {
		changeEdit () {
			this.editMode === 0 ? this.editMode++ : this.editMode--
		},
		paymentConfirm () {
			const data = {
				address: this.fulladdress,
				customer_phone: this.phone,
				payment_method_id: this.payment_method_id,
				order_id: this.$store.getters.getOrderId
			}
			console.log(data)
			axios.patch(`${process.env.VUE_APP_BASE_URL}order/confirm-payment`, data)
				.then((res) => {
					const result = res.data
					console.log(result.messages)
					Swal.fire('Success', result.messages, 'success')
					this.$store.commit('RESET_ORDER_ID')
					localStorage.removeItem('order_id')
					this.$router.push('/cust/history')
				})
		},
		getOrderId () {
			// axios.get(`${process.env.VUE_APP_BASE_URL}order/detail-order/${this.$store.getters.getOrderId}`)
			axios.get(`${process.env.VUE_APP_BASE_URL}order/detail-order/${localStorage.getItem('order_id')}`)
				.then((res) => {
					const data = res.data.data
					console.log(data)
					data.order_details.forEach((item, index) => {
						const list = {
							name: '',
							img: '',
							price: 0,
							qty: 0,
							size: ''
						}
						const qty = item.qty
						const size = item.size
						const name = item.product.name
						const price = item.product.price
						const img = item.product.images
						list.name = name
						list.img = img
						list.qty = qty
						if (size === 'R') {
							list.size = 'Regular'
							list.price = price * qty
							this.data_total.subtotal += price * qty
						}
						if (size === 'L') {
							list.size = 'Large'
							list.price = price * qty
							this.data_total.subtotal += price * qty
						}
						if (size === 'XL') {
							list.size = 'Extra Large'
							list.price = price * qty
							this.data_total.subtotal += price * qty
						}
						if (size === '250') {
							list.size = '250 Gram'
							list.price = price * qty
							this.data_total.subtotal += price * qty
						}
						if (size === '300') {
							list.size = '300 Gram'
							list.price = price * qty
							this.data_total.subtotal += price * qty
						}
						if (size === '500') {
							list.size = '500 Gram'
							list.price = price * qty
							this.data_total.subtotal += price * qty
						}
						this.data_list.push(list)
					})
					// this.data_total.subtotal = data.subtotal
					this.data_total.tax_fees = data.tax_fee
					this.data_total.shipping = data.shipping
					this.data_total.total = this.data_total.subtotal + this.data_total.tax_fees + this.data_total.shipping
				})
				.catch((err) => {
					console.log(err.response)
				})
		},
		getProfile () {
			this.name = this.$store.state.profile.first_name
			this.fulladdress = this.$store.state.profile.address
			this.phone = this.$store.state.profile.phone_number
		}
	},
	mounted () {
		this.getOrderId()
		this.getProfile()
	},
	created () {
		this.$store.watch(
			(state) => {
				return this.$store.state.profile
			},
			(newValue, oldValue) => {
				this.name = newValue.first_name
				this.fulladdress = newValue.address
				this.phone = newValue.phone_number
			},
			{
				deep: true
			}
		)
	}
}
</script>

<style lang="scss" scoped>

.item-name {
	font-weight: 700;
}

.all-order {
	margin: 0 0 18px 0
}

.order-list {
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	line-height: 30px;
	color: #362115;
}

.total {
	font-family: Poppins;
	font-style: normal;
	font-weight: bold;
	font-size: 30px;
	line-height: 45px;
	color: #362115;
}

.total-idr {
	margin: 0 10px 0 0;
}

.sub-total {
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	line-height: 30px;
	color: #362115;
	margin: 0 0 45px 0;
	.idr {
		margin: 0 10px 0 0;
	}
}

.line {
	margin: 8px 0 18px 0;
	height: 0.5px;
	background-color: rgba(0, 0, 0, 0.3);
}

.wrap-order-img {
	margin: 0 32px 0 0;
	width: 82px;
	height: 90px;
	background-color: #dadada;
	border-radius: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
}

textarea {
	border: 0;
	resize: none;
}

textarea::-webkit-scrollbar {
	width: 5px
}

textarea::-webkit-scrollbar-thumb {
	background-color: #dadada;
}

textarea:focus {
	border: 0;
	outline: 0
}

.input-address {
	font-weight: 500;
}

.input-address-thin {
	font-weight: 400;
}

.disabled-address, .disabled-address-thin {
	background-color: rgba(255, 255, 255, 0);
	color: #777;
}

.disabled-address-thin {
	font-weight: 400;
}

.order-summary {
	font-family: Poppins;
	font-style: normal;
	font-weight: bold;
	font-size: 35px;
	line-height: 52px;
	color: #362115;
	margin: 0 0 40px 0;
}

button {
	background: #6A4029;
	box-shadow: 0px 10px 20px rgba(137, 85, 55, 0.4);
	border-radius: 20px;
	height: 84px;
	width: 100%;
	font-family: Poppins;
	font-style: normal;
	font-weight: bold;
	font-size: 20px;
	line-height: 30px;
	text-align: center;
	color: #FFFFFF;
	border: 0;
	outline: 0;
	transition: .3s;
}

button:hover {
	background: rgb( calc(106 + 15), calc(64 + 15), calc(41 + 15));
}

button:focus {
	outline: 0
}

.col-lg-5 {
	padding: 0;
}

.active-method {
	border: 1px solid #6A4029!important;
	display: flex;
	justify-content: center;
	align-items: center;
	.active-little {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background-color: #895537;
	}
}

.inactive-method, .active-method {
	width: 20px;
	height: 20px;
	border-radius: 50%;
	border: 1px solid #9F9F9F;
	margin: 0 10px 0 0;
}

.box-payment {
	height: 40px;
	width: 40px;
	border-radius: 10px;
	margin: 0 10px 0 0;
}

.orange {
	background-color: #F47B0A;
}

.choco {
	background-color: #895537;
}

.yellow {
	background-color: #FFBA33;
}

label {
	margin: 0;
	width: 100%;
	cursor: pointer;
	transition: .3s;
	height: 65px;
	padding: 0 15px;
	margin: 10px 0;
	border-radius: 10px;
}

label:hover {
	background-color: #eee;
	// background-color: #eee;
	border-radius: 10px;
}

h4 {
	margin: 0;
}

.jumbotron-fluid {
	background-image: url('../../../assets/img/nathan-dumlao-zTZRZV86GhE-unsplash 1.png');
	background-size: cover;
	background-repeat: no-repeat;
	min-height: 100px;
	margin: 0;
	padding: 110px 0;
}

.title-checkout {
	font-family: Rubik;
	font-style: normal;
	font-weight: bold;
	font-size: 40px;
	line-height: 47px;
	color: #FFFFFF;
	text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.8);
	width: 316px;
	margin: 0 0 40px 0;
}

.box {
	width: 100%;
	height: fit-content;
	box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.35);
	border-radius: 20px;
	background-color: white;
	padding: 40px;
}

.wrap-subtitle {
	padding: 0 24px 0 0;
	margin: 0 0 16px 0;
}

.font-poppins {
	font-family: Poppins;
	font-style: normal;
	font-weight: 500;
	font-size: 20px;
	line-height: 30px;
	color: #000000;
}

.subtitle-delivery {
	font-weight: 700;
}

.wrap-full-address {
	height: fit-content;
	width: 100%;
	border-top: 0.5px solid rgba(0, 0, 0, 0.3);
	border-bottom: 0.5px solid rgba(0, 0, 0, 0.3);
	margin: 10px 0;
	padding: 10px 0
}

.wrap-mid-payment {
	height: fit-content;
	width: 100%;
	border-top: 0.5px solid rgba(0, 0, 0, 0.3);
	border-bottom: 0.5px solid rgba(0, 0, 0, 0.3);
	// margin: 16px 0;
	// padding: 16px 0
}

.full-add {
	width: 100%;
}

.mb-box {
	margin: 0 0 48px 0
}

input {
	border: 0;
	padding: 0;
	margin: 0;
	outline: 0
}

.delivery-to {
	// padding: 0 0 0 10px;
	width: auto;
	height: auto;
}

h3 {
	font-family: Poppins;
	font-style: normal;
	font-weight: bold;
	font-size: 25px;
	line-height: 1em;
	color: #FFFFFF;
	text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.8);
	margin: 0;
}

h6 {
	font-family: Poppins;
	font-style: normal;
	font-weight: bold;
	font-size: 15px;
	line-height: 1em;
	color: #FFFFFF;
	cursor: pointer;
	transition: .3s;
	margin: 0;
}

h6:hover {
	opacity: .8;
}

h5 {
	margin: 0;
}

h5:focus, .full-add:focus, div {
	outline: 0;
}

@media (max-width: 575px) {
	.jumbotron-fluid {
		padding-right: 20px;
		padding-left: 20px;
	}
	h4 {
		font-size: 18px;
	}
	button {
		height: 74px;
		font-size: 18px;
	}
	.box-sm {
		padding: 30px;
	}
}

@media (max-width: 425px) {
	.order-list {
		font-size: 16px;
	}
	.total {
		font-size: 26px;
	}
	.sub-total {
		font-size: 18px;
	}
}

// .left-col {
// 	width: 50%;
// }
// .summary {
// 	min-height: 1000px;
// 	width: 100%;
// 	border-radius: 20px;
// 	background-color: #FFFFFF;
// 	padding-top: 5%;
// }
// .title {
// 	font-family: Rubik;
// 	font-size: 40px;
// 	font-weight: 700;
// 	text-align: left;
// 	color: #FFFFFF;
// 	text-shadow: 0px 4px 4px 0px #000000 80%;
// }
// h1 {
// 	text-align: center;
// 	margin-top: 10%;
// 	margin-bottom: 10%;
// 	font-family: Poppins;
// 	font-size: 35px;
// 	font-weight: 700;
// }
// .col-right {
// 	width: 50%;
// 	margin-left: 5%;
// 	margin-top: 10%;
// }
// .payment {
// 	min-height: 300px;
// 	width: 100%;
// 	border-radius: 20px;
// 	background-color: #FFFFFF;
// }
// .container {
// 	display: flex;
// 	flex-direction: row;
// 	justify-content: space-around;
// }

// .products {
// 	border-bottom: 0.5px solid #000000
// }
// .address {
// 	min-height: 300px;
// 	width:100%;
// 	border-radius: 20px;
// 	background-color: #FFFFFF;
// 	margin-bottom: 5%;
// 	padding-top: 2%;
// 	padding-left: 10%;
// 	padding-right: 10%;
// }
// .button {
// 	width: 100%;
// 	border-radius: 20px;
// 	height: 84px;
// 	background: #6A4029;
// 	color: #FFFFFF;
// 	border-radius: 20px;
// 	font-family: Poppins;
// 	font-size: 20px;
// 	font-weight: 700;
// 	text-align: center;
// 	border: none;
// 	outline: none;
// 	margin-top: 10%;
// }
// .address-title, .payment-title {
// 	font-family: Poppins;
// 	font-size: 25px;
// 	font-weight: 700;
// 	text-align: left;
// 	color: #FFFFFF;
// 	text-shadow: 0px 4px 4px 0px #000000 80%;
// }
// @media screen and (max-width: 767px) {
// 	.summary {
// 		height: auto;
// 		width: 100%;
// 	}
// 	.container {
// 		flex-direction: column;
// 	}
// 	.left-col {
// 		width: 100%;
// 	}
// 	.col-right {
// 		width: 100%;
// 		margin: 0;
// 		margin-top: 5%;
// 	}
// }
</style>
