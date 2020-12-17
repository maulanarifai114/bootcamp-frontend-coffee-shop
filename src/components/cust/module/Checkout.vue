<template>
  <div class="box w-100 d-flex flex-row align-items-center">
    <div class="img">
      <img src="../../../assets/cust/cold-brew.png" alt="product" class="w-100">
    </div>
    <div class="group-checkout d-flex flex-column">
      <header class="header-checkout">Cold Brew</header>
      <main class="body-checkout">
        <p>x1 (Reguler)</p>
        <p>x1 (Large)</p>
        <p>x1 (Extra Large)</p>
      </main>
    </div>
    <div class="group-checkout-2 d-flex flex-row flex-grow-1 justify-content-end align-items-center">
        <p class="checkout">Checkout</p>
        <div class="wrap-arrow d-flex justify-content-center align-items-center">
          <img src="../../../assets/cust/arrow-right.svg" alt="">
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Checkout'
}
</script>

<style lang="scss" scoped>

.group-checkout-2 {
  height: 100%;
}

.wrap-arrow {
  height: 70px;
  width: 70px;
  border-radius: 50%;
  background-color: #FFBA33;
}

.box {
  cursor: pointer;
  padding: 0 50px;
  height: 168px;
  background: #FFFFFF;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  transition: .3s;
}

.box:hover {
  opacity: .8;
}

.img {
  height: 100px;
  width: 100px;
  background-color: #e6e6e6;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 33px 0 0;
}

.group-checkout {
  width: 150px;
  height: 128px;
}

.header-checkout {
  font-family: Poppins;
  font-size: 25px;
  font-style: normal;
  font-weight: 900;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: left;
}

.body-checkout {
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
}

.body-checkout p {
  margin: 0;
}

.checkout {
  margin: 0 40px 0 0;
  font-family: Poppins;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: center;
  color: black;
}

</style>
