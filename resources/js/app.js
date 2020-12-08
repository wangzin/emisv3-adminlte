require('./bootstrap');

require('moment');

import Vue from 'vue';

import { InertiaApp } from '@inertiajs/inertia-vue';
import { InertiaForm } from 'laravel-jetstream';
import PortalVue from 'portal-vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter)   
 
Vue.mixin({ methods: { route } });
Vue.use(InertiaApp);
Vue.use(InertiaForm);
Vue.use(PortalVue);
let routes = [
    { path: '/', name: 'Dashboard', component: require('./Pages/dashboard_data.vue').default },
    { path: '/dzongmasters', name: 'Dzongkhag Master', component: require('./Pages/globalmaster/dzongmasters.vue').default },
]
const router = new VueRouter({
    routes // short for `routes: routes`
});
const app = document.getElementById('app');
Vue.component('headnav', require('./Layouts/headnav.vue').default);
Vue.component('sidenav', require('./Layouts/sidenav.vue').default);
new Vue({
    render: (h) =>
        h(InertiaApp, {
            props: {
                initialPage: JSON.parse(app.dataset.page),
                resolveComponent: (name) => require(`./Pages/${name}`).default,
            },
        }),
        router

}).$mount(app);
