import Vue from 'vue'
import VueRouter from 'vue-router'
import VMain from './components/Main.vue'
import VTopic from './components/Topic.vue'
import VUser from './components/User.vue'
import VAbout from './components/About.vue'

Vue.use(VueRouter)

const routes = [
	{ path: '/', component: VMain },
	{ path: '/topic/:id', component: VTopic },
	{ path: '/user/:name', component: VUser },
	{ path: '/about', component: VAbout},
]
const router = new VueRouter({
	routes
})

export default router