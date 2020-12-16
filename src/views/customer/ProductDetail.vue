<template>
  <div>
    <div  class="container">
      <p class="head-category pt-5">Favorite & Promo <span class="detail"> > Cold Brew</span></p>
      <div class="row">
        <div class="col-6 d-flex flex-column align-items-center">
          <div class="img-wrap">
            <img src="../../assets/cust/cold-brew.png" alt="product">
          </div>
          <Delivetime></Delivetime>
        </div>
        <div class="col-6">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Delivetime from '../../components/cust/module/DeliveTime'
export default {
  name: 'ProductDetail',
  components: {
    Delivetime
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
