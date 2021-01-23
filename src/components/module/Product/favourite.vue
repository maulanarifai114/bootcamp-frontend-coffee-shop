<template>
    <div class="container">
        <div class="row">
            <div class="col-sm d-flex justify-content-center favourite" @click.prevent="detailProducts(data.id)" type="button" v-for="data in products" :key="data.id">
                <div class="product-box">
                    <div class="product-img overflow-hidden">
                        <img :src="data.images" alt="">
                    </div>
                    <p class="product-name">{{data.name}}</p>
                    <p class="product-price">IDR {{data.price}}</p>
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
	name: 'Favourite',
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
			axios.get(`${process.env.VUE_APP_BASE_URL}/products?page=${this.currentPages}&limit=${this.perPage}&category=1&sort=desc`)
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
			if (localStorage.getItem('id') === `${process.env.VUE_APP_ROLE_ADMIN}`) {
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
    margin-top: 10%;
}
.product-box {
    height: 212.4067840576172px;
    width: 156px;
    border-radius: 30px;
    background-color: white;
    border: 2px solid #ececec;
    margin-top: 5%;
    margin-bottom: 10%;
}
.product-img {
    border-radius: 50%;
    width: 100%;
    height: 75%;
    margin-top: -35%;
}
.product-img img {
    height: 100%;
}
.product-name{
    text-align: center;
    margin-top: 5%;
    font-family: Poppins;
    font-size: 22px;
    font-weight: 900;
    line-height: 22px;
}
.product-price{
    text-align: center;
    font-family: Poppins;
    font-size: 17px;
    font-weight: 700;
    line-height: 26px;
    color: #6A4029;
}

</style>
