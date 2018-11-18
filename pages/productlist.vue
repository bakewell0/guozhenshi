<template>
	<div>
		<v-header></v-header>
		<div class="shopping2 cf">
			<!--左边内容-->
			<div class="shop_left2 lf cf" style="border-right: none;">
				<div class="all_fenlei cf">
					<span class="lf">所有分类 ></span>
					<!--<div class="rf shaixuan">收起筛选 <img src="../assets/img/shang.png" width="8" style="margin-top: 3px;" /></div>-->
				</div>
				<ul class="shop_select">
					<li class="cf">
						<span>水果蔬菜：</span>
						<span>虾米/虾仁</span>
						<span>鱿鱼干</span>
						<span>鱼类罐头</span>
						<span>鱼干</span>
						<span>干贝/瑶柱</span>
						<span>海带</span>
						<span>墨鱼干</span>
						<span>虾类制品</span>
						<span>贝类制品</span>
					</li>
					<li class="cf">
						<span>零食/坚果/特产：</span>
						<span>鱼系类</span>
						<span>鱿鱼系类</span>
						<span>虾系类</span>
					</li>
					<li class="cf">
						<span>食品工艺：</span>
						<span>水产干货</span>
						<span>鲜活水产</span>
						<span>冷冻水产</span>
						<span>腌制水产</span>
					</li>
					<li class="cf">
						<span>筛选条件：</span>
						<span>省份 <img src="../assets/img/xia.png" width="8" /></span>
						<span>选购热点 <img src="../assets/img/xia.png" width="8" /></span>
						<span>水产类品种 <img src="../assets/img/xia.png" width="8" /></span>
						<span>相关分类 <img src="../assets/img/xia.png" width="8" /></span>
					</li>
				</ul>
				<ul class="shop_nav cf">
					<li class="cli_this">销量</li>
					<li>价格</li>
					<li>好评度</li>
					<li>上架时间</li>
				</ul>
				<!--商品-->
				<ul class="shop_list_biao cf">
					<li v-for="product in productList">
						<nuxt-link :to="'/detail?productid='+product.id">
						<div><img :src="product.photo" style="width:100%;height: 232px;"/></div>
						<div class="shop_price_fukuan">
							<div class="cf shop_price_fukuan2">
								<span class="lf">￥{{product.price}} <i>包邮</i></span>
								<em class="rf">{{product.sales}}</em>
							</div>
							<p>{{product.product_name}}</p>
							<h1>有<i>1000</i>人喜欢</h1>
							<div class="cf shop_souc">
								<img src="../assets/img/sc.jpg" />
								<img src="../assets/img/gwc.jpg" />
							</div>
						</div>
						</nuxt-link>
					</li>
				</ul>
			</div>
			<div class="shop_right rf">
				<div class="tit_img">
					<span>掌柜热卖</span>
				</div>
				<ul class="shop_see listzhanggui">
					<li>
						<img src="img/t15.jpg" alt="" />
						<div class="cf jiage">
							<i class="lf">￥168.00</i>
							<em class="rf">销量3239</em>
						</div>
					</li>
					<li>
						<img src="img/t15.jpg" alt="" />
						<div class="cf jiage">
							<i class="lf">￥168.00</i>
							<em class="rf">销量3239</em>
						</div>
					</li>
					<li>
						<img src="img/t15.jpg" alt="" />
						<div class="cf jiage">
							<i class="lf">￥168.00</i>
							<em class="rf">销量3239</em>
						</div>
					</li>
					<li>
						<img src="img/t15.jpg" alt="" />
						<div class="cf jiage">
							<i class="lf">￥168.00</i>
							<em class="rf">销量3239</em>
						</div>
					</li>
				</ul>
			</div>
		</div>
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
				productList: [],
				productname:""
			}
		},
		head(){
	      	return{
	        	title:this.productname+"_果真是 - 是！我爱吃",
	        	meta:[
	          		{name:'keywords',content:this.productname},
	          		{name:'description',content:'果真是网是专业的水果网络购物平台，在这里您可以购买到精心挑选的优质健康'+this.productname+'，最新价格、优惠促销等信息尽在果真是网guozhenshi.cn'}	          		
	        	]
	      	}
	   	},
		async asyncData(context) {
			let productList = await axios.get("productList?productname="+encodeURIComponent(context.query.productname));
			return {
					productList: productList.data,
					productname:context.query.productname || "水果分类"
			}
		},
		watchQuery: ['productname']
	}
</script>

<style>
 @charset "utf-8";
/*清除浮动*/
@charset "utf-8";
/* reset */
html { height: 100% }
body { min-height: 100%; min-width:1200px; overflow-x: hidden;}
body { _height: 100% }
body, div, ul, ol, li, dl, dt, dd, h1, h2, h3, h4, h5, h6, iframe, pre, code, fieldset, legend, form, input, select, textarea, button, p, blockquote, th, td, figure { margin: 0; padding: 0 }
body, div, ul, ol, li, dl, dt, dd, h1, h2, h3, h4, h5, h6, iframe, pre, code, fieldset, legend, form, p, blockquote, figure, header, footer, nav, article, section, aside, address, figcaption { *zoom: 1 }
li { list-style-type: none }
h1, h2, h3, h4, h5, h6 { font-size: 100%; font-weight:normal;}
iframe, frame, fieldset, img { border: 0 none }
img { vertical-align: top }
input[type=button], input[type=submit], input[type=reset] { cursor: pointer }
button { cursor: pointer }
input[type=text], input[type=password], input[type=file], textarea { -webkit-border-radius: 0; -webkit-appearance: normal }
input[type=search] { -webkit-box-sizing: content-box; -moz-box-sizing: content-box; -ms-box-sizing: content-box; -o-box-sizing: content-box; box-sizing: content-box }
textarea { overflow: auto; resize: none }
blockquote, q { quotes: none }
blockquote:before, blockquote:after, q:before, q:after { content: ""; content: none }
caption, th { text-align: left }
th { font-weight: normal }
em, cite, address,i { font-style: normal }
sup { vertical-align: text-top }
sub { vertical-align: text-bottom }
body, input, select, button, textarea { font-size: 14px; font-family:"微软雅黑",arial,"\5b8b\4f53";  }
body { line-height: 1.17 }
a { text-decoration: none }
a { blr:expression(this.onFocus=this.blur()) }
a * { *cursor: pointer }
:focus { outline: none }

.edit_con_original{ line-height:1.5; padding:20px; color:#333;}
.edit_con_original li, .edit-con-original li { list-style-type: disc }
.edit_con_original h1, .edit-con-original h1 { font-size: 2em }
.edit_con_original h2, .edit-con-original h2 { font-size: 1.5em }
.edit_con_original h3, .edit-con-original h3 { font-size: 1.17em }
.edit_con_original h4, .edit-con-original h4 { font-size: 1em }
.edit_con_original h5, .edit-con-original h5 { font-size: 0.83em }
.edit_con_original h6, .edit-con-original h6 { font-size: 0.67em }
.edit_con_original em, .edit-con-original em { font-style: italic }
.edit_con_original cite, .edit-con-original cite { font-style: italic }
.edit_con_original address, .edit-con-original address { font-style: italic;}
.edit_con_original i, .edit-con-original i { font-style: italic }

.fixed:after, .clearfix:after, .cf:after, .header:after, .main:after, .footer:after { content: " "; display: block; clear: both; height: 0; overflow: hidden }
.fixed, .clearfix, .cf, .header, .main, .footer { *zoom: 1 }
.clear, .cl { display: block!important; float: none!important; clear: both; width: auto!important; max-width: none!important; min-width: 0!important; max-height: none!important; min-height: 0!important; overflow: hidden; margin: 0!important; padding: 0!important; border: 0 none!important; font-size: 0!important; line-height: 0!important }            
.lt9 .t-shadow { filter: progid:DXImageTransform.Microsoft.Gradient(GradientType=0, StartColorStr="#99000000", EndColorStr="#99000000") }
.t-shadow {background: rgba(0, 0, 0, .5)}

.lf{ float: left;}
.rf{ float: right;}
.jz{ overflow: hidden; text-overflow: ellipsis; white-space: nowrap;}
.w1000{ width: 1000px; margin: 0 auto; }
.over_text{ overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;}

/*详情页*/
.shop_left2{ border-right: 1px solid #eee; width: 1000px;}
.shopping2{ width: 1250px; margin: 0 auto;}

.all_fenlei{ font-size: 12px; color: #666; padding: 8px 15px; padding-right: 0;}
.all_fenlei span{ margin-top: 5px;}
.shaixuan{ border: 1px solid #ccc; background: #f6f6f6; padding: 5px 8px;}

.shop_select{ padding: 0 12px; border: 1px solid #eee;}
.shop_select li{ border-bottom: 1px dashed #eee; line-height: 36px; color: #000; font-size: 12px; position: relative;}
.shop_select li i{ position: absolute; top: 6px; right: 80px; color: #000; border: 1px solid #ccc; line-height: 20px; padding: 0 6px;}
.shop_select li:nth-last-child(1){ border-bottom: none;}
.shop_select li span{ float: left; padding-right: 35px;}
.shop_select li span:nth-child(1){ color: #ccc; width: 100px; padding-right: 0;}
.shop_select li:nth-child(1) span:nth-last-child(1){ float: right; padding-right: 10px;}
.shop_select li span img{ margin-top: 15px;}

.shop_nav{ border: 1px solid #eee; margin-top: 10px; background: #f5f5f5;}
.shop_nav li{ float: left; line-height: 40px; padding: 0 25px; font-size: 14px; color: #000; border-bottom: 2px solid #F5F5F5;}
.shop_nav .cli_this{ color: #3e9311; background: #fff; border-bottom: 2px solid #3e9311;}

.shop_list_biao li{ float: left; width: 232px; border: 1px solid #eee; overflow: hidden; margin-top: 20px; margin-right: 20px;box-sizing: border-box;}
.shop_list_biao li:nth-child(4n){ margin-right: 0;}
.shop_price_fukuan{ padding: 10px;}
.shop_price_fukuan2 span{ font-size: 16px; color: #ff4400; font-weight: bold;}
.shop_price_fukuan2 span i{ font-size: 12px; color: #fff; background: #ff4400; font-weight: initial; padding: 0 4px;}
.shop_price_fukuan2 em{ font-size: 13px; color: #a0a0a0;}
.shop_price_fukuan p{ font-size: 12px; color: #3d3d3d; line-height: 18px; margin: 10px 0;}
.shop_price_fukuan h1{ font-size: 12px; color: #a0a0a0;}
.shop_price_fukuan h1 i{ color: #ff4400;}
.shop_souc{ margin-top: 15px;}
.shop_souc img{ margin-right: 10px;}

.tit_img span{ margin-top: 10px; padding: 6px 0; font-size: 17px; color: #a0a0a0; display: block; border-bottom: 1px solid #ccc;}

.listzhanggui li{ border: 1px solid #ccc; margin-bottom: 15px; overflow: hidden;}
.jiage{ line-height: 30px; padding: 0 10px 0 20px;}
.jiage i{ font-size: 16px; color: #ff4400; font-weight: bold;}
.jiage em{ font-size: 12px; color: #a0a0a0;}




/*右边内容*/
.shop_right{width: 232px;}
.tit_img img{ margin: 0 auto; margin-top: 25px; display: block;}
.shop_see li{ position: relative; margin-top: 15px;}
.shop_see li h1{ font-size: 12px; text-align: center; color: #404040; line-height: 20px;}
.shop_see li span{ position: absolute; bottom: 18px; left: 0; background: rgba(255,255,255,0.5); width: 100%; line-height: 30px; font-size: 12px; text-align: center;}
</style>