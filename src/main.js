import Vue from 'vue'
import App from './App.vue'
import router from './router';
import {StringTool} from 'pdstoolsdk';
console.log(StringTool)
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  mounted() {
    document.addEventListener('DOMContentLoaded', function (e) {
      let innerWidth = window.innerWidth * 2 / 15;
      // xrem => ypx       x*100/2 = y
      // xpx => yrem       x*2/100 = y
      // 设置rem
      document.getElementsByTagName('html')[0].style.fontSize = innerWidth + 'px';
      // 获取实际fontSize
      let getComputedStyle = Number(window.getComputedStyle(document.querySelector('html'), null).getPropertyValue('font-size').replace('px', ''));
      // 不相等则手机修改过字段大小或显示大小
      if (getComputedStyle !== innerWidth) {
        // 重新设置html fontSize大小
        document.getElementsByTagName('html')[0].style.fontSize = innerWidth * innerWidth / getComputedStyle + 'px';
      }
    }, false);
  }
}).$mount('#app');
