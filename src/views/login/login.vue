<template>
	<div class="login">
		<div class="box">
			<h1 class="title">互市宝后台管理系统 - 登录</h1>
			<el-input placeholder="请输入帐号" prefix-icon="el-icon-edit-outline" v-model="userName"></el-input>
			<el-input placeholder="请输入密码" prefix-icon="el-icon-setting" class="mt_15" v-model="passWord" type="password"></el-input>

			<el-button type="primary" @click="login" class="ow100 mt_15">管理员登录</el-button>
			<el-button type="primary" @click="login" class="ow100 mt_15 ml_0">海关登录</el-button>
			<el-button type="success" @click="login" class="ow100 mt_15 ml_0">操作员登录</el-button>
			<el-button type="success" @click="login" class="ow100 mt_15 ml_0">会计登录</el-button>
		</div>
	</div>
</template>

<script>
import md5 from 'md5'
import axios from 'axios'
export default {
	data(){
		return {
			userName: '',
			passWord: ''
		}
	},
	methods: {
		login(){
			let params = {
					userName: this.userName,
					passWord: md5(this.passWord).toUpperCase()
				};

			switch(true){
				case !this.userName:
					this.$message.error('帐号不能为空！');
					return false;
				case !this.passWord:
					this.$message.error('密码不能为空！');
					return false;
				case this.passWord.length < 6:
					this.$message.error('必须为6位以上密码！');
					return false;
				default: break;
			}

			axios.post($base + 'login', params).then(json => {
				localStorage.userName = params.userName;
				this.$router.push('/index');
			}).catch(json => {
				console.log(json)
			})
		}
	}
}
</script>