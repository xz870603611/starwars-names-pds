import Vue from 'vue';
import Router from 'vue-router';
import Home from './../view/home/home.view.page';
import Test from './../view/home/test.view.page';
Vue.use(Router);
export default new Router({
    routes: [
        {path: '/', name: 'home', component: Home},
        {path: '/test', name: 'test', component: Test}
    ]
})
