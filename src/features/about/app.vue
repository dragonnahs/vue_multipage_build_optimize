<template>
  <div class="home">
    <video ref="videoPlayer"
    class="video-js"
    id="myVideo"
    controls
    preload="auto">
      <source type="vidoe/mp4" :src='videoSrc'>
    </video>
  </div>
</template>
<script>
import videojs from 'video.js'
import videozhCN from 'video.js/dist/lang/zh-CN.json'
import 'video.js/dist/video-js.css'
export default {
  data() {
    return {
      player: null,
      videoSrc: 'http://vjs.zencdn.net/v/oceans.mp4'
    }
  },
  mounted() {
    let options = {
      controls: true,
      // 自动播放属性,muted:静音播放
      autoplay: false,
      // 建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
      preload: 'auto',
      // 设置视频播放器的显示宽度（以像素为单位）
      // width: "800px",
      // 设置视频播放器的显示高度（以像素为单位）
      // height: "400px",
      controlBar: {
        playToggle: true
      }
    }
    this.player = videojs(
      this.$refs.videoPlayer,
      options
    )
    videojs.addLanguage('zh-CN', videozhCN)
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose()
    }
  }
}
</script>
<style lang='scss' scoped>
@import './index.scss'
</style>
