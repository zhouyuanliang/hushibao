<template>
	<div>
		<div class="navSmall">
			<el-breadcrumb separator="/">
				<label class="fl">当前位置：</label>
				<el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
			
		<el-card class="box-card">
			<div slot="header" class="clearfix">
		    	<span>本周概览</span>
		    	<!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
			</div>
			<div id="chart_week" style="width: 100%; height: 400px;"></div>
		</el-card>
		<el-card class="box-card mt_20">
			<div slot="header" class="clearfix">
		    	<span>年度概览</span>
		    	<!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
			</div>
			<div id="chart_year" style="width: 100%; height: 400px;"></div>
		</el-card>
	</div>
</template>

<script>
import echarts from 'echarts'
import axios from 'axios'
export default {
	data(){
		return {
			weekList: [],
			yearList: []
		}
	},
	methods: {
		//周图表
		set_weekChart(){
			let myChart = echarts.init(document.getElementById('chart_week')),
				datas = [];
				
			this.weekList.forEach((e, i) => {
				datas.push([]);
				datas[i].push(e.week1, e.week2, e.week3, e.week4, e.week5, e.week6, e.week7)
			})

			let option = {
				    tooltip: {
				        trigger: 'item',
				        formatter: '{a} <br/>{b} : {c}'
				    },
				    xAxis: {
				        type: 'category',
				        name: 'x',
				        splitLine: {show: false},
				        data: ['周一','周二','周三','周四','周五','周六','周日']
				    },
				    grid: {
				        top: '2%', left: '2%', right: '3%', bottom: '3%',
				        containLabel: true
				    },
				    yAxis: { type: 'log', name: 'y' },
				    series: [
				        { name: '边民数', type: 'line', data: datas[0] },
				        { name: '越南商家数', type: 'line', data: datas[1] },
				        { name: '国内买家数', type: 'line', data: datas[2] },
				        { name: '其它', type: 'line', data: datas[3] }
				    ]
				};
			myChart.setOption(option);
		},
		//年度图表
		set_yearChart(){
			let myChart = echarts.init(document.getElementById('chart_year')),
				days = [], datas = [[],[],[],[]];

			this.yearList.forEach((e, i) => {
				days.push(e.date);
				datas[0].push(e.val1)
				datas[1].push(e.val2)
				datas[2].push(e.val3)
				datas[3].push(e.val4)
			})

			let	option = {
				    tooltip: {
				        trigger: 'axis'
				    },
				    legend: {
				        data:['边民数','越南商家数','国内买家数','其它']
				    },
				    grid: { left: '2%', right: '3%', bottom: '12%', containLabel: true },
				    xAxis: { type: 'category', boundaryGap: false, data: days },
				    yAxis: { type: 'value' },
			        dataZoom: [
			        	{ startValue: '2014-06-01' }, 
			        	{ type: 'inside' }
			        ],
				    series: [
				        { name:'边民数', type:'line', stack: '总量', data: datas[0] },
				        { name:'越南商家数', type:'line', stack: '总量', data: datas[1] },
				        { name:'国内买家数', type:'line', stack: '总量', data: datas[2] },
				        { name:'其它', type:'line', stack: '总量', data: datas[3] }
				    ]
				};
			myChart.setOption(option);
		},
		//本周数据调用
		get_weekData(){
			axios.post($base + 'basic/getWeekCharts', {}).then(json => {
				this.weekList = json.data.list;
				this.set_weekChart();
			})
		},
		//年度数据调用
		get_yearData(){
			axios.post($base + 'basic/getYearCharts', {}).then(json => {
				this.yearList = json.data.list;
				this.set_yearChart();
			})
		}
	},
	mounted(){
		this.get_weekData();
		this.get_yearData();
	}
}
</script>