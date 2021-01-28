<template>
	<div class="jumbotron jumbotron-fluid">
		<div class="container">
			<p class="title">All Order</p>
			<div class="order" v-for="order in getAllManageOrder" :key="order.id">
				<div>
					<p class="order-info">{{upperCase(order.delivery_method)}}</p>
					<p class="order-name">{{order.user.username}}</p>
					<p class="order-date">{{convertTime(order.createdAt)}}</p>
				</div>
				<div>
					<button class="det-button" v-on:click="detailOrder(order.id)">DETAIL</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import moment from 'moment'
export default {
	title: 'Orders',
	name: 'BeforeManageOrder',
	data () {
		return {
			payment: '',
			products: []
		}
	},
	methods: {
		...mapActions({ getManageOrderAll: 'getAllManageOrder' }),
		convertTime (date) {
			return moment(date).format('LLLL')
		},
		detailOrder (id) {
			localStorage.setItem('allorderid', id)
			this.$router.push('manage-order')
			//   console.log(id)
		},
		upperCase (e) {
			const split = e.split(' ')
			const word1Slice = split[0].length
			const word2Slice = split[1].length
			const word1 = split[0][0].toUpperCase() + split[0].slice(1, word1Slice)
			const word2 = split[1][0].toUpperCase() + split[1].slice(1, word2Slice)
			return `${word1} ${word2}`
		}
	},
	computed: {
		...mapGetters(['getAllManageOrder'])
	},
	mounted () {
		this.getManageOrderAll()
	}
}
</script>

<style lang="scss" scoped>

.jumbotron-fluid {
    background-image: url('../../../assets/img/nathan-dumlao-zTZRZV86GhE-unsplash 1.png');
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100px;
    margin: 0;
    padding-top: 3%;
    padding-left: 5%;
}
.title {
    font-family: Rubik;
    font-size: 40px;
    font-weight: 700;
    text-align: left;
    color: #FFFFFF;
    text-shadow: 0px 4px 4px 0px #000000 80%;
}
.order {
    width: 100%;
    min-height: 100px;
    background-color: white;
		padding: 3%;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2%;
}
.order-info {
    font-family: Rubik;
    font-size: 30px;
    font-weight: 500;
    color: black;
    margin-bottom: 0%;
    text-shadow: 0px 4px 4px 0px #000000 80%;
}
.order-name, .order-date{
    font-family: Rubik;
    font-size: 20px;
    font-weight: 200;
    color: black;
    margin-bottom: 0%;
    text-shadow: 0px 4px 4px 0px #000000 80%;
}
.det-button {
    width: 150px;
    border-radius: 10px;
    height: 50px;
    background: #6A4029;
    color: #FFFFFF;
    border-radius: 10px;
    font-family: Poppins;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    border: none;
    outline: none;
    box-shadow: 4px 4px 3px #a9a9a9;
		transition: .3s
}
.det-button:hover {
	opacity: .8;
}
</style>
