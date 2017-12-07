<template>
    <div class="page-box mt_15">
		<div class="left">
			<slot></slot>
		</div>
		<div class="right">
			<el-pagination background layout="total, sizes, prev, pager, next, jumper"
				:total="dataList.page.total"
				:page-sizes="[10, 20, 50, 100]"
				:current-page="dataList.page.pageNo"
  				:page-size="dataList.page.pageSize"
  				@size-change="pageChange"
				@current-change="toClick">
			</el-pagination>
		</div>
	</div>
</template>

<script>
export default {
	props: {
        dataList: {
			list: [],
			page: {
				pageNo: 1,
				pageSize: 20,
				total: 0
			}
		},
		toClick: {
            type: Function,
            default: () => {}
        },
    },
    methods: {
    	pageChange(num){
    		this.dataList.page.pageSize = num;
    		this.toClick(1, num);
    	}
    }
}
</script>

<style lang="less" scoped>
.page-box{
	height: 30px;
	.left{
		float: left; display: inline-block;
	}
	.right{
		float: right; display: inline-block;
	}
}
</style>