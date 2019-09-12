import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({ activeIndex: 'getActiveIndex' })
  },
  beforeCreate () {
    if (this.$options.title) {
      console.log(this.$options.name + this.$options.title + '----beforeCreate')
    }
  },
  created () {
    if (this.$options.title) {
      console.log(this.$options.name + this.$options.title + '----created')
    }
  },
  beforeMount () {
    if (this.$options.title) {
      console.log(this.$options.name + this.$options.title + '----beforeMount')
    }
  },
  mounted () {
    if (this.$options.title) {
      console.log(this.$options.name + this.$options.title + '----mounted')
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
    })
  },
  beforeRouteLeave (to, from, next) {
    next()
  },
  activated () {
    if (this.$options.title) {
      console.log(this.$options.name + this.$options.title + '----activated')
    }
  },
  deactivated () {
    if (this.$options.title) {
      console.log(this.$options.name + this.$options.title + '----deactivated')
    }
  }
}
