import Vue from 'vue'
import ElementUI from 'element-ui';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/base.css';
import './assets/style.css'
import router from './router'
import store from './store'
import App from './App.vue'

Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.filter('tagType', function (value) {
	switch (value) {
		case 'good':
			return '精华'
			break
		case 'week':
			return 'Week'
			break
		case 'share':
			return '分享'
			break
		case 'ask':
			return '问答'
			break
		case 'job':
			return '招聘'
			break
	}
})
Vue.filter('dateTime', function (value) {
	const date = new Date(value)
	const year = date.getFullYear()
	const month = date.getMonth() + 1
	const day = date.getDate()
	return `${year < 10 ? '0' + year : year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`
})

new Vue({
	store,
	router,
	render: h => h(App),
}).$mount('#app')
