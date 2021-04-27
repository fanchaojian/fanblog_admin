import Vue from 'vue'
import App from './App'
import router from './router'

/*导入jquery */
import $ from 'jquery'
/*引入bootstrap */
import 'bootstrap3'

/*引入外部图标库 */
import './assets/iconFont/albaba_AntDesign0fficialIcons/iconfont.css'

/*markdown富文本编辑器 lepture/editor 图标，样式*/
import '@/assets/editor/editor.css'
import {myEditor} from '@/assets/editor/editor.js' 
import {marked} from '@/assets/editor/marked.js'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  created() {
    myEditor(window) ; 
    window.marked = marked ; 
  }
})

/*jquery测试 */

