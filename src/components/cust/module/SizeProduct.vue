<template>
  <div class="box w-100 d-flex flex-column">
    <h4>Choose a Size</h4>
    <div class="d-flex justify-content-between flex-row btn-group-toggle" >
      <label class="btn d-flex align-items-center justify-content-center" for="r" :class="size.includes('r')? 'selected':'unselected'">
        <input type="checkbox" name="size" id="r" v-model="size" value="r" class="d-none"> R
      </label>
      <label class="btn d-flex align-items-center justify-content-center" for="l" :class="size.includes('l')? 'selected':'unselected'">
        <input type="checkbox" name="size" id="l" v-model="size" value="l" class="d-none"> L
      </label>
      <label class="btn d-flex align-items-center justify-content-center" for="xl" :class="size.includes('xl')? 'selected':'unselected'">
        <input type="checkbox" name="size" id="xl" v-model="size" value="xl" class="d-none"> XL
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
      size: [],
      check: []
    }
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
}

.btn:focus {
  outline: none;
}

.box {
  padding: 22px 40px;
  height: 168px;
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
</style>
