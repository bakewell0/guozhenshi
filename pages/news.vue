<template>
	<div>
		<v-header></v-header>
		<div class="newsinfo">
			<h1>{{news.news_name}}</h1>
			<div class="detail">
				{{news.author}}<span style="margin-left: 10px;">{{news.publish}}</span>
			</div>
			<div class="newsinfo_cont">
				<p v-html="news.news_content"></p>
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
				news: {}
			}
		},
		head() {
			return {
				title: this.news.news_name+"_行业资讯_果真是 - 是！我爱吃"
			}
		},
		async asyncData(context) {
			let news = await axios.get("newsDetail?newsid="+context.query.newsid);
			return {
				news: news.data[0]
			}
		}
	}
</script>

<style>
	.newsinfo{
		width: 1000px;
    	margin: auto;
    	background: white;
    	padding: 10px 30px;
	}
	.newsinfo h1{
		width: 600px;
	    margin: 0 auto;
	    text-align: center;
	    padding: 25px 0px;
	    font: bold 24px/60px "微软雅黑";
	    line-height: 36px;
	    color: #000;
	}
	.detail{
		line-height: 48px;
	    border-bottom: 1px solid #e8e8e8;
	    border-top: 1px solid #e8e8e8;
	    font-size: 12px;
	    color: #666;
	}
	.newsinfo_cont{
		line-height: 30px;
	    padding-top: 10px;
	    color: #555;
	    font-size: 14px;
	}
	.newsinfo_cont p{
		margin-bottom: 10px;
	    padding: 2px 0;
	    text-indent: 2em;
	}
</style>