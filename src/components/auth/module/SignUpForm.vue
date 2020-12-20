<template>
  <div class="group-form">
    <form @submit.prevent="">
      <Inputed id="email" type="email" placeholder="Enter your email adress" label="Email Adress :" @keyup="checkEmail" />
      <p class=" text-danger" v-if="!email.includes('@')">Please enter your email</p>
      <Inputed id="password" type="password" placeholder="Enter your password" label="Password :"  @keyup="checkPassword" />
      <p class=" text-danger" v-if="pass.length < 8">Password is to short</p>
      <Inputed id="phone" type="number" placeholder="Enter your phone number" label="Phone Number :" @keyup="checkNum" />
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
      number: ''
    }
  },
  methods: {
    goLogin () {
      this.$router.push('/auth/login')
    },
    checkPassword (e) {
      const inputPass = e.target.value
      console.log(inputPass)
      if (inputPass.length >= 8) {
        this.pass = inputPass
      } else if (inputPass.length < 8) {
        this.pass = ''
      }
    },
    checkEmail (e) {
      const inputEmail = e.target.value
      console.log(inputEmail)
      if (inputEmail.includes('@')) {
        this.email = inputEmail
      } else if (!inputEmail.includes('@')) {
        this.email = ''
      }
    },
    checkNum (e) {
      const inputNum = e.target.value
      console.log(inputNum)
      if (inputNum.length > 0) {
        this.number = inputNum
      } else if (!inputNum.length <= 0) {
        this.number = ''
      }
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
      console.log(user)
      if (user.email.length < 1) {
        return alert('Fill the blank email')
      } else if (user.password.length < 8) {
        return alert('Your password is too short')
      } else if (Number.isNaN(user.phone_number)) {
        return alert('Fill the blank phone number')
      }
      axios.post(`${process.env.VUE_APP_BASE_URL}auth/signup`, user)
        .then((res) => {
          alert(res.data.messages)
          this.$router.push('/auth/login')
        })
        .catch((err) => {
          alert(err.response.data.messages)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.group-form {
  width: 505px;
}
</style>
