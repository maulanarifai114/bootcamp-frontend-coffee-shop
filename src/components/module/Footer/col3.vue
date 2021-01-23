<template>
    <div class="column3">
            <h6 class="title">Engage</h6>
            <ul class="title-option" >
                <li>
                    <a class="option" href="#">Coffee Shop ?</a>
                </li>
                <li>
                    <a class="option" href="#">FAQ</a>
                </li>
                <li>
                    <a class="option" href="#">About Us</a>
                </li>
                <li>
                    <a class="option" href="#">Privacy Policy</a>
                </li>
                <li>
                    <a class="option" href="#">Terms of Services</a>
                </li>
            </ul>
        </div>
</template>

<script>
export default {
	name: 'Col3'

}
</script>

<style lang="scss" scoped>
.column3 {
    margin-right: 12%;
}
.title {
    font-family: Rubik;
    font-size: 18px;
    font-weight: 500;
    line-height: 30px;
    color: #0B132A;
}
.option {
    font-family: Rubik;
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
    color: #4F5665;
    text-decoration: none;
}
ul {
    list-style-type: none;
    padding-left: 0;
}
</style>
