<template>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <div class="left-col">
                <p class="title">Finish your <br> customer order now!</p>
                <div class="summary">
                    <h1>Order Summary</h1>
                    <div class="products" v-for="order in getManageOrderId.order_details" :key="order.id">
                        <Summaryproduct
                            :p1= order.products[0].name
                            :p2= order.qty
                            :p3= order.products[0].price
                            :photos= order.products[0].images
                        />
                    </div>
                    <div>
                        <Calculation
                            :subtotal= getManageOrderId.subtotal
                            :taxfees= getManageOrderId.tax_fee
                            :shipping= getManageOrderId.shipping
                            :total= getManageOrderId.total
                        />
                    </div>
                </div>
                <button class="button2" @click.prevent="pageAllOrder">
                    Back to All Order
                </button>
            </div>
            <div class="col-right">
                <p class="address-title">Address Details</p>
                <div class="address">
                    <Address
                        mainAddress=""
                        :detailAddress= getManageOrderId.address
                        :phoneaddress= getManageOrderId.customer_phone
                    />
                </div>
                <p class="payment-title">Payment Methods</p>
                <Payment v-model="payment"/>
                <!-- <span>Picked: {{ payment }}</span> -->
                <button class="button" @click.prevent= 'orderDone'>
                    Mark as Done
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import Summaryproduct from '../../../components/module/Cart/summaryProduct'
import Payment from '../../../components/module/Cart/paymentmethod'
import Calculation from '../../../components/module/Cart/calculation'
import Address from '../../../components/module/Cart/address'
import Swal from 'sweetalert2'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'ManageOrder',
  data () {
    return {
      payment: '',
      products: []
    }
  },
  components: {
    Summaryproduct,
    Payment,
    Calculation,
    Address
  },
  methods: {
    ...mapActions({ getManageOrderById: 'getManageOrderId', markAsDone: 'markAsDone' }),
    orderDone () {
      const payload = {
        orderId: localStorage.getItem('allorderid')
      }
      this.markAsDone(payload)
        .then((res) => {
          Swal.fire(
            'Success!',
            'The order has been completed'
          )
          this.$router.push('bmanage-order')
        })
    },
    pageAllOrder () {
      this.$router.push('bmanage-order')
    }
  },
  computed: {
    ...mapGetters(['getManageOrderId'])
  },
  mounted () {
    this.getManageOrderById()
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
    padding-top: 8%;
    padding-left: 5%;
}
.left-col {
    width: 50%;
}
.summary {
    position: relative;
    min-height: 1000px;
    width: 100%;
    border-radius: 20px;
    background-color: #FFFFFF;
    padding-top: 5%;
    box-shadow: 5px 10px 18px #888888;
}
.title {
    font-family: Rubik;
    font-size: 40px;
    font-weight: 700;
    text-align: left;
    color: #FFFFFF;
    text-shadow: 0px 4px 4px 0px #000000 80%;
}
h1 {
    text-align: center;
    margin-top: 10%;
    margin-bottom: 10%;
    font-family: Poppins;
    font-size: 35px;
    font-weight: 700;
}
.col-right {
    width: 50%;
    margin-left: 5%;
    margin-top: 10%;
}
.payment {
    min-height: 300px;
    width: 100%;
    border-radius: 20px;
    background-color: #FFFFFF;
    box-shadow: 5px 10px 18px #888888;
}
.container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.address {
    min-height: 200px;
    width:100%;
    border-radius: 20px;
    background-color: #FFFFFF;
    margin-bottom: 5%;
    padding-top: 2%;
    padding-left: 10%;
    padding-right: 10%;
    box-shadow: 5px 10px 18px #888888;
}
.button {
    width: 100%;
    border-radius: 20px;
    height: 84px;
    background: #6A4029;
    color: #FFFFFF;
    border-radius: 20px;
    font-family: Poppins;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    border: none;
    outline: none;
    margin-top: 10%;
    box-shadow: 5px 10px 18px #888888;
}
.button2 {
    width: 100%;
    border-radius: 20px;
    height: 84px;
    background: #FFBA33;
    color: #6A4029;
    border-radius: 20px;
    font-family: Poppins;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    border: none;
    outline: none;
    margin-top: 10%;
}
.address-title, .payment-title {
    font-family: Poppins;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    text-align: left;
    color: #FFFFFF;
    text-shadow: 0px 4px 4px 0px #000000 80%;
}
@media screen and (max-width: 767px) {
    .summary {
        height: auto;
        width: 100%;
    }
    .container {
        flex-direction: column;
    }
    .left-col {
        width: 100%;
    }
    .col-right {
        width: 100%;
        margin: 0;
        margin-top: 5%;
    }
}
</style>
