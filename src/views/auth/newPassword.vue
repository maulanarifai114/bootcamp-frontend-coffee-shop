<template>
  <div>
    <nav class="navbar-auth d-flex flex-row justify-content-center align-items-center">
      <div class="coffee-logo d-flex flex-row align-items-center">
        <img src="../../assets/auth/coffee-icon.png" alt="">
        <p class="coffee-shop">Coffee Shop</p>
      </div>
    </nav>

    <main class="main d-flex flex-column align-items-center">
      <h1>New password</h1>
      <h4>Don't forget me, he's the only one you forget</h4>
      <div class="group-form">
        <form @submit.prevent="">
          <Input id="newPassword" :type="type" placeholder="Enter new password" @keyup="newPass"/>
          <Input id="password" :type="type" placeholder="Repeat your new password" @keyup="repeatPass"/>
          <div class="custom-control custom-checkbox checkbox-lg">
				<input @click="showPW" type="checkbox" class="custom-control-input" id="showPassword">
				<label class="custom-control-label" for="showPassword">Show Password</label>
			</div>
          <Button color="btn-yellow btn-auth" label="Login Now" :nonActiveImg=1 @click="changePassword"></Button>
        </form>
      </div>
    </main>

  </div>
</template>

<script>
import Input from '../../components/auth/base/Input'
import Button from '../../components/auth/base/Button'
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
	title: 'New Password',
	name: 'NewPassword',
	components: {
		Input,
		Button
	},
	data () {
		return {
			type: 'password',
			newpass: '',
			repeatpass: ''
		}
	},
	methods: {
		showPW () {
			console.log(this.type)
			if (this.type === 'password') {
				this.type = 'text'
			} else {
				this.type = 'password'
			}
		},
		newPass (e) {
			console.log(e.target.value)
			this.newpass = e.target.value
		},
		repeatPass (e) {
			console.log(e.target.value)
			this.repeatpass = e.target.value
		},
		changePassword () {
			if (this.newpass.length < 8 && this.repeatpass.length < 8) {
				return Swal.fire({
					icon: 'error',
					title: 'Password is to short'
					// text: 'Use minimal 8 character'
				})
				// return alert('Password is to short')
			} else if (this.newpass === this.repeatpass) {
				if (this.newpass.length < 8 && this.repeatpass.length < 8) {
					console.log('new', this.newpass, 'repeat', this.repeatpass)
					return Swal.fire({
						icon: 'error',
						title: 'Password is to short'
						// text: 'Use minimal 8 character'
					})
					// return alert('Password is to short')
				} else if (this.newpass.length >= 8 && this.repeatpass.length >= 8) {
					console.log('lanjut')
					const user = {
						password: this.newpass,
						repeat_password: this.repeatpass
					}
					axios.post(`${process.env.VUE_APP_BASE_URL}auth/forgot-password/new-password/${this.$route.params.token}`, user)
						.then((res) => {
							console.log(res.data.messages)
							Swal.fire({
								icon: 'success',
								title: res.data.messages
								// text: 'Use minimal 8 character'
							})
							// alert(res.data.messages)
							this.$router.push('/auth/login')
						})
						.catch((err) => {
							console.log(err.response.data.messages)
							Swal.fire({
								icon: 'error',
								title: err.response.data.messages
								// text: 'Use minimal 8 character'
							})
							// alert(err.response.data.messages)
						})
				}
			} else {
				console.log('error')
				Swal.fire({
					icon: 'error',
					title: 'Password not have same character'
					// text: 'Use minimal 8 character'
				})
				// alert('Password not have same character')
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.checkbox-lg{
        margin-bottom: 30px;
    margin-top: -10px;
    margin-left: 10px;
}
.checkbox-lg .custom-control-label::before,
.checkbox-lg .custom-control-label::after {
  top: .8rem;
  width: 1.55rem;
  height: 1.55rem;
}

.checkbox-lg .custom-control-label {
  padding-top: 13px;
  padding-left: 6px;
}
.group-form {
  width: 505px;
}

.main {
  height: 1021px;
  padding: 5rem 0 0 0;
}

  h1 {
  font-family: Poppins;
  font-size: 52px;
  font-style: normal;
  font-weight: 700;
  line-height: 78px;
  letter-spacing: 0em;
  text-align: center;
}

h4 {
  font-family: Poppins;
  font-size: 27px;
  font-style: normal;
  font-weight: 400;
  line-height: 41px;
  letter-spacing: 0em;
  text-align: center;
  margin: 0 0 99px 0;
}

.navbar-auth {
  height: 96px;
  padding: 55px 0 0 0;
}

.coffee-logo {
  height: fit-content;
}

.coffee-shop {
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  color: #0B132A;
  margin: 0 0 0 15px;
}

</style>
