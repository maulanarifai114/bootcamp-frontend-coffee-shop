<template>
  <div>
    <div  class="container">
      <p class="head-category pt-5">Favorite & Promo <span class="detail"> > Cold Brew</span></p>
      <main class="row">
        <aside class="col-6 d-flex flex-column align-items-center">
          <div class="img-wrap">
            <img src="../../assets/cust/cold-brew.png" alt="product">
          </div>
          <Delivetime></Delivetime>
        </aside>

        <aside class="col-6 d-flex flex-column align-items-center">
          <h1 class="mb-5">Cold Brew</h1>
          <p class="p-desc box-desc1 mb-0">
            Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.
          </p>
          <p class="p-desc box-desc2 align-self-start">
            Delivery only on <span>Monday to friday</span>  at <span>1 - 7 pm</span>
          </p>

          <div class="d-flex flex-row justify-content-between w-100 mb-5">
            <div class="input-group">
              <div class="input-group-prepend">
                <button class="btn" type="button" @click="minusAmount()">-</button>
              </div>
              <input type="text" class="form-control" placeholder="0" disabled v-model="amount">
              <div class="input-group-append">
                <button class="btn" type="button" @click="plusAmount()">+</button>
              </div>
            </div>
            <p class="price">IDR {{currentPrice}}</p>
          </div>

          <Button color="btn-brown btn-detail" label="Add to cart"></Button>
          <Button color="btn-yellow btn-detail" label="Ask a Staff"></Button>

        </aside>
      </main>
    </div>
  </div>
</template>

<script>
import Delivetime from '../../components/cust/module/DeliveTime'
import Button from '../../components/cust/base/Button'

export default {
  name: 'ProductDetail',
  components: {
    Delivetime,
    Button
  },
  data () {
    return {
      amount: 0,
      price: 30000
    }
  },
  methods: {
    plusAmount () {
      this.amount++
    },
    minusAmount () {
      if (this.amount > 0) {
        this.amount--
      }
    }
  },
  computed: {
    currentPrice () {
      const price = this.price
      const amount = this.amount
      const current = price * amount
      return current.toLocaleString('id-ID')
    }
  }
}
</script>

<style lang="scss" scoped>

.price {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 52px;
  text-align: center;
  color: #000000;
}

.input-group {
  width: 181px;
  height: 63px;
}

.btn {
  border: 1px solid #9F9F9F;
  width: 54px;
  font-family: Poppins;
  font-size: 25px;
  font-style: normal;
  font-weight: 900;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: center;
  color: #6A4029;
  border-radius: 10px;
}

.btn:focus {
  border: 1px solid #9F9F9F;
  box-shadow: none;
  background-color: rgb(245, 245, 245);
}

.btn:hover {
  color: rgba(106, 64, 41, 0.8);
}

.form-control {
  border: 1px solid #9F9F9F;
  height: 100%;
  font-family: Poppins;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: center;
  color: #6A4029;
  background-color: white!important;
}

.form-control:focus {
  border: 1px solid #9F9F9F;
  box-shadow: none;
}

h1 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 900;
  font-size: 65px;
  line-height: 97px;
  color: #000000;
}

.p-desc {
  font-family: Poppins;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 35px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #6A4029;
}

.box-desc1 {
  height: 219px;
}

.box-desc2 {
  width: 436px;
  margin: 0 0 44px 0;
}

.box-desc2 span {
  font-family: Poppins;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: 35px;
  letter-spacing: 0.02em;
  text-align: left;
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
