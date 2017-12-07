import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

//初始状态
const state = {
	userName: '',
	curDate: moment(new Date()).format('YYYY-MM-DD'),
	dataList: {
		list: [],
		page: {
			pageNo: 1,
			pageSize: 20,
			total: 0
		}
	},
}

const mutations = {
	setUserName (state, val) {
		state.userName = val;
	}
}

export default new Vuex.Store({
	state,
	mutations
});
