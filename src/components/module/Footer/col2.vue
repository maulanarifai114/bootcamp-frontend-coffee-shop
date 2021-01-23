<template>
    <div class="column2">
            <h6 class="title">Product</h6>
            <ul class="title-option" >
                <li>
                    <a class="option" href="#">Download</a>
                </li>
                <li>
                    <a class="option" href="#">Pricing</a>
                </li>
                <li>
                    <a class="option" href="#">Locations</a>
                </li>
                <li>
                    <a class="option" href="#">Countries</a>
                </li>
                <li>
                    <a class="option" href="#">Blog</a>
                </li>
            </ul>
        </div>
</template>

<script>
export default {
	name: 'Col2'

}
</script>

<style lang="scss" scoped>
.column2 {
    margin-right: 5%;
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
