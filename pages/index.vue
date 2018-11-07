<template>
	<div>
		<!-- 欢迎语 -->
		<div class="welcome">
			<div class="welcome2 cf w1000">
				<span class="lf">您好，欢迎来到果真是！</span>
				<ul class="welc_right rf cf">
					<li>
						<a href="javascript:;">[登录]</a>
					</li>
					<li>
						<a href="javascript:;">[<i>注册有惊喜</i>]</a>
					</li>
					<li>
						<a href="javascript:;">我的果园</a>
					</li>
					<li>
						<a href="javascript:;">手机果园</a>
					</li>
					<!--<li>
						<a href="javascript:;"><img src="../assets/img/t1.png" />400-720-0770</a>
					</li>-->
				</ul>
			</div>
		</div>
		<!-- logo搜索框 -->
		<div style="background: white;">
			<div class="logo_and_search cf w1000">
				<div class="logo lf"><img src="../assets/img/logo.jpg" /></div>
				<div class="search rf cf">
					<div class="search2 lf">
						<span>
						<i>热点搜索：</i>
						<a href="javascript:;">橙</a>
						<a href="javascript:;">苹果</a>
						<a href="javascript:;">香梨</a>
						<a href="javascript:;">火龙果</a>
						<a href="javascript:;">牛油果</a>
						<a href="javascript:;">柠檬</a>
					</span>
						<div class="search_inp">
							<input type="text" placeholder="台湾青芒" class="lf">
							<a href="javascript:;" class="lf">搜索</a>
							<img src="../assets/img/t2.png" />
						</div>
					</div>
					<div class="sear_add lf">
						<span>配送至</span>
						<input type="text" value="济南">
						<i>全国满百顺丰包邮</i>
					</div>
				</div>
			</div>
		</div>
		<!-- 导航 -->
		<div class="nav">
			<div class="nav2 w1000 cf">
				<ul class="lf nav_left cf">
					<li><i>全部商品</i></li>
					<li>
						<a href="javascript:;">首页</a>
					</li>
					<li>
						<a href="javascript:;">进口鲜果</a>
					</li>
					<li>
						<a href="javascript:;">国产鲜果</a>
					</li>
					<li>
						<a href="javascript:;">在线充值</a>
					</li>
					<li>
						<a href="javascript:;">团购配送</a>
					</li>
					<li>
						<a href="javascript:;">其他</a>
					</li>
				</ul>
				<div class="shopping_card rf">
					<a href="javascript:;"><img src="../assets/img/t3.png">购物车</a href="javascript:;">
				</div>
				<ul class="fruits" style="display: none;">
					<li>
						<a href="javascript:;">所有鲜果</a>
					</li>
					<li>
						<a href="javascript:;">进口鲜果</a>
					</li>
					<li>
						<a href="javascript:;">国产鲜果</a>
					</li>
					<li>
						<a href="javascript:;">休闲食品</a>
					</li>
					<li>
						<a href="javascript:;">礼盒花篮</a>
					</li>
					<li>
						<a href="javascript:;">消费卡券</a>
					</li>
					<li>
						<a href="javascript:;">宝贝水果</a>
					</li>
					<li>
						<a href="javascript:;">孕妇水果</a>
					</li>
					<li>
						<a href="javascript:;">老人水果</a>
					</li>
					<li>
						<a href="javascript:;">其他</a>
					</li>
				</ul>
			</div>
		</div>
		<!-- banner -->
		<div class="banner">
			<img src="../assets/img/t4.jpg" />
		</div>
		<!-- 限时抢购 -->
		<ul class="rush_buy cf w1000">
			<li v-for="(product,index) in products" :key="index">
				<img :src="product.photo" alt="" style="width: 235px;height: 235px;">
				<h1 class="raw_title" :title="product.raw_title">{{product.product_name}}</h1>
				<h2>{{product.origin}}</h2>
				<span style="display: none;">02小时35分26秒</span>
				<p>￥{{product.price}} <i>5斤</i><em style="display: none;">原价46.00</em></p>
				<div class="buy_butt cf">
					<i class="lf">{{product.sales}}</i>
					<button class="rf">立即抢购</button>
				</div>
			</li>
		</ul>
		<!-- 优惠专区 -->
		<div class="discount_tit">
			<div class="discount_tit2 w1000 cf">
				<h1 class="lf">优惠专区 <i>On sale time</i></h1>
				<a href="javascript:;" class="rf" style="display: none;">more >></a>
			</div>
		</div>
		<ul class="cf discount_lists w1000">
			<li v-for="(hot,index) in hotList" :key="index">
				<img :src="hot.photo" style="width: 235px;height: 228px;" />
				<h1>{{hot.product_name}}</h1>
				<i class="product_desc">{{hot.product_desc}}</i>
				<h2>￥{{hot.old_price}} <i>{{hot.volume}}</i></h2>
			</li>
		</ul>
		<!-- 花样礼盒 -->
		<div class="gift_bx">
			<div class="discount_tit">
				<div class="discount_tit2 w1000 cf">
					<h1 class="lf">花样礼盒 <i>Figure box</i></h1>
					<a href="javascript:;" class="rf" style="display: none;">more >></a>
				</div>
			</div>
		</div>
		<div class="fru2">
			<ul class="fru w1000 cf">
				<li v-for="(gift,index) in giftList" :key="index">
					<img :src="gift.photo" style="width: 186px;height:186px;" />
					<div class="fru_posi">
						<h1>{{gift.product_name}}</h1>
						<p class="over_text">{{gift.product_desc}}</p>
						<h2><b style="margin-right: 5px;">￥{{gift.price}}</b>{{gift.volume}}</h2>
					</div>
				</li>
			</ul>
		</div>
		<!--多仓发货-->
		<div class="duoc">
			<ul class="duocang cf">
				<li>
					<img src="../assets/img/t9.jpg" class="t9" alt="" />
					<span>多仓发货</span>
					<img src="../assets/img/t10.jpg" class="t10" alt="" />
				</li>
				<li>
					<img src="../assets/img/t11.jpg" class="t9" alt="" />
					<span>急速送达</span>
					<img src="../assets/img/t10.jpg" class="t10" alt="" />
				</li>
				<li>
					<img src="../assets/img/t12.jpg" class="t9" alt="" />
					<span>顺丰速递</span>
					<img src="../assets/img/t10.jpg" class="t10" alt="" />
				</li>
				<li>
					<img src="../assets/img/t13.jpg" class="t9" alt="" />
					<span>农残检测</span>
					<img src="../assets/img/t10.jpg" class="t10" alt="" />
				</li>
				<li>
					<img src="../assets/img/t14.jpg" class="t9" alt="" />
					<span>产地直供</span>
				</li>
			</ul>
		</div>
		<!--新手指南-->
		<div class="new3">
			<div class="new cf w1000">
				<ul class="new2">
					<li>
						<h1>新手指南</h1></li>
					<li>
						<a href="javascript:;">购物流程</a>
					</li>
					<li>
						<a href="javascript:;">账户注册</a>
					</li>
					<li>
						<a href="javascript:;">会员积分</a>
					</li>
					<li>
						<a href="javascript:;">联系客服</a>
					</li>
				</ul>
				<ul class="new2">
					<li>
						<h1>付款方式</h1></li>
					<li>
						<a href="javascript:;">货到付款</a>
					</li>
					<li>
						<a href="javascript:;">在线支付</a>
					</li>
					<li>
						<a href="javascript:;">在线充值</a>
					</li>
				</ul>
				<ul class="new2">
					<li>
						<h1>配送服务</h1></li>
					<li>
						<a href="javascript:;">配送运费</a>
					</li>
					<li>
						<a href="javascript:;">配送范围</a>
					</li>
					<li>
						<a href="javascript:;">配送时间</a>
					</li>
					<li>
						<a href="javascript:;">配送需知</a>
					</li>
				</ul>
				<ul class="new2">
					<li>
						<h1>售后服务</h1></li>
					<li>
						<a href="javascript:;">关于商品的退换</a>
					</li>
					<li>
						<a href="javascript:;">关于退换的处理</a>
					</li>
					<li>
						<a href="javascript:;">关于退款</a>
					</li>
					<li>
						<a href="javascript:;">投诉建议</a>
					</li>
				</ul>
				<ul class="new2">
					<li>
						<h1>关于我们</h1></li>
					<li>
						<a href="javascript:;">关于果真是</a>
					</li>
					<li>
						<a href="javascript:;">联系我们</a>
					</li>
					<li>
						<a href="javascript:;">业务合作</a>
					</li>
					<li>
						<a href="javascript:;">招贤纳士</a>
					</li>
				</ul>
				<div class="erwem lf">
					<img src="../assets/img/t15.jpg" style="height: 100px;margin-bottom: 10px;" />
					<p>
						<!--客服电话：15821179197<br />-->地址：浙江省绍兴市上虞区</p>
				</div>
			</div>
		</div>
		<!--底部-->
		<!--<div class="butt">
			<h1>Copyright ©2005-2014 阿七果园子 aqishop.com All Rights Reserved　 浙ICP备14024836号-1</h1>
		</div>-->
	</div>
</template>

<script>
	import axios from 'axios';
	axios.defaults.baseURL = 'http://www.guozhenshi.cn:5000/';

	export default {
		data() {
			return {
				products: [],
				hotList: [],
				giftList: []
			}
		},
		head(){
	      	return{
	        	title:"果真是 - 是！我爱吃",
	        	meta:[
	          		{name:'keywords',content:'果真是网，水果网，水果拼盘，水果礼盒，鲜果网，水果配送'},
	          		{name:'description',content:'果真是网是专业的生鲜水果食品网络购物平台，提供水果网购，水果配送，生鲜食品配送服务，享尽新鲜美味'}	          		
	        	]
	      	}
	   	},
		async asyncData(context) {
			let products = await axios.get("recList");
			let hotList = await axios.get("hotList");
			let giftList = await axios.get("giftList");
			return {
					products: products.data,
					hotList: hotList.data,
					giftList: giftList.data
			}
		}
	}
</script>

<style>
	.raw_title {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.product_desc {
		font-size: 12px;
		color: #aaaaaa;
		margin-bottom: 10px;
		display: block;
		margin-left: 16px;
	}
</style>