<template>
  <div class="home">
    <com-header></com-header>
    <com-content></com-content>
    <van-button type="primary">测试vant</van-button>
    <p style="height: 2rem"></p>
    <mt-button type="default">测试mint-ui</mt-button>
  </div>
</template>
<script>
import { Button } from 'mint-ui'
export default {
  name: 'Home',
  components: {
    MtButton: Button
  },
  computed: {
  },
  mounted () {
    console.log('home mounted', this.activeIndex)
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/style/base.styl'
</style>
