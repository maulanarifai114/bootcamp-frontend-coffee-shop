<template>
  <div class="container big-box">
    <!-- Category -->
    <p class="head-category pt-5">
      Favorite & Promo <span class="detail"> > Cold Brew</span>
    </p>
    <main class="row">
      <!-- Delivery and Time -->
      <aside class="col-6 d-flex flex-column align-items-center">
        <div class="img-wrap">
          <img src="../../assets/cust/cold-brew.png" alt="product" />
        </div>
        <button class="trash"><i class="far fa-trash-alt"></i></button>
        <div class="align-self-start">
          <div class="del-time">
            <h4>Delivery and Time</h4>
            <div class="d-flex mb-5">
              <div class="btn-group-toggle">
                <label
                  class="btn mr-3"
                  for="dine"
                  :class="deliver.includes('dine') ? 'selected' : 'unselected'"
                >
                  <input
                    type="checkbox"
                    name="deliver"
                    id="dine"
                    v-model="deliver"
                    value="dine"
                  />
                  Dine In
                </label>
                <label
                  class="btn mr-3"
                  for="door"
                  :class="deliver.includes('door') ? 'selected' : 'unselected'"
                >
                  <input
                    type="checkbox"
                    name="deliver"
                    id="door"
                    v-model="deliver"
                    value="door"
                  />
                  Door Delivery
                </label>
                <label
                  class="btn mr-3"
                  for="pick"
                  :class="deliver.includes('pick') ? 'selected' : 'unselected'"
                >
                  <input
                    type="checkbox"
                    name="deliver"
                    id="pick"
                    v-model="deliver"
                    value="pick"
                  />
                  Pick Up
                </label>
              </div>
            </div>
            <div :class="deliver.includes('door') ? '' : 'd-none'">
              <div class=" align-items-center mb-3">
                <select id="start"  class="w-100">
                  <option value="start" disabled selected class="disabled"
                    >Select start hour</option
                  >
                  <option value="00">00:00</option>
                  <option value="01">01:00</option>
                  <option value="02">02:00</option>
                  <option value="03">03:00</option>
                  <option value="04">04:00</option>
                  <option value="05">05:00</option>
                  <option value="06">06:00</option>
                  <option value="07">07:00</option>
                  <option value="08">08:00</option>
                  <option value="09">09:00</option>
                  <option value="10">10:00</option>
                  <option value="11">11:00</option>
                  <option value="12">12:00</option>
                  <option value="13">13:00</option>
                  <option value="14">14:00</option>
                  <option value="15">15:00</option>
                  <option value="16">16:00</option>
                  <option value="17">17:00</option>
                  <option value="18">18:00</option>
                  <option value="19">19:00</option>
                  <option value="20">20:00</option>
                  <option value="21">21:00</option>
                  <option value="22">22:00</option>
                  <option value="23">23:00</option>
                </select>
              </div>
              <div class="align-items-center">
                <select id="end" class="w-100">
                  <option value="end" disabled selected class="disabled"
                    >Select end hour</option
                  >
                  <option value="00">00:00</option>
                  <option value="01">01:00</option>
                  <option value="02">02:00</option>
                  <option value="03">03:00</option>
                  <option value="04">04:00</option>
                  <option value="05">05:00</option>
                  <option value="06">06:00</option>
                  <option value="07">07:00</option>
                  <option value="08">08:00</option>
                  <option value="09">09:00</option>
                  <option value="10">10:00</option>
                  <option value="11">11:00</option>
                  <option value="12">12:00</option>
                  <option value="13">13:00</option>
                  <option value="14">14:00</option>
                  <option value="15">15:00</option>
                  <option value="16">16:00</option>
                  <option value="17">17:00</option>
                  <option value="18">18:00</option>
                  <option value="19">19:00</option>
                  <option value="20">20:00</option>
                  <option value="21">21:00</option>
                  <option value="22">22:00</option>
                  <option value="23">23:00</option>
                </select>
              </div>
            </div>
          </div>
          <!-- Choose size -->
          <div class="box w-100 d-flex flex-column mt-4">
          <h4>Choose a Size</h4>
          <!-- R L XL -->
          <div class="d-flex justify-content-around flex-row btn-group-toggle" v-if="category === 'coffee'">
            <label class="btn btn-size d-flex align-items-center justify-content-center" for="r" :class="size.includes('r') ? 'selectedSize' : 'unselectedSize'">
              <input type="checkbox" name="size" id="r" v-model="size" value="r" class="d-none"/>
              R
            </label>

            <label class="btn btn-size d-flex align-items-center justify-content-center" for="l" :class="size.includes('l') ? 'selectedSize' : 'unselectedSize'">
              <input type="checkbox" name="size" id="l" v-model="size" value="l" class="d-none"/>
              L
            </label>
            <label class="btn btn-size d-flex align-items-center justify-content-center" for="xl" :class="size.includes('xl') ? 'selectedSize' : 'unselectedSize'">
              <input type="checkbox" name="size" id="xl" v-model="size" value="xl" class="d-none" />
              XL
            </label>
          </div>

          <!-- Gram -->
          <div class="d-flex justify-content-around flex-row btn-group-toggle" v-if="category === 'fav' || category === 'add'">
            <label class="btn gram btn-size d-flex align-items-center justify-content-center" for="250" :class="size.includes('250') ? 'selectedSize' : 'unselectedSize'">
              <input type="checkbox" name="size" id="250" v-model="size" value="250" class="d-none"/>
              250g
            </label>

            <label class="btn gram btn-size d-flex align-items-center justify-content-center" for="300" :class="size.includes('300') ? 'selectedSize' : 'unselectedSize'">
              <input type="checkbox" name="size" id="300" v-model="size" value="300" class="d-none"/>
              350g
            </label>
            <label class="btn gram btn-size d-flex align-items-center justify-content-center" for="500" :class="size.includes('500') ? 'selectedSize' : 'unselectedSize'">
              <input type="checkbox" name="size" id="500" v-model="size" value="500" class="d-none" />
              500g
            </label>
          </div>
        </div>
        <!-- end Choose size -->
        </div>
      </aside>
      <!-- Description, Price, Amount -->
      <aside class="col-6 d-flex flex-column align-items-center">
        <Input id="name" label="Name :" placeholder="Type product name min. 50 characters" :max="50" type="text" class="w-100"/>
        <br><br>
        <Input id="price" label="Price" placeholder="Type the price" type="number" class="w-100"/>
        <br><br>
        <Input id="desc" label="Description :" placeholder="Describe your product min. 150 characters" :max="150" type="text" class="w-100"/>
        <br><br>
       <Input id="stock" label="Stock" placeholder="stock" type="number" class="w-100"/>
        <br><br>
        <Button color="btn-brown btn-detail" label="Save Change"></Button>
      </aside>
    </main>
    <main class="row pt-5">
    </main>
  </div>
</template>

<script>
import Input from '../../components/admin/base/Input'
import Button from '../../components/cust/base/Button'

export default {
  name: 'ProductDetail',
  components: {
    Button,
    Input
  },
  data () {
    return {
      category: 'add',
      size: [],
      deliver: []
    }
  }
}
</script>

<style lang="scss" scoped>
.trash {
  position: absolute;
  top: 230px;
  left: 65%;
  height: 56px;
  width: 56px;
  font-size: 20px;
  text-align: center;
  border: none;
  border-radius: 50%;
  background: #6a4029;
  color: white;
}

.trash:focus {
  outline: none;
}

.big-box {
  // margin: 0 0 480px 0;
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 480px;
}

// this delivery time
.del-time {
  height: max-content;
  width: 488px;
  border-radius: 20px;
  color: #ffffff;
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.08);
  padding: 30px;
}
.selected {
  height: 42px;
  border-radius: 10px;
  background: #6a4029;
  color: white;
  padding: 6px 14px;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
  box-shadow: 0px 6px 20px 0px rgba(137, 85, 55, 0.4);
  transition: 0.3s;
}

.selected:hover {
  color: white !important;
  opacity: 0.8;
}

.unselected {
  height: 42px;
  border-radius: 10px;
  background: #f4f4f8;
  color: #9f9f9f;
  padding: 6px 14px;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
  border: 1px solid rgba(186, 186, 186, 0.35);
  transition: 0.3s;
}

.unselected:hover {
  color: #9f9f9f !important;
  opacity: 0.8;
}
// end delivery time

// delivery hour
select {
  -webkit-appearance: none;
  height: 60px;
  border: 1px solid #9f9f9f;
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
select:focus {
  outline: 0;
}
select::placeholder {
  color: #9f9f9f;
}
// end dlivery hour

.label-tag {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  color: #000000;
}

.head-category {
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  color: #4f5665;
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
  color: #6a4029;
}

.img-wrap {
  height: 300px;
  width: 300px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 0 102px 0;
}
.hide {
  display: none;
}

.btn-size {
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
  transition: 0.3s;
  margin: 0;
}

.btn-size:focus {
  outline: none;
}

.btn-size:hover {
  opacity: 0.8;
}
.gram {
    font-size: 20px;
}
.box {
  padding: 22px 40px;
  height: 168px;
  background: #ffffff;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
}
h4 {
  font-family: Poppins;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: center;
  color: #000000;
  margin: 0 0 18px 0;
}

.selectedSize {
  background: #ffba33;
  color: #000000;
}

.selectedSize:hover {
  color: #000000;
}

.unselectedSize {
  background: rgba(186, 186, 186, 0.35);
  color: #4f5665;
}

.unselectedSize:hover {
  color: #4f5665;
}
</style>
