<template>
  <div class="container">
    <br><br><br><br>
    <aside class="row wrapper">
      <section class="col-12 col-lg-5">
        <div>
          <div class="photo d-flex justify-content-center align-items-center rounded-circle mb-5">
            <img :src="avatar" alt="" height="300px">
          </div>
        </div>
        <Button color="btn-navy btn-admin-1" label="Take a picture"></Button>
        <label style="cursor:pointer;" for="uploadImage" class="btn-yellow btn-admin-1 d-flex justify-content-center align-items-center">
                Choose from gallery
              </label>
        <input class="d-none" id="uploadImage" type="file" @change="getImage"/>
        <br><br>
        <!-- Category -->
        <div class=" d-flex flex-column ">
          <h5 class="label">Input category :</h5>
          <InputCat id="cat" label="Select category" value="category" @change="lihatVal"></InputCat>
        </div>
        <br><br>
        <!-- Delivery Hour -->
        <div class=" d-flex flex-column ">
          <!-- <h5 class="label">Delivery Hour :</h5> -->
          <Input label="Delivery Hour :" type="datetime-local" v-model="start" />
          <Input type="datetime-local" v-model="end" />
        </div>
        <br><br>
        <!-- Input Stock -->
        <div class=" d-flex flex-column ">
          <h5 class="label">Input stock :</h5>
          <label for="stock">
            <input v-model="stock" type="number" id="stock" class="time w-100" placeholder="Input Stock">
          </label>
        </div>
      </section>
      <section class="col-12 col-lg-1"></section>
      <section class="col-12 col-lg-6">
        <Input v-model="name" id="name" label="Name :" placeholder="Type product name min. 50 characters" :max="50" type="text"/>
        <br><br>
        <Input v-model="price" id="price" label="Price" placeholder="Type the price" type="number"/>
        <br><br>
        <Input v-model="description" id="desc" label="Description :" placeholder="Describe your product min. 150 characters" :max="150" type="text"/>
        <br><br>
        <h5 class="label-size">Input product size :</h5>
        <h6 class="text-muted">Click size you want to use for this product</h6>
        <!-- R L XL -->
        <div class="d-flex justify-content-between flex-row btn-group-toggle" v-if="category === '1' || category === '2'">
          <label class="btn d-flex align-items-center justify-content-center" for="r" :class="allSize.includes('R') === true ? 'selected':'unselected'">
            <input type="checkbox" id="r" v-model="allSize" value="R" class="d-none"> R
          </label>
          <label class="btn d-flex align-items-center justify-content-center" for="l" :class="allSize.includes('L') === true ? 'selected':'unselected'">
            <input type="checkbox" id="l" v-model="allSize" value="L" class="d-none"> L
          </label>
          <label class="btn d-flex align-items-center justify-content-center" for="xl" :class="allSize.includes('XL') === true ? 'selected':'unselected'">
            <input type="checkbox" id="xl" v-model="allSize" value="XL" class="d-none"> XL
          </label>
        </div>
        <!-- Gram -->
        <div class="d-flex justify-content-between flex-row btn-group-toggle" v-if="category === '3'">
          <label class="btn btn-gram d-flex align-items-center justify-content-center" for="250" :class="allSize.includes('250') === true ? 'selected':'unselected'">
            <input type="checkbox" id="250" v-model="allSize" value="250" class="d-none"> 250g
          </label>
          <label class="btn btn-gram d-flex align-items-center justify-content-center" for="300" :class="allSize.includes('300') === true ? 'selected':'unselected'">
            <input type="checkbox" id="300" v-model="allSize" value="300" class="d-none"> 300g
          </label>
          <label class="btn btn-gram d-flex align-items-center justify-content-center" for="500" :class="allSize.includes('500') === true ? 'selected':'unselected'">
            <input type="checkbox" id="500" v-model="allSize" value="500" class="d-none"> 500g
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
              <label class="btn-admin-3 mr-3 d-flex justify-content-center align-items-center" for="dine" :class="deliver.includes('dine') ? 'btn-yellow-admin' : 'btn-cancel'" >
              <input type="radio" name="deliver" id="dine" v-model="deliver" value="dine" class="d-none">
              Dine In
              </label>
              <label class="btn-admin-3 mr-3 d-flex justify-content-center align-items-center" for="door" :class="deliver.includes('door') ? 'btn-yellow-admin' : 'btn-cancel'">
              <input type="radio" name="deliver" id="door" v-model="deliver" value="door" class="d-none">
              Delivery Home
              </label>
              <label class="btn-admin-3 mr-3 d-flex justify-content-center align-items-center" for="pick" :class="deliver.includes('pick') ? 'btn-yellow-admin' : 'btn-cancel'" >
                <input type="radio" name="deliver" id="pick" v-model="deliver" value="pick" class="d-none">
              Pick Up
              </label>
        </div>
        <br><br><br><br>
        <Button @trigger="inputForm()" color="btn-brown btn-admin-1" label="Save Product"></Button>
        <br>
        <Button color="btn-cancel btn-admin-1" label="Cancel"></Button>
      </section>
    </aside>
  </div>
</template>

<script>
import Button from '../../components/admin/base/Button'
import Input from '../../components/admin/base/Input'
import InputCat from '../../components/admin/base/InputCat'
import axios from 'axios'
export default {
	name: 'NewProduct',
	components: {
		Button,
		Input,
		InputCat
	},
	data () {
		return {
			deliver: '',
			din: 0,
			door: 0,
			pick: 0,
			avatar: 'https://lh3.googleusercontent.com/EbXw8rOdYxOGdXEFjgNP8lh-YAuUxwhOAe2jhrz3sgqvPeMac6a6tHvT35V6YMbyNvkZL4R_a2hcYBrtfUhLvhf-N2X3OB9cvH4uMw=w1064-v0',
			category: '',
			start: '',
			end: '',
			stock: '',
			name: '',
			price: '',
			description: '',
			allSize: []
		}
	},
	methods: {
		inputName (e) {
			return e
		},
		lihatVal (e) {
			const category = e
			this.category = category
			this.allSize = []
		},
		startDelivery (e) {
			const start = e
			this.start = start
		},
		endDelivery (e) {
			const end = e
			this.end = end
		},
		getImage (e) {
			var image = e.target.files[0]
			var reader = new FileReader()
			if (image.type !== 'image/png' && image.type !== 'image/jpg' && image.type !== 'image/jpeg') {
				this.$swal.fire({
					title: 'Warning!',
					text: 'Only .png, .jpg and .jpeg format allowed!',
					icon: 'warning',
					confirmButtonText: 'Ok'
				})
			} else if (image.size >= 4388608) {
				this.$swal.fire({
					title: 'Warning!',
					text: 'Image size is too large, it must be under 4MB',
					icon: 'warning',
					confirmButtonText: 'Ok'
				})
			} else {
				reader.readAsDataURL(image)
				reader.onload = e => {
					this.avatar = e.target.result
				}
			}
		},
		inputForm () {
			var data = new FormData()
			var inputGambar = document.getElementById('uploadImage')
			var dataFile = inputGambar.files[0]
			const sizes = this.allSize.join(',')
			if (this.deliver === 'dine') {
				this.din = 1
			} else if (this.deliver === 'door') {
				this.door = 1
			} else if (this.deliver === 'pick') {
				this.pick = 1
			}

			// Tambahkan data ke Form Data
			data.append('is_dine_in', this.din)
			data.append('is_home_delivery', this.door)
			data.append('is_pick_up', this.pick)
			data.append('category_id', this.category)
			data.append('start_delivery', this.start)
			data.append('end_delivery', this.end)
			data.append('stock', this.stock)
			data.append('name', this.name)
			data.append('price', this.price)
			data.append('description', this.description)
			data.append('size', sizes)
			data.append('image', dataFile)

			axios.post(`${process.env.VUE_APP_BASE_URL}products`, data, { headers: { 'Content-Type': 'multipart/form-data' } })
				.then(res => {
					this.$swal.fire({
						title: 'Success!',
						text: `Create Product ${res.data.result.name}`,
						icon: 'success',
						confirmButtonText: 'Ok'
					})
					this.$router.push('/admin/product-admin')
					console.log(res)
				})
				.catch(err => {
					this.$swal.fire({
						title: 'Warning!',
						text: err.response.data.message,
						icon: 'warning',
						confirmButtonText: 'Ok'
					})
					console.log(err.response)
				})
		},
		reset () {
			this.allSize = []
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
  margin: 0 auto;
  border-radius: 100%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
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
