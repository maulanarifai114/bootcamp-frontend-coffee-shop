<template>
    <div>
        <div class="subtotal">
            <p class="calc-title"> SUBTOTAL </p>
            <p class="calc-total"> {{subtotal}}</p>
        </div>
        <div class="taxfees">
            <p class="calc-title"> TAX & FEES </p>
            <p class="calc-total"> {{taxfees}}</p>
        </div>
        <div class="shipping">
            <p class="calc-title"> SHIPPING </p>
            <p class="calc-total"> {{shipping}}</p>
        </div>
        <div class="total">
            <p class="total-title"> TOTAL </p>
            <p class="total-total"> {{total}}</p>
        </div>
    </div>
</template>

<script>
export default {
	name: 'Calculation',
	props: ['subtotal', 'taxfees', 'shipping', 'total']

}
</script>

<style lang="scss" scoped>
.subtotal {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10%;
}
.taxfees {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.shipping {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.total {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 5%;
}
.calc-title, .calc-total {
    font-family: Poppins;
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
}
.calc-title {
    margin-left: 10%;
}
.calc-total {
    margin-right: 10%;
}
.total-title, .total-total {
    margin-left: 10%;
    font-family: Poppins;
    font-size: 30px;
    font-weight: 700;
    text-align: left;
    color: #362115;
    margin-right: 10%;
}
</style>
