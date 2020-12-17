<template>
  <div>
    <h1 class="mb-5">Cold Brew</h1>
    <p class="p-desc box-desc1 mb-0">
      Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.
    </p>
    <p class="p-desc box-desc2 align-self-start">
      Delivery only on <span>Monday to friday</span>  at <span>1 - 7 pm</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'TitleProduct'
}
</script>

<style lang="scss" scoped>

h1 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 900;
  font-size: 65px;
  line-height: 97px;
  color: #000000;
}

.p-desc {
  font-family: Poppins;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 35px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #6A4029;
}

.box-desc1 {
  height: 219px;
}

.box-desc2 {
  width: 436px;
  margin: 0 0 44px 0;
}

.box-desc2 span {
  font-family: Poppins;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: 35px;
  letter-spacing: 0.02em;
  text-align: left;
}
</style>
