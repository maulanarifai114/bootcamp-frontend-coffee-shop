<template>
  <div class="group-form">
    <form @submit.prevent="">
      <Inputed id="email" type="email" placeholder="Enter your email adress" label="Email Adress :"/>
      <Inputed id="password" type="password" placeholder="Enter your password" label="Password :"/>
      <Inputed id="phone" type="text" placeholder="Enter your phone number" label="Phone Number :"/>
      <div class="mb-3"></div>
      <Button color="btn-yellow btn-auth" label="Sign Up" :nonActiveImg=1></Button>
    </form>
    <Button color="btn-white-auth" label="Sign Up With Google" :nonActiveImg=0></Button>
    <TextMuted text="Already have an account?"></TextMuted>
    <Button color="btn-brown btn-auth" label="Login Now" :nonActiveImg=1></Button>
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
  }
}
</script>

<style lang="scss" scoped>
.group-form {
  width: 505px;
}
</style>
