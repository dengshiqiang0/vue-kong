import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import {hlhome} from './moduls/homestore'
export default new Vuex.Store({
    modules:{
        hlhome
    }
})