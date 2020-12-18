<template>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <div class="left-col">
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
            </div>
            <div class="col-right">
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
            </div>
        </div>
    </div>
</template>

<script>
import Summaryproduct from '../../../components/module/Cart/summaryProduct'
import Payment from '../../../components/module/Cart/paymentmethod'
import Calculation from '../../../components/module/Cart/calculation'
import Address from '../../../components/module/Cart/address'

export default {
  name: 'Cart',
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
    min-height: 1000px;
    width: 100%;
    border-radius: 20px;
    background-color: #FFFFFF;
    padding-top: 5%;
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
}
.container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.products {
    border-bottom: 0.5px solid #000000
}
.address {
    min-height: 300px;
    width:100%;
    border-radius: 20px;
    background-color: #FFFFFF;
    margin-bottom: 5%;
    padding-top: 2%;
    padding-left: 10%;
    padding-right: 10%;
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
}
.address-title, .payment-title {
    font-family: Poppins;
    font-size: 25px;
    font-weight: 700;
    text-align: left;
    color: #FFFFFF;
    text-shadow: 0px 4px 4px 0px #000000 80%;
}
</style>
