<template>
    <div class="payment">
            <div class="paycard">
                <input type="radio" id="cardid" value="card" name="system" v-on:change="handlechange">
                <label for="one">
                    <div class="card-pict">
                        <img src="../../../assets/img/card.png" alt="">
                    </div>
                    Card
                </label>
            </div>
            <div class="paybank">
                <input type="radio" id="bankid" value="bankaccount" name="system" v-on:change="handlechange">
                <label for="two">
                    <div class="bank-pict">
                        <img src="../../../assets/img/bank.png" alt="">
                    </div>
                    Bank Account
                </label>
            </div>
            <div class="paycod">
                <input type="radio" id="codid" value="cod" name="system" v-on:change="handlechange">
                <label for="two">
                    <div class="cod-pict">
                        <img src="../../../assets/img/fast-delivery 3.png" alt="">
                    </div>
                    Cash on Delivery
                </label>
            </div>
        </div>
</template>

<script>
export default {
	name: 'Payment',
	methods: {
		handlechange (e) {
			console.log(e.target.value)
			this.$emit('input', e.target.value)
		}
	}
}
</script>

<style lang="scss" scoped>
input[type='radio'] {
    transform: scale(3);
    margin-right: 10%;
}
.paycard, .paybank, .paycod {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10%;
}
.payment {
    padding-top: 5%;
    padding-left: 10%;
    padding-right: 10%;
}
label {
    font-family: Poppins;
    font-size: 20px;
    font-weight: 400;
    text-align: left;
    color: #000000;
    border-bottom: 0.5px solid #000000;
    width: 100%;
    padding: 4%;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.card-pict, .bank-pict, .cod-pict {
    margin-right: 5%;
    height: 40px;
    width: 40px;
    border-radius: 10px;
}
.card-pict {
    background: #F47B0A;
}
.bank-pict {
    background: #895537;
}
.cod-pict {
    background: #FFBA33;
}
.paycod label {
    border: none;

}
.bank-pict img, .card-pict img, .cod-pict img {
    margin-left: auto;
    margin-right: auto;
    display: block;
    margin-top: 25%;
}
</style>
