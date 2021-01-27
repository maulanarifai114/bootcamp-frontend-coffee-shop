<template>
    <div class="content">
        <!-- <div class="leftside">
            <Promo/>
        </div> -->
        <div class="rightside">
            <Products/>
        </div>
    </div>
</template>

<script>
// import Promo from '../../../components/module/Product/promoCust'
import Products from '../../../components/module/Product/productsCust'
export default {
	name: 'ProductCust',
	components: {
		// Promo,
		Products
	},
	title: 'Products'
}
</script>

<style lang="scss" scoped>
.content {
    width: 100%;
    display: flex;
    flex-direction: row;
    background-color:  #ffffff;
    margin: 0;
    padding: 0;
}
.leftside {
    width: 30%;
    border: none;
    border-right: 0.5px solid #9F9F9F
}
.rightside {
    width: 100%;
}
@media screen and (max-width: 1043px) {
    .content {
        flex-direction: column;
    }
    .leftside {
        width: 100%;
    }
}

</style>
