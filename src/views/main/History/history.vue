<template>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <div class="todo" style="text-align:right" type= button @click.prevent="selectAll">Select All</div>
            <div class="todo" style="text-align:right" type= button @click.prevent="unselectAll">Unselect All</div>
            <div class="deletebox" style="text-align:right" type= button @click.prevent="deleteCustHistory()">Delete</div>
            <div class="row">
            <div class="col-sm product" v-for="history in getHistory" :key="history.id">
                <div class="history-box">
                    <div class="image">
                        <img :src= "history.products[0].images" alt="">
                    </div>
                    <div class="product-info">
                        <p class="name">{{history.products[0].name}}</p>
                        <p class="price">{{history.products[0].price}}</p>
                        <p class="description">Delivered</p>
                    </div>
                    <input type="checkbox" id="delete" :value= history.id v-model="deleteProducts">
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Swal from 'sweetalert2'
export default {
  name: 'HistoryCust',
  data () {
    return {
      deleteProducts: []
    }
  },
  methods: {
    ...mapActions({ getAllHistory: 'getAllHistory', deleteHistory: 'deleteHistory' }),
    selectAll () {
      this.deleteProducts = this.getHistory.map((history) => history.id)
      console.log(this.deleteProducts)
    },
    unselectAll () {
      this.deleteProducts = []
    },
    deleteCustHistory () {
      const payload = {
        deleteProducts: this.deleteProducts
      }
      Swal.fire({
        // title: 'Are You Sure?',
        text: 'Are you sure you want to delete selected items?',
        // icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#6A4029',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it'
      }).then((result) => {
        if (result.isConfirmed) {
          console.log(this.deleteProducts)
          this.deleteHistory(payload)
            .then((res) => {
              Swal.fire(
                'Deleted!',
                'Your history product has been deleted'
              )
              this.$router.push('history')
              this.deleteProducts = []
            })
        }
      })
    }
  },
  computed: {
    ...mapGetters(['getHistory'])
  },
  mounted () {
    this.getAllHistory()
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
@media screen and (max-width: 767px) {
    .history-box {
        width: 100%;
    }
}
@media screen and (max-width: 575px) {
    .product-info {
        margin-right: 50%;
    }
    .image {
        margin-right: 2%;
        border: 2px solid black;
    }
}
@media screen and (max-width: 474px) {
    .product-info {
        margin-right: 25%;
    }
}
</style>
