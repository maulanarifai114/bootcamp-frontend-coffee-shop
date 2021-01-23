<template>
	<div class="product">
		<div class="product-detail">
			<div class="image">
				<img :src="photos" alt="">
			</div>
			<div class="detail">
				<p class="name">{{p1}}</p>
				<p class="total">{{p2}}x</p>
			</div>
		</div>
		<p class="price">{{p3}}</p>
	</div>
</template>

<script>
export default {
	name: 'Summaryproduct',
	props: ['p1', 'p2', 'p3', 'photos']
}
</script>

<style lang="scss" scoped>
.image {
	height: 90px;
	width: 82px;
	border-radius: 20px;
	overflow: hidden;
	margin-right: 10%;
}
.image img {
	height: 100%;
}
.product-detail {
	display: flex;
	flex-direction: row;
	margin-left: 10%;
	width: 100%;
}
.price {
	margin-right: 10%;
}
.product {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-bottom: 5%;
	align-items: center;
	font-family: Poppins;
	font-size: 20px;
	font-weight: 400;
	line-height: 30px;
}

</style>
