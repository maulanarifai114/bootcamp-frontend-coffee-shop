<template>
    <div class="container">
        <div>
          <b-tabs content-class="mt-3" fill>
            <b-tab title="Favorite and Promo"><Favourite/></b-tab>
            <b-tab title="Coffee"><Coffee/></b-tab>
            <b-tab title="Non-coffee"><Noncoffee/></b-tab>
            <b-tab title="Foods"><Foods/></b-tab>
            <b-tab title="Add-on"><p>Add-on</p></b-tab>
          </b-tabs>
      </div>
  </div>
</template>

<script>
import Favourite from '../../../components/module/Product/favourite'
import Coffee from '../../../components/module/Product/coffee'
import Noncoffee from '../../../components/module/Product/non-coffee'
import Foods from '../../../components/module/Product/Foods'
export default {
  name: 'Products',
  components: {
    Favourite,
    Coffee,
    Noncoffee,
    Foods
  }
}
</script>

<style lang="scss" scoped>
.container {
    margin-top: 2%;
}
.tab-title-class {
    font-family: Rubik;
font-size: 20px;
font-weight: 400;
color: #9F9F9F;

}

</style>
