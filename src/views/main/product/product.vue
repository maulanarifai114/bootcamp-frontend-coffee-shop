<template>
    <div class="content">
        <div class="leftside">
            <Promo/>
        </div>
        <div class="rightside overflow-auto">
            <Products/>
        </div>
    </div>
</template>

<script>
import Promo from '../../../components/module/Product/promo'
import Products from '../../../components/module/Product/products'
export default {
  name: 'Product',
  components: {
    Promo,
    Products
  }
}
</script>

<style lang="scss" scoped>
.content {
    width: 100%;
    display: flex;
    flex-direction: row;
    background-color:  #ececec;
}
.leftside {
    width: 30%;
    height: 600px;
    border: none;
    border-right: 0.5px solid #9F9F9F
}
.rightside {
    height: 100%;
    height: 600px;
    width: 100%;

}

</style>
