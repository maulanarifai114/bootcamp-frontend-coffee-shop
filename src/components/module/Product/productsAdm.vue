<template>
    <div class="container">
        <div>
          <b-tabs content-class="mt-3" fill>
            <!-- <b-tab class="tab-detail" title="Favorite and Promo" :title-link-class="'tab-title-class'"><Favourite/></b-tab> -->
            <b-tab class="tab-detail" title="Coffee" :title-link-class="'tab-title-class'"><Coffee/></b-tab>
            <b-tab class="tab-detail" title="Non-coffee" :title-link-class="'tab-title-class'"><Noncoffee/></b-tab>
            <b-tab class="tab-detail" title="Foods" :title-link-class="'tab-title-class'"><Foods/></b-tab>
          </b-tabs>
          <div class="product-option" @click="goAdd">Add new product</div>
          <!-- <p class="info">*the price has been cutted by discount appears</p>
          <div class="product-option" type= button>Edit Product</div> -->
      </div>
  </div>
</template>

<script>
// import Favourite from '../../../components/module/Product/favourite'
import Coffee from '../../../components/module/Product/coffee'
import Noncoffee from '../../../components/module/Product/non-coffee'
import Foods from '../../../components/module/Product/Foods'
export default {
	name: 'ProductsAdm',
	components: {
		// Favourite,
		Coffee,
		Noncoffee,
		Foods
	},
	methods: {
		goAdd () {
			this.$router.push('/admin/add-product')
		}
	}
}
</script>

<style lang="scss">
.info {
  font-family: Poppins;
  font-size: 17px;
  font-weight: 400;
  color: #6A4029;
  margin-top: 3%;
}
.product-option {
  font-family: Poppins;
  font-size: 25px;
  font-weight: 700;
  color: #6A4029;
  margin-bottom: 3%;
  margin-top: 5%;
  cursor: pointer;
  transition: .3s;
}
.product-option:hover {
  opacity: .8
}
.container {
  margin-top: 2%;
}
.tab-detail {
  min-height: 900px;
  overflow: visible;
}

.tab-title-class {
  font-family: Rubik;
  font-size: 20px;
  font-weight: 400;
  color: #9F9F9F;
}
</style>
