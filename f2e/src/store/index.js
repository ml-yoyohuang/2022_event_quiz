// @flow
import Vuex, { MutationTree, ActionTree } from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);


export type StateType = {
  loading: boolean;
}

const defaultState:StateType = {
  loading: false,
};

const mutations:MutationTree<StateType> = {
  setLoading(state:StateType, value:boolean) {
    state.loading = value;
  },
};


const actions:ActionTree<StateType> = {
  /* testAction({ commit, dispatch, state }, payload) {
  }, */
};

const getters = {
};

export default new Vuex.Store<StateType>({
  state: defaultState,
  getters,
  actions,
  mutations,
});
