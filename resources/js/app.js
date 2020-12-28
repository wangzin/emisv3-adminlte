require('./bootstrap');

require('moment');

import Vue from 'vue';


import { InertiaApp } from '@inertiajs/inertia-vue';
import { InertiaForm } from 'laravel-jetstream';
import PortalVue from 'portal-vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter)   
import VueSession from 'vue-session'
Vue.use(VueSession)
 
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

    { path: '/applicationProcess', name: 'Application Process',
    component: require('./Pages/organization/applicationProcess/applicationprocessindex.vue').default,
        children: [
            { path: '/', component: require('./Pages/organization/applicationProcess/applicationProcessData.vue').default },
            { path: '/establishment', name: 'Org Est', component: require('./Pages/organization/applicationProcess/establishment.vue').default },
            { path: '/changeBasicDetails', name: 'Basic Detail', component: require('./Pages/organization/applicationProcess/changeBasicDetails.vue').default },
           { path: '/bifurcation', name: 'Basic Detail', component: require('./Pages/organization/applicationProcess/bifurcation.vue').default },
            { path: '/merger', name: 'Merger', component: require('./Pages/organization/applicationProcess/merger.vue').default },
        { path: '/annualUpdate', name: 'Annual Update', component: require('./Pages/organization/applicationProcess/annualUpdate.vue').default },
        { path: '/closure', name: 'Closure', component: require('./Pages/organization/applicationProcess/closure.vue').default },

        ]    
    }, 
    
    
    { path: '/taslistforall', name: 'Task List', component: require('./Pages/common/tasklist.vue').default },
    { path: '/searchapplication', name: 'Task List', component: require('./Pages/common/trackapplication.vue').default },
    { path: '/taslist', name: 'Task List', component: require('./Pages/organization/transactions/verificationpage.vue').default },
    { path: '/openapplicaiton', name: 'Organizaiton Verification and Approval', component: require('./Pages/organization/transactions/organizationapproval.vue').default },

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
    //student route

    { path: '/regstdmanagement', name: ' Reg Student Management',
    component: require('./Pages/Students/regstd/regstdindex.vue').default,
        children: [
            { path: '/', component: require('./Pages/Students/regstd/regstdexisting.vue').default },
            { path: '/newregstd', component: require('./Pages/Students/regstd/newregstd.vue').default },
        ]    
    }, 

    { path: '/stdmanagement', name: 'Student Management',
    component: require('./Pages/Students/eccdstd/eccdindex.vue').default,
        children: [
            { path: '/', component: require('./Pages/Students/eccdstd/eccdstdexisting.vue').default },
            { path: '/neweccdstd', component: require('./Pages/Students/eccdstd/neweccdstd.vue').default },
        ]    
    }, 
    { path: '/cestdmanagement', name: 'Student Management',
    component: require('./Pages/Students/CEstd/cestdindex.vue').default,
        children: [
            { path: '/', component: require('./Pages/Students/CEstd/cestdexisting.vue').default },
            //{ path: '/newecestd', component: require('./Pages/Students/CEstd/newcestd.vue').default },
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

