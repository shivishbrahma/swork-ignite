import { createStore } from "vuex";

const state = {
	isDark: true,
};

const mutations = {
	toggleDark(state) {
		state.isDark = !state.isDark;
	},
};

const actions = {};

const getters = {};

export default createStore({
	state,
	getters,
	actions,
	mutations,
});
