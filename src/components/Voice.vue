<template>
  <div id="app">
    <div class="recorder-wrapper">
      <div class="phone">
        <div class="phone-body">

          <div class="phone-content">
            <transition-group tag="ul" class="msg-list" name="fade">

              <li v-for="(item, index) in chunkList" :key="index" class="msg" @click="onPlay(index)" @touchend.prevent="onPlay(index)">
                <div class="avatar"></div>
                <div v-cloak class="audio" :style="{width: 20 * item.duration + 'px'}" :class="{wink: item.wink}">
                  <span>(</span><span>(</span><span>(</span>
                </div>
                <div class="duration">{{item.duration}}"</div>
              </li>
            </transition-group>
          </div>
          <div class="phone-operate" @mousedown="onMousedown" @touchstart.prevent="onMousedown" @mouseup="onMouseup" @touchend.prevent="onMouseup">{{btnText}}</div>
        </div>
      </div>
      <audio ref="audio"></audio>
    </div>
  </div>

</template>

<script>
    export default {
      el:'app',

      data () {
        return {
          chunks: [],
          chunkList: [],
          btnText: '按住说话'
        }
      },

      methods: {

        requestAudioAccess (){
          navigator.mediaDevices.getUserMedia({audio: true}).then(stream => {
            this.recorder = new window.MediaRecorder(stream);
            this.bindEvents();
          })


        },


        onMousedown () {
          this.onStart();
          this.btnText = '松开结束'
        },

        onMouseup () {
          this.onStop();
          this.btnText = '按住说话'
        },

        onStart () {
          this.recorder.start();
        },

        onStop () {
          this.recorder.stop();
        }

      }

    }
</script>

<style scoped>
  .recorder-wrapper {
    margin-top: 10px;
    padding: 20px;
    border: 1px solid #00b894;
  }
  .phone {
    margin: 0 auto;
    padding: 55px 11px 53px;
    width: 221px;
    height: 448px;
    font-size: 12px;
    border-radius: 35px;
    background-image: url('https://xiaotianxia.github.io/blog/vuepress/assets/img/iphone-bg1.bf9c75ef.png');
    box-sizing: border-box;
    user-select: none;
  }
  .phone-body {
    height: 100%;
    background-color: #fff;
  }
  .phone-head {
    height: 30px;
    line-height: 30px;
    color: #fff;
    font-weight: bold;
    background-color: #000;
  }
  .phone-head span {
    display: inline-block;
  }
  .phone-head span:nth-child(2) {
    width: 100px;
    text-align: center;
  }
  .phone-head span:nth-child(3) {
    float: right;
    margin-right: 10px;
  }
  .phone-content {
    height: 282px;
    background-color: #f1eded;
  }
  .phone-operate {
    position: relative;
    line-height: 28px;
    text-align: center;
    cursor: pointer;
    font-weight: bold;
    box-shadow: 0 -1px 1px rgba(0, 0, 0, .1);
  }
  .phone-operate:active {
    background-color: #95a5a6;
  }
  .phone-operate:active:before {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    top: -2px;
    content: '';
    width: 0%;
    height: 2px;
    background-color: #7bed9f;
    animation: loading 1s ease-in-out infinite backwards;
  }
  .msg-list {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
  .msg-list::-webkit-scrollbar {
    display: none;
  }
  .msg-list .msg {
    list-style: none;
    padding: 0 8px;
    margin: 10px 0;
    overflow: hidden;
    cursor: pointer;
  }
  .msg-list .msg .avatar,
  .msg-list .msg .audio,
  .msg-list .msg .duration {
    float: right;
  }
  .msg-list .msg .avatar {
    width: 24px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    background-color: #000;
    background: url('https://denzel.netlify.com/hero.png') 0 0;
    background-size: 100%;
  }
  .msg-list .msg .audio {
    position: relative;
    margin-right: 6px;
    max-width: 116px;
    min-width: 30px;
    height: 24px;
    line-height: 24px;
    padding: 0 4px 0 10px;
    border-radius: 2px;
    color: #000;
    text-align: right;
    background-color: rgba(107, 197, 107, 0.85);
  }
  .msg-list .msg.eg {
    cursor: default;
  }
  .msg-list .msg.eg .audio {
    text-align: left;
  }
  .msg-list .msg .audio:before {
    position: absolute;
    right: -8px;
    top: 8px;
    content: '';
    display: inline-block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 4px;
    border-color: transparent transparent transparent rgba(107, 197, 107, 0.85);
  }
  .msg-list .msg .audio span {
    color: rgba(255, 255, 255, .8);
    display: inline-block;
    transform-origin: center;
  }
  .msg-list .msg .audio span:nth-child(1) {
    font-weight: 400;
  }
  .msg-list .msg .audio span:nth-child(2) {
    transform: scale(0.8);
    font-weight: 500;
  }
  .msg-list .msg .audio span:nth-child(3) {
    transform: scale(0.5);
    font-weight: 700
  }
  .msg-list .msg .audio.wink span {
    animation: wink 1s ease infinite;
  }
  .msg-list .msg .duration {
    margin: 3px 2px;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  @keyframes wink {
    from {
      color: rgba(255, 255, 255, .8);
    }
    to {
      color: rgba(255, 255, 255, .1);
    }
  }
  @keyframes loading {
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  }
</style>
