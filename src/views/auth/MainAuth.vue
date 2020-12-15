<template>
  <div class="container-fluid">
    <div class="row">
      <aside class="col-md-6 side-image"></aside>
      <aside class="col-md-6 side-main">
        <Navbar></Navbar>
        <div class="main">
          <router-view/>
        </div>
        <Footer></Footer>
      </aside>
    </div>
  </div>
</template>

<script>
import Navbar from '../../components/auth/module/Navbar'
import Footer from '../../components/auth/module/Footer'

export default {
  name: 'MainAuth',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="scss" scoped>

.side-image {
  background-image: url('../../../public/img/auth/side-img-1.png');
  background-size: cover;
  height: 1628px;
}

.side-main {
  padding: 0;
}

.main {
  background: rgb(255, 169, 169);
  height: 1021px;
}

</style>
