<template>
  <div class="group-form">
    <form @submit.prevent="">
      <Inputed id="email" type="email" placeholder="Enter your email adress" label="Email Adress :" @keyup="checkEmail" />
      <div v-if="isEmail" class=" mb-3 text-danger validation">Your email format is incorrect</div>
			<Inputed id="password" type="password" placeholder="Enter your password" label="Password :"  @keyup="checkPassword" />
      <div v-if="isPass" class=" mb-3 text-danger validation">Your password must be 8 character</div>
			<Inputed id="phone" type="number" placeholder="Enter your phone number" label="Phone Number :" @keyup="checkNum" />
      <!-- <div v-if="isPhone" class=" mb-3 text-danger validation">Your phone number is incorrect</div> -->
			<div class="mb-3"></div>
      <Button color="btn-yellow btn-auth" label="Sign Up" :nonActiveImg="1" @click="register" ></Button>
    </form>
    <Button color="btn-white-auth" label="Sign Up With Google" :nonActiveImg="0"  ></Button>
    <TextMuted text="Already have an account?"></TextMuted>
    <!-- <router-link to="/auth/login"> -->
    <Button color="btn-brown btn-auth" label="Login Now" :nonActiveImg="1" @click="goLogin" ></Button>
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
	name: 'SignUpForm',
	components: {
		Button,
		Inputed,
		TextMuted
	},
	data () {
		return {
			pass: '',
			email: '',
			number: '',
			isEmail: 0,
			isPass: 0,
			isPhone: 0
		}
	},
	methods: {
		goLogin () {
			this.$router.push('/auth/login')
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
		checkNum (e) {
			const inputNum = e.target.value
			if (inputNum.length > 0) {
				this.number = inputNum
			} else if (!inputNum.length <= 0) {
				this.number = ''
			}
			// if (inputNum.length > 0) {
			// 	this.number = inputNum
			// 	if (inputNum.length < 8) {
			// 		this.isPhone = 1
			// 	} else {
			// 		this.isPhone = 0
			// 	}
			// } else if (!inputNum.length <= 0) {
			// 	this.number = ''
			// 	this.isPhone = 0
			// }
		},
		register () {
			const email = this.email
			const password = this.pass
			const phoneNumber = this.number
			const parseNum = parseInt(phoneNumber)
			const user = {
				email,
				password,
				phone_number: parseNum
			}
			if (user.email.length < 1) {
				return Swal.fire({
					icon: 'error',
					title: 'Fill the blank email!'
				})
			} else if (user.password.length < 8) {
				return Swal.fire({
					icon: 'error',
					title: 'Your password is too short!',
					text: 'Use minimal 8 character'
				})
			} else if (Number.isNaN(user.phone_number)) {
				return Swal.fire({
					icon: 'error',
					title: 'Fill the blank phone number!'
				})
			}
			axios.post(`${process.env.VUE_APP_BASE_URL}auth/signup`, user)
				.then((res) => {
					Swal.fire({
						icon: 'success',
						title: res.data.messages
					})
					this.$router.push('/auth/login')
				})
				.catch((err) => {
					Swal.fire({
						icon: 'error',
						title: err.response.data.messages
					})
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
</style>
