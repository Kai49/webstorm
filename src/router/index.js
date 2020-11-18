import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CameraDetect from "../components/CameraDetect";
import Upload from "../components/Upload";
import Voice from "../components/Voice";
import Camera2 from "../components/Camera2";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/CameraDetect',
      name: 'CameraDetect',
      component: CameraDetect
    },
    {
      path: '/Upload',
      name: 'Upload',
      component: Upload
    },
    {
      path: '/Camera2',
      name: 'Camera2',
      component: Camera2
    },
    {
      path: '/Voice',
      name: 'Voice',
      component: Voice
    },

  ]
})
