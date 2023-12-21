<template>
  <div>
    <Tutorial />
    <div class="title">
      <div class="title-sub site—default-color">你好</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  mounted() {
    console.log('NUXT_APP_ENV->', process.env.NUXT_APP_ENV)
  },
}
</script>

<style scoped lang="scss">
.title {
  color: #f00;
  &-sub {
    font-size: 24px;
  }
}
</style>
