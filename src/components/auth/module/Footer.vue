<template>
  <footer class="footer-auth">
    <div class="col-12">
      <main class="row">

        <aside class="col-12 col-sm-6 d-flex flex-column justify-content-center">
          <div class="coffee-logo d-flex flex-row align-items-center">
            <img src="../../../assets/auth/coffee-icon.png" alt="">
            <p class="coffee-shop">Coffee Shop</p>
          </div>
          <p class="p-footer">
            Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans
          </p>
          <div class="socmed">
            <img src="../../../assets/auth/fb.svg" alt="fb">
            <img src="../../../assets/auth/tw.svg" alt="tw">
            <img src="../../../assets/auth/ig.svg" alt="ig">
          </div>
          <p class="copyright">©2020CoffeeStore</p>
        </aside>

        <aside class="col-12 col-sm-6 d-flex flex-column justify-content-center">
          <div class="group-footer">
            <p class="title-footer">Product</p>
            <div class="row">
              <p class="col-6 menu-footer">Download</p>
              <p class="col-6 menu-footer">Pricing</p>
              <p class="col-6 menu-footer">Location</p>
              <p class="col-6 menu-footer">Countries</p>
              <p class="col-6 menu-footer">Blog</p>
            </div>
          </div>
          <div class="group-footer">
            <p class="title-footer">Engage</p>
            <div class="row">
              <p class="col-6 menu-footer">Coffee Shop</p>
              <p class="col-6 menu-footer">About Us</p>
              <p class="col-6 menu-footer">FAQ</p>
              <p class="col-6 menu-footer">Privacy Policy</p>
              <p class="col-6 menu-footer">Terms of Service</p>
            </div>
          </div>
        </aside>
      </main>
    </div>
  </footer>
</template>

<script>
export default {
	name: 'FooterAuth'
}
</script>

<style lang="scss" scoped>
// Start Footer
.footer-auth {
  background: #F8F8F8;
  height: 511px;
}

.coffee-logo {
  height: fit-content;
  margin: 0 0 22px 0;
}

.coffee-shop {
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  color: #0B132A;
  margin: 0 0 0 15px;
}

.p-footer {
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  color: #4F5665;
  width: 294px;
}

.socmed img {
  margin: 0 20px 30px 0;
}

.copyright {
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 30px;
  color: #AFB5C0;
}

.group-footer {
  margin: 0 0 26px 0;
}

.title-footer {
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  color: #0B132A;
}

.menu-footer {
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 30px;
  color: #4F5665;
  margin: 0 0 9px 0;
  // padding: 0;
}

aside {
  height: 511px;
  padding: 0 30px 0 50px
}

@media (max-width: 575px) {
  .footer-auth {
    height: fit-content;
  }
}
// End Footer
</style>
