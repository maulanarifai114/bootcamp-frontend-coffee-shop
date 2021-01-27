<template>
  <div class="content">
    <div class="container-fluid">
      <Content/>
    </div>
  </div>
</template>

<script>
import Content from '../../../components/module/Home/content'
export default {
	title: 'Home',
	name: 'Customer',
	components: {
		Content
	}
}
</script>

<style lang="scss" scoped>
.content {
  background-color:white;
}
.container-fluid {
  width: 100%;
    margin: 0;
    padding: 0;
}

</style>
