<template>
  <div class="group-form">
    <form @submit.prevent="">
      <Inputed id="email" type="email" placeholder="Enter your email adress" label="Email Adress :" @keyup="checkEmail" />
      <p class=" text-danger" v-if="!includeEmail.includes('@')">Please enter your email</p>
      <Inputed id="password" type="password" placeholder="Enter your password" label="Password :"  @keyup="checkPassword" />
      <p class=" text-danger" v-if="isLong.length < 8">Password is to short</p>
      <Inputed id="phone" type="number" placeholder="Enter your phone number" label="Phone Number :"/>
      <div class="mb-3"></div>
      <Button color="btn-yellow btn-auth" label="Sign Up" :nonActiveImg=1></Button>
    </form>
    <Button color="btn-white-auth" label="Sign Up With Google" :nonActiveImg=0></Button>
    <TextMuted text="Already have an account?"></TextMuted>
    <router-link to="/auth/login">
      <Button color="btn-brown btn-auth" label="Login Now" :nonActiveImg=1></Button>
    </router-link>
  </div>
</template>

<script>
import Button from '../base/Button'
import Inputed from '../base/Input'
import TextMuted from '../base/TextMuted'

export default {
  name: 'SignUpForm',
  components: {
    Button,
    Inputed,
    TextMuted
  },
  data () {
    return {
      isLong: '',
      includeEmail: ''
    }
  },
  methods: {
    checkPassword (e) {
      const password = e.target.value
      if (password.length >= 8) {
        this.isLong = password
      } else if (password.length < 8) {
        this.isLong = ''
      }
    },
    checkFocus (e) {
      console.log('checkfocus', e.target.value)
    },
    checkEmail (e) {
      const email = e.target.value
      if (email.includes('@')) {
        this.includeEmail = email
      } else if (!email.includes('@')) {
        this.includeEmail = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.group-form {
  width: 505px;
}
</style>
