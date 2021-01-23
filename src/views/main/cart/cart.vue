<template>
	<div class="jumbotron jumbotron-fluid">
		<div class="container">
			<div class="row">
				<h1 class="title-checkout">Checkout your item now!</h1>
			</div>
			<div class="row">
				<!-- Left Side -->
				<div class="box col-md-5 mb-5 mb-md-0 d-flex flex-column align-items-center">
					<div class="order-summary">Order Summary</div>
					<div class="order-summary">Order Summary</div>
				</div>
				<!-- Empty Size -->
				<div class="col-md-2"></div>
				<!-- Right Side -->
				<div class="col-md-5">
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
						<div @input="addressChange" :contenteditable="editMode === 1 ? 'true':'false'" :class="editMode === 0 ? 'disabled-address':' w-100' ">{{address}}</div>
						<!-- Full Address -->
						<div class="wrap-full-address">
							<div @input="fullAddressChange" class="full-add" :contenteditable="editMode === 1 ? 'true':'false'" :class="editMode === 0 ? 'disabled-address':'' ">{{fulladdress}}</div>
						</div>
						<!-- Phone -->
						<div>
							<div @input="phoneChange" class="full-add" :contenteditable="editMode === 1 ? 'true':'false'" :class="editMode === 0 ? 'disabled-address':'' ">{{phone}}</div>
						</div>
					</div>
					<!-- Payment -->
					<div class=" d-flex justify-content-between wrap-subtitle">
						<h3>Payment Methods</h3>
					</div>
					<div class="box mb-box font-poppins">
						<!-- Card -->
						<div class=" d-flex">
							<input type="radio" v-model="method" value="card" id="card" class=" d-none">
							<label for="card" class="d-flex align-items-center mt-0">
								<div v-if="method === 'card'" class="active-method">
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
							<input type="radio" v-model="method" value="bank" id="bank" class=" d-none">
							<label for="bank" class="d-flex align-items-center">
								<div v-if="method === 'bank'">
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
							<input type="radio" v-model="method" value="cod" id="cod" class=" d-none">
							<label for="cod" class="d-flex align-items-center mb-0">
								<div v-if="method === 'cod'">
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
			<!-- <div class="left-col">
				<p class="title">Checkout your <br> item now!</p>
				<div class="summary">
					<h1>Order Summary</h1>
					<div class="products">
						<Summaryproduct
							p1="Latte"
							p2="2"
							p3="120000"
							photos= "https://cdn0-production-images-kly.akamaized.net/6aobiw31CdBPDzvOD8_0L7h6Aek=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1607544/original/085652700_1496035163-Jus-Mangga1.jpg"
						/>
					</div>
					<div>
						<Calculation
							subtotal="120000"
							taxfees="120000"
							shipping= "120000"
							total= "120000"
						/>
					</div>
				</div>
			</div> -->
			<!-- <div class="col-right">
				<p class="address-title">Address Details</p>
				<div class="address">
					<Address
						mainAddress="Jalan Bunga"
						detailAddress="Bunga Melati No 6"
						phoneaddress= "83562572532"
					/>
				</div>
				<p class="payment-title">Payment Methods</p>
				<Payment v-model="payment"/>
				<span>Picked: {{ payment }}</span>
				<button class="button">
					Confirm & Pay
				</button>
			</div> -->
		</div>
	</div>
</template>

<script>
// import Summaryproduct from '../../../components/module/Cart/summaryProduct'
// import Payment from '../../../components/module/Cart/paymentmethod'
// import Calculation from '../../../components/module/Cart/calculation'
// import Address from '../../../components/module/Cart/address'

export default {
	name: 'Cart',
	data () {
		return {
			payment: '',
			products: [],
			address: 'Cimanggu',
			fulladdress: 'Jl. Cimanggu Gg. H. Enung No. 59, RT 01/02',
			phone: '+62 85771926851',
			method: 'card',
			editMode: 0
		}
	},
	components: {
		// Summaryproduct,
		// Payment,
		// Calculation,
		// Address
	},
	methods: {
		changeEdit () {
			this.editMode === 0 ? this.editMode++ : this.editMode--
		},
		paymentConfirm () {
			console.log('Payment')
		},
		addressChange (e) {
			this.address = e.target.innerHTML
		},
		fullAddressChange (e) {
			this.fulladdress = e.target.innerHTML
		},
		phoneChange (e) {
			this.phone = e.target.innerHTML
		}
	}
}
</script>

<style lang="scss" scoped>

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

.col-md-5 {
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

.disabled-address {
	background-color: rgba(255, 255, 255, 0);
	color: #888;
	// color: #6A4029;
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
