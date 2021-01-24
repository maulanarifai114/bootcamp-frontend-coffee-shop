<template>
  <div>
    <div class="del-time">
      <h4>Delivery and Time</h4>
      <div class="d-flex mb-5">
        <div class="btn-group-toggle">
          <label class="btn mr-3" for="dine" :class="deliver === 'dine in'? 'selected':'unselected'">
            <input disabled type="radio" name="deliver" id="dine" v-model="deliver"> Dine In
          </label>
          <label class="btn mr-3" for="door" :class="deliver === 'home delivery'? 'selected':'unselected'">
            <input disabled type="radio" name="deliver" id="door" v-model="deliver"> Home Delivery
          </label>
          <label class="btn mr-3" for="pick" :class="deliver === 'take away'? 'selected':'unselected'">
            <input disabled type="radio" name="deliver" id="pick" v-model="deliver"> Pick Up
          </label>
        </div>
      </div>
      <div class="d-flex align-items-center mb-5">
        <div class="label-tag mr-now">Now</div>
        <div class="btn-group-toggle">
          <label class="btn mr-3" for="yes" :class="now === 'yes'? 'selected':'unselected'">
            <input type="radio" name="now" id="yes" v-model="now" value="yes"> Yes
          </label>
          <label class="btn mr-3" for="no" :class="now === 'no'? 'selected':'unselected'">
            No
            <input v-if="deliver !== 'dine in'" type="radio" name="now" id="no" v-model="now" value="no">
            <input v-else type="radio" name="now" id="no" v-model="now" value="no" disabled>
          </label>
        </div>
      </div>
      <div class="d-flex align-items-center mb-5">
        <div class="label-tag mr-set">Set time</div>
        <Input id="time" :value="date"  type="datetime-local" @change="changeValue" placeholder="Enter time for reservation" :allow="allowed()"/>
      </div>
    </div>
  </div>
</template>

<script>
import Input from '../base/Input'
import moment from 'moment'

export default {
	name: 'DeliveTime',
	components: {
		Input
	},
	// props: [
	//   'dine',
	//   'door',
	//   'pick'
	// ],
	data () {
		return {
			deliver: this.$store.state.detailP.deliver,
			now: 'yes',
			date: '',
			allow: 0
		}
	},
	methods: {
		changeValue (e) {
			this.date = e
		},
		allowed () {
			if (this.now === 'no') {
				this.allow = 1
				return this.allow
			} else {
				this.allow = 0
				const datetime = moment().format()
				const currentDate = datetime.split('+07:00')
				this.date = currentDate[0]
				return this.allow
			}
		}
	},
	computed: {

	},
	beforeUpdate () {
		const deliver = this.deliver
		const now = this.now
		const date = this.date
		this.$store.commit('SET_DELIVERY', { deliver, now, date })
	},
	created () {
		this.$store.watch(
			(state) => {
				return this.$store.state.detailP.deliver
			},
			(newValue, oldValue) => {
				this.deliver = newValue
			},
			{
				deep: true
			}
		)
	}
}
</script>

<style lang="scss" scoped>

.del-time {
  height: 381px;
  width: 488px;
  border-radius: 20px;
  color: #FFFFFF;
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.08);
  padding: 30px;
}

h4 {
  font-family: Poppins;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
  margin: 0 0 40px 0;
}

.label-tag {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  color: #000000;
}

.mr-now {
  margin: 0 56px 0 0;
}

.mr-set {
  margin: 0 18px 0 0;
}

.selected {
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
  transition: .3s;
}

.selected:hover {
  color: white!important;
  opacity: .8;
}

.unselected {
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
  border: 1px solid rgba(186, 186, 186, 0.35);
  transition: .3s;
}

.unselected:hover {
  color: #9F9F9F!important;
  opacity: .8;
}
</style>
