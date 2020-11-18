<template>
    <p>Camera2</p>
    <div class="user-icon">
      <video width="320" height="240" ref="videoDom" id="video" preload autoplay loop muted></video>
      <canvas width="320" height="240" ref="canvasDOM"></canvas>
    </div>

    <div>{{loding}}</div>
    <div class="button" @click="initTracker">假设我是个按钮,点击之后我要人脸识别了</div>
</template>

<script>
  require('tracking/build/tracking-min.js')
  require('tracking/build/data/face-min.js')
  // 嘴巴等特征,后期可添加
  // require('tracking/build/data/mouth-min.js')
  // require('tracking/build/data/eye-min.js')
  //var objects = new tracking.ObjectTracker(['face', 'eye', 'mouth']);
  // require('tracking/examples/assets/stats.min.js')

  export default {
    name: 'tracking',
    data () {
      return {
        count: 0,
        isdetected: '请您保持脸部在画面中央',
        loading: ''
      }
    },

    methods: {
      initTracker() {
        alert(navigator.mediaDevices)
        // 启用摄像头,这一个是原生调用摄像头的功能,不写的话有时候谷歌浏览器调用摄像头会失败
        navigator.mediaDevices
          .getUserMedia({video: true,audio: true})
          .then(this.getMediaStreamSuccess)
          .catch(this.getMediaStreamError)
      }
    }
  }
</script>

<style scoped>
  .user-icon {
    position: relative;
    margin: 0 auto;
    margin-top: 10px;
    width: 360px;
    height: 360px;
  }
  .button {
    width: 90vw;
    height: 50px;
    line-height: 50px;
    margin: 0 auto;
    background-color: skyblue;
    color: white;
    text-align: center;
    border-radius: 5px;
    font-size: 16px;
  }
  video, canvas {
    position: absolute;
  }
</style>
