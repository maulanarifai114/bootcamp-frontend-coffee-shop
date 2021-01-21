<template>
  <div class="box w-100 d-flex flex-row ">
    <div :class="this.checkout.length === 0 ? 'd-flex align-items-center':'' ">
      <h2 v-if="this.checkout.length === 0" class="cart-here">Your Cart Here</h2>
      <!-- Cart -->
      <div class=" d-flex " v-for="(item, index) in checkout" :key="index">
        <div class="container-img d-flex align-items-center">
          <div class="img">
            <img :src="item.img" alt="product" class="w-100">
          </div>
        </div>
        <div class="group-checkout d-flex flex-column">
          <header class="header-checkout">{{item.name}}</header>
          <main class="body-checkout">
            <div v-if="item.qtyR || item.qtyL || item.qtyXL">
              <p>x{{item.qtyR}} (Reguler)</p>
              <p>x{{item.qtyL}} (Large)</p>
              <p>x{{item.qtyXL}} (Extra Large)</p>
            </div>
            <div v-else>
              <p>x{{item.qty250}} (250 gram)</p>
              <p>x{{item.qty300}} (300 gram)</p>
              <p>x{{item.qty500}} (500 gram)</p>
            </div>
          </main>
        </div>
      </div>
      <!-- End Cart -->
    </div>
    <div class="group-checkout-2 d-flex flex-row flex-grow-1 justify-content-end align-items-center">
      <p class="checkout">Checkout</p>
      <div class="wrap-arrow d-flex justify-content-center align-items-center">
        <img src="../../../assets/cust/arrow-right.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Checkout',
  props: ['dine_in', 'home_delivery', 'pick_up'],
  data () {
    return {
      name: this.$store.state.detailP.name,
      img: this.$store.state.detailP.img,
      deliver: this.$store.state.detailP.deliver,
      checkoutDineIn: this.$store.state.checkoutDineIn,
      checkoutHomeDelivery: this.$store.state.checkoutHomeDelivery,
      checkoutTakeAway: this.$store.state.checkoutTakeAway,
      checkout: []
    }
  },
  methods: {
    handlePerSize (dataSizeReg, dataSizeGram, methodCheckout, item) {
      if (this.checkout.length === 0) {
        axios.get(`${process.env.VUE_APP_BASE_URL}products/${item.product_id}`) // AXIOS FOR GET PRODUCT BY ID ()
          .then((res) => {
            console.log(item)
            console.log('ini dataSizeReg', dataSizeReg)
            console.log('ini checkout', this.checkout)
            const img = res.data.result[0].images
            const name = res.data.result[0].name
            const id = res.data.result[0].id
            if (item.size === 'R') {
              console.log('ini ukuran R')
              dataSizeReg.name = name
              dataSizeReg.img = img
              dataSizeReg.product_id = id
              dataSizeReg.qtyR = item.qty
              dataSizeReg.delivery_method = methodCheckout.delivery_method
              this.checkout.push(dataSizeReg)
              console.log('checkout setelahnya', this.checkout)
            } else if (item.size === 'L') {
              console.log('ini ukuran L')
              dataSizeReg.name = name
              dataSizeReg.img = img
              dataSizeReg.product_id = id
              dataSizeReg.qtyL = item.qty
              dataSizeReg.delivery_method = methodCheckout.delivery_method
              this.checkout.push(dataSizeReg)
              console.log('checkout setelahnya', this.checkout)
            } else if (item.size === 'XL') {
              console.log('ini ukuran XL')
              dataSizeReg.name = name
              dataSizeReg.img = img
              dataSizeReg.product_id = id
              dataSizeReg.qtyXL = item.qty
              dataSizeReg.delivery_method = methodCheckout.delivery_method
              this.checkout.push(dataSizeReg)
              console.log('checkout setelahnya', this.checkout)
            } else if (item.size === '250') {
              dataSizeGram.name = name
              dataSizeGram.img = img
              dataSizeGram.product_id = id
              dataSizeGram.qty250 = item.qty
              dataSizeGram.delivery_method = methodCheckout.delivery_method
              this.checkout.push(dataSizeGram)
            } else if (item.size === '300') {
              dataSizeGram.name = name
              dataSizeGram.img = img
              dataSizeGram.product_id = id
              dataSizeGram.qty300 = item.qty
              dataSizeGram.delivery_method = methodCheckout.delivery_method
              this.checkout.push(dataSizeGram)
            } else if (item.size === '500') {
              dataSizeGram.name = name
              dataSizeGram.img = img
              dataSizeGram.product_id = id
              dataSizeGram.qty500 = item.qty
              dataSizeGram.delivery_method = methodCheckout.delivery_method
              this.checkout.push(dataSizeGram)
            }
          })
          .catch((err) => {
            console.log(err)
          })
      } else if (this.checkout.length > 0) {
        const checkId = this.checkout.findIndex(element => element.product_id === item.product_id)
        if (checkId === -1) {
          if (item.size === 'R') {
            dataSizeReg.qtyR = item.qty
            dataSizeReg.delivery_method = methodCheckout.delivery_method
            dataSizeReg.product_id = item.product_id
            this.checkout.push(dataSizeReg)
          } else if (item.size === 'L') {
            dataSizeReg.qtyL = item.qty
            dataSizeReg.delivery_method = methodCheckout.delivery_method
            dataSizeReg.product_id = item.product_id
            this.checkout.push(dataSizeReg)
          } else if (item.size === 'XL') {
            dataSizeReg.qtyXL = item.qty
            dataSizeReg.delivery_method = methodCheckout.delivery_method
            dataSizeReg.product_id = item.product_id
            this.checkout.push(dataSizeReg)
          } else if (item.size === '250') {
            dataSizeGram.qty250 = item.qty
            dataSizeGram.delivery_method = methodCheckout.delivery_method
            dataSizeGram.product_id = item.product_id
            this.checkout.push(dataSizeGram)
          } else if (item.size === '300') {
            dataSizeGram.qty300 = item.qty
            dataSizeGram.delivery_method = methodCheckout.delivery_method
            dataSizeGram.product_id = item.product_id
            this.checkout.push(dataSizeGram)
          } else if (item.size === '500') {
            dataSizeGram.qt500 = item.qty
            dataSizeGram.delivery_method = methodCheckout.delivery_method
            dataSizeGram.product_id = item.product_id
            this.checkout.push(dataSizeGram)
          }
        } else {
          if (item.size === 'R') {
            dataSizeReg.qtyR = item.qty
            this.checkout[checkId].qtyR = dataSizeReg.qtyR
          } else if (item.size === 'L') {
            dataSizeReg.qtyL = item.qty
            this.checkout[checkId].qtyL = dataSizeReg.qtyL
          } else if (item.size === 'XL') {
            dataSizeReg.qtyXL = item.qty
            this.checkout[checkId].qtyXL = dataSizeReg.qtyXL
          } else if (item.size === '250') {
            dataSizeGram.qty250 = item.qty
            this.checkout[checkId].qty250 = dataSizeGram.qty250
          } else if (item.size === '300') {
            dataSizeGram.qty300 = item.qty
            this.checkout[checkId].qty300 = dataSizeGram.qty300
          } else if (item.size === '500') {
            dataSizeGram.qty500 = item.qty
            this.checkout[checkId].qty500 = dataSizeGram.qty500
          }
          // this.checkout[checkId].checkSize = qtySize
        }
      }
    },
    handleCart (dataSizeReg, dataSizeGram, methodCheckout) {
      methodCheckout.products.forEach((item, index) => {
        this.handlePerSize(dataSizeReg, dataSizeGram, methodCheckout, item)
      })
    },
    getCheckout () {
      const dataSizeGram = {
        name: '',
        img: '',
        product_id: 0,
        qty250: 0,
        qty300: 0,
        qty500: 0,
        delivery_method: ''
      }
      const dataSizeReg = {
        name: '',
        img: '',
        product_id: 0,
        qtyR: 0,
        qtyL: 0,
        qtyXL: 0,
        delivery_method: ''
      }
      if (this.deliver === this.checkoutDineIn.delivery_method) {
        this.handleCart(dataSizeReg, dataSizeGram, this.checkoutDineIn)
        console.log('checkout berhasil', this.checkout)
      } else if (this.deliver === this.checkoutHomeDelivery.delivery_method) {
        this.handleCart(dataSizeReg, dataSizeGram, this.checkoutHomeDelivery)
        console.log('checkout berhasil', this.checkout)
      } else if (this.deliver === this.checkoutTakeAway.delivery_method) {
        this.handleCart(dataSizeReg, dataSizeGram, this.checkoutTakeAway)
        console.log('checkout berhasil', this.checkout)
      }
    }
  },
  // mounted () {
  //   this.getCheckout()
  // },
  created () {
    this.$store.watch(
      (state) => {
        return this.$store.state.checkoutTakeAway
      },
      (newValue, oldValue) => {
        this.checkoutTakeAway = newValue
        this.checkout = []
        this.getCheckout()
      },
      {
        deep: true
      }
    )
    this.$store.watch(
      (state) => {
        return this.$store.state.checkoutHomeDelivery
      },
      (newValue, oldValue) => {
        this.checkoutHomeDelivery = newValue
        this.checkout = []
        this.getCheckout()
      },
      {
        deep: true
      }
    )
    this.$store.watch(
      (state) => {
        return this.$store.state.checkoutDineIn
      },
      (newValue, oldValue) => {
        console.log(newValue)
        console.log(oldValue)
        this.checkoutDineIn = newValue
        this.checkout = []
        this.getCheckout()
      },
      {
        deep: true
      }
    )
    this.$store.watch(
      (state) => {
        return this.$store.state.detailP.deliver
      },
      (newValue, oldValue) => {
        this.deliver = newValue
        this.getCheckout()
      },
      {
        deep: true
      }
    )
  }
}
</script>

<style lang="scss" scoped>

.cart-here {
  font-family: Poppins;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 1em;
  text-align: left;
}

.group-checkout-2 {
  height: 100%;
}

.wrap-arrow {
  height: 70px;
  width: 70px;
  border-radius: 50%;
  background-color: #FFBA33;
}

.box {
  cursor: pointer;
  padding: 50px;
  height: 100%;
  background: #FFFFFF;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  transition: .3s;
}

.box:hover {
  opacity: .8;
}

.img {
  height: 100px;
  width: 100px;
  background-color: #e6e6e6;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 30px 0 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.group-checkout {
  width: fit-content;
  height: 128px;
}

.header-checkout {
  font-family: Poppins;
  font-size: 25px;
  font-style: normal;
  font-weight: 900;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: left;
}

.body-checkout {
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
}

.body-checkout p {
  margin: 0;
}

.checkout {
  margin: 0 40px 0 0;
  font-family: Poppins;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: center;
  color: black;
}

@media (max-width: 767px) {
  .box {
    padding: 0 20px;
  }

  .img {
    height: 50px;
    width: 50px;
  }

  .header-checkout {
    font-size: 16px;
  }

  .body-checkout {
    font-size: 14px;
  }

  .checkout {
    font-size: 16px;
  }

  .wrap-arrow {
    height: 40px;
    width: 40px;
  }

  .wrap-arrow img {
    width: 20px;
  }
}
</style>
