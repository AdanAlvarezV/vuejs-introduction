import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        message2: 'Hello World With Vuex!'
    },
    mutations: {
        setMessage(state, newMessage2){
            state.message2 = newMessage2;
        }
    }
});