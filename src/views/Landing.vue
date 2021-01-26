<template>
    <div class="content">
        <Navbar/>
        <div class="container-fluid">
          <h1>AAA</h1>
            <!-- <router-view/> -->
        </div>
        <Footer/>
    </div>
</template>

<script>
import Navbar from '../components/module/navbarAdm'
import Footer from '../components/module/footer'
export default {
	name: 'Landing',
	components: {
		Navbar,
		Footer
	}
}
</script>

<style lang="scss" scoped>
.content {
  background-color:  #ececec;
}
.container-fluid {
  width: 100%;
    margin: 0;
    padding: 0;
}

</style>
