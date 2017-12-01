<template>
	<div class="sy_main">
		<div class="sy_head">
			<label class="logo ml_20">LOGO - 互市宝后台管理系统</label>
			<p class="right mr_10">
				欢迎您：{{userName}}，
				<a>修改密码</a>
				<el-button type="danger" size="small" @click="signOut">退出登录</el-button>
			</p>
		</div>
		<div class="sy_body">
			<div class="sy_left" :style="width">
				<el-menu default-active="index" @open="handleOpen" @close="handleClose" :router="true"
					:unique-opened="true" class="el-menu-vertical-demo" :collapse="isCollapse"
					background-color="#134e54" text-color="#fff" style="height: 100%;">
					<el-radio-group v-model="isCollapse" class="mb_10 mt_5" size="small">
						<el-radio-button :label="isCollapse ? false : true">{{isCollapse ? '展开' : '收起'}}</el-radio-button>
					</el-radio-group>
					
					<!-- 导航列表 -->
					<template v-for="navs in $router.options.routes" v-if="!navs.otype">
						<el-menu-item :index="navs.children[0].path" v-if="!navs.leaf">
						    <i class="el-icon-location"></i>
						    <span slot="title">{{navs.children[0].name}}</span>
						</el-menu-item>

						<el-submenu :index="navs.path" v-else>
						    <template slot="title">
						    	<i class="el-icon-menu"></i>
						    	<span slot="title">{{navs.name}}</span>
						    </template>
						    <el-menu-item :index="childNav.path" v-for="childNav in navs.children">{{childNav.name}}</el-menu-item>
						</el-submenu>
					</template>
				</el-menu>
			</div>
			<div class="sy_right">
				<router-view/>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	data(){
		return {
			userName: localStorage.userName,
			isCollapse: false,
			width: 'width: 200px;'
		}
	},
	methods: {
		//退出登录
		signOut(){
			this.$router.push('/login');
		},
		handleOpen(key, keyPath) {
	        console.log(key, keyPath);
	      },
	    handleClose(key, keyPath) {
	        console.log(key, keyPath);
	      }
	},
	watch: {
		//展开收起
		isCollapse(type){
			if(type){
				this.width = 'width: 65px;'
			}else{
				this.width = 'width: 200px;'
			}
		}
	},
}
</script>


<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-menu{border: none;}
</style>