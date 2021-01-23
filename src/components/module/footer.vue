<template>
    <div class="footer">
        <Col1/>
        <div class="right-column">
            <Col2/>
            <Col3/>
        </div>
    </div>
</template>

<script>
import Col1 from '../module/Footer/col1'
import Col2 from '../module/Footer/col2'
import Col3 from '../module/Footer/col3'
export default {
	name: 'Footer',
	components: {
		Col1, Col2, Col3
	}

}
</script>

<style lang="scss" scoped>
.right-column {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}
.footer {
    min-height: 350px;
    width: 100%;
    display: flex;
    flex-direction: row;
    background-color: #F8F8F8;
    padding-top: 5%;

}
</style>
