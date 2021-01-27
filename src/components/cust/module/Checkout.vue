<template>
  <div class="box w-100 d-flex flex-row " @click="postCheckout">
    <div :class="checkout.length === 0 ? 'd-flex align-items-center':'' ">
      <h2 v-if="checkout.length === 0" class="cart-here">Your Cart Here</h2>
      <!-- Cart -->
      <div v-for="(item, index) in checkout" :key="index">
        <!-- <h2 v-if="checkout.length > 0 && deliver !== item.delivery_method" class="cart-here">Your Cart Here</h2> -->
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
import Swal from 'sweetalert2'

export default {
	name: 'Checkout',
	data () {
		return {
			deliver: this.$store.state.detailP.deliver
		}
	},
	methods: {
		postCheckout () {
			if (localStorage.getItem('order_id')) {
			// if (this.$store.getters.getOrderId > 0) {
				Swal.fire('Failed', 'Your must pay your checkout first', 'warning')
			// } else if (!localStorage.getItem('order_id')) {
			} else if (this.getDineIn.products.length === 0 && this.getHomeDev.products.length === 0 && this.getPickUp.products.length === 0) {
				Swal.fire('Failed', 'Your cart is empty', 'warning')
			} else if (this.deliver === 'dine in') {
				axios.post(`${process.env.VUE_APP_BASE_URL}order/checkout`, this.getDineIn)
					.then((res) => {
						const msg = res.data.messages
						const orderId = res.data.data.order_id
						Swal.fire('Success', msg, 'success')
						localStorage.setItem('order_id', orderId)
						this.$store.commit('RESET_CART_DINE_IN')
						this.$store.commit('SET_ORDER_ID', orderId)
						this.$store.commit('RESET_ALL_CHECKOUT', 'dine in')
						this.$router.push('/cust/cart')
						console.log(res.data)
					})
					.catch((err) => {
						console.log(err.response)
					})
			} else if (this.deliver === 'home delivery') {
				axios.post(`${process.env.VUE_APP_BASE_URL}order/checkout`, this.getHomeDev)
					.then((res) => {
						const msg = res.data.messages
						const orderId = res.data.data.order_id
						Swal.fire('Success', msg, 'success')
						localStorage.setItem('order_id', orderId)
						this.$store.commit('RESET_CART_HOME_DELIVERY')
						this.$store.commit('SET_ORDER_ID', orderId)
						this.$store.commit('RESET_ALL_CHECKOUT', 'home delivery')
						this.$router.push('/cust/cart')
						console.log(res.data)
					})
					.catch((err) => {
						console.log(err.response)
					})
			} else if (this.deliver === 'take away') {
				axios.post(`${process.env.VUE_APP_BASE_URL}order/checkout`, this.getPickUp)
					.then((res) => {
						const msg = res.data.messages
						const orderId = res.data.data.order_id
						Swal.fire('Success', msg, 'success')
						localStorage.setItem('order_id', orderId)
						this.$store.commit('RESET_CART_PICK_UP')
						this.$store.commit('SET_ORDER_ID', orderId)
						this.$store.commit('RESET_ALL_CHECKOUT', 'take away')
						this.$router.push('/cust/cart')
						console.log(res.data)
					})
					.catch((err) => {
						console.log(err.response)
						const msg = err.response.data.messages
						Swal.fire('Failed', msg, 'error')
					})
			}
		}
	},
	computed: {
		checkout () {
			return this.$store.getters.getAllCart
		},
		getDineIn () {
			return this.$store.getters.getProductDine
		},
		getHomeDev () {
			return this.$store.getters.getProductHome
		},
		getPickUp () {
			return this.$store.getters.getProductPick
		}
	},
	created () {
		this.$store.watch(
			(state) => {
				return this.$store.state.detailP.deliver
			},
			(newValue, oldValue) => {
				this.deliver = newValue
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
