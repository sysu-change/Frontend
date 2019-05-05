/*import Vue from 'vue'
import App from './App'


new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
 */
import Vue from 'vue'
import Register from 'components/Register/Register'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<Register/>',
  components: { Register }
})
