<template>
	<div>
		<v-header></v-header>
		<div class="shopping cf">
			<!--左边内容-->
			<div class="shop_left lf cf">
				<div class="cf">
					<!--商品图片-->
					<div class="shop_xq lf">
						<div class="shop_image">
							<div class="shop_big_img">
								<img :src="productDetail.photo" style="width: 418px;height: 418px;"/>
							</div>
							<!--<ul class="shop_xiaotu">
								<li v-for="(shop, shopkey) in imgs" :key="shopkey">
									<img :src="shop.t1" />
								</li>
							</ul>-->
						</div>
					</div>
					<!--商品信息-->
					<div class="shop_inform lf">
						<h1>{{ productDetail.product_name }}</h1>
						<h2>{{ productDetail.product_desc }}</h2>
						<div class="shop_price">
							<div class="shop_puile cf">
								<i class="lf">价格</i>
								<span class="lf" style="font-size: 14px;">￥<a style="text-decoration: line-through;">{{ productDetail.old_price }}</a></span>
							</div>
							<div class="shop_puile cf">
								<i class="lf" style="padding-top: 4px;">促销价</i>
								<span class="lf" style="font-size: 15px; font-weight: bold; color: #c40000;">￥<em>{{ productDetail.price }}</em></span>
							</div>
							<div class="shop_puile cf">
								<i class="lf">本店活动</i>
								<span class="lf" style="font-size: 14px; color: #b5621b;">{{ productDetail.activity }}</span>
							</div>
							<div class="shop_puile cf">
								<i class="lf">原产地</i>
								<span class="lf" style="font-size: 14px; color: #b5621b;">{{ productDetail.origin }}</span>
							</div>
						</div>
						<!--<div class="shop_addre">
							<div class="shop_adds cf">
								<i class="lf">配送至：</i>
								<select class="lf">
									<option>深圳罗湖区</option>
									<option>深圳罗湖区</option>
									<option>深圳罗湖区</option>
									<option>深圳罗湖区</option>
								</select>
								<b class="lf">深圳发货</b>
							</div>
							<div class="pay_type cf">
								<i class="lf">支付方式</i>
								<img src="../assets/img/de3.jpg" class="lf" />
								<img src="../assets/img/de4.jpg" class="lf" />
							</div>
							<div class="pay_type cf">
								<i class="lf">数<em style="margin-left: 20px;">量</em></i>
								<ul class="lf cf shop_numb">
									<li>-</li>
									<li>1</li>
									<li>+</li>
								</ul>
							</div>
						</div>-->
						<ul class="qrcode cf">
							<li class="lf">电话咨询</li>
							<li class="rf"><img src="../assets/img/de5.jpg" />微信咨询</li>
						</ul>
						
						<div style="margin: 20px auto;font-size: 12px;text-align: right;">
							浏览次数：{{productDetail.scan}}
						</div>
						
					</div>
				</div>
				<!--累积评价-->
				<ul class="shop_xq2 cf">
					<li>商品详情<img src="../assets/img/de6.jpg" /></li>
					<!--<li>累积评价<i>46766</i></li>-->
				</ul>
				<div class="shop_num" style="display: none;">
					<img src="../assets/img/de7.jpg" alt="" />
				</div>
				<!--品牌名称-->
				<div class="shop_name">
					<h2>产品参数：</h2>
					<div class="shop_list cf">
						<ul class="lf">
							<li>规格：{{productDetail.spec}}</li>
							<li>重量：{{productDetail.weight}}</li>
							<li>包装：{{productDetail.pack}}</li>
							<li>保质期：{{productDetail.period}}</li>
							<li>贮存方法：{{productDetail.storage}}</li>
						</ul>
					</div>
				</div>
				<!--生产日期-->
				<!--详情图片-->
				<!--<div class="shop_images">
					<img src="../assets/img/de10.jpg" alt="" />
					<img src="../assets/img/de11.jpg" alt="" />
					<img src="../assets/img/de12.jpg" alt="" />
					<img src="../assets/img/de13.jpg" alt="" />
				</div>-->
			</div>
			<div class="shop_right rf">
				<div class="tit_img">
					<img src="../assets/img/de14.jpg" alt="" />
				</div>
				<ul class="shop_see">
					<li v-for="hot in hotList">
						<span>￥{{hot.price}}</span>
						<img :src="hot.photo" alt="" style="width: 232px;height: 232px;"/>
						<h1>{{hot.product_name}}</h1>
					</li>
					<!--<li>
						<span>￥16.90</span>
						<img src="../assets/img/de15.jpg" alt="" />
						<h1>海参肉海参肉海参肉海参肉海参肉</h1>
					</li>
					<li>
						<span>￥16.90</span>
						<img src="../assets/img/de15.jpg" alt="" />
						<h1>海参肉海参肉海参肉海参肉海参肉</h1>
					</li>
					<li>
						<span>￥16.90</span>
						<img src="../assets/img/de15.jpg" alt="" />
						<h1>海参肉海参肉海参肉海参肉海参肉</h1>
					</li>-->
				</ul>
			</div>
		</div>
		<v-footer></v-footer>
	</div>
</template>

<script>
	import axios from 'axios';
	import header from '../components/header';
	import footer from '../components/footer';

	axios.defaults.baseURL = 'http://www.guozhenshi.cn:5000/';

	export default {
		components: {
			'v-header': header,
			'v-footer': footer
		},
		data() {
			return {
				productDetail: {},
				recList:{}
			}
		},
		head() {
			return {
				title: this.productDetail.product_name+"_水果分类 _果真是 - 是！我爱吃",
				meta: [{
						name: 'keywords',
						content: this.productDetail.product_name
					},
					{
						name: 'description',
						content: this.productDetail.product_desc
					}
				]
			}
		},
		async asyncData(context) {
			let productDetail = await axios.get("productDetail?productid="+context.query.productid);
			let hotList = await axios.get("hotList");
			return {
				productDetail: productDetail.data[0],
				hotList: hotList.data.slice(0,4)
			}
		},
		methods: {
			
		},
		created() {
			
		}
	}
</script>

<style>
	@charset "utf-8";
	/*清除浮动*/
	
	@charset "utf-8";
	/* reset */
	
	html {
		height: 100%
	}
	
	body {
		min-height: 100%;
		min-width: 1200px;
		overflow-x: hidden;
	}
	
	body {
		_height: 100%
	}
	
	body,
	div,
	ul,
	ol,
	li,
	dl,
	dt,
	dd,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	iframe,
	pre,
	code,
	fieldset,
	legend,
	form,
	input,
	select,
	textarea,
	button,
	p,
	blockquote,
	th,
	td,
	figure {
		margin: 0;
		padding: 0
	}
	
	body,
	div,
	ul,
	ol,
	li,
	dl,
	dt,
	dd,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	iframe,
	pre,
	code,
	fieldset,
	legend,
	form,
	p,
	blockquote,
	figure,
	header,
	footer,
	nav,
	article,
	section,
	aside,
	address,
	figcaption {
		*zoom: 1
	}
	
	li {
		list-style-type: none
	}
	
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-size: 100%;
		font-weight: normal;
	}
	
	iframe,
	frame,
	fieldset,
	img {
		border: 0 none
	}
	
	img {
		vertical-align: top
	}
	
	input[type=button],
	input[type=submit],
	input[type=reset] {
		cursor: pointer
	}
	
	button {
		cursor: pointer
	}
	
	input[type=text],
	input[type=password],
	input[type=file],
	textarea {
		-webkit-border-radius: 0;
		-webkit-appearance: normal
	}
	
	input[type=search] {
		-webkit-box-sizing: content-box;
		-moz-box-sizing: content-box;
		-ms-box-sizing: content-box;
		-o-box-sizing: content-box;
		box-sizing: content-box
	}
	
	textarea {
		overflow: auto;
		resize: none
	}
	
	blockquote,
	q {
		quotes: none
	}
	
	blockquote:before,
	blockquote:after,
	q:before,
	q:after {
		content: "";
		content: none
	}
	
	caption,
	th {
		text-align: left
	}
	
	th {
		font-weight: normal
	}
	
	em,
	cite,
	address,
	i {
		font-style: normal
	}
	
	sup {
		vertical-align: text-top
	}
	
	sub {
		vertical-align: text-bottom
	}
	
	body,
	input,
	select,
	button,
	textarea {
		font-size: 14px;
		font-family: "微软雅黑", arial, "\5b8b\4f53";
	}
	
	body {
		line-height: 1.17
	}
	
	a {
		text-decoration: none
	}
	
	a {
		blr: expression(this.onFocus=this.blur())
	}
	
	a * {
		*cursor: pointer
	}
	
	:focus {
		outline: none
	}
	
	.edit_con_original {
		line-height: 1.5;
		padding: 20px;
		color: #333;
	}
	
	.edit_con_original li,
	.edit-con-original li {
		list-style-type: disc
	}
	
	.edit_con_original h1,
	.edit-con-original h1 {
		font-size: 2em
	}
	
	.edit_con_original h2,
	.edit-con-original h2 {
		font-size: 1.5em
	}
	
	.edit_con_original h3,
	.edit-con-original h3 {
		font-size: 1.17em
	}
	
	.edit_con_original h4,
	.edit-con-original h4 {
		font-size: 1em
	}
	
	.edit_con_original h5,
	.edit-con-original h5 {
		font-size: 0.83em
	}
	
	.edit_con_original h6,
	.edit-con-original h6 {
		font-size: 0.67em
	}
	
	.edit_con_original em,
	.edit-con-original em {
		font-style: italic
	}
	
	.edit_con_original cite,
	.edit-con-original cite {
		font-style: italic
	}
	
	.edit_con_original address,
	.edit-con-original address {
		font-style: italic;
	}
	
	.edit_con_original i,
	.edit-con-original i {
		font-style: italic
	}
	
	.fixed:after,
	.clearfix:after,
	.cf:after,
	.header:after,
	.main:after,
	.footer:after {
		content: " ";
		display: block;
		clear: both;
		height: 0;
		overflow: hidden
	}
	
	.fixed,
	.clearfix,
	.cf,
	.header,
	.main,
	.footer {
		*zoom: 1
	}
	
	.clear,
	.cl {
		display: block!important;
		float: none!important;
		clear: both;
		width: auto!important;
		max-width: none!important;
		min-width: 0!important;
		max-height: none!important;
		min-height: 0!important;
		overflow: hidden;
		margin: 0!important;
		padding: 0!important;
		border: 0 none!important;
		font-size: 0!important;
		line-height: 0!important
	}
	
	.lt9 .t-shadow {
		filter: progid:DXImageTransform.Microsoft.Gradient(GradientType=0, StartColorStr="#99000000", EndColorStr="#99000000")
	}
	
	.t-shadow {
		background: rgba(0, 0, 0, .5)
	}
	
	.lf {
		float: left;
	}
	
	.rf {
		float: right;
	}
	
	.jz {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.w1000 {
		width: 1000px;
		margin: 0 auto;
	}
	
	.over_text {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	/*详情页*/
	
	.shop_left {
		border-right: 1px solid #eee;
		width: 930px;
	}
	
	.shopping {
		width: 1185px;
		margin: 20px auto;
	}
	
	.shop_xq,
	.shop_image {
		width: 420px;
		overflow: hidden;
	}
	
	.shop_big_img {
		border: 1px solid #EEEEEE;
	}
	
	.shop_xiaotu li {
		float: left;
		margin-right: 25px;
		margin-top: 20px;
		box-sizing: border-box;
		border: 2px solid #fff;
	}
	
	.shop_xiaotu li:hover {
		border: 2px solid #000;
		box-sizing: border-box;
	}
	
	.shop_xiaotu li:nth-last-child(1) {
		margin-right: 0;
	}
	
	.shop_inform {
		width: 510px;
		padding: 0 20px;
		box-sizing: border-box;
	}
	
	.shop_inform h1 {
		font-size: 16px;
		color: #000;
		padding: 5px 10px;
		font-weight: bold;
	}
	
	.shop_inform h2 {
		font-size: 14px;
		color: #c40000;
		padding: 5px 0 20px 10px;
	}
	
	.shop_price {
		background: #f0efef;
		padding: 10px 15px;
		margin-bottom: 25px;
		position: relative;
	}
	
	.shop_puile {
		padding: 5px 0;
	}
	
	.shop_puile i {
		width: 100px;
		font-size: 14px;
		color: #999999;
	}
	
	.shop_puile span em {
		font-size: 22px;
	}
	
	.shop_addre {
		border-bottom: 1px dashed #c5c5c5;
		border-top: 1px dashed #C5C5C5;
		padding: 15px 0;
	}
	
	.more {
		position: absolute;
		bottom: 15px;
		right: 10px;
		font-size: 14px;
		color: #b5621b;
	}
	
	.shop_adds i,
	.shop_adds select,
	.shop_adds b {
		line-height: 30px;
	}
	
	.shop_adds select {
		margin: 3px 8px;
		width: 120px;
	}
	
	.pay_type {
		padding: 6px 0;
	}
	
	.pay_type i {
		line-height: 30px;
		font-size: 14px;
		color: #888;
	}
	
	.shop_numb {
		margin-left: 20px;
	}
	
	.shop_numb li {
		margin-top: 4px;
		float: left;
		font-size: 12px;
		color: #cccccc;
		padding: 3px 8px;
		border: 1px solid #cccccc;
		border-right: none;
	}
	
	.shop_numb li:nth-last-child(1) {
		border-right: 1px solid #ccc;
	}
	
	.qrcode {
		width: 370px;
		margin: auto;
	}
	
	.qrcode li {
		text-align: center;
		font-size: 16px;
		color: #c40000;
		display: block;
		width: 180px;
		background: #ffeded;
		padding: 12px 0;
		border: 1px solid #c40000;
	}
	
	.qrcode li:nth-child(2) {
		background: #c40000;
		color: #fff;
	}
	
	.shop_xq2 {
		border: 1px solid #EEEEEE;
		border-right: none;
		margin-top: 50px;
	}
	
	.shop_xq2 li {
		position: relative;
		float: left;
		padding: 0 20px;
		border-top: 2px solid #fff;
		font-size: 14px;
		color: #000;
		line-height: 45px;
	}
	
	.shop_xq2 li:nth-child(1) {
		border-top: 2px solid #3e9311;
		border-right: 1px solid #eee;
	}
	
	.shop_xq2 li img {
		position: absolute;
		top: 0;
		left: 50%;
		transform: translate(-50%, 0);
	}
	
	.shop_num {
		padding: 8px 0;
	}
	
	.shop_name {
		border: 1px solid #eee;
		border-right: none;
		background: #fff;
		padding: 20px;
	}
	
	.shop_name h1 {
		font-size: 12px;
	}
	
	.shop_name h1 i {
		color: #3355aa;
	}
	
	.shop_name h1 img {
		margin: -3px 0 0 10px;
	}
	
	.shop_name h2 {
		font-size: 14px;
		color: #999;
		font-weight: bold;
		padding: 14px 0;
	}
	
	.shop_list ul {
		width: 33.3%;
	}
	
	.shop_list ul li {
		font-size: 12px;
		color: #575757;
		line-height: 30px;
	}
	
	.shop_date {
		background: #f6f6f6;
		border: 1px solid #eee;
		border-top: none;
		border-right: none;
	}
	
	.shop_date span {
		line-height: 40px;
		font-size: 12px;
	}
	
	.shop_date img {
		margin: 12px 4px 0 20px;
	}
	
	.shop_images {
		margin-top: 15px;
	}
	
	.shop_images img {
		width: 100%;
	}
	/*右边内容*/
	
	.shop_right {
		width: 232px;
	}
	
	.tit_img img {
		margin: 0 auto;
		margin-top: 25px;
		display: block;
	}
	
	.shop_see li {
		position: relative;
		margin-top: 15px;
	}
	
	.shop_see li h1 {
		font-size: 12px;
		text-align: center;
		color: #404040;
		line-height: 20px;
	}
	
	.shop_see li span {
		position: absolute;
		bottom: 18px;
		left: 0;
		background: rgba(255, 255, 255, 0.5);
		width: 100%;
		line-height: 30px;
		font-size: 12px;
		text-align: center;
	}
</style>