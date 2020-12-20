<template>
  <div class="container">
    <br><br><br><br>
    <aside class="row wrapper">
      <section class="col-12 col-lg-5">
        <div class="photo d-flex justify-content-center align-items-center rounded-circle mb-5">
          <img src="../../assets/admin/default.png" alt="">
        </div>
        <Button color="btn-navy btn-admin-1" label="Take a picture"></Button>
        <Button color="btn-yellow-admin btn-admin-1" label="Choose from gallery"></Button>
        <br><br>
        <!-- Category -->
        <div class=" d-flex flex-column ">
          <h5 class="label">Input category :</h5>
          <InputCat id="cat" label="Select category" value="category" @change="lihatVal"></InputCat>
        </div>
        <br><br>

        <!-- Delivery Hour -->
        <div class=" d-flex flex-column ">
          <h5 class="label">Delivery Hour :</h5>
          <InputTime id="start" label="Select start hour" value="start"></InputTime>
          <InputTime id="end" label="Select end hour" value="end"></InputTime>
        </div>
        <br><br>
        <!-- Input Stock -->
        <div class=" d-flex flex-column ">
          <h5 class="label">Input stock :</h5>
          <label for="stock">
            <input type="number" id="stock" class="time w-100" placeholder="Input Stock">
          </label>
        </div>
      </section>
      <section class="col-12 col-lg-1"></section>
      <section class="col-12 col-lg-6">
        <Input @input="inputValue" id="name" label="Name :" placeholder="Type product name min. 50 characters" :max="50" type="text"/>
        <br><br>
        <Input @input="inputValue" id="price" label="Price" placeholder="Type the price" type="number"/>
        <br><br>
        <Input id="desc" label="Description :" placeholder="Describe your product min. 150 characters" :max="150" type="text"/>
        <br><br>
        <h5 class="label-size">Input product size :</h5>
        <h6 class="text-muted">Click size you want to use for this product</h6>
        <!-- R L XL -->
        <div class="d-flex justify-content-between flex-row btn-group-toggle" v-if="category === 'coffee' || category === 'noncoffee' || category === 'fav' || category === 'add'">
          <label class="btn d-flex align-items-center justify-content-center" for="r" :class="size1 === 'r' ? 'selected':'unselected'">
            <input type="radio" name="size1" id="r" v-model="size1" value="r" class="d-none"> R
          </label>
          <label class="btn d-flex align-items-center justify-content-center" for="l" :class="size1 === 'l' ? 'selected':'unselected'">
            <input type="radio" name="size1" id="l" v-model="size1" value="l" class="d-none"> L
          </label>
          <label class="btn d-flex align-items-center justify-content-center" for="xl" :class="size1 === 'xl' ? 'selected':'unselected'">
            <input type="radio" name="size1" id="xl" v-model="size1" value="xl" class="d-none"> XL
          </label>
        </div>
        <br v-if="category === 'fav' || category === 'add'">
        <!-- Gram -->
        <div class="d-flex justify-content-between flex-row btn-group-toggle" v-if="category === 'foods' || category === 'fav' || category === 'add'" @>
          <label class="btn btn-gram d-flex align-items-center justify-content-center" for="250" :class="size2 === '250' ? 'selected':'unselected'">
            <input type="radio" name="size2" id="250" v-model="size2" value="250" class="d-none"> 250g
          </label>
          <label class="btn btn-gram d-flex align-items-center justify-content-center" for="300" :class="size2 === '300' ? 'selected':'unselected'">
            <input type="radio" name="size2" id="300" v-model="size2" value="300" class="d-none"> 300g
          </label>
          <label class="btn btn-gram d-flex align-items-center justify-content-center" for="500" :class="size2 === '500' ? 'selected':'unselected'">
            <input type="radio" name="size2" id="500" v-model="size2" value="500" class="d-none"> 500g
          </label>
        </div>
        <br>
        <div v-if="category !== ''">
          <Button color="btn-brown btn-admin-3" label="Reset Size" @trigger="reset"></Button>
        </div>
        <br><br><br>
        <!-- Delivery Method -->
        <h5 class="label-size">Input delivery methods :</h5>
        <h6 class="text-muted">Click methods you want to use for this product</h6>
        <br>
        <div class=" d-flex justify-content-between flex-column flex-lg-row ">
          <Button color="btn-yellow-admin btn-admin-3 mb-3" label="Home Delivery"></Button>
          <Button color="btn-yellow-admin btn-admin-3 mb-3" label="Dine in"></Button>
          <Button color="btn-cancel btn-admin-3 mb-3" label="Take Away"></Button>
        </div>
        <br><br><br><br>
        <Button color="btn-brown btn-admin-1" label="Save Product"></Button>
        <br>
        <Button color="btn-cancel btn-admin-1" label="Cancel"></Button>
      </section>
    </aside>
  </div>
</template>

<script>
import Button from '../../components/admin/base/Button'
import Input from '../../components/admin/base/Input'
import InputTime from '../../components/admin/base/InputTime'
import InputCat from '../../components/admin/base/InputCat'

export default {
  name: 'NewProduct',
  components: {
    Button,
    Input,
    InputTime,
    InputCat
  },
  data () {
    return {
      size1: '',
      size2: '',
      category: '',
      time: ''
    }
  },
  methods: {
    inputValue (e) {
      console.log(e)
    },
    lihatVal (e) {
      const category = e
      this.category = category
      console.log('this.cat', this.category)
    },
    reset () {
      this.size1 = ''
      this.size2 = ''
    }
  }
}
</script>

<style lang="scss" scoped>

.btn-gram {
  font-size: 15px!important;
}

.btn {
  height: 70px;
  width: 70px;
  font-family: Poppins;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 45px;
  letter-spacing: 0em;
  text-align: center;
  border: none;
  border-radius: 50%;
  transition: .3s;
}

.btn:focus {
  outline: none;
}

.btn:hover {
  opacity: .8;
}

.selected {
  background: #FFBA33;
  color: #000000;
}

.selected:hover {
  color: #000000;
}

.unselected {
  background: rgba(186, 186, 186, 0.35);
  color: #4F5665;
}

.unselected:hover {
  color: #4F5665;
}
.label-size {
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 30px;
  color: #6A4029;
  margin: 0 0 20px 0!important;
}

.text-muted {
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  color: #9F9F9F;
  margin: 0 0 30px 0;
}

.time {
  -webkit-appearance:none;
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
  color: #353535;
  margin: 0 0 20px 0;
}

.time:focus {
  outline: 0;
}

.time::placeholder {
  color: #9F9F9F;
}

.label {
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 30px;
  color: #6A4029;
  margin: 0 0 45px 0;
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

@media (max-width: 350px) {
  .photo {
    width: 100%;
    height: 100vw;
  }
}
</style>
