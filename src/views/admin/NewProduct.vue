<template>
  <div class="container">
    <p class="head-category pt-5">Favorite & Promo <span class="detail"> > Add New Product</span></p>
    <div class="row wrapper">
      <div class="col-5">
        <div class="photo d-flex justify-content-center align-items-center rounded-circle mb-5">
          <img src="../../assets/admin/default.png" alt="">
        </div>
        <Button color="btn-navy btn-admin-1" label="Take a picture"></Button>
        <Button color="btn-yellow-admin btn-admin-1" label="Choose from gallery"></Button>
        <br><br><br><br><br>
        <div class=" d-flex flex-column ">
          <label class="label">Delivery Hour :</label>
          <label for="timestart">
            <input type="time" id="timestart" class="time w-100" placeholder="Select start hour">
          </label>
          <label for="timeend">
            <input type="time" id="timeend" class="time w-100" placeholder="Select start hour">
          </label>
        </div>
        <br><br><br><br><br>
        <div class=" d-flex flex-column ">
          <label class="label">Input stock :</label>
          <label for="timestart">
            <input type="number" id="timestart" class="time w-100" placeholder="Input Stock">
          </label>
        </div>
      </div>
      <div class="col-1"></div>
      <div class="col-6">
        <Button color="btn-brown btn-profile-1" label="Test"></Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '../../components/admin/base/Button'

export default {
  name: 'NewProduct',
  components: {
    Button
  }
}
</script>

<style lang="scss" scoped>

.label {
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 30px;
  color: #6A4029;
  margin: 0 0 45px 0;
}

.time {
  height: 83px;
  border: 1px solid #9F9F9F;
  border-radius: 20px;
  padding: 0 33px;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 138.84%;
  letter-spacing: 0.03em;
  color: #9F9F9F;
  margin: 0 0 20px 0;
}

.time:focus {
  outline: 0;
}

.wrapper {
  margin: 0 0 106px 0;
}

.photo {
  width: 350px;
  height: 350px;
  background: rgba(186, 186, 186, 0.35);
  cursor: pointer;
  transition: .3s;
  margin: 0 auto
}

.photo:hover {
  opacity: .8;
}

.head-category {
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  color: #4F5665;
  margin: 0 0 62px 0;
}

.detail {
  font-family: Rubik;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color:  #6A4029;
}

</style>
