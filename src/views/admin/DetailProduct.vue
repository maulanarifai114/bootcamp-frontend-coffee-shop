<template>
  <div class="container big-box">
    <!-- Category -->
    <p class="head-category pt-5">
      Favorite & Promo <span class="detail"> > Cold Brew</span>
    </p>
    <main class="row">
      <!-- Delivery and Time -->
      <aside class="col-6 d-flex flex-column align-items-center">
        <div class="img-wrap">
          <img src="../../assets/cust/cold-brew.png" alt="product" />
        </div>
        <button class="trash"><i class="far fa-trash-alt"></i></button>
        <div class="align-self-start">
          <Delivetime></Delivetime>
        </div>
      </aside>
      <!-- Description, Price, Amount -->
      <aside class="col-6 d-flex flex-column align-items-center">
        <TitleProduct></TitleProduct>
        <AmountPrice></AmountPrice>
        <Button color="btn-brown btn-detail" label="Add to cart"></Button>
        <Button color="btn-yellow btn-detail" label="Edit Product"></Button>
      </aside>
    </main>
    <main class="row pt-5">
      <!-- Size Product -->
      <aside class="col-4">
        <SizeProduct></SizeProduct>
      </aside>
      <!-- Checkout -->
      <div class="col-8">
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

export default {
	name: 'ProductDetail',
	components: {
		Delivetime,
		TitleProduct,
		AmountPrice,
		SizeProduct,
		Checkout,
		Button
	}
}
</script>

<style lang="scss" scoped>
.trash {
    position: absolute;
        top: 27%;
    left: 65%;
  height: 56px;
  width: 56px;
  font-size: 20px;
  text-align: center;
  border: none;
  border-radius: 50%;
  background: #6a4029;
  color: white;
}

.trash:focus {
  outline: none;
}

.big-box {
  // margin: 0 0 480px 0;
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 480px;
}

.head-category {
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  color: #4f5665;
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
  color: #6a4029;
}

.img-wrap {
  height: 300px;
  width: 300px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 0 102px 0;
}
</style>
