<template>
  <div>
    <nav class="navbar-auth d-flex flex-row justify-content-between align-items-center">

      <div class="coffee-logo d-flex flex-row align-items-center">
        <img src="../../../assets/auth/coffee-icon.png" alt="">
        <p class="coffee-shop">Coffee Shop</p>
      </div>

      <h1 class="header-nav d-block">{{label}}</h1>
    </nav>
  </div>
</template>

<script>
export default {
	name: 'NavbarAuth',
	props: ['label']
}
</script>

<style lang="scss" scoped>
// Start Navbar

.navbar-auth {
  height: 96px;
  padding: 55px 125px 0 56px;
}

.coffee-logo {
  height: fit-content;
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

.header-nav {
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 41px;
  color: #6A4029;
}
// End Navbar
</style>
