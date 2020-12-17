<template>
  <div class="box w-100">
    <div class="container">
      <h1>User Profile</h1>
      <main class="box-user w-100 d-flex flex-row">
        <div class="row flex-grow-1">
          <aside class="col-4 d-flex flex-column">
            <div class="side-left mx-auto flex-grow-1 d-flex flex-column align-items-center">
              <div class="img mb-4">
                <img src="../../assets/cust/profile.png" alt="" class="w-100">
              </div>
              <h2>Zulaikha</h2>
              <h4 class="mb-4">zulaikha17@gmail.com</h4>
              <Button label="Choose photo" color="btn-yellow btn-profile-1"></Button>
              <Button label="Remove photo" color="btn-brown btn-profile-1 mb-42"></Button>
              <Button label="Edit Password" color="btn-profile-white mb-34"></Button>
              <div class="flex-grow-1">
                <div class="save">
                  <h3>Do you want to save the change?</h3>
                  <Button label="Save Change" color="btn-brown btn-profile-2"></Button>
                  <Button label="Cancel" color="btn-yellow btn-profile-2"></Button>
                </div>
              </div>
              <Button label="Log out" color="btn-profile-white "></Button>
            </div>
          </aside>
          <aside class="col-8 d-flex flex-column">
            <div class="side-right flex-grow-1">
              <Button label="Add" color="btn-brown btn-profile-1"></Button>
              <Button label="Add2" color="btn-yellow btn-profile-2"></Button>
            </div>
            <div></div>
          </aside>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Button from '../../components/cust/base/Button'

export default {
  name: 'Profile',
  components: {
    Button
  }
}
</script>

<style lang="scss" scoped>
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
  background-color: #c9c9c9;
  overflow: hidden;
}

</style>
