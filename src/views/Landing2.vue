<template>
  <div class="content">
    <Navbar/>
    <Main></Main>
    <Footer/>
  </div>
</template>

<script>
import Main from '../components/module/Home/content'
import Navbar from '../components/module/Home/navbarCustHome'
import Footer from '../components/module/footer'

export default {
	title: 'Coffee Shop - Skyline',
	name: 'Landing2',
	components: {
		Main,
		Navbar,
		Footer
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
