<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-3 favourite" @click.prevent="" type="button">
                <div class="product-box">
                    <div class="product-img overflow-hidden">
                        <img src="https://cdn0-production-images-kly.akamaized.net/6aobiw31CdBPDzvOD8_0L7h6Aek=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1607544/original/085652700_1496035163-Jus-Mangga1.jpg" alt="">
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
  name: 'Favourite'
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
    margin-top: 5%;
    margin-bottom: 10%;
}
.product-img {
    border-radius: 50%;
    width: 100%;
    height: 75%;
    margin-top: -35%;
}
.product-img img {
    height: 100%;
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
