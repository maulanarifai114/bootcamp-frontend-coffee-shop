<template>
  <div class="container big-box">
    <!-- Category -->
    <p class="head-category pt-5">Favorite & Promo <span class="detail"> > Cold Brew</span></p>
    <main class="row">
      <!-- Delivery and Time -->
      <aside class="col-xl-6 col-12 d-flex flex-column align-items-center justify-content-center">
        <div class="img-wrap">
          <img :src="products.images" alt="product">
        </div>
        <div class="align-self-center align-self-xl-start">
          <Delivetime :dine="products.is_dine_in" :door="products.is_home_delivery" :pick="products.is_pick_up"></Delivetime>
        </div>
      </aside>
      <!-- Description, Price, Amount -->
      <aside class="col-xl-6 col-12 d-flex flex-column align-items-center">
        <TitleProduct :title="products.name" :description="products.description"></TitleProduct>
        <AmountPrice :prices="products.price" :stock="products.stock"></AmountPrice>
        <Button color="btn-brown btn-detail" label="Add to cart"></Button>
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
import axios from 'axios'
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
  mounted: function () {
    this.ProductDetail()
  },
  data () {
    return {
      products: {}
    }
  },
  methods: {
    ProductDetail () {
      axios.get(`${process.env.VUE_APP_BASE_URL}/products/${this.$route.query.id}`)
        .then((result) => {
          // handle success
          this.products = result.data.result[0]
          console.log(this.products)
        //   console.log(result.data)
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
    }
  }

}
</script>

<style lang="scss" scoped>

.big-box {
  // // margin: 0 0 480px 0;
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
}

</style>
