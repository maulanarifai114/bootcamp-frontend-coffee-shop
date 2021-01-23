<template>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <p class="title">All Order</p>
            <div class="order" v-for="order in getAllManageOrder" :key="order.id">
                <div>
                    <p class="order-info">{{order.delivery_method}}</p>
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
    padding-left: 5%;
    padding-right: 3%;
    padding-top: 1%;
    padding-bottom: 1%;
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
    border-radius: 20px;
    font-family: Poppins;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    border: none;
    outline: none;
    margin-top: 10%;
    box-shadow: 5px 10px 18px #888888;
}
</style>
