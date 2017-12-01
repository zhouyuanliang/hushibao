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
			<el-button type="primary">搜索</el-button>

			<p class="fr">
				<label>选择日期：</label>
				<el-date-picker v-model="dates" type="date" class="w200" placeholder="选择日期"></el-date-picker>
				<el-button type="primary">确定</el-button>
			</p>
		</el-card>

		<el-card class="box-card mt_20">
			<el-table :data="dataList" stripe style="width: 100%">
			    <el-table-column prop="date" label="时间" width="150"></el-table-column>
			    <el-table-column prop="number" label="编号" width="150"></el-table-column>
			    <el-table-column prop="leader" label="法人" width="100"></el-table-column>
			    <el-table-column prop="businessNumber" label="营业执照号" width="180"></el-table-column>
			    <el-table-column prop="companyName" label="企业名称" width="300"></el-table-column>
			    <el-table-column prop="mobile" label="联系电话" width="180"></el-table-column>
			    <el-table-column prop="applicant" label="申请人" width="150"></el-table-column>
			    <el-table-column label="操作">
					<template scope='scope'>
						<el-button type="primary" plain size="mini">修改</el-button>
						<el-button type="success" plain size="mini">查看</el-button>
						<el-button type="danger" plain size="mini">删除</el-button>
			    	</template>
			    </el-table-column>
			</el-table>
			
			<div class="page-box mt_15">
				<div class="left">
					<el-button type="primary" size="small" class="w100">新增</el-button>
				</div>
				<div class="right">
					<el-pagination background layout="total, sizes, prev, pager, next, jumper" :total="1000"></el-pagination>
				</div>
			</div>
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
			dataList: []
		}
	},
	methods: {
		get_dataList(){
			let params = {
					shopName: this.shopName,
					date: this.dates
				}

			axios.post($base + 'dataList/getGnmjbaList', params).then(json => {
				this.dataList = json.data.list;
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