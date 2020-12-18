<template>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <div class="todo" style="text-align:right" type= button>Select All</div>
            <div class="deletebox" style="text-align:right" type= button>Delete</div>
            <div class="row">
            <div class="col-sm-4 product">
                <div class="history-box">
                    <div class="image">
                        <img src="../../../assets/img/nathan-dumlao-zTZRZV86GhE-unsplash 1.png" alt="">
                    </div>
                    <div class="product-info">
                        <p class="name">Veggie</p>
                        <p class="price">120000</p>
                        <p class="description">Delivered</p>
                    </div>
                    <input type="checkbox" id="delete" :value=1 v-model="deleteProducts">
                </div>
            </div>
        </div>
        <div>Selected: <strong>{{ deleteProducts}}</strong></div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HistoryCust',
  data () {
    return {
      deleteProducts: [] // Must be an array reference!
    }
  },
  computed: {

  }
}
</script>

<style lang="scss" scoped>
.product-info {
    margin-right: 25%;
}
.todo, .deletebox{
    font-family: Poppins;
font-size: 20px;
font-weight: 700;
text-align: center;
color: #FFFFFF;

}
#checkbox-group {
    margin-left: 20%;
}
.jumbotron-fluid {
    background-image: url('../../../assets/img/nathan-dumlao-zTZRZV86GhE-unsplash 1.png');
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100px;
    margin: 0;
    padding-top: 8%;
    padding-left: 5%;
}
.history-box {
    height: 126px;
    width: 300px;
    border-radius: 20px;
    background: #FFFFFF;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 3%;
}
.product {
    margin-bottom: 3%;
}
.image {
    height: 83.67052459716797px;
    width: 100px;
    overflow: hidden;
    margin-right: 5%;
}
.image img {
    width: 100%;
}
.name {
    font-family: Poppins;
    font-size: 20px;
    font-weight: 700;
    color: #000000;
    margin: 0;
}
.price, .description {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    color: #895537;
    margin: 0;
}
</style>
