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
    { path: '/profile', name: 'Level Master', component: require('./Pages/common/profile.vue').default },
    { path: '/dzongmasters', name: 'Dzongkhag Master', component: require('./Pages/globalmaster/dzongmasters.vue').default },
    { path: '/gewogmasters', name: 'Gewog Master', component: require('./Pages/globalmaster/gewog.vue').default },
    { path: '/villagemaster', name: 'Village Master', component: require('./Pages/globalmaster/village.vue').default },
    { path: '/StudentIndex', name: 'Student Index', component: require('./Pages/Students/regstd.vue').default },
    { path: '/regularstd', name: 'Regular Student', component: require('./Pages/Students/regstd.vue').default },
    { path: '/orgmastermanagement', name: 'Organization Master Management',
    component: require('./Pages/organization/masters/orgmasterindex.vue').default,
        children: [
            { path: '/', component: require('./Pages/organization/masters/orgmasterdata.vue').default },
            { path: '/orgmasterlevel', name: 'Level Master', component: require('./Pages/organization/masters/masterlevel.vue').default },
            { path: '/orglocationmaster', name: 'Location Master', component: require('./Pages/organization/masters/locationmaster.vue').default },
        ]    
    }, 
    { path: '/orgmanagement', name: 'Organization Management',
    component: require('./Pages/organization/transactions/organizationindex.vue').default,
        children: [
            { path: '/', component: require('./Pages/organization/transactions/existingorg.vue').default },
            { path: '/neworganization', component: require('./Pages/organization/transactions/neworganization.vue').default },
        ]    
    }, 

    // Inset Route
    { path: '/createTraining', name: 'Create', component: require('./Pages/Inset/createTraining.vue').default },


    //administration route 
    { path: '/rolesAndPriviledges', name: 'Roles', component: require('./Pages/administration/rolesAndPriviledges.vue').default },
    { path: '/workFlow', name: 'workFlow', component: require('./Pages/administration/workflow.vue').default },
    { path: '/administrationmaster', name: 'Administration Master',
    component: require('./Pages/administration/usermanagement/usermanagementindex.vue').default,
        children: [
            { path: '/', component: require('./Pages/administration/usermanagement/usermanagementdata.vue').default },
            { path: '/staffUser', name: 'Staff', component: require('./Pages/administration/usermanagement/staffUser.vue').default },
            { path: '/externalUser', name: 'External', component: require('./Pages/administration/usermanagement/externalUser.vue').default },
            { path: '/userList', name: 'User List', component: require('./Pages/administration/usermanagement/userList.vue').default },

        ]    
    }, 

    // staff route
    { path: '/staffMaster', name: 'Staff Master',
    component: require('./Pages/staff/masters/staffMasterIndex.vue').default,
        children: [
            { path: '/', component: require('./Pages/staff/masters/staffMasterData.vue').default },
            //{ path: '/staffUser', name: 'Staff', component: require('./Pages/administration/usermanagement/staffUser.vue').default },
            //{ path: '/externalUser', name: 'External', component: require('./Pages/administration/usermanagement/externalUser.vue').default },
            //{ path: '/userList', name: 'User List', component: require('./Pages/administration/usermanagement/userList.vue').default },

        ]    
    }, 
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

