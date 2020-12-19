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
          <Input id="newPassword" :type="type" placeholder="Enter new password"/>
          <Input id="password" :type="type" placeholder="Repeat your new password"/>
          <div class="custom-control custom-checkbox checkbox-lg">
  <input @click="showPW" type="checkbox" class="custom-control-input" id="showPassword">
  <label class="custom-control-label" for="showPassword">Show Password</label>
</div>
          <Button color="btn-yellow btn-auth" label="Login" :nonActiveImg=1></Button>
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
  },
  data () {
    return {
      type: 'password'
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
