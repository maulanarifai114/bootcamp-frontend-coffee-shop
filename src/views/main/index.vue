<template>
    <div class="content">
        <Navbar/>
        <div class="container">
            <router-view/>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Navbar from '../../components/module/navbar'
import Footer from '../../components/module/footer'
export default {
  name: 'Main',
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

</style>
