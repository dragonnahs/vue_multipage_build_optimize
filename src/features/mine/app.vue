<template>
  <div id="app">
    mine
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    handleClick(target) {
      if (target==1) {
        console.log(target)
      } else {
        console.log(222)
      }
      console.log(tes1, 333)
    }
  }
}
</script>
<style lang='scss'>
@import './index.scss'
</style>