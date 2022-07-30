<template>
	<view>
		<van-search
		  v-model="value"
		  shape="round"
		  background="#f87fa4"
		  placeholder="请输入搜索关键词"
		/>
		<view class="main">
			<!-- 左 -->
			<scroll-view class="main-left" scroll-y="true" :style="{height: vh+'px'}">
				<van-sidebar v-model="activeKey">
					<van-sidebar-item title="标签名1" />
					<van-sidebar-item title="标签名" />
					<van-sidebar-item title="标签名" />
					<van-sidebar-item title="标签名" />
					<van-sidebar-item title="标签名" />
					<van-sidebar-item title="标签名" />
					<van-sidebar-item title="标签名" />
					<van-sidebar-item title="标签名" />
					<van-sidebar-item title="标签名" />
					<van-sidebar-item title="标签名" />
					<van-sidebar-item title="标签名" />
					<van-sidebar-item title="标签名" />
					<van-sidebar-item title="标签名" />
					<van-sidebar-item title="标签名" />
					<van-sidebar-item title="标签名2" />
				</van-sidebar>
			</scroll-view>
			<!-- 右 -->
			<scroll-view scroll-y="true" :style="{height: vh+'px'}">
				<view @click="Todetail(e)">
					<van-card
							v-for="(item,index) in thumbimageURL" :key="index"
						  num="2"
						  tag="新品"
						  price="10.00"
						  desc="描述信息"
						  title="商品标题"
						  :thumb="item"
						>
							<view slot="tags">
								<van-tag mark type="danger">{{"3.94折 限购1份"}}</van-tag>
							</view>
						  <view slot="footer">
						    <van-button size="mini">11</van-button>
						    <van-button size="mini">按钮</van-button>
						  </view>
						</van-card>			
				</view>
				<view @click="Todetail(e)">
					<van-card
							v-for="(item,index) in thumbimageURL" :key="index"
						  num="2"
						  price="10.00"
						  desc="描述信息"
						  title="商品标题"
						  :thumb="item"
						>
							<view slot="tags">
								<van-tag mark type="danger">{{"3.94折 限购1份"}}</van-tag>
							</view>
						  <view slot="footer">
						    <van-button size="mini">11</van-button>
						    <van-button size="mini">按钮</van-button>
						  </view>
						</van-card>			
				</view>
				<view @click="Todetail(e)">
					<van-card
							v-for="(item,index) in thumbimageURL" :key="index"
						  num="2"
						  tag="新品"
						  price="10.00"
						  desc="描述信息"
						  title="商品标题"
						  :thumb="item"
						>
							<view slot="tags">
								<van-tag mark type="danger">{{"3.94折 限购1份"}}</van-tag>
							</view>
						  <view slot="footer">
						    <van-button size="mini">11</van-button>
						    <van-button size="mini">按钮</van-button>
						  </view>
						</van-card>			
				</view>
			</scroll-view>
		</view>		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				vh:0,
				activeKey: 0,
				thumbimageURL:["https://img.reflower.com.cn/bb16e7ccc1dd1164ed2b5b585cc29a79e57283b2"]
			};
		},
		
		onLoad() {
			const SystemInfo=uni.getSystemInfoSync()
			this.vh=SystemInfo.windowHeight
		},
		
		methods:{
			Todetail(e){
				uni.navigateTo({
					url:'/pages/detail/detail',
				})
			}
		}
	}
</script>

<style lang="scss">
	.main{
		display: flex;
	}
	.van-search{
		margin-top: 1rpx;
	}
	.main-left{
		width:80px;
	}
	.vant-card{
		border-bottom: solid 10rpx #000000;
	}
</style>
