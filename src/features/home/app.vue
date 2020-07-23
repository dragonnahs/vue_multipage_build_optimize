<template>
  <div class="home">
    <div class="draw">
      <div class="draw-item" :class="{'selected-draw-item': activeIndex==0}">
        <img src="../../assets/draw/draw_item_1.png" alt="">
      </div>
      <div class="draw-item" :class="{'selected-draw-item': activeIndex==1}">
        <img src="../../assets/draw/draw_item_2.png" alt="">
      </div>
      <div class="draw-item" :class="{'selected-draw-item': activeIndex==2}">
        <img src="../../assets/draw/draw_item_3.png" alt="">
      </div>
      <div class="draw-item" :class="{'selected-draw-item': activeIndex==7}">
        <img src="../../assets/draw/draw_item_4.png" alt="">
      </div>
      <div class="draw-btn" @click="handleClickDraw"></div>
      <div class="draw-item" :class="{'selected-draw-item': activeIndex==3}">
        <img src="../../assets/draw/draw_item_6.png" alt="">
      </div>
      <div class="draw-item" :class="{'selected-draw-item': activeIndex==6}">
        <img src="../../assets/draw/draw_item_7.png" alt="">
      </div>
      <div class="draw-item" :class="{'selected-draw-item': activeIndex==5}">
        <img src="../../assets/draw/draw_item_8.png" alt="">
      </div>
      <div class="draw-item" :class="{'selected-draw-item': activeIndex==4}">
        <img src="../../assets/draw/draw_item_9.png" alt="">
      </div>
    </div>
    <div @click="handleSelectIndex(1)">选中第一个奖励</div>
    <div @click="handleSelectIndex(2)">选中第二个奖励</div>
    <div @click="handleSelectIndex(3)">选中第三个奖励</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: 0,
      selectedIndex: 2,
      clickFlag: true
    }
  },
  methods: {
    handleClickDraw() {
      let timer
      let endNum = 8*3 + this.selectedIndex - this.activeIndex
      if (!this.clickFlag) {
        return
      }

      this.clickFlag = false
      timer = setInterval(() => {
        this.activeIndex += 1
        if (this.activeIndex > 7) {
          this.activeIndex = 0
        }
        endNum--
        if (endNum <= 0) {
          this.clickFlag = true
          clearInterval(timer)
        }
      }, 50)
    },
    handleSelectIndex(target) {
      if (target === 1) {
        this.selectedIndex = 2
      } else if (target === 2) {
        this.selectedIndex = 3
      } else if (target === 3) {
        this.selectedIndex = 6
      }
    }
  }
}
</script>
<style lang='scss' scoped>
@import './index.scss'
</style>