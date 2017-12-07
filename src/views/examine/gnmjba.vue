<template>
	<div>
		<div class="navSmall">
			<el-breadcrumb separator="/">
				<label class="fl">当前位置：</label>
				<el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
				<el-breadcrumb-item>国内买家备案</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		
		<el-card class="box-card">
			<label>商家名称：</label>
			<el-input v-model="shopName" placeholder="请输入内容" class="w200"></el-input>
			<el-button type="primary" @click="get_dataList(1)">搜索</el-button>

			<p class="fr">
				<label>选择日期：</label>
				<el-date-picker v-model="dates" type="date" class="w200" placeholder="选择日期"></el-date-picker>
				<el-button type="primary" @click="get_dataList(1)">确定</el-button>
			</p>
		</el-card>

		<el-card class="box-card mt_20">
			<el-table :data="dataList.list" stripe style="width: 100%">
			    <el-table-column prop="date" label="时间" width="150"></el-table-column>
			    <el-table-column prop="number" label="编号" width="150"></el-table-column>
			    <el-table-column prop="leader" label="法人" width="100"></el-table-column>
			    <el-table-column prop="businessNumber" label="营业执照号" width="180"></el-table-column>
			    <el-table-column prop="companyName" label="企业名称" width="300"></el-table-column>
			    <el-table-column prop="mobile" label="联系电话" width="180"></el-table-column>
			    <el-table-column prop="applicant" label="申请人" width="120"></el-table-column>
			    <el-table-column label="操作" min-width="220">
					<template scope='scope'>
						<el-button type="primary" plain size="mini">修改</el-button>
						<el-button type="success" plain size="mini">查看</el-button>
						<el-button type="danger" plain size="mini">删除</el-button>
			    	</template>
			    </el-table-column>
			</el-table>
			
			<!-- 分页组件 dataList传数据，toClick传点击事件方法 -->
			<sy-pages :dataList="dataList" :toClick="get_dataList">
				<!-- 如需添加左侧按钮则在此处添加，没有则留空 -->
				<el-button type="primary" size="small" class="w100">新增</el-button>
			</sy-pages>
		</el-card>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	data(){
		return {
			shopName: '',
			dates: '',
			dataList: this.$store.state.dataList
		}
	},
	methods: {
		get_dataList(pageNo, pageSize){
			let params = {
					shopName: this.shopName,
					date: this.dates ? moment(this.dates).format('YYYY-MM-DD') : '',
					pageNo: typeof pageNo == Number ? pageNo : 1,
					pageSize: pageSize || this.dataList.page.pageSize || 20
				}
			
			axios.post($base + 'dataList/getGnmjbaList', params).then(json => {
				this.dataList = json.data;
			}).catch(err => {
				console.log(err);
			})
		}
	},
	mounted(){
		this.get_dataList();
	}
}
</script>

<style scoped>
.el-button+.el-button{margin-left: 0;}
</style>