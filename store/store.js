import Vue from 'vue'
import Vuex from 'vuex'
import Cart from '@/store/cart.js'
Vue.use(Vuex)

const store = new Vuex.Store({
	modules:{
		'cart':Cart
	}
})
export default store