<template>
    <div>
        <div class="mainAddress">
            <strong>Delivery</strong> to {{mainAddress}}
        </div>
        <div class="detailAddress">
            {{detailAddress}}
        </div>
        <div class="phoneAddress">
            +62 {{phoneaddress}}
        </div>
    </div>
</template>

<script>
export default {
	name: 'Address',
	props: ['mainAddress', 'detailAddress', 'phoneaddress']
}
</script>

<style lang="scss" scoped>
.mainAddress {
    font-family: Poppins;
    font-size: 20px;
    font-weight: 700;
    text-align: left;
    border-bottom: 0.5px solid #000000;
    padding: 5%
}
.detailAddress {
    font-family: Poppins;
    font-size: 20px;
    font-weight: 700;
    text-align: left;
    border-bottom: 0.5px solid #000000;
    padding: 5%
}
.phoneAddress {
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    text-align: left;
    padding: 5%
}
</style>
