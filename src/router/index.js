import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'

//登录相关
import login from '@/views/login/login'
//交易统计分析
import index from '@/views/basic/index'
//审核相关
import gnmjba from '@/views/examine/gnmjba'
import ynsjba from '@/views/examine/ynsjba'
import bmba from '@/views/examine/bmba'
//运营管理
import borderTrade from '@/views/operate/borderTrade'
import domesticTrade from '@/views/operate/domesticTrade'
//结算中心
import statisticalAnalysis from '@/views/settlement/statisticalAnalysis'
import accountManage from '@/views/settlement/accountManage'
import foreignTradeManage from '@/views/settlement/foreignTrade'
import domesticTradeManage from '@/views/settlement/domesticTrade'
import reconciliation from '@/views/settlement/reconciliation'
import adminSetting from '@/views/settlement/adminSetting'
import appSetting from '@/views/settlement/appSetting'
import accounting from '@/views/settlement/accounting'

Vue.use(Router)

//baseUrl
if(document.domain == 'localhost'){
	window.$base = 'http://rap2api.taobao.org/app/mock/944/POST/'
}else{
	window.$base = 'http://rap2api.taobao.org/app/mock/944/POST/'
}

export default new Router({
	routes: [
		//登录相关
	    { path: '/login', name: '登录', component: login, otype: true },
	    //主导航区
	    {
	        path: '/', name: '', component: home,
	        children: [
	            { path: '/index', name: '交易统计分析 ', component: index },
	        ]
	    },
	    {
	        path: '/examine', name: '审核相关', component: home, leaf: true,
	        children: [
	            { path: '/examine/gnmjba', name: '国内买家备案 ', component: gnmjba },
	            { path: '/examine/ynsjba', name: '越南商家备案 ', component: ynsjba },
	            { path: '/examine/bmba', name: '边民备案 ', component: bmba },
	        ]
	    },
	    {
	        path: '/operate', name: '运营管理', component: home, leaf: true,
	        children: [
	            { path: '/operate/borderTrade', name: '边贸交易管理 ', component: borderTrade },
	            { path: '/operate/domesticTrade', name: '内贸交易管理 ', component: domesticTrade },
	        ]
	    },
	    {
	        path: '/settlement', name: '结算中心', component: home, leaf: true,
	        children: [
	            { path: '/settlement/statisticalAnalysis', name: '统计分析 ', component: statisticalAnalysis },
	            { path: '/settlement/accountManage', name: '帐户管理 ', component: accountManage },
	            { path: '/settlement/foreignTradeManage', name: '外贸结算明细 ', component: foreignTradeManage },
	            { path: '/settlement/domesticTradeManage', name: '内贸结算明细 ', component: domesticTradeManage },
	            { path: '/settlement/reconciliation', name: '对账管理 ', component: reconciliation },
	            { path: '/settlement/adminSetting', name: '管理员设置 ', component: adminSetting },
	            { path: '/settlement/appSetting', name: 'APP管理 ', component: appSetting },
	            { path: '/settlement/accounting', name: '会计中心 ', component: accounting },
	        ]
	    },
	]
})
