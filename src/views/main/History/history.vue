<template>
	<div class="jumbotron jumbotron-fluid">
		<div class="container">
			<!-- Title -->
			<div class="row">
				<div class="col d-flex align-items-center flex-column">
					<h1>Let’s see what you have bought!</h1>
					<h5>Select item to delete</h5>
				</div>
			</div>
			<!-- Menu Select -->
			<div class="row">
				<div v-if="deleteProducts.length !== dataProducts.length" class="col-12 d-flex justify-content-end">
					<h6 @click="selectAll">Select All</h6>
				</div>
				<div v-else-if="deleteProducts.length === dataProducts.length" class="col-12 d-flex justify-content-end">
					<h6 @click="unselectAll">Unselect All</h6>
				</div>
				<div class="col-12 d-flex justify-content-end">
					<h6 @click="del">Delete</h6>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-4 mb-4" v-for="(item, index) in dataProducts" :key="index">
					<label :for="item.id">
						<div class="box d-flex position-relative">
							<!-- Image -->
							<div class="mr-3">
								<div class="wrap-img">
									<img :src="item.images" alt="img">
								</div>
							</div>
							<!-- Description -->
							<div>
								<h4>{{item.name}}</h4>
								<div class="desc-box">IDR {{item.price.toLocaleString('id-ID')}}</div>
								<div class=" d-flex">
									<div class="desc-box mr-2">x{{item.qty}}</div>
									<div class="desc-box">{{item.size}}</div>
								</div>
								<div class="desc-deliver">Delivered</div>
							</div>
							<!-- Checkbox -->
							<div v-if="deleteProducts.includes(item.id)" class="position-absolute checked">
								<img src="../../../assets/img/check.svg" alt="checked">
							</div>
							<div v-else class="position-absolute uncheck"></div>
							<input class="d-none" :id="item.id" type="checkbox" :value="item.id" v-model="deleteProducts">
						</div>
					</label>
				</div>
			</div>
			<!-- <div class="todo" style="text-align:right" type= button @click.prevent="selectAll">Select All</div>
			<div class="todo" style="text-align:right" type= button @click.prevent="unselectAll">Unselect All</div>
			<div class="deletebox" style="text-align:right" type= button @click.prevent="deleteCustHistory()">Delete</div>
			<div class="row">
				<div class="col-sm product" v-for="history in getHistory" :key="history.id">
					<div class="history-box">
						<div class="image">
							<img :src= "history.products[0].images" alt="">
						</div>
						<div class="product-info">
							<p class="name">{{history.product.name}}</p>
							<p class="price">{{history.product.price}}</p>
							<p class="description">Delivered</p>
						</div>
						<input type="checkbox" id="delete" :value= history.id v-model="deleteProducts">
					</div>
				</div>
			</div> -->
		</div>
	</div>
</template>

<script>
import Swal from 'sweetalert2'
import axios from 'axios'

export default {
	title: 'History',
	name: 'HistoryCust',
	data () {
		return {
			dataProducts: [],
			deleteProducts: []
		}
	},
	methods: {
		getAllHistory () {
			axios.get(`${process.env.VUE_APP_BASE_URL}history`)
				.then((res) => {
					const data = res.data.data
					console.log(data)
					data.forEach((item, index) => {
						const product = {
							id: 0,
							name: '',
							images: '',
							price: 0,
							qty: 0,
							size: ''
						}
						product.id = item.id
						product.name = item.product.name
						product.images = item.product.images
						product.price = item.product.price * item.qty
						product.qty = item.qty
						if (item.size === 'R') {
							product.size = 'Regular'
						} else if (item.size === 'L') {
							product.size = 'Large'
						} else if (item.size === 'XL') {
							product.size = 'Extra Large'
						} else if (item.size === '250') {
							product.size = '250 Gram'
						} else if (item.size === '300') {
							product.size = '300 Gram'
						} else if (item.size === '500') {
							product.size = '500 Gram'
						}
						console.log(product)
						this.dataProducts.push(product)
					})
				})
				.catch((err) => {
					console.log(err.response)
				})
		},
		selectAll () {
			this.deleteProducts = this.dataProducts.map(item => item.id)
		},
		unselectAll () {
			this.deleteProducts = []
		},
		del () {
			// console.log(this.deleteProducts)
			// const allDelete = {
			// 	order_detail_ids: this.deleteProducts
			// }
			// console.log(allDelete)
			// const sendId = JSON.parse(allDelete)
			axios.delete(`${process.env.VUE_APP_BASE_URL}history/delete-history`, { data: { order_detail_ids: this.deleteProducts } })
				.then((res) => {
					Swal.fire('Success', res.data.messages, 'success')
					this.dataProducts = []
					this.deleteProducts = []
					this.getAllHistory()
				})
				.catch((err) => {
					console.log(err.response)
				})
		},
		listComment () {
			// ...mapActions({ getAllHistory: 'getAllHistory', deleteHistory: 'deleteHistory' }),
			// selectAll () {
			// 	this.deleteProducts = this.getHistory.map((history) => history.id)
			// 	console.log(this.deleteProducts)
			// },
			// unselectAll () {
			// 	this.deleteProducts = []
			// },
			// deleteCustHistory () {
			// 	const payload = {
			// 		deleteProducts: this.deleteProducts
			// 	}
			// 	Swal.fire({
			// 		// title: 'Are You Sure?',
			// 		text: 'Are you sure you want to delete selected items?',
			// 		// icon: 'warning',
			// 		showCancelButton: true,
			// 		confirmButtonColor: '#6A4029',
			// 		cancelButtonColor: '#d33',
			// 		confirmButtonText: 'Yes, delete it'
			// 	}).then((result) => {
			// 		if (result.isConfirmed) {
			// 			console.log(this.deleteProducts)
			// 			this.deleteHistory(payload)
			// 				.then((res) => {
			// 					Swal.fire(
			// 						'Deleted!',
			// 						'Your history product has been deleted'
			// 					)
			// 					this.getAllHistory()
			// 					this.deleteProducts = []
			// 				})
			// 		}
			// 	})
			// }
		}
	},
	// computed: {
	// 	...mapGetters(['getHistory'])
	// },
	mounted () {
		this.getAllHistory()
	}
}
</script>

<style lang="scss" scoped>

label {
	margin: 0;
	width: 100%;
}

.uncheck, .checked {
	width: 25px;
	height: 25px;
	border: 2px solid #6A4029;
	box-sizing: border-box;
	border-radius: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	bottom: 25px;
	right: 28px;
}

.checked {
	background: #6A4029;
}

.box {
	padding: 25px 28px;
	background: #FFFFFF;
	box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
	border-radius: 20px;
	cursor: pointer;
	transition: .3s;
	.wrap-img {
		width: 75px;
		height: 75px;
		border-radius: 50%;
		overflow: hidden;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
}

h4 {
	font-family: Poppins;
	font-style: normal;
	font-weight: bold;
	font-size: 25px;
	line-height: 37px;
	color: #000000;
	margin: 0;
}

.desc-box {
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	line-height: 30px;
	color: #895537;
}

.desc-deliver {
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	line-height: 30px;
	color: #6A4029;
}

.box:hover {
	box-shadow: 0px 10px 40px rgba(252, 255, 90, 0.5);
}

.jumbotron-fluid {
	background-image: url('../../../assets/img/nathan-dumlao-zTZRZV86GhE-unsplash 1.png');
	background-size: cover;
	background-repeat: no-repeat;
	min-height: 100px;
	margin: 0;
	padding: 110px 0;
}

h1, h5 {
	font-family: Rubik;
	font-style: normal;
	text-align: center;
	color: #FFFFFF;
	text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.8);
}

h1 {
	font-weight: bold;
	font-size: 40px;
	line-height: 47px;
}

h5 {
	font-weight: normal;
	font-size: 20px;
	line-height: 24px;
	margin: 0 0 15px 0;
}

h6 {
	font-family: Poppins;
	font-style: normal;
	font-weight: bold;
	font-size: 20px;
	line-height: 30px;
	text-align: right;
	text-decoration-line: underline;
	color: #FFFFFF;
	cursor: pointer;
	width: fit-content;
	transition: .3s;
}

h6:hover {
	opacity: .8
}

// .product-info {
//     margin-right: 25%;
// }

// .todo, .deletebox{
//     font-family: Poppins;
//     font-size: 20px;
//     font-weight: 700;
//     text-align: center;
//     color: #FFFFFF;
// }

// #checkbox-group {
//     margin-left: 20%;
// }

// .history-box {
//     height: 126px;
//     width: 300px;
//     border-radius: 20px;
//     background: #FFFFFF;
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     padding-left: 3%;
// }

// .product {
//     margin-bottom: 3%;
// }

// .image {
//     height: 83.67052459716797px;
//     width: 100px;
//     overflow: hidden;
//     margin-right: 5%;
// }

// .image img {
//     width: 100%;
// }

// .name {
//     font-family: Poppins;
//     font-size: 20px;
//     font-weight: 700;
//     color: #000000;
//     margin: 0;
// }

// .price, .description {
//     font-family: Poppins;
//     font-size: 16px;
//     font-weight: 400;
//     color: #895537;
//     margin: 0;
// }

// @media screen and (max-width: 767px) {
//     .history-box {
//         width: 100%;
//     }
// }

// @media screen and (max-width: 575px) {
//     .product-info {
//         margin-right: 50%;
//     }
//     .image {
//         margin-right: 2%;
//         border: 2px solid black;
//     }
// }

// @media screen and (max-width: 474px) {
//     .product-info {
//         margin-right: 25%;
//     }
// }

</style>
