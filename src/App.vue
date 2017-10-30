<template>
  <div class="wrapper" id="top">
    <Navbar/>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import initChatlio from '@/assets/js/chatlio'

export default {
  name: 'app',
  components: { Navbar },
  methods: {
    handleScroll () {
      this.scrolled = window.scrollY > 300
      window._chatlio.show()
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  mounted: function () {
    initChatlio()
  }
}
</script>

<style lang="scss">
@import "~bootstrap/dist/css/bootstrap.css";
@import "~font-awesome/css/font-awesome.css";
@import "~@/assets/css/style";
</style>
