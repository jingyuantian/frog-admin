import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import './plugins/element-ui.js'
import './style/index.scss'
import './assets/ant-icon'
import AsyncComputed from 'vue-async-computed'

Vue.config.productionTip = false;
Vue.use(AsyncComputed);
Vue.component('vScroll', VuePerfectScrollbar);

Vue.prototype.$vars = store.state.style.vars;
Vue.prototype.$themes = store.state.style.themes;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
