<template>
  <div>

    <nav class="navbar-auth d-flex flex-row justify-content-center align-items-center">
      <div class="coffee-logo d-flex flex-row align-items-center">
        <img src="../../assets/auth/coffee-icon.png" alt="">
        <p class="coffee-shop">Coffee Shop</p>
      </div>
    </nav>

    <main class="main d-flex flex-column align-items-center">
      <h1>Forgot your password?</h1>
      <h4>Don’t worry, we got your back!</h4>
      <div class="group-form">
        <form>
          <Input id="email" type="email" placeholder="Enter your email adress" @keypress="checkEmail" />
          <Button color="btn-yellow btn-auth" label="Send" :nonActiveImg=1 @click="sendLink"></Button>
          <!-- <Button color="btn-brown btn-auth" label="Resend Link" :nonActiveImg=1 @click="sendLink"></Button> -->
        </form>
      </div>
    </main>

  </div>
</template>

<script>
import Input from '../../components/auth/base/Input'
import Button from '../../components/auth/base/Button'
import axios from 'axios'

export default {
  name: 'Forgot',
  components: {
    Input,
    Button
  },
  data () {
    return {
      email: ''
    }
  },
  methods: {
    checkEmail (e) {
      const inputEmail = e.target.value
      console.log('email', inputEmail)
      if (inputEmail.length >= 1) {
        this.email = inputEmail
      } else if (inputEmail.length < 1) {
        this.email = ''
      }
    },
    sendLink () {
      const email = this.email
      if (email.length < 1) {
        return alert('Fill the blank email')
      }
      axios.post(`${process.env.VUE_APP_BASE_URL}auth/forgot-password/request`, email)
        .then((res) => {
          return alert('Check your email now')
        })
        .catch((err) => {
          console.log(err.response.data)
        })
    }
  }
}
</script>

<style lang="scss" scoped>

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
