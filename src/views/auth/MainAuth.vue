<template>
  <div class="container-fluid">
    <div class="row">
      <aside class="col-6 side-image"></aside>
      <aside class="col-6 side-main">
        <router-view></router-view>
        <Footer></Footer>
      </aside>
    </div>
  </div>
</template>

<script>
// import Navbar from '../../components/auth/module/Navbar'
import Footer from '../../components/auth/module/Footer'

export default {
  name: 'MainAuth',
  components: {
    // Navbar,
    Footer
  }
}
</script>

<style lang="scss" scoped>

.side-image {
  background-image: url('../../../public/img/auth/side-img-1.png');
  background-size: cover;
  height: 1628px;
  padding: 0;
  overflow: hidden;
}

.side-main {
  padding: 0;
}

</style>
