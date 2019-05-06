import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import axios from 'axios';
import 'element-ui/lib/theme-chalk/index.css' 
Vue.use(ElementUI);
Vue.prototype.$http = axios;
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
