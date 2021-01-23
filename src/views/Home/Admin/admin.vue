<template>
    <div class="content">
        <Navbar/>
        <div class="container-fluid">
            <Content/>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Navbar from '../../../components/module/Home/navbarAdmHome'
import Footer from '../../../components/module/footer'
import Content from '../../../components/module/Home/content'
export default {
	name: 'Customer',
	components: {
		Navbar,
		Footer,
		Content
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
