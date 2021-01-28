<template>
  <div>
    <Navbar label="Login"></Navbar>
    <div class="main d-flex justify-content-center">
      <LoginForm></LoginForm>
    </div>
  </div>
</template>

<script>
import Navbar from '../../components/auth/module/Navbar'
import LoginForm from '../../components/auth/module/LoginForm'

export default {
	title: 'Login',
	name: 'Login',
	components: {
		Navbar,
		LoginForm
	}
}
</script>

<style lang="scss" scoped>

.main {
  height: 1021px;
  padding: 5rem 0 0 0;
}

</style>
