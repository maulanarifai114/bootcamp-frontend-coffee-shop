<template>
  <div class="group-form">
    <form @submit.prevent="">
      <Inputed
        id="email"
        type="email"
        placeholder="Enter your email adress"
        label="Email Adress :"
        @keyup="checkEmail"
      />
      <Inputed
        id="password"
        type="password"
        placeholder="Enter your password"
        label="Password :"
        @keyup="checkPassword"
      />
      <router-link to="/auth/forgot" class="forgot"
        >Forgot Password?</router-link
      >
      <div class="mb-5"></div>
      <Button
        color="btn-yellow btn-auth"
        label="Login"
        :nonActiveImg="1"
        @click="login"
      ></Button>
    </form>
    <Button
      color="btn-white-auth"
      label="Login With Google"
      :nonActiveImg="0"
    ></Button>
    <TextMuted text="Don’t have an account?"></TextMuted>
    <!-- <router-link to="/auth/signup"> -->
    <Button
      color="btn-brown btn-auth"
      label="Sign Up Here"
      :nonActiveImg="1"
      @click="goSignUp"
    ></Button>
    <!-- </router-link> -->
  </div>
</template>

<script>
import Button from '../base/Button'
import Inputed from '../base/Input'
import TextMuted from '../base/TextMuted'
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
	name: 'LoginForm',
	components: {
		Button,
		Inputed,
		TextMuted
	},
	data () {
		return {
			pass: '',
			email: '',
			messages: ''
		}
	},
	methods: {
		goSignUp () {
			this.$router.push('/auth/signup')
		},
		checkPassword (e) {
			const inputPass = e.target.value
			console.log('pass', inputPass)
			if (inputPass.length >= 1) {
				this.pass = inputPass
			} else if (inputPass.length <= 0) {
				this.pass = ''
			}
		},
		checkEmail (e) {
			const inputEmail = e.target.value
			console.log('email', inputEmail)
			if (inputEmail.length >= 1) {
				this.email = inputEmail
			} else if (inputEmail.length < 1) {
				this.email = ''
			}
		},
		login () {
			const email = this.email
			const password = this.pass
			const user = {
				email,
				password
			}
			console.log(user)
			if (user.email.length < 1) {
				return Swal.fire({
					icon: 'error',
					title: 'Fill the blank email'
				})
			} else if (!user.email.includes('@')) {
				return Swal.fire({
					icon: 'error',
					title: 'You must insert your email'
				})
			} else if (user.password.length < 1) {
				return Swal.fire({
					icon: 'error',
					title: 'Fill the blank password'
				})
			}
			axios
				.post(`${process.env.VUE_APP_BASE_URL}auth/login`, user)
				.then((res) => {
					Swal.fire({
						icon: 'success',
						title: 'Success Login'
					})
					console.log(res.data.data)
					localStorage.setItem('token', res.data.token)
					localStorage.setItem('id', res.data.data.id)
					localStorage.setItem('role_id', res.data.data.role_id)
					this.$router.push('/cust/product')
				})
				.catch((err) => {
					Swal.fire({
						icon: 'error',
						title: err.response.data.messages
					})
					this.messages = err.response.data.messages
					console.log('message', this.messages)
				})
		}
	}
}
</script>

<style lang="scss" scoped>
.group-form {
  width: 505px;
}

.forgot {
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  text-decoration-line: underline;
  color: #6a4029;
  transition: 0.3s;
}

.forgot:hover {
  opacity: 0.8;
}
</style>
