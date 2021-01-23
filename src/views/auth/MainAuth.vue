<template>
  <div class="container-fluid">
    <div class="row d-flex justify-content-center">
      <aside class="col-lg-6 d-none d-xl-block" :class="this.$route.path === '/auth/forgot' ? 'side-image-2':'side-image-1' "></aside>
      <aside class="col-12 col-xl-6 side-main">
        <router-view></router-view>
        <div class="d-none d-sm-block" >
          <Footer></Footer>
        </div>
      </aside>
      <div class="footer d-sm-none">
        <Footer></Footer>
      </div>
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

.footer {
  padding: 0;
}

@media (max-width: 575px) {
  .side-main {
    padding: 0 20px;
  }
}

</style>
