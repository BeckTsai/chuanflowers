export default {
  data() {
    return {
      scrollPosition: 0,
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
      // const imageLimit = this.$refs[this.slideEl].offsetTop + this.$refs[this.slideEl].offsetHeight / 3
      const windowHeight = window.innerHeight
      window.addEventListener('scroll', () => {
        this.scrollPosition = windowHeight + window.scrollY
      })
    },
    // getImageLimit(el) {
    //   return this.$refs[el].offsetTop + this.$refs[el].offsetHeight / 3
    // },
  },
}
