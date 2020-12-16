<template>
  <div>
    <div class="del-time">
      <h4>Delivery and Time</h4>
      <div class="d-flex mb-5">
        <ButtonDelive label="Dine In"></ButtonDelive>
      </div>
      <div class="d-flex align-items-center mb-5">
        <div class="label-tag mr-now">Now</div>
      </div>
      <div class="d-flex align-items-center mb-5">
        <div class="label-tag mr-set">Set time</div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonDelive from '../base/ButtonDelive'
export default {
  name: 'DeliveTime',
  components: {
    ButtonDelive
  }
}
</script>

<style lang="scss" scoped>

.del-time {
  height: 381px;
  width: 488px;
  border-radius: 20px;
  color: #FFFFFF;
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.3);
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
  border: 1px solid rgba(186, 186, 186, 0.35)
}
</style>
