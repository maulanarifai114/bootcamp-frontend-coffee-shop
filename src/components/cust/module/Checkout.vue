<template>
  <div class="box w-100 d-flex flex-row ">
    <div>
      <!-- Dine In -->
      <div class=" d-flex " v-for="(item, index) in checkout" :key="index">
        <div class="container-img d-flex align-items-center">
          <div class="img">
            <img :src="item.img" alt="product" class="w-100">
          </div>
        </div>
        <div class="group-checkout d-flex flex-column">
          <header class="header-checkout">{{item.name}}</header>
          <main class="body-checkout">
            <div v-if="item.qtyR">
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
      <!-- End Dine In -->
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
// import axios from 'axios'

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
    resetObjectReg (dataSizeReg) {
      dataSizeReg = {
        name: 'Cold Brew',
        img: 'https://images.unsplash.com/photo-1585492594199-2211db8cbd4e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80',
        product_id: 0,
        qtyR: 0,
        qtyL: 0,
        qtyXL: 0,
        delivery_method: ''
      }
    },
    resetObjectGram (dataSizeGram) {
      dataSizeGram = {
        name: 'Hot Bowl Noodle',
        img: 'https://images.unsplash.com/photo-1584739200850-dc2072fdfe04?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        product_id: 0,
        qty250: 0,
        qty300: 0,
        qty500: 0,
        delivery_method: ''
      }
    },
    handleCart () {

    },
    getCheckout () {
      const dataSizeGram = {
        name: 'Hot Bowl Noodle',
        img: 'https://images.unsplash.com/photo-1584739200850-dc2072fdfe04?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        product_id: 0,
        qty250: 0,
        qty300: 0,
        qty500: 0,
        delivery_method: ''
      }
      const dataSizeReg = {
        name: 'Cold Brew',
        img: 'https://images.unsplash.com/photo-1585492594199-2211db8cbd4e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80',
        product_id: 0,
        qtyR: 0,
        qtyL: 0,
        qtyXL: 0,
        delivery_method: ''
      }
      // console.log(this.checkoutDineIn)
      // console.log(this.checkoutHomeDelivery)
      // axios.get(`${VUE_APP_BASE_URL}products/${item.product_id}`) // AXIOS FOR GET PRODUCT BY ID ()
      //   .then((res)=> {
      //   })
      //   .catch((err)=> {
      //     console.log(err);
      //   })
      console.log(dataSizeGram)
      console.log(dataSizeReg)
      console.log(this.checkoutTakeAway)
      if (this.deliver === this.checkoutDineIn.delivery_method) {
        console.log('dine in')
      } else if (this.deliver === this.checkoutHomeDelivery.delivery_method) {
        console.log('home delivery')
      } else if (this.deliver === this.checkoutTakeAway.delivery_method) {
        console.log('pick up')
        this.checkoutTakeAway.products.forEach((item, index) => {
          if (item.size.includes('R')) {
            if (this.checkout.length === 0) {
              console.log('R')
              dataSizeReg.product_id = item.product_id
              dataSizeReg.qtyR = item.qty
              dataSizeReg.delivery_method = this.checkoutTakeAway.delivery_method
              this.checkout.push(dataSizeReg)
              this.resetObjectReg(dataSizeReg)
            } else if (this.checkout.length > 0) {
              console.log('R22')
              const checkId = this.checkout.findIndex(element => element.product_id === item.product_id)
              if (checkId === -1) {
                dataSizeReg.product_id = item.product_id
                console.log(dataSizeReg)
                dataSizeReg.qtyR = item.qty
                dataSizeReg.delivery_method = this.checkoutTakeAway.delivery_method
                this.checkout.push(dataSizeReg)
                this.resetObjectReg(dataSizeReg)
              } else {
                dataSizeReg.qtyR = item.qty
                this.checkout[checkId].qtyR += dataSizeReg.qtyR
                this.resetObjectReg(dataSizeReg)
              }
            }
          } else if (item.size.includes('L')) {
            console.log('L')
            // if (this.checkout.length === 0) {
            //   dataSizeReg.product_id = item.product_id
            //   dataSizeReg.qtyL = item.qty
            //   dataSizeReg.delivery_method = this.checkoutTakeAway.delivery_method
            //   this.checkout.push(dataSizeReg)
            //   this.resetObjectReg(dataSizeReg)
            // } else if (this.checkout.length > 0) {
            //   const checkId = this.checkout.findIndex(element => element.product_id === item.product_id)
            //   if (checkId === -1) {
            //     dataSizeReg.product_id = item.product_id
            //     dataSizeReg.qtyL = item.qty
            //     dataSizeReg.delivery_method = this.checkoutTakeAway.delivery_method
            //     this.checkout.push(dataSizeReg)
            //     this.resetObjectReg(dataSizeReg)
            //   } else {
            //     dataSizeReg.qtyL = item.qty
            //     this.checkout[item.product_id].qtyL += dataSizeReg.qtyL
            //     this.resetObjectReg(dataSizeReg)
            //   }
            // }
          } else if (item.size.includes('XL')) {
            console.log('XL')
            // if (this.checkout.length === 0) {
            //   dataSizeReg.product_id = item.product_id
            //   dataSizeReg.qtyXL = item.qty
            //   dataSizeReg.delivery_method = this.checkoutTakeAway.delivery_method
            //   this.checkout.push(dataSizeReg)
            //   this.resetObjectReg(dataSizeReg)
            // } else if (this.checkout.length > 0) {
            //   const checkId = this.checkout.findIndex(element => element.product_id === item.product_id)
            //   if (checkId === -1) {
            //     dataSizeReg.product_id = item.product_id
            //     dataSizeReg.qtyXL = item.qty
            //     dataSizeReg.delivery_method = this.checkoutTakeAway.delivery_method
            //     this.checkout.push(dataSizeReg)
            //     this.resetObjectReg(dataSizeReg)
            //   } else {
            //     dataSizeReg.qtyXL = item.qty
            //     this.checkout[item.product_id].qtyXL += dataSizeReg.qtyXL
            //     this.resetObjectReg(dataSizeReg)
            //   }
            // }
          }
        })
      }
    }
  },
  mounted () {
    this.getCheckout()
  }
}
</script>

<style lang="scss" scoped>

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
