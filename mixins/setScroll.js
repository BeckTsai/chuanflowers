export default {
  data() {
    return {
      active: false,
    }
  },
  mounted() {
    this.setScroll()
  },
  beforeDestroy() {
    this.setScroll()
  },
  methods: {
    setScroll() {
      const imageLimit = this.$refs[this.slideEl].offsetTop + this.$refs[this.slideEl].offsetHeight / 3
      const windowHeight = window.innerHeight
      window.addEventListener('scroll', () => {
        if (!this.active) {
          this.active = imageLimit < windowHeight + window.scrollY
          return
        }
      })
    },
  },
}
