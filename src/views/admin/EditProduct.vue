<template>
  <div class="container big-box">
    <!-- Category -->
    <p class="head-category pt-5">
      <span class="detail">{{name}}</span>
    </p>
    <main class="row">
      <!-- Delivery and Time -->
      <aside class="col-md-6 d-flex flex-column align-items-center">
        <div>
          <div class="img-wrap">
            <img :src="avatar || dataProduct.images" alt="product" height="300px"/>
          </div>
        </div>
        <label class="edit" for="uploadImage" style="cursor: pointer"><i class="fas fa-pencil-alt" style="margin-top:18px"></i></label>
        <input class="d-none" id="uploadImage" type="file" @change="getImage"/>
        <div class="align-self-start">
          <div class="del-time">
            <h4>Delivery and Time</h4>
            <div class="d-flex mb-5">
              <div class="btn-group-toggle">
                <label class="btn mr-3" for="dine" :class="deliver.includes('dine') ? 'selected' : 'unselected'" >
                  <input type="radio" name="deliver" id="dine" v-model="deliver" value="dine" />
                  Dine In
                </label>
                <label class="btn mr-3" for="door" :class="deliver.includes('door') ? 'selected' : 'unselected'" >
                  <input type="radio" name="deliver" id="door" v-model="deliver" value="door" />
                  Door Delivery
                </label>
                <label class="btn mr-3" for="pick" :class="deliver.includes('pick') ? 'selected' : 'unselected'" >
                  <input type="radio" name="deliver" id="pick" v-model="deliver" value="pick" />
                  Pick Up
                </label>
              </div>
            </div>
            <div v-if="deliver === 'door' || deliver === 'pick'">
              <div class=" align-items-center mb-3">
                <Input label="Start Delivery" type="datetime-local" v-model="start" />
              </div>
              <div class="align-items-center">
                <Input label="End Delivery" type="datetime-local" v-model="end" />
              </div>
            </div>
          </div>
          <!-- Choose size -->
          <div class="box w-100 d-flex flex-column mt-4 mb-5">
          <h4>Choose a Size</h4>
          <!-- R L XL -->
          <div class="d-flex justify-content-around flex-row btn-group-toggle" v-if="dataProduct.category_id === 1 || dataProduct.category_id === 2">
            <label class="btn btn-size d-flex align-items-center justify-content-center" for="r" :class="allSize.includes('R') ? 'selectedSize' : 'unselectedSize'">
              <input type="checkbox" id="r" v-model="allSize" value="R" class="d-none"/>
              R
            </label>
            <label class="btn btn-size d-flex align-items-center justify-content-center" for="l" :class="allSize.includes('L') ? 'selectedSize' : 'unselectedSize'">
              <input type="checkbox" id="l" v-model="allSize" value="L" class="d-none"/>
              L
            </label>
            <label class="btn btn-size d-flex align-items-center justify-content-center" for="xl" :class="allSize.includes('XL') ? 'selectedSize' : 'unselectedSize'">
              <input type="checkbox" id="xl" v-model="allSize" value="XL" class="d-none" />
              XL
            </label>
          </div>
          <!-- Gram -->
          <div class="d-flex justify-content-around flex-row btn-group-toggle" v-if="dataProduct.category_id === 3">
            <label class="btn gram btn-size d-flex align-items-center justify-content-center" for="250" :class="allSize.includes('250') ? 'selectedSize' : 'unselectedSize'">
              <input type="checkbox" id="250" v-model="allSize" value="250" class="d-none"/>
              250g
            </label>
            <label class="btn gram btn-size d-flex align-items-center justify-content-center" for="300" :class="allSize.includes('300') ? 'selectedSize' : 'unselectedSize'">
              <input type="checkbox" id="300" v-model="allSize" value="300" class="d-none"/>
              350g
            </label>
            <label class="btn gram btn-size d-flex align-items-center justify-content-center" for="500" :class="allSize.includes('500') ? 'selectedSize' : 'unselectedSize'">
              <input type="checkbox" id="500" v-model="allSize" value="500" class="d-none" />
              500g
            </label>
          </div>
        </div>
        <!-- end Choose size -->
        </div>
      </aside>
      <!-- Description, Price, Amount -->
      <aside class="col-md-6 d-flex flex-column align-items-center">
        <Input v-model="name" id="name" label="Name :" placeholder="Type product name min. 50 characters" :max="50" type="text" class="w-100" />
        <br><br>
        <Input v-model="price" id="price" label="Price" placeholder="Type the price" type="number" class="w-100"/>
        <br><br>
        <Input v-model="description" id="desc" label="Description :" placeholder="Describe your product min. 150 characters" :max="150" type="text" class="w-100"/>
        <br><br>
        <Input v-model="stock" id="stock" label="Stock" placeholder="stock" type="number" class="w-100"/>
        <br><br>
        <Button color="btn-brown btn-detail" label="Save Change" @trigger="save()"></Button>
        <Button color="btn-detail btn-danger" label="Delete Product" @trigger="destroy()"></Button>
      </aside>
    </main>
    <main class="row pt-5">
    </main>
  </div>
</template>

<script>
import Input from '../../components/admin/base/Input'
import Button from '../../components/cust/base/Button'
import axios from 'axios'
export default {
	name: 'ProductDetail',
	components: {
		Button,
		Input
	},
	data () {
		return {
			start: '',
			end: '',
			name: '',
			price: '',
			description: '',
			stock: '',
			dataProduct: {},
			allSize: [],
			avatar: '',
			deliver: '',
			din: 0,
			door: 0,
			pick: 0
		}
	},
	mounted: function () {
		this.getData()
	},
	methods: {
		getData () {
			axios.get(`${process.env.VUE_APP_BASE_URL}/products/${this.$route.query.id}`)
				.then((res) => {
					this.dataProduct = res.data.result[0]
					if (res.data.result[0].is_home_delivery || res.data.result[0].is_pick_up) {
						const start = res.data.result[0].start_delivery.split(':')
						const startFormat = start[0] + ':' + start[1]
						this.start = startFormat
						const end = res.data.result[0].end_delivery.split(':')
						const endFormat = end[0] + ':' + end[1]
						this.end = endFormat
					}
					this.name = res.data.result[0].name
					this.price = res.data.result[0].price
					this.description = res.data.result[0].description
					this.stock = res.data.result[0].stock
					this.allSize = res.data.result[0].size.split(',')
					this.din = res.data.result[0].is_dine_in === true ? 1 : 0
					this.door = res.data.result[0].is_home_delivery === true ? 1 : 0
					this.pick = res.data.result[0].is_pick_up === true ? 1 : 0
					if (res.data.result[0].is_dine_in === true) {
						this.deliver = 'dine'
					} else if (res.data.result[0].is_home_delivery === true) {
						this.deliver = 'door'
					} else if (res.data.result[0].is_pick_up === true) {
						this.deliver = 'pick'
					}
				})
				.catch((err) => {
					console.log(err)
				})
		},
		getImage (e) {
			console.log(e.target.files[0].size)
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
		save () {
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
			if (dataFile) {
				data.append('image', dataFile)
			}
			// Tambahkan data ke Form Data
			data.append('is_dine_in', this.din)
			data.append('is_home_delivery', this.door)
			data.append('is_pick_up', this.pick)
			data.append('start_delivery', this.start)
			data.append('end_delivery', this.end)
			data.append('stock', this.stock)
			data.append('name', this.name)
			data.append('price', this.price)
			data.append('description', this.description)
			data.append('size', sizes)
			axios.patch(`${process.env.VUE_APP_BASE_URL}/products/${this.$route.query.id}`, data, { headers: { 'Content-Type': 'multipart/form-data' } })
				.then((res) => {
					this.$swal.fire({
						title: 'Success!',
						text: 'Update Successfully',
						icon: 'success',
						confirmButtonText: 'Ok'
					})
					this.$router.push('/admin/product-admin')
				})
				.catch((err) => {
					this.$swal.fire({
						title: 'Warning!',
						text: err.response.data,
						icon: 'warning',
						confirmButtonText: 'Ok'
					})
				})
		},
		destroy () {
			this.$swal.fire({
				title: 'Are you sure?',
				text: "You won't be able to revert this!",
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Yes, delete it!'
			}).then((result) => {
				if (result.isConfirmed) {
					axios.delete(`${process.env.VUE_APP_BASE_URL}/products/${this.$route.query.id}`)
						.then((res) => {
							this.$swal.fire(
								'Deleted!',
								'Your file has been deleted.',
								'success'
							)
							this.$router.push('/admin/product')
						})
				}
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.edit {
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

.edit:focus {
  outline: none;
}

.big-box {
  // margin: 0 0 480px 0;
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  // margin-bottom: 480px;
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
  margin: 0 0 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
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
