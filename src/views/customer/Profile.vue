<template>
  <div class="box w-100">
    <div class="container">
      <h1>User Profile</h1>
      <main class="box-user w-100 d-flex flex-row">
        <div class="row flex-grow-1">
          <aside class="col-lg-4 col-12 d-flex flex-column mb-5">
            <div class="side-left mx-auto flex-grow-1 d-flex flex-column align-items-center">
              <div>
                <div class="img mb-4">
                  <img :src="!getProfile.image ? image : getProfile.image" alt="">
                </div>
              </div>
              <h2>{{getProfile.first_name}} {{getProfile.last_name}}</h2>
              <h4 class="mb-4">{{getProfile.email}}</h4>
              <!-- <Button label="Choose photo" color="btn-yellow btn-profile-1"></Button> -->
              <label for="choose" class="btn-yellow btn-profile-1 d-flex justify-content-center align-items-center">
                Choose photo
              </label>
              <input type="file" id="choose" placeholder="Choose Photo" ref="file" class="d-none" v-on:change="handleFileUpload()">
              <Button label="Remove photo" color="btn-brown btn-profile-1 mb-42" @trigger="deleteFileImage"></Button>
              <Button label="Edit Password" color="btn-profile-white mb-34" @trigger="editPassword"></Button>
              <div class="flex-grow-1">
                <div v-if="this.$store.state.editmode > 0">
                  <h3>Do you want to save the change?</h3>
                  <Button label="Save Change" color="btn-brown btn-profile-2" @trigger="updateprofilecust"></Button>
                  <Button label="Cancel" color="btn-yellow btn-profile-2" @trigger="changeStaticMode"></Button>
                </div>
              </div>
              <Button label="Log out" color="btn-profile-white " @trigger="logout"></Button>
            </div>
          </aside>
          <aside class="col-lg-8 col-12 d-flex flex-column">
            <div class="side-right flex-grow-1 position-relative">
              <button class="edit d-flex align-items-center justify-content-center position-absolute" @click.prevent="changeEditMode">
                <img src="../../assets/cust/edit.svg" alt="">
              </button>
              <h5>Contacts</h5>
              <div class="row">
                <div class="col-6">
                  <InputProfile id="email" label="Email Address :" type="email" :placeholder="getProfile.email" :editmode="this.$store.state.editmode" v-model="getProfile.email"/>
                  <br><br>
                  <InputProfile id="deliver" label="Delivery address :" type="text" :placeholder="getProfile.address" :editmode="this.$store.state.editmode" v-model="getProfile.address" />
                </div>
                <div class="col-1"></div>
                <div class="col-5">
                  <InputProfile id="phone" label="Mobile number :" type="text"  :placeholder="getProfile.phone_number" :editmode="this.$store.state.editmode" v-model="getProfile.phone_number" />
                </div>
              </div>
              <br><br>
              <h5>Details</h5>
              <div class="row">
                <div class="col-6">
                  <InputProfile id="display" label="Display Name:" type="text" :placeholder="getProfile.username" :editmode="this.$store.state.editmode" v-model="getProfile.username" />
                  <br>
                  <InputProfile id="first" label="First Name :" type="text"  :placeholder="getProfile.first_name" :editmode="this.$store.state.editmode" v-model="getProfile.first_name" />
                  <br>
                  <InputProfile id="last" label="Last Name :" type="text"  :placeholder="getProfile.last_name" :editmode="this.$store.state.editmode" v-model="getProfile.last_name" />
                </div>
                <div class="col-1"></div>
                <div class="col-5">
                  <InputProfile id="date" label="MM/DD/YY" type="date" :editmode="this.$store.state.editmode" placeholder="mm/dd/yyyy" v-model="getProfile.bod" />
                </div>
              </div>
              <br><br>
              <div class="row ">
                <div class="col-6 ">
                  <label class="label-gender container d-flex justify-content-center align-items-center">
                    <input @change="changeEdit" class="d-none" type="radio" name="gender" :checked="changeGender" :value="'male'" v-model="gender">
                    <div :class="gender === 'male' ? 'active-gender' : 'inactive-gender' ">
                      <div class="child"></div>
                    </div>
                    <p :class="gender === 'male' ? 'gender-active' : 'gender-nonactive'" >Male</p>
                  </label>
                </div>
                <div class="col-6 ">
                  <label class="label-gender container d-flex justify-content-center align-items-center" >
                    <input @change="changeEdit" class="d-none" type="radio" name="gender" :checked="changeGender" :value="'female'" v-model="gender">
                    <div :class="gender === 'female' ? 'active-gender' : 'inactive-gender' ">
                      <div class="child"></div>
                    </div>
                    <p :class="gender === 'female' ? 'gender-active' : 'gender-nonactive'">Female</p>
                  </label>
                </div>
              </div>
            </div>
            <div></div>
          </aside>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Button from '../../components/cust/base/Button'
import InputProfile from '../../components/cust/base/InputProfile'
import Swal from 'sweetalert2'

export default {
	title: 'Profile',
	name: 'Profile',
	components: {
		Button,
		InputProfile
	},
	data () {
		return {
			editMode: 0,
			image: 'https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png',
			gender: this.$store.state.profile.gender
		}
	},
	methods: {
		...mapActions({ getCustProfile: 'getCustProfile', updateProfile: 'updateProfile', updateImage: 'updateImage', deleteImage: 'deleteImage' }),
		logout () {
			localStorage.removeItem('role_id')
			localStorage.removeItem('token')
			localStorage.removeItem('id')
			this.$router.push('/auth/login')
			Swal.fire('Success', 'Comeback anytime you want', 'success')
		},
		changeEdit () {
			this.$store.commit('changeEditMode')
		},
		changeEditMode () {
			if (this.$store.state.editmode === 0) {
				this.$store.commit('changeEditMode')
			} else {
				this.$store.commit('changeStaticMode')
			}
		},
		changeStaticMode () {
			this.$store.commit('changeStaticMode')
		},
		changeGender (payload) {
			this.$store.commit('changeGender')
		},
		updateprofilecust () {
			const payload = {
				address: this.getProfile.address,
				email: this.getProfile.email,
				phone: this.getProfile.phone_number,
				username: this.getProfile.username,
				firstName: this.getProfile.first_name,
				lastName: this.getProfile.last_name,
				bod: this.getProfile.bod,
				gender: this.gender
			}
			if (payload.address === '' || payload.email === '' || payload.phone === '' || payload.username === '' || payload.firstName === '' || payload.lastName === '' || payload.bod === '' || payload.gender === '') {
				Swal.fire(
					'Error!',
					'Field Can Not Be Empty'
				)
			} else {
				this.updateProfile(payload)
					.then((res) => {
						Swal.fire(
							'Success!',
							'Your profile has been updated'
						)
						this.$store.commit('changeStaticMode')
						this.getCustProfile()
					})
			}
		},
		handleFileUpload () {
			// this.image = this.$refs.file.files[0]
			const image = this.$refs.file.files[0]
			console.log('>>>> 1st element in files array >>>> ', this.$refs.file.files[0])
			const formData = new FormData()
			formData.append('image', image)
			console.log('>> formData >> ', formData)
			this.$store.dispatch('updateImage', formData)
			this.getCustProfile()
		},
		deleteFileImage () {
			this.deleteImage()
				.then((res) => {
					Swal.fire(
						'Success!',
						'Your Image has been deleted'
					)
					this.getCustProfile()
					this.address = ''
				})
		},
		editPassword () {
			this.$router.push({ path: 'edit-password' })
		}
	},
	computed: {
		...mapGetters(['getProfile'])
	},
	created () {
		this.$store.watch(
			(state) => {
				return this.$store.state.profile
			},
			(newValue, oldValue) => {
				this.gender = newValue.gender
			},
			{
				deep: true
			}
		)
	},
	mounted () {
		this.getCustProfile()
	}
}
</script>

<style lang="scss" scoped>

.label-gender {
  cursor: pointer;
  transition: .3s;
}

.label-gender:hover {
  opacity: .8;
}

.active-gender {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #6A4029;
  display: flex;
  justify-content: center;
  align-items: center;
  .child {
    width: 20px;
    height: 20px;
    background: #FFBA33;
    border-radius: 50%;
  }
}

.inactive-gender {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #9f9f9f;
  display: flex;
  justify-content: center;
  align-items: center;
  .child {
    width: 20px;
    height: 20px;
    background: #ffffff;
    border-radius: 50%;
  }
}

.gender-active {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  color: #6A4029;
  margin: 0 0 0 10px;
}

.gender-nonactive {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  color: #9F9F9F;
  margin: 0 0 0 10px;
}

.edit {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background: #6A4029;
  top: 15px;
  right: 15px;
  border: none;
  outline: none;
  transition: .3s;
  padding: 0;
}

.edit:focus {
  outline: none;
}

.edit:hover {
  opacity: .8;
}

h5 {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 37px;
  color: #4F5665;
  margin: 0 0 21px 0;
}

.box {
  padding: 60px 0 0 0;
  height: 1185px;
  background-color: #dadada;
  background-image: url('../../assets/cust/bg-coffee.png');
  background-size: cover;
}

h1 {
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 35px;
  line-height: 50px;
  color: #FFFFFF;
  margin: 0 0 30px 0;
}

h3 {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #6A4029;
  margin: 0 0 37px 0;
}

.box-user {
  height: 955px;
  background: #F8F8F8;
  border-radius: 20px;
  padding: 55px 45px;
}

.side-left {
  width: 207px;
}

h2 {
  font-family: Rubik;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 1em;
  letter-spacing: 0em;
  text-align: center;
}

h4 {
  font-family: Rubik;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: center;
}

.side-right {
  border-radius: 10px;
  border-bottom: 12px solid #6A4029;
  background: #FFFFFF;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.22);
  padding: 30px;
}

.img {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background-color: #ffffff;
  // background-color: #B1B1B1;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

@media (max-width: 991px) {
  .box-user {
    height: fit-content;
  }

  .box {
    height: fit-content;
    padding: 60px 0;
  }
}
</style>
