import Vue from 'vue';
import App from './app';
Vue.prototype.$bus = new Vue();
new Vue({
    el:'#app',
    render:h=>h(App)
})