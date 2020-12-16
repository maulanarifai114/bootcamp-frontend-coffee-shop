<template>
  <div>
    <Navbar label="Login"></Navbar>
    <div class="main">
    </div>
  </div>
</template>

<script>
import Navbar from '../../components/auth/module/Navbar'

export default {
  name: 'SignUp',
  components: {
    Navbar
  }
}
</script>

<style lang="scss" scoped>

.main {
  background: rgb(255, 254, 207);
  height: 1021px;
}

</style>
