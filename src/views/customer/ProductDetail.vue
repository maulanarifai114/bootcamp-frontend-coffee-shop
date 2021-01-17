<template>
  <div class="container big-box">
    <!-- Category -->
    <p class="head-category pt-5 detail">{{this.$store.state.detailP.name}}</p>
    <main class="row">
      <!-- Delivery and Time -->
      <aside class="col-xl-6 col-12 d-flex flex-column align-items-center justify-content-center">
        <div class="container-img">
          <div class="img-wrap">
            <img :src="img" alt="product">
          </div>
        </div>
        <div class="align-self-center align-self-xl-start">
          <Delivetime></Delivetime>
        </div>
      </aside>
      <!-- Description, Price, Amount -->
      <aside class="col-xl-6 col-12 d-flex flex-column align-items-center">
        <TitleProduct></TitleProduct>
        <AmountPrice></AmountPrice>
        <Button @trigger="addToCart" color="btn-brown btn-detail" label="Add to cart"></Button>
        <Button color="btn-yellow btn-detail" label="Ask a Staff"></Button>
      </aside>
    </main>
    <main class="row pt-5">
      <!-- Size Product -->
      <aside class="col-xl-4 col-12 mb-3">
        <SizeProduct></SizeProduct>
      </aside>
      <!-- Checkout -->
      <div class="col-xl-8 col-12 mb-3">
        <Checkout></Checkout>
      </div>
    </main>
  </div>
</template>

<script>
import Delivetime from '../../components/cust/module/DeliveTime'
import TitleProduct from '../../components/cust/module/TitleProduct'
import AmountPrice from '../../components/cust/module/AmountPrice'
import SizeProduct from '../../components/cust/module/SizeProduct'
import Checkout from '../../components/cust/module/Checkout'
import Button from '../../components/cust/base/Button'

export default {
  name: 'ProductDetail',
  components: {
    Delivetime,
    TitleProduct,
    AmountPrice,
    SizeProduct,
    Checkout,
    Button
  },
  data () {
    return {
      name: this.$store.state.detailP.name,
      img: this.$store.state.detailP.img
    }
  },
  methods: {
    helperCart (method, setCheckout, setQty, qtyNew, data) {
      console.log(data)
      console.log(qtyNew)
      if (method.products.length === 0) {
        this.$store.commit(setCheckout, data)
      } else if (method.products.length > 0) {
        const checkId = method.products.findIndex(item => item.product_id === data.product_id && item.size === data.size)
        console.log(checkId)
        if (checkId === -1) {
          this.$store.commit(setCheckout, data)
        } else {
          this.$store.commit(setQty, { qtyNew, checkId })
        }
      }
    },
    addToCart () {
      const productId = this.$store.state.detailP.id
      const qty = this.$store.state.detailP.amount
      const size = this.$store.state.sizeProduct
      const deliverMethod = this.$store.state.detailP.deliver
      const checkoutDineIn = this.$store.state.checkoutDineIn
      const checkoutHomeDelivery = this.$store.state.checkoutHomeDelivery
      const checkoutTakeAway = this.$store.state.checkoutTakeAway
      const data = { product_id: productId, qty, size }
      const qtyNew = data.qty
      if (deliverMethod === 'dine in') {
        this.helperCart(checkoutDineIn, 'SET_CHECKOUT_DINE_IN', 'SET_QTY_DINE_IN', qtyNew, data)
      } else if (deliverMethod === 'home delivery') {
        this.helperCart(checkoutHomeDelivery, 'SET_CHECKOUT_HOME_DEL', 'SET_QTY_HOME_DEL', qtyNew, data)
      } else if (deliverMethod === 'pick up') {
        this.helperCart(checkoutTakeAway, 'SET_CHECKOUT_PICK_UP', 'SET_QTY_PICK_UP', qtyNew, data)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.big-box {
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 32px;
}

.head-category {
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  color: #4F5665;
  margin: 0 0 62px 0;
}

.detail {
  font-family: Rubik;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color:  #6A4029;
}

.img-wrap {
  height: 300px;
  width: 300px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 0 102px 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

</style>
