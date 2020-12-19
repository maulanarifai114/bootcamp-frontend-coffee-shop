<template>
    <div class="content">
      <Main></Main>
    </div>
</template>

<script>
// import Navbar from '../components/module/navbarAdm'
// import Footer from '../components/module/footer'
import Main from './Home/Customer/customer'

export default {
  name: 'Landing2',
  components: {
    // Navbar,
    // Footer,
    Main
  }
}
</script>

<style lang="scss" scoped>
.content {
  background-color:  #ffffff;
}
.container-fluid {
  width: 100%;
    margin: 0;
    padding: 0;
}

</style>
