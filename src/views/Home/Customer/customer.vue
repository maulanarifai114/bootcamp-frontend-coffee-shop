<template>
  <div class="content">
    <!-- <div v-if="localStorage.getItem('token')">
      <Navbar/>
    </div> -->
    <div class="container-fluid">
      <Content/>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Content from '../../../components/module/Home/content'
// import Navbar from '../../../components/module/Home/navbarCustHome'
import Footer from '../../../components/module/footer'
export default {
	name: 'Customer',
	components: {
		Content,
		// Navbar,
		Footer
	}
}
</script>

<style lang="scss" scoped>
.content {
  background-color:white;
}
.container-fluid {
  width: 100%;
    margin: 0;
    padding: 0;
}

</style>
