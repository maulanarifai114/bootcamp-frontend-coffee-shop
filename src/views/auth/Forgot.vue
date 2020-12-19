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
        <form @submit.prevent="">
          <Input id="email" type="email" placeholder="Enter your email adress"/>
          <Button color="btn-yellow btn-auth" label="Send" :nonActiveImg=1></Button>
          <Button color="btn-brown btn-auth" label="Resend Link" :nonActiveImg=1></Button>
        </form>
      </div>
    </main>

  </div>
</template>

<script>
import Input from '../../components/auth/base/Input'
import Button from '../../components/auth/base/Button'

export default {
  name: 'Forgot',
  components: {
    Input,
    Button
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
