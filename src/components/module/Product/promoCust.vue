<template>
    <div class="container">
      <h1 class="promo-title">Promo Today</h1>
      <p class="promo-desc">Coupons will be updated every weeks. Check them out!</p>
      <div class="coupon">
        <div class="coupon-box" type= button>
          <div class="image">
            <img src= "https://img2.pngdownload.id/20180621/ifr/kisspng-child-mother-family-clinic-hospital-mother-days-5b2c3b4877cf66.8126939915296254164908.jpg" alt="">
          </div>
          <h2 class="coupon-name"><strong>HAPPY MOTHER’S DAY!</strong><br>Get one of our favorite menu for free!</h2>
        </div>
      </div>
      <button class="apply">Apply Coupon</button>
      <p class="terms"><strong>Terms and Condition</strong><br>1. You can only apply 1 coupon per day <br> 2. It only for dine in <br> 3. Buy 1 get 1 only for new user <br> 4. Should make member card to apply coupon</p>
    </div>
</template>

<script>
export default {
	name: 'PromoCust'
}
</script>

<style lang="scss" scoped>
.info {
  font-family: Poppins;
  font-size: 17px;
  font-weight: 400;
  color: #6A4029;
  margin-top: 3%;
}
.apply {
  height: 64px;
  width: 100%;
  border-radius: 20px;
  background-color: #6A4029;
  font-family: Poppins;
  font-size: 17px;
  font-weight: 700;
  color: #FFFFFF;
  border: none;
  outline: none;
}
.terms {
  margin-top: 10%;
  font-family: Rubik;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  text-align: left;
  color: #4F5665;
}
.coupon {
  height: 500px;
  overflow: auto;
  outline: green;
}
.image {
  height: 94px;
  width: 85px;
  border-radius: 0px;
}
.image img {
  height: 100%
}
.coupon-name {
font-family: Poppins;
font-size: 14px;
font-weight: 700;
text-align: left;
margin-left: 3%;
}
.coupon-box {
  height: 109px;
  width: 100%;
  border-radius: 20px;
  background-color: #88B788;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5%;
  padding-right: 3%;
  padding-left:  5%;
}
.promo-title {
  font-family: Rubik;
  font-size: 25px;
  font-weight: 700;
  letter-spacing: 0em;
  text-align: center;
  color: #6A4029;
  margin-top: 8%;
}

.promo-desc {
  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  text-align: center;
  color: #6A4029;
}

</style>
