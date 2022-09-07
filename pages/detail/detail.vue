<template>
	<view class="container">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :circular="true">
			<swiper-item  v-for="(item,i) in detail.swiperImg" :key="i">
				<image :src="item.url"></image>
			</swiper-item>
		</swiper>
		
		<view class="price-card">
			<van-row>
			  <van-col span="8">
					<view class="price-card-top">
						￥{{detail.price}}
					</view>
					<view class="price-card-bottom">
						原价￥{{detail.originPrice}}
					</view>
				</van-col>
			  <van-col span="16"></van-col>
			</van-row>
		</view>
		<view class="title-dec">
			<view class="title-dec-top">
				{{detail.title}}
			</view>
			<view class="title-dec-bottom">
				{{detail.dec}}
			</view>
		</view>
		<view class="decImg" v-for="(item,i) in detail.decImg" :key="i">
			<image  :src="item.url" mode="scaleToFill"></image>
		</view>
		<van-goods-action>
		  <van-goods-action-icon icon="wap-home-o" text="首页" @click="Tohome()"/>
		  <van-goods-action-icon icon="cart-o" text="购物车":info="cartinfo === 0 ? null: cartinfo" @click="ToCart()"/>
		  <van-goods-action-button color="#be99ff" text="加入购物车" type="warning" @click="pushCart()"/>
		  <van-goods-action-button color="#f87fa4" text="立即购买" />
		</van-goods-action>
	</view>
</template>

<script>
	import {mapState,mapMutations,mapGetters} from'vuex'
	
	export default {
		data() {
			return {
				//购物车小图标数量
				cartinfo:0,
				detail:{
					title:"七夕限定|13支心动香槟|14支浪漫粉玫",
					dec:"七夕限定款",
					price:"520.00",
					originPrice:"1314.00",
					swiperImg:[{
						url:"https://img.reflower.com.cn/82743cb7abbb5b895df69d66edf6dc2fc9b0bdb0"
					},{
						url:"https://img.reflower.com.cn/80d7ee69b5f35728849fa0d998a5df5790bee96b"
					},{
						url:"https://img.reflower.com.cn/e160b0a0eee885a278b9d81be518d173e2b5a977"
					},{
						url:"https://img.reflower.com.cn/3d2eb3316ac1b7fa69389a10966f86e8d49fc61f"
					},{
						url:"https://img.reflower.com.cn/c1e403b12e46787cd4c91da71c86db55ac595d1a"
					}],
					decImg:[{
						url:"http://img.reflower.com.cn/dbe0aa644a1aa5d9915c91869aaccbcecce2175e"
					},{
						url:"https://img.reflower.com.cn/8a45bea70ac8b5660fb9feb4614c4006a295557d"
					},{
						url:"https://img.reflower.com.cn/33b07705a1e93452ab4a1a044eb10de7688f12ed"
					},{
						url:"https://img.reflower.com.cn/b529d2ee284b3df26ce2862813f42a1ac6381746"
					},{
						url:"https://img.reflower.com.cn/c1e403b12e46787cd4c91da71c86db55ac595d1a"
					}]
				}
			}
		},
		
		computed:{
			...mapState('cart',[]),
			...mapGetters('cart',['totalCount'])
		},
		
		watch:{
			totalCount:{
				handler(newval,oldval){
					this.cartinfo=newval
					},
					//立即监听，进入页面就触发
				immediate:true
			}
		},
		
		methods: {
			...mapMutations('cart',['addToCart']),
			
			Tohome(){
				uni.switchTab({
					url:'/pages/home/home',
				})
			},
			ToCart(){
				uni.switchTab({
					url:'/pages/cart/cart',
				})
			},
			pushCart(){
				const goods ={
					id:1,
					name:"花",
					price:"520.00",
					count:1,
					state:true
				}
				
				this.addToCart(goods)
			}
		}
	}
</script>

<style lang="scss">
	.container {
		font-size: 14px;
		line-height: 24px;
	}
	swiper{
		height: 400px;
	}
	swiper-item>image{
		width: 100%;
		height: 100%;
	}
	.price-card{
		height:70px;
		background-color: #FC5967;
		border-radius: 20rpx;
		border: dashed 1rpx #fff;
		.van-col{
			.price-card-top{
				height: 70%;
				text-align: center;
				font-size: 30px;
				color: #F0F0F0;
				line-height:calc(150%);
			}
			.price-card-bottom{
				text-align: center;
				font-size: 15px;
				color: #F0F0F0;
				text-decoration:line-through #545454;
				line-height:calc(150%);
			}
		}
	}
	.title-dec{
		height:70px;
		padding: 10px;
		border-bottom: solid 1rpx #FC5967;
		.title-dec-top{
			font-size: 16px;
			line-height:calc(150%);
		}
		.title-dec-bottom{
			font-size: 13px;
			color: #9f9f9f;
			line-height:calc(150%);
		}
	}
	.decImg{
		
		image{
			display: block;
			width: 100%;
		}
	}
	.van-goods-action{
		height: 80px!important;
	}
</style>
