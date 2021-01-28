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
			<div v-if="isEmail" class="mb-3 text-danger validation">Your email format is incorrect</div>
      <Inputed
        id="password"
        type="password"
        placeholder="Enter your password"
        label="Password :"
        @keyup="checkPassword"
      />
			<div v-if="isPass" class=" mb-3 text-danger validation">Your password must be 8 character</div>
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
			messages: '',
			isEmail: 0,
			isPass: 0
		}
	},
	methods: {
		goSignUp () {
			this.$router.push('/auth/signup')
		},
		checkPassword (e) {
			const inputPass = e.target.value
			if (inputPass.length >= 1) {
				this.pass = inputPass
				if (inputPass.length < 8) {
					this.isPass = 1
				} else {
					this.isPass = 0
				}
			} else if (inputPass.length <= 0) {
				this.pass = ''
				this.isPass = 0
			}
		},
		checkEmail (e) {
			const inputEmail = e.target.value
			if (inputEmail.length >= 1) {
				this.email = inputEmail
				if (!inputEmail.includes('@')) {
					this.isEmail = 1
				} else {
					this.isEmail = 0
				}
			} else if (inputEmail.length < 1) {
				this.email = ''
				this.isEmail = 0
			}
		},
		login () {
			const email = this.email
			const password = this.pass
			const user = {
				email,
				password
			}
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
					localStorage.setItem('token', res.data.token)
					localStorage.setItem('id', res.data.data.id)
					localStorage.setItem('role_id', res.data.data.role_id)
					res.data.data.role_id === 1 ? this.$router.push('/admin/dashboard') : this.$router.push('/cust/product')
				})
				.catch((err) => {
					Swal.fire({
						icon: 'error',
						title: err.response.data.messages
					})
					this.messages = err.response.data.messages
				})
		}
	}
}
</script>

<style lang="scss" scoped>

.validation {
	font-family: Rubik;
}

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
