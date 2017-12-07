import Vue from 'vue'

import syPages from './sy-pages/sy-pages'




const install = (Vue, options) => {
    // 公共组件
    Vue.component('sy-pages', syPages);

};
export default {
    install
}