<template>
    <div class="column1">
            <h5 class="brand">
                <img src="../../../assets/img/coffee 1.png" alt="">
                Coffee Shop
            </h5>
            <p class="tagline">
                Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans
            </p>
            <div class="socialmedia">
                <img src="../../../assets/img/Socmed/fb.png" alt="">
                <img src="../../../assets/img/Socmed/twitter.png" alt="">
                <img src="../../../assets/img/Socmed/ig.png" alt="">
            </div>
            <p class="copyright">
                ©2020CoffeeStore
            </p>
        </div>
</template>

<script>
export default {
	name: 'Col1'

}
</script>

<style lang="scss" scoped>
.column1 {
    width: 350px;
    margin-left: 5.7%;
    margin-top: 1.5%;
}
.socialmedia {
    display: flex;
    flex-direction: row;
}
.socialmedia img {
    margin-right: 5%;
}
h5 img {
    margin-right: 3%;
}
.brand {
    font-family: Rubik;
    font-size: 20px;
    font-weight: 700;
    color: #0B132A;
    margin-bottom: 5%;
}
.tagline {
    font-family: Rubik;
    font-size: 16px;
    font-weight: 500;
    line-height: 30px;
    color: #4F5665;
}
.copyright {
    font-family: Rubik;
    font-size: 16px;
    font-weight: 400;
    color: #AFB5C0;
    margin-top: 5%;
}
</style>
