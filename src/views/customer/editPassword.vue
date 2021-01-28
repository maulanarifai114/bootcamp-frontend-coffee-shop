<template>
  <div class="container-fluid">
    <div class="row" style="margin:0px;">
      <aside class="col-lg-6 side-image-2 d-none d-lg-block"></aside>
      <aside class="col-12 col-lg-6 side-main">
          <nav class="navbar-auth d-flex flex-row justify-content-center align-items-center">
      <div class="coffee-logo d-flex flex-row align-items-center">
        <img src="../../assets/auth/coffee-icon.png" alt="">
        <p class="coffee-shop">Coffee Shop</p>
      </div>
    </nav>

    <main class="main d-flex flex-column align-items-center">
      <h1>Edit Your Password</h1>
      <h4>Don't forget me, he's the only one you forget</h4>
      <div class="group-form">
        <form @submit.prevent="">
          <Input id="oldPassword" :type="type" placeholder="Enter old password" v-model="oldPassword" @input="OldPassword"/>
          <span class=" text-danger validation">{{alert}}</span>
          <Input id="newPassword" :type="type" placeholder="Enter new password" v-model="newPassword"/>
          <Input id="repeatPassword" :type="type" placeholder="Repeat your new password" v-model="repeatPassword"  @input="repeat"/>
          <span class=" text-danger validation">{{alertRepeat}}</span>
          <div class="custom-control custom-checkbox checkbox-lg">
						<input @click="showPW" type="checkbox" class="custom-control-input" id="showPassword">
						<label class="custom-control-label validation" for="showPassword">Show Password</label>
					</div>
          <Button color="btn-yellow btn-auth" label="Save" :nonActiveImg=1 @click="save"></Button>
          <Button color="btn-secondary btn-auth" label="Cancel" :nonActiveImg=1 @click="cancel"></Button>
        </form>
      </div>
    </main>
      </aside>
    </div>
  </div>
</template>

<script>
import Input from '../../components/admin/base/Input'
import Button from '../../components/auth/base/Button'
import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'
export default {
	title: 'Edit Password',
	name: 'EditPassword',
	components: {
		Input,
		Button
	},
	data () {
		return {
			type: 'password',
			checkOldPassword: '',
			oldPassword: '',
			newPassword: '',
			repeatPassword: '',
			alert: '',
			alertRepeat: ''
		}
	},
	computed: {
		...mapGetters(['getProfile'])
	},
	mounted () {
		this.getCustProfile()
	},
	methods: {
		...mapActions(['getCustProfile', 'updateProfile']),
		showPW () {
			if (this.type === 'password') {
				this.type = 'text'
			} else {
				this.type = 'password'
			}
		},
		OldPassword (e) {
			const user = {
				email: this.$store.state.profile.email,
				password: this.oldPassword
			}
			axios.post(`${process.env.VUE_APP_BASE_URL}auth/login`, user)
				.then((res) => {
					this.checkOldPassword = '1'
					this.alert = ''
					console.log('benar')
				}).catch(() => {
					this.alert = 'Password Lama Salah'
				})
		},
		repeat (e) {
			if (this.repeatPassword !== this.newPassword) {
				this.alertRepeat = 'harus sama dengan new password'
			} else {
				this.alertRepeat = ''
			}
		},
		save () {
			if (this.newPassword.length < 8 && this.repeatPassword.length < 8) {
				return this.$swal.fire({
					icon: 'error',
					title: 'Your password is too short!',
					text: 'Use minimal 8 character'
					// text: 'Use minimal 8 character'
				})
				// return alert('Password is to short')
			} else if (this.checkOldPassword === '1' && this.newPassword === this.repeatPassword) {
				if (this.newPassword.length < 8 && this.repeatPassword.length < 8) {
					console.log('new', this.newPassword, 'repeat', this.repeatPassword)
					return this.$swal.fire({
						icon: 'error',
						title: 'Your password is too short!',
						text: 'Use minimal 8 character'
					})
				} else {
					const payload = {
						prev_password: this.oldPassword,
						password: this.newPassword,
						repeat_password: this.repeatPassword
					}
					axios.patch(`${process.env.VUE_APP_BASE_URL}/auth/edit-password`, payload)
						.then((res) => {
							this.$swal.fire({
								title: 'success!',
								text: 'password changed successfully',
								icon: 'success',
								confirmButtonText: 'Ok'
							})
							this.$router.push({ path: 'profile' })
						})
				}
			} else {
				this.$swal.fire({
					title: 'Warning!',
					text: 'error changing password',
					icon: 'warning',
					confirmButtonText: 'Ok'
				})
			}
		},
		cancel () {
			this.$router.push({ path: 'profile' })
		}
	}
}
</script>

<style lang="scss" scoped>

.validation {
	font-family: Rubik;
}

.side-image-2  {
  background-image: url('../../assets/auth/side-img-2.png');
  background-size: cover;
  height: 1628px;
  padding: 0;
  overflow: hidden;
  background-color: #2A2A2A;
}

.side-main {
  padding: 0;
  margin: 0;
}
.checkbox-lg{
        margin-bottom: 30px;
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
@media only screen and (max-width: 762px) {

}
@media only screen and (max-width: 762px) {
.side-image-2 {
  display: none;
}
}

</style>
