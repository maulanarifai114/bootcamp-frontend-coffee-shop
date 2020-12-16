<template>
  <div class="group-form">
    <form @submit.prevent="">
      <Inputed id="email" type="email" placeholder="Enter your email adress" label="Email Adress :"/>
      <Inputed id="password" type="password" placeholder="Enter your password" label="Password :"/>
      <router-link to="/auth/forgot" class="forgot">Forgot Password?</router-link>
      <div class="mb-5"></div>
      <Button color="btn-yellow btn-auth" label="Login" :nonActiveImg=1></Button>
    </form>
    <Button color="btn-white-auth" label="Login With Google" :nonActiveImg=0></Button>
    <TextMuted text="Don’t have an account?"></TextMuted>
    <Button color="btn-brown btn-auth" label="Sign Up Here" :nonActiveImg=1></Button>
  </div>
</template>

<script>
import Button from '../base/Button'
import Inputed from '../base/Input'
import TextMuted from '../base/TextMuted'

export default {
  name: 'LoginForm',
  components: {
    Button,
    Inputed,
    TextMuted
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
  color: #6A4029;
  transition: .3s;
}

.forgot:hover {
  opacity: .8;
}
</style>
