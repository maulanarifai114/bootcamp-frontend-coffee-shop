<template>
  <div class="box w-100 d-flex flex-row ">
    <div :class="this.checkout.length === 0 ? 'd-flex align-items-center':'' ">
      <h2 v-if="this.checkout.length === 0" class="cart-here">Your Cart Here</h2>
      <!-- Cart -->
      <div v-for="(item, index) in checkout" :key="index">
        <div class=" d-flex " v-if="item.delivery_method === deliver">
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
  data () {
    return {
      deliver: this.$store.state.detailP.deliver,
      checkoutDineInData: this.$store.state.checkoutDineIn,
      checkoutHomeDeliveryData: this.$store.state.checkoutHomeDelivery,
      checkoutTakeAwayData: this.$store.state.checkoutTakeAway,
      checkout: []
    }
  },
  methods: {
    handleSizeReg (dataSizeReg) {
      dataSizeReg.name = ''
      dataSizeReg.img = ''
      dataSizeReg.product_id = 0
      dataSizeReg.qtyR = 0
      dataSizeReg.qtyL = 0
      dataSizeReg.qtyXL = 0
      dataSizeReg.delivery_method = ''
    },
    getCheckout () {
      if (this.deliver === this.checkoutDineInData.delivery_method) {
        console.log('Dine In')
        if (this.checkout.length === 0) {
          this.checkoutDineInData.products.forEach((item, index) => {
            const dataSizeReg = {
              name: '',
              img: '',
              product_id: 0,
              qtyR: 0,
              qtyL: 0,
              qtyXL: 0,
              delivery_method: 'dine in'
            }
            console.log(dataSizeReg)
            axios.get(`${process.env.VUE_APP_BASE_URL}products/${item.product_id}`)
              .then((res) => {
                const data = res.data.result[0]
                dataSizeReg.name = data.name
                dataSizeReg.img = data.images
                dataSizeReg.product_id = data.id
                if (item.size === 'R') {
                  dataSizeReg.qtyR = item.qty
                } else if (item.size === 'L') {
                  dataSizeReg.qtyL = item.qty
                } else if (item.size === 'XL') {
                  dataSizeReg.qtyXL = item.qty
                }
                console.log(dataSizeReg)
                if (this.checkout.length === 0) {
                  this.checkout.push(dataSizeReg)
                } else {
                  const checkId = this.checkout.findIndex(element => element.product_id === item.product_id)
                  console.log(this.checkout[checkId])
                  if (item.size === 'R') {
                    this.checkout[checkId].qtyR = item.qty
                  } else if (item.size === 'L') {
                    this.checkout[checkId].qtyL = item.qty
                  } else if (item.size === 'XL') {
                    this.checkout[checkId].qtyXL = item.qty
                  }
                }
              })
          })
        } else {
          this.checkoutDineInData.products.forEach((item, index) => {
            console.log('ini else')
            const checkId = this.checkout.findIndex(element => element.product_id === item.product_id)
            console.log(item)
            console.log(checkId)
            console.log(this.checkout[checkId])
            if (checkId === -1) {
              axios.get(`${process.env.VUE_APP_BASE_URL}products/${item.product_id}`)
                .then((res) => {
                  const dataSizeReg = {
                    name: '',
                    img: '',
                    product_id: 0,
                    qtyR: 0,
                    qtyL: 0,
                    qtyXL: 0,
                    delivery_method: 'dine in'
                  }
                  const data = res.data.result[0]
                  dataSizeReg.name = data.name
                  dataSizeReg.img = data.images
                  dataSizeReg.product_id = data.id
                  if (item.size === 'R') {
                    dataSizeReg.qtyR = item.qty
                  } else if (item.size === 'L') {
                    dataSizeReg.qtyL = item.qty
                  } else if (item.size === 'XL') {
                    dataSizeReg.qtyXL = item.qty
                  }
                  console.log(dataSizeReg)
                  this.checkout.push(dataSizeReg)
                })
            } else {
              if (item.size === 'R') {
                this.checkout[checkId].qtyR = item.qty
              } else if (item.size === 'L') {
                this.checkout[checkId].qtyL = item.qty
              } else if (item.size === 'XL') {
                this.checkout[checkId].qtyXL = item.qty
              }
            }
          })
        }
      }
    }
  },
  created () {
    this.$store.watch(
      (state) => {
        return this.$store.state.checkoutDineIn
      },
      (newValue, oldValue) => {
        if (this.checkout.length === 0) {
          this.getCheckout()
        } else if (this.checkout.length !== 0) {
          // this.checkoutDineInData = newValue
          this.getCheckout()
          console.log(this.checkoutDineInData.products)
          console.log(newValue)
          console.log(oldValue)
        }
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
        this.checkoutHomeDeliveryData = newValue
        this.checkout = []
        this.getCheckout()
      },
      {
        deep: true
      }
    )
    this.$store.watch(
      (state) => {
        return this.$store.state.checkoutTakeAway
      },
      (newValue, oldValue) => {
        this.checkoutTakeAwayData = newValue
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
