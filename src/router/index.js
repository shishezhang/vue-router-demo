import Vue from 'vue'
import VueRouter from 'vue-router'
// 组件页面
import home from '../components/home.vue'
import news from '../components/news.vue'
import about from '../components/about.vue'
import test1 from '../components/test1.vue'
import test2 from '../components/test2.vue'
import test3 from '../components/test3.vue'


// 安装插件
Vue.use(VueRouter)

// 默认导出路由
export default new VueRouter({
    routes:[
        {
            // 路径
            path:'/home',
            // 渲染组件
            component: home
        },
        // 新闻
        {path:'/news', component: news},
        // 关于我们
        {path:'/about', component: about},
        // 测试传参1 
        {path:'/test1', component: test1},
        // 测试传参2 命名路由
        {name: 'test2', path:'/test2', component: test2},
        // 测试传参3 占位符
        {path:'/test3/:id', component: test3}
        
    ],
})


