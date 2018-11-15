<template>
	<div>
		<v-header></v-header>
		<h1 class="newscenter">行业资讯</h1>
		<div class="line">
		</div>
		<ul class="newsList">
			<li v-for="news in newsList">
				<nuxt-link :to="'/news?newsid='+news.id">
					<img :src="news.photo" alt=""/>
					<div class="newsDes">
						<div class="title">{{news.news_name}}</div>
						<div class="abstract">{{news.abstract}}</div>
					</div>
				</nuxt-link>
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
			let newsList = await axios.get("newsList");
			return {
					newsList: newsList.data
			}
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
		color: #000;
	}
	.newsDes .abstract{
		color:#6d6d6d;
		line-height: 23px;
		margin-top: 10px;
	}
	
</style>