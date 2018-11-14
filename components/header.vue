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
						<a href="javascript:;"><img src="../assets/img/in1.png" />400-720-0770</a>
					</li>-->
				</ul>
			</div>
		</div>
		<!-- logo搜索框 -->
		<div style="background: white;">
			<div class="logo_and_search cf w1000">
				<nuxt-link to="/">
					<div class="logo lf"><img src="../assets/img/logo.jpg" /></div>
				</nuxt-link>
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
							<input type="text" placeholder="台湾青芒" class="lf" v-model="productname">						
							<nuxt-link :to="'/productlist?productname='+productname" style="display: inline-block;">搜索</nuxt-link>
							<img src="../assets/img/in2.png" />
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
					<li>
						<nuxt-link to='/'>
							首页
						</nuxt-link>
					</li>
					<li>
						<nuxt-link to='/productlist'>
							水果列表
						</nuxt-link>
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
					<a href="javascript:;"><img src="../assets/img/in3.png">购物车</a href="javascript:;">
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
	</div>
</template>

<script>
	export default {
		data() {
			return {
				productname: ""
			}
		}
	}
</script>

<style>
</style>