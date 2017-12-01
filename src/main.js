// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Vuex from 'vuex'
import store from './vuex/store'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import 'font-awesome/css/font-awesome.min.css'
import './assets/css/style.less'

import syComponent from '@/components'


Vue.use(Element)
Vue.use(Vuex)
Vue.use(syComponent)

router.afterEach((to) => {
	document.title = to.name + ' - 互市宝';
	if(!to.name){
		router.push('/login');
	}
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
