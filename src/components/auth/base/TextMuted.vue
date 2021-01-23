<template>
  <div>
    <div class="group-muted-auth w-100 d-flex justify-content-center align-items-center">
    <div class="line-muted flex-grow-1"></div>
    <div class="text-muted-auth ">{{text}}</div>
    <div class="line-muted flex-grow-1"></div>
    </div>
  </div>
</template>

<script>
export default {
	name: 'TextMuted',
	props: ['text']
}
</script>

<style lang="scss" scoped>

.group-muted-auth {
  margin: 0 0 42px 0;
}

.text-muted-auth {
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 30px;
  color: #9F9F9F;
  width: fit-content;
  margin: 0 15px;
}

.line-muted {
  // width: 100%;
  height: 2px;
  background-color: #C4C4C4;
}
</style>
