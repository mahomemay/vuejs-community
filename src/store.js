import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const state = {
	articleList: [],
	page: {},
	user: {},
}

const actions = {
	getDataByType({commit, state}, status){
		var url = ''
		switch(status){
			case 'good':
				url = 'https://www.vue-js.com/api/v1/topics?tab=good'
				break
			case 'weex':
				url = 'https://www.vue-js.com/api/v1/topics?tab=weex'
				break
			case 'share':
				url = 'https://www.vue-js.com/api/v1/topics?tab=share'
				break
			case 'ask':
				url = 'https://www.vue-js.com/api/v1/topics?tab=ask'
				break
			case 'job':
				url = 'https://www.vue-js.com/api/v1/topics?tab=job'
				break
			default:
				url = 'https://www.vue-js.com/api/v1/topics'
		}
		axios.get(url).then(response => {
			var data = response.data.data
			commit('GETDATA', {data})
		})
	},
	getDataByPage({commit, state}, page){
		var url = 'https://www.vue-js.com/api/v1/topics?page=' + page
		axios.get(url).then(response => {
			var data = response.data.data
			commit('GETDATA', {data})
		})
	},
	getDataById({commit, state}, id){
		var url = 'https://www.vue-js.com/api/v1/topic/' + id
		axios.get(url).then(response => {
			var data = response.data.data
			commit('PAGEDATA', {data})
		})
	},
	getUser({commit, state}, name){
		var url = 'https://www.vue-js.com/api/v1/user/' + name
		axios.get(url).then(response => {
			var data = response.data.data
			commit('GETUSER', {data})
		})
	},
}

const mutations = {
	GETDATA(state, {data}){
		state.articleList = data
	},
	PAGEDATA(state, {data}){
		state.page = data
	},
	GETUSER(state, {data}){
		state.user = data
	},
}

const getters = {

}

export default new Vuex.Store({
	state,
	actions,
	mutations,
	getters
})