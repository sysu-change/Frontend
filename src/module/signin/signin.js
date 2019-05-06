import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import VUER from 'vue-resource';
import 'element-ui/lib/theme-chalk/index.css'  //引入组件库 'npm i element-ui -S'
Vue.use(ElementUI);
Vue.use(VUER);
Vue.http.options.headers = {
  'Content-Type': 'application/json; charset=UTF-8'
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

/*
import Vue from 'vue'
import Signin from 'components/Signin/Signin'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'  //引入组件库 'npm i element-ui -S'
Vue.use(ElementUI);


new Vue({
  el: '#app',
  template: '<Signin/>',
  components: { Signin },
  
})
*/
