<template>
  <div>
    <Navbar label="Sign Up"></Navbar>
    <div class="main d-flex justify-content-center">
      <SignUpForm></SignUpForm>
    </div>
  </div>
</template>

<script>
import Navbar from '../../components/auth/module/Navbar'
import SignUpForm from '../../components/auth/module/SignUpForm'

export default {
	title: 'Sign Up',
	name: 'SignUp',
	components: {
		Navbar,
		SignUpForm
	}
}
</script>

<style lang="scss" scoped>

.main {
  // background: rgb(255, 254, 207);
  height: 1021px;
  padding: 5rem 0 0 0;
}
</style>
