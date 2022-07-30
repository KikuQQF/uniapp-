<template>
	<view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :circular="true">
			<swiper-item class="swiper-item" v-for="(item,i) in swiperitemList" :key="i">
				<image :src="item.url"></image>
			</swiper-item>
		</swiper>
		<van-notice-bar 
			class="van-notice-bar"
		  left-icon="volume-o"
			scrollable
			background="#fff"
		  :text=noticeText
		/>
		
		<view class="classifiy-nav">
			<view class="classifiy-nav-item" v-for="(item,i) in classifiyItems" :key="i">
				<image class="classifiy-img" :src="item.url" :style="{width:item.imgwidth+'vw'}" mode="widthFix"></image>
			</view>
		</view>
		
		<view class="nav-show" :style="{backgroundImage: 'url(' + navshow.bgimg + ')', backgroundSize:'100%'}">
			<view class="nav-show-left">
				<image :src="navshow.itemsImg[0].url"></image>
			</view>
			<view class="nav-show-right" >
				<view class="nav-show-right-item" v-for="(item,i) in navshow.itemsImg.slice(1)" :key="i">					
					<image :src="navshow.itemsImg[i+1].url"></image>
				</view>
			</view>
		</view>

	 </view>
</template>

<script>
	export default {
		data() {
			return {
				swiperitemList:[{
						url:"https://b.appsimg.com/upload/momin/2022/04/08/166/1649411979864.jpg"
					},{
						url:"https://b.appsimg.com/upload/momin/2022/04/08/150/1649407214942.jpg"
					}
				],
				noticeText:'3.14白色情人节浪漫来袭!!!',
				classifiyItems:[{
						url:"https://img.reflower.com.cn/44c66a1b406b5dc16da9da0cf19d220823df4ac1?imageView2/2/w/750/h/750/q/75",
						imgwidth:46
					},{
						url:"https://img.reflower.com.cn/108355bd98507711f9fca5ca976c6c9375583b30?imageView2/2/w/750/h/750/q/75",
						imgwidth:46
					},{
						url:"https://img.reflower.com.cn/a885a0eb9f3e77b9aea537f6e1b33a072e3b3b75?imageView2/2/w/750/h/750/q/75",
						imgwidth:30
					},{
						url:"https://img.reflower.com.cn/a4a33198e290c6287434556b488ad4dd7532eaa1?imageView2/2/w/750/h/750/q/75",
						imgwidth:30
					},{
						url:"https://img.reflower.com.cn/a593f47721d83f6ae3e31997ea1c6c966f5aba4b?imageView2/2/w/750/h/750/q/75",
						imgwidth:30
				}],
				navshow:{
					bgimg:"https://img.reflower.com.cn/ab55c4028df9f56b0d3e22bf6f87fb5be4b4683c?imageView2/2/w/750/h/750/q/75",
					itemsImg:[
					 	{
							url:"https://img.reflower.com.cn/1342611ceff5a4dd9f445588a3605a7312a56bed?imageView2/2/w/750/h/750/q/75"
					 	},{
					 		url:"https://img.reflower.com.cn/bb3cb9041de3587c4e9dda0e45b0ef441cf48c68?imageView2/2/w/750/h/750/q/75"
					 	},{
					 		url:"https://img.reflower.com.cn/a100fdf1a6e4d6d568a392606943c9fe0794305c?imageView2/2/w/750/h/750/q/75"
					 	}
				  ]
				}
			};
		}
	}
</script>

<style lang="scss" scoped>
	swiper{
		margin:0 1vh;
		.swiper-item,
		image{
			width: 100%;
			height: 100%;
		}
	}
	.van-notice-bar{
		margin:1vw;
		border-radius: 1vw;
		
	}
	.classifiy-nav{
		margin: 2vw;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		.classifiy-nav-item{
			margin-bottom: 10rpx;
			.classifiy-img{
				height: 100%;
				
			}
		}
	}
	.nav-show{
		display: flex;
		align-items: flex-end;
		justify-content: space-around;
		// position: relative;
		height: 310px;
		background-repeat: no-repeat;
		margin: 1vw;
		.nav-show-left{
			// flex: 1;
			// position: absolute;
			
			width: 45%;
			height: 60%;
			
			margin-bottom: 5%;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.nav-show-right{
			display: flex;
			flex-wrap: wrap;
			align-content: space-between;
			// flex: 1;
			
			// position: absolute;
			width: 50%;
			height: 60%;
			margin-bottom: 5%;
			.nav-show-right-item{
				
				width: 100%;
				height: 47%;
				image{
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>
