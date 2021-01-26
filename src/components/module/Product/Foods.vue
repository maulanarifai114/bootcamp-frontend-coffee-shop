<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-3 col-sm col-md-4 d-flex justify-content-center favourite" @click.prevent="detailProducts(data.id)" type="button" v-for="data in products" :key="data.id">
        <div class="product-box d-flex align-items-center flex-column">
          <div class="container-img">
            <div class="product-img overflow-hidden">
              <img :src="data.images" alt="">
            </div>
          </div>
          <div class=" d-flex flex-column justify-content-between h-100">
            <p class="product-name">{{data.name}}</p>
            <p class="product-price">IDR {{data.price.toLocaleString('id-ID')}}</p>
          </div>
        </div>
      </div>
    </div>
    <b-pagination
      v-model="currentPages"
      :per-page="perPage"
      :total-rows="rows"
      aria-controls="itemList"
      class="mt-3 float-right"
    ></b-pagination>
  </div>
</template>

<script>
import axios from 'axios'
export default {
	name: 'Foods',
	data () {
		return {
			currentPages: 1,
			perPage: 10,
			products: [],
			rows: ''
		}
	},
	mounted: function () {
		this.getProducts()
	},
	watch: {
		currentPages: function (val) {
			this.getProducts()
		}
	},
	methods: {
		getProducts () {
			axios.get(`${process.env.VUE_APP_BASE_URL}/products?page=${this.currentPages}&limit=${this.perPage}&category=3&sort=desc`)
				.then((result) => {
					// handle success
					this.products = result.data.result
					this.rows = result.data.rows
					//   console.log(result.data)
				})
				.catch(function (error) {
					// handle error
					console.log(error)
				})
		},
		detailProducts (val) {
			if (localStorage.getItem('role_id') === '1') {
				this.$router.push(`/admin/edit-product?id=${val}`)
			} else {
				this.$router.push({ path: 'product-d', query: { id: val } })
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.favourite {
  margin: 0 0 80px 0;
}
p {
  margin: 0
}

.row {
  padding: 80px 0 0 0;
}

.product-box {
  padding: 0 24px 24px 24px;
  height: 210px;
  width: 156px;
  border-radius: 30px;
  background-color: white;
  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
}

.product-img {
  border-radius: 50%;
  width: 128px;
  height: 128px;
  margin-top: -50%;
  margin-bottom: 1rem;
  background-color: #dadada;
}

.product-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-name{
  text-align: center;
  font-family: Poppins;
  font-size: 22px;
  font-weight: 900;
  line-height: 22px;
  color: black;
}

.product-price{
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 25px;
  text-align: center;
  color: #6A4029;
}

</style>
