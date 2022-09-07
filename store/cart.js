export default{
	namespaced:true,
	
	state:()=>({
		//本地已有cart ? 获取赋值给state.cart : []
		cart:JSON.parse(uni.getStorageSync('cart')||'[]')
	}),
	
	mutations:{
		//购物车添加方法
		addToCart(state,goods){
			//对比传入的商品信息（对比商品id） 已有 ? 数量+1 : 加入该商品
			const result = state.cart.find(x => x.goods_id=== goods.goods_id)
			if(!result){
				state.cart.unshift(goods)
			}else{
				result.count++
			}
			//每次修改都调用本地存储同步提交到本地
			this.commit('cart/saveToLocal')
		},
		//同步提交到本地存储
		saveToLocal(state){
			uni.setStorageSync('cart',JSON.stringify(state.cart))
		}
	},
	
	getters:{
		//返回购物车总数量
		totalCount(state){
			let num=0
			state.cart.forEach(goods => num +=goods.count)
			return num
		}
	}
}