<template>
  <div>
    <button class="mr-3" :class="classes" @click.prevent="changeClass">{{label}}</button>
  </div>
</template>

<script>
export default {
	name: 'ButtonDelive',
	data () {
		return {
			active: 0,
			classes: 'nonactive' || 'active'
		}
	},
	props: ['label'],
	methods: {
		changeClass () {
			this.$emit('click')
			if (this.active === 0) {
				this.active = 1
				this.classes = 'active'
			} else if (this.active === 1) {
				this.active = 0
				this.classes = 'nonactive'
			}
		}
	}
}
</script>

<style lang="scss" scoped>

button {
  border: none;
  outline: none;
  transition: .3s;
}

button:focus {
  outline: none;
}

button:hover {
  opacity: .8;
}

.active {
  height: 42px;
  border-radius: 10px;
  background: #6A4029;
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
}

.nonactive {
  height: 42px;
  border-radius: 10px;
  background: #F4F4F8;
  color: #9F9F9F;
  padding: 6px 14px;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
  border: 1px solid rgba(186, 186, 186, 0.35)
}
</style>
