export default {
  props: {
    scrollPosition: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      active: false,
    }
  },
  methods: {
    getImageLimit(el) {
      return this.$refs[el].offsetTop + this.$refs[el].offsetHeight / 3
    },
    getPoisonHeight(el) {
      return this.$refs[el].getBoundingClientRect().top + this.$refs[el].offsetHeight / 3
    },
  },
}
