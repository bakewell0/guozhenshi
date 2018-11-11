<template>
	<div>
		<v-header></v-header>
		<!-- banner -->
		<div class="banner">
			<img src="../assets/img/in4.jpg" />
		</div>
		<!-- 限时抢购 -->
		<ul class="rush_buy cf w1000">
			<li v-for="(product,index) in recList" :key="index">
				<nuxt-link :to="'/detail?productid='+product.id">
					<img :src="product.photo" alt="" style="width: 235px;height: 235px;">
					<h1 class="raw_title" :title="product.raw_title">{{product.product_name}}</h1>
					<h2>{{product.origin}}</h2>
					<span style="display: none;">02小时35分26秒</span>
					<p>￥{{product.price}} <i>5斤</i><em style="display: none;">原价46.00</em></p>
					<div class="buy_butt cf">
						<i class="lf">{{product.sales}}</i>
						<button class="rf">立即抢购</button>
					</div>
				</nuxt-link>
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
				<nuxt-link :to="'/detail?productid='+hot.id">
					<img :src="hot.photo" style="width: 235px;height: 228px;" />
					<h1>{{hot.product_name}}</h1>
					<i class="product_desc">{{hot.product_desc}}</i>
					<h2>￥{{hot.old_price}} <i>{{hot.volume}}</i></h2>
				</nuxt-link>
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
					<nuxt-link :to="'/detail?productid='+gift.id">
					<img :src="gift.photo" style="width: 186px;height:186px;" />
					<div class="fru_posi">
						<h1>{{gift.product_name}}</h1>
						<p class="over_text">{{gift.product_desc}}</p>
						<h2><b style="margin-right: 5px;">￥{{gift.price}}</b>{{gift.volume}}</h2>
					</div>
					</nuxt-link>
				</li>
			</ul>
		</div>
		<!--多仓发货-->
		<v-footer></v-footer>
	</div>
</template>

<script>
	import axios from 'axios';
	import header from '../components/header'
	import footer from '../components/footer'
	
	axios.defaults.baseURL = 'http://www.guozhenshi.cn:5000/';

	export default {
		components: {
			'v-header': header,
			'v-footer': footer
		},
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
			let recList = await axios.get("recList");
			let hotList = await axios.get("hotList");
			let giftList = await axios.get("giftList");
			return {
					recList: recList.data,
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