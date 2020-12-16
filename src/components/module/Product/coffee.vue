<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-3 favourite" @click.prevent="" type="button">
                <div class="product-box">
                    <div class="product-img overflow-hidden">
                        <img src="../../../assets/img/robert-bye-95vx5QVl9x4-unsplash 2.png" alt="">
                    </div>
                    <p class="product-name">Veggie Tomato Mix</p>
                    <p class="product-price">IDR 34.000</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Coffee'
}
</script>

<style lang="scss" scoped>
.favourite {
    margin-top: 5%;
}
.product-box {
    height: 212.4067840576172px;
    width: 156px;
    border-radius: 30px;
    background-color: white;
    border: 2px solid #ececec;
    margin-top: 35%;
    margin-bottom: 15%;
}
.product-img {
    border-radius: 50%;
    width: 100%;
    height: 75%;
    margin-top: -35%;
}
.product-img img {
    width: 100%;
}
.product-name{
    text-align: center;
    margin-top: 5%;
    font-family: Poppins;
    font-size: 22px;
    font-weight: 900;
    line-height: 22px;
}
.product-price{
    text-align: center;
    font-family: Poppins;
    font-size: 17px;
    font-weight: 700;
    line-height: 26px;
    color: #6A4029;
}

</style>
