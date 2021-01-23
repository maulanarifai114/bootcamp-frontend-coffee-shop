<template>
  <div>
    <label :for="id">
      <input :id="id" :class="isActive > 0 ? 'active':'nonactive'" type="checkbox">{{label}}
    </label>
  </div>
</template>

<script>
export default {
	name: 'Size',
	props: ['label', 'id'],
	data () {
		return {
			isActive: 0
		}
	},
	methods: {
		changeClass () {
			if (this.isActive === 0) {
				this.isActive = 1
			} else if (this.isActive === 1) {
				this.isActive = 0
			}
		}
	}
}
</script>

<style lang="scss" scoped>
button {
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
}

button:focus {
  outline: none;
}

.active {
  background: #FFBA33;
  color: #000000;
}

.nonactive {
  background: rgba(186, 186, 186, 0.35);
  color: #4F5665;
}

</style>
