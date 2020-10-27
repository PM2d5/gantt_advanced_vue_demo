/**
 *- Vuex store
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        eventStyle:'mixed',
        eventColor:'indigo'
    },
    getters : {
        eventStyle: state => {
            return state.eventStyle
        },
        eventColor: state => {
            return state.eventColor
        }
    },
    mutations: {
        setEventStyle: (state, payload) => {
            state.eventStyle = payload;
            
        },
        setEventColor: (state, payload) => {
            state.eventColor = payload;
        }
    },
    actions: {
        setEventStyle: ({commit}, payload) => {
            commit('setEventStyle', payload);
        },
        setEventColor: ({commit}, payload) => {
            commit('setEventColor', payload);
        }
    }
}); // eo store

// eof
