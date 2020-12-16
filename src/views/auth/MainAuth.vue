<template>
  <div class="container-fluid">
    <div class="row">
      <aside class="col-6" :class="this.$route.path === '/auth/forgot' ? 'side-image-2':'side-image-1' "></aside>
      <aside class="col-6 side-main">
        <router-view></router-view>
        <Footer></Footer>
      </aside>
    </div>
  </div>
</template>

<script>
import Footer from '../../components/auth/module/Footer'

export default {
  name: 'MainAuth',
  components: {
    Footer
  }
}
</script>

<style lang="scss" scoped>

.side-image-1  {
  background-image: url('../../assets/auth/side-img-1.png');
  background-size: cover;
  height: 1628px;
  padding: 0;
  overflow: hidden;
}

.side-image-2  {
  background-image: url('../../assets/auth/side-img-2.png');
  background-size: cover;
  height: 1628px;
  padding: 0;
  overflow: hidden;
  background-color: #2A2A2A;
}

.side-main {
  padding: 0;
}

</style>
