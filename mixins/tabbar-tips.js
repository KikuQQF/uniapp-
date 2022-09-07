import {mapGetters} from'vuex'

export default{
	computed:{
		...mapGetters('cart',['totalCount'])
	},
	methods:{
		//设置右上角徽标
		setInfo(){
			uni.setTabBarBadge({
				index:2,
				text:this.totalCount+''
			})
		}
	},
	//页面显示钩子函数
	onShow(){
		this.setInfo()
	}
}