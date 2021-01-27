<template>
    <div class="container">
        <div>
          <b-tabs content-class="mt-3" fill>
            <!-- <b-tab class="tab-detail" title="Favorite and Promo" :title-link-class="'tab-title-class'"><Favourite/></b-tab> -->
            <b-tab class="tab-detail" title="Coffee" :title-link-class="'tab-title-class'"><Coffee/></b-tab>
            <b-tab class="tab-detail" title="Non-coffee" :title-link-class="'tab-title-class'"><Noncoffee/></b-tab>
            <b-tab class="tab-detail" title="Foods" :title-link-class="'tab-title-class'"><Foods/></b-tab>
            <!-- <b-tab  class="tab-detail" title="Add-on" :title-link-class="'tab-title-class'"><p class="add-on">Add-on</p></b-tab> -->
          </b-tabs>
          <!-- <p class="info">*the price has been cutted by discount appears</p> -->
      </div>
  </div>
</template>

<script>
// import Favourite from '../../../components/module/Product/favourite'
import Coffee from '../../../components/module/Product/coffee'
import Noncoffee from '../../../components/module/Product/non-coffee'
import Foods from '../../../components/module/Product/Foods'
export default {
	name: 'ProductsCust',
	components: {
		// Favourite,
		Coffee,
		Noncoffee,
		Foods
	}
}
</script>

<style lang="scss">
// .container {
//   // margin-top: 2%;
// }

.nav-tabs {
  border: 0!important
}

.tab-detail {
  height: max-content !important;
  overflow: visible !important;
  // color: #6A4029;
}

.tab-detail.active {
  border-bottom: 0!important;
}

.page-item.active {
  border-bottom: 0!important;
}

.nav-tabs {
  border: 0;
}

.tab-title-class {
  font-family: Rubik;
  font-size: 20px;
  font-weight: 400;
  border: 0!important;
}

.active {
  font-weight: 700!important;
  color: #6A4029!important;
  border-bottom: 3px solid #6A4029!important;
}

.tab-title-class:hover {
  color: #351606
}

.page-item.active .page-link {
  background-color: #6A4029!important;
  font-family: Rubik;
  border-color: #6A4029!important;
}
.page-item.disabled .page-link {
  font-family: Rubik;
}

</style>
