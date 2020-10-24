export default {
  data() {
    return {
      height: null,
    }
  },
  computed: {
    heightStyle() {
      return {
        height: `${this.height}px`,
      }
    },
  },
  mounted() {
    if (navigator.appVersion.indexOf('Android') || navigator.appVersion.indexOf('OS')) {
      this.height = window.innerHeight
    }
  },
}
