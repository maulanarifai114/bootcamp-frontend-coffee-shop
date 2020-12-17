<template>
  <div class="container">
    <!-- Category -->
    <p class="head-category pt-5">Favorite & Promo <span class="detail"> > Cold Brew</span></p>
    <main class="row">
      <!-- Side Delivery and Time -->
      <aside class="col-6 d-flex flex-column align-items-center">
        <div class="img-wrap">
          <img src="../../assets/cust/cold-brew.png" alt="product">
        </div>
        <div class="align-self-start">
          <Delivetime></Delivetime>
        </div>
      </aside>
      <!-- Side Description and Price -->
      <aside class="col-6 d-flex flex-column align-items-center">
        <TitleProduct></TitleProduct>
        <AmountPrice></AmountPrice>
        <Button color="btn-brown btn-detail" label="Add to cart"></Button>
        <Button color="btn-yellow btn-detail" label="Ask a Staff"></Button>
      </aside>
    </main>

    <main class="row pt-5">
      <div class="col-4">
      </div>
      <div class="col-8">
      </div>
    </main>
  </div>
</template>

<script>
import Delivetime from '../../components/cust/module/DeliveTime'
import TitleProduct from '../../components/cust/module/TitleProduct'
import AmountPrice from '../../components/cust/module/AmountPrice'
import Button from '../../components/cust/base/Button'

export default {
  name: 'ProductDetail',
  components: {
    Delivetime,
    TitleProduct,
    AmountPrice,
    Button
  }
}
</script>

<style lang="scss" scoped>

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
