import { make, dispatch } from 'vuex-pathify';

const state = {
    list: [],
    active: {
        qanda: {}
    }
};

export default {
    namespaced: true,
    state,
    getters: make.getters(state),
    mutations: make.mutations(state),
    actions: {
        ...make.actions(state),
        resetAnswers({ commit, state }) {
            const active = {
                qanda: {}
            };

            commit('SET_ACTIVE', active);
        },
        setQandA({ commit, state }, payload) {
            const active = {
                ...state,
                qanda: payload
            };
            commit('SET_ACTIVE', active);
        },
        storeQandA({ commit, state }) {
            const qanda = state.active.qanda;
            const list = state.list;

            if (qanda.question && qanda.answer) {
                console.log('qanda:', qanda);
                list.push(qanda);
                commit('SET_LIST', list);
                dispatch('answers/resetAnswers', null, { root: true });
            }
        }
    }
};
