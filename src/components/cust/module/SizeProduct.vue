<template>
  <div class="box w-100 d-flex flex-column">
    <h4>Choose a Size</h4>
    <div v-if="availableSize.includes('R') || availableSize.includes('L') || availableSize.includes('XL')" class="d-flex justify-content-between flex-row btn-group-toggle" >
      <!-- R -->
      <label v-if="availableSize.includes('R')" class="btn d-flex align-items-center justify-content-center" for="R" :class="size === 'R' ? 'selected':'unselected'">
        <input @change="changeSize($event.target.value)" type="radio" name="size" id="R" v-model="size" value="R" class="d-none"> R
      </label>
      <label v-else class="btn d-flex align-items-center justify-content-center" for="R" :class="size === 'R' ? 'selected':'unavailable'">
        <input disabled @change="changeSize($event.target.value)" type="radio" name="size" id="R" v-model="size" value="R" class="d-none"> R
      </label>
      <!-- L -->
      <label v-if="availableSize.includes('L')" class="btn d-flex align-items-center justify-content-center" for="L" :class="size === 'L' ? 'selected':'unselected'">
        <input @change="changeSize($event.target.value)" type="radio" name="size" id="L" v-model="size" value="L" class="d-none"> L
      </label>
      <label v-else class="btn d-flex align-items-center justify-content-center" for="L" :class="size === 'L' ? 'selected':'unavailable'">
        <input disabled @change="changeSize($event.target.value)" type="radio" name="size" id="L" v-model="size" value="L" class="d-none"> L
      </label>
      <!-- Xl -->
      <label v-if="availableSize.includes('XL')" class="btn d-flex align-items-center justify-content-center" for="XL" :class="size === 'XL' ? 'selected':'unselected'">
        <input @change="changeSize($event.target.value)" type="radio" name="size" id="XL" v-model="size" value="XL" class="d-none"> XL
      </label>
      <label v-else class="btn d-flex align-items-center justify-content-center" for="XL" :class="size === 'XL' ? 'selected':'unavailable'">
        <input disabled @change="changeSize($event.target.value)" type="radio" name="size" id="XL" v-model="size" value="XL" class="d-none"> XL
      </label>
    </div>
    <div v-else class="d-flex justify-content-between flex-row btn-group-toggle" >
      <!-- 250 -->
      <label v-if="availableSize.includes('250')" class="btn d-flex align-items-center justify-content-center" for="250" :class="size === '250' ? 'selected gram':'unselected gram'">
        <input @change="changeSize($event.target.value)" type="radio" name="size" id="250" v-model="size" value="250" class="d-none"> 250g
      </label>
      <label v-else class="btn d-flex align-items-center justify-content-center" for="250" :class="size === '250' ? 'selected gram':'unavailable gram'">
        <input disabled @change="changeSize($event.target.value)" type="radio" name="size" id="250" v-model="size" value="250" class="d-none"> 250g
      </label>
      <!-- 300 -->
      <label v-if="availableSize.includes('300')" class="btn d-flex align-items-center justify-content-center" for="300" :class="size === '300' ? 'selected gram':'unselected gram'">
        <input @change="changeSize($event.target.value)" type="radio" name="size" id="300" v-model="size" value="300" class="d-none"> 300g
      </label>
      <label v-else class="btn d-flex align-items-center justify-content-center" for="300" :class="size === '300' ? 'selected gram':'unavailable gram'">
        <input disabled @change="changeSize($event.target.value)" type="radio" name="size" id="300" v-model="size" value="300" class="d-none"> 300g
      </label>
      <!-- 500 -->
      <label v-if="availableSize.includes('500')" class="btn d-flex align-items-center justify-content-center" for="500" :class="size === '500' ? 'selected gram':'unselected gram'">
        <input @change="changeSize($event.target.value)" type="radio" name="size" id="500" v-model="size" value="500" class="d-none"> 500g
      </label>
      <label v-else class="btn d-flex align-items-center justify-content-center" for="500" :class="size === '500' ? 'selected gram':'unavailable gram'">
        <input disabled @change="changeSize($event.target.value)" type="radio" name="size" id="500" v-model="size" value="500" class="d-none"> 500g
      </label>
    </div>
  </div>
</template>

<script>
// import Size from '../base/Size'

export default {
	name: 'SizeProduct',
	components: {
		// Size
	},
	data () {
		return {
			size: this.$store.state.sizeProduct,
			availableSize: this.$store.state.detailP.size
		}
	},
	methods: {
		changeSize (el) {
			const value = el
			this.$store.commit('SET_SIZE', value)
		},
		defaultSize () {
			if (this.availableSize.includes('R')) {
				this.size = this.$store.state.sizeProduct
			} else if (this.availableSize.includes('L')) {
				this.size = this.$store.state.sizeProduct
			} else if (this.availableSize.includes('XL')) {
				this.size = this
			} else if (this.availableSize.includes('250')) {
				this.size = this.$store.state.sizeProduct
			} else if (this.availableSize.includes('300')) {
				this.size = this.$store.state.sizeProduct
			} else if (this.availableSize.includes('500')) {
				this.size = this.$store.state.sizeProduct
			}
		}
	},
	// mounted () {
	//   this.defaultSize()
	// },
	created () {
		this.$store.watch(
			(state) => {
				return this.$store.state.sizeProduct
			},
			(newValue, oldValue) => {
				this.sizeProduct = newValue
				this.defaultSize()
			},
			{
				deep: true
			}
		)
		this.$store.watch(
			(state) => {
				return this.$store.state.detailP.size
			},
			(newValue, oldValue) => {
				this.availableSize = newValue
				this.defaultSize()
			},
			{
				deep: true
			}
		)
	}
}
</script>

<style lang="scss" scoped>

.hide {
  display: none;
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

.box {
  padding: 22px 40px;
  height: fit-content;
  background: #FFFFFF;
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

.gram {
  font-size: 18px;
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

.unavailable {
  background: rgb(40, 40, 40);
  color: #414141;
}
.unavailable:hover {
  color: #111;
}
</style>
