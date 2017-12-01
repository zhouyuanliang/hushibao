import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

//初始状态
const state = {
	userName: '',
	curDate: moment(new Date()).format('YYYY-MM-DD')
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
