<template>
	<div>
		<v-header></v-header>
		<h1 class="newscenter">行业资讯</h1>
		<div class="line">
		</div>
		<ul class="newsList">
			<li>
				<img src="http://image.guo68.com/ueditor/image/20180920/1537435835393399.jpg" alt=""/>
				<div class="newsDes">
					<div class="title">秋季最适合吃的6种时令水果</div>
					<div class="abstract">秋季最适合吃的6种时令水果</div>
				</div>
			</li>
			<li>
				<img src="http://image.guo68.com/ueditor/image/20180920/1537436016616441.jpg" alt=""/>
				<div class="newsDes">
					<div class="title">季节特色第三代水果</div>
					<div class="abstract">天然产品 过季无售!</div>
				</div>
			</li>
			<li>
				<img src="http://image.guo68.com/ueditor/image/20180920/1537436450563340.jpg" alt=""/>
				<div class="newsDes">
					<div class="title">杏树如何灌水？杏树盛花期、采果后等六个时期的灌水要点</div>
					<div class="abstract">栽种杏树如何灌水？在种植杏树的过程中，灌水也是非常重要的环节之一。杏树在一年生活周期中有6个时期需要灌水，分别是早春发芽前灌大水、盛花期灌水、果实膨大期灌水、采果后灌水、秋后灌水、封冻水，接下来小编就</div>
				</div>
			</li>
			<li>
				<img src="http://image.guo68.com/ueditor/image/20180920/1537437303822364.jpg" alt=""/>
				<div class="newsDes">
					<div class="title">甜樱桃如何实现高产种植？甜樱桃高产栽培主要技术措施</div>
					<div class="abstract">甜樱桃是很受消费者喜欢的水果，其营养价值高，而且对生长环境要求高，目前在我国的主产区是北方，那么甜樱桃如何实现高产种植呢？下面小编就分大家分享甜樱桃高产栽培秘诀</div>
				</div>
			</li>
		</ul>
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
				newsList: []
			}
		},
		head(){
	      	return{
	        	title:"行业资讯_果真是 - 是！我爱吃"
	      	}
	   	},
		async asyncData(context) {
//			let newsList = await axios.get("newsList");
//			return {
//					newsList: newsList.data
//			}
		}
	}
</script>

<style>
	.newscenter{
		font-size: 20px;
		line-height: 20px;
		width: 1000px;
		margin: 10px auto;
	}
	.line{
		height: 3px;
		background: #bfbfbf;
		margin-bottom: 20px;
		width: 1000px;
		margin: 0px auto 10px auto ;
	}
	.line::after {
	    content: "";
	    width: 100px;
	    background: #60c002;
	    display: block;
	    height: 3px;
	}
	.newsList{
		width: 1000px;
		margin: auto;
	}
	.newsList li{
		overflow: hidden;
		margin-bottom: 20px;
	}
	.newsList li img{
		float: left;
		width: 180px;
		height: 140px;
	}
	.newsList li .newsDes{
		float: left;
		background: #f2f2f2;
		height: 140px;
		font-family: "微软雅黑";
		padding: 15px;
	    width: 820px;
	    box-sizing: border-box;
	}
	.newsDes .title{
		line-height: 20px;
	}
	.newsDes .abstract{
		color:#6d6d6d;
		line-height: 23px;
		margin-top: 10px;
	}
	
</style>