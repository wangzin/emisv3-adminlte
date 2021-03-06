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
    
    { path: '/org_basic_contact', name: 'Organization Basic and Contact Detials', component: require('./Pages/organization/transactions/basic_contact.vue').default },
    { path: '/org_location', name: 'Organization Location Detials', component: require('./Pages/organization/transactions/location.vue').default },
    //{ path: '/org_structure', name: 'Organization Structure Detials', component: require('./Pages/organization/transactions/location.vue').default },
    
    { path: '/basic_information', name: 'Basic Information', component: require('./Pages/organization/organization_update/org_basic_information.vue').default },
    { path: '/orgmastermanagement', name: 'Organization Master Management', 
    component: require('./Pages/organization/masters/orgmasterindex.vue').default,
        children: [ 
            { path: '/', component: require('./Pages/organization/masters/orgmasterdata.vue').default },
            { path: '/orgmasterlevel', name: 'Level Master', component: require('./Pages/organization/masters/masterlevel.vue').default },
            { path: '/orglocationmaster', name: 'Location Master', component: require('./Pages/organization/masters/locationmaster.vue').default },
        ]    
    }, 
    { path: '/org_structure', name: 'Organization Management',
    component: require('./Pages/organization/transactions/organizationindex.vue').default,
        children: [
            { path: '/', component: require('./Pages/organization/transactions/existingorg.vue').default },
            { path: '/neworganization', component: require('./Pages/organization/transactions/neworganization.vue').default },
        ]    
    }, 

    { path: '/applicationProcess', name: 'Application Process',
    component: require('./Pages/organization/applicationProcess/applicationIndex.vue').default,
        children: [
            { path: '/', component: require('./Pages/organization/applicationProcess/applicationProcessData.vue').default },
            { path: '/establishment', name: 'Org Est', component: require('./Pages/organization/applicationProcess/establishment.vue').default },
            { path: '/changeBasicDetails', name: 'Basic Detail', component: require('./Pages/organization/applicationProcess/changeBasicDetails.vue').default },
           { path: '/bifurcation', name: 'Bifurcation', component: require('./Pages/organization/applicationProcess/bifurcation.vue').default },
            { path: '/merger', name: 'Merger', component: require('./Pages/organization/applicationProcess/merger.vue').default },
        { path: '/annualUpdate', name: 'Annual Update', component: require('./Pages/organization/applicationProcess/annualUpdate.vue').default },
        { path: '/closure', name: 'Closure', component: require('./Pages/organization/applicationProcess/closure.vue').default },

        ]    
    }, 

    { path: '/taskList', name: 'Task List', component: require('./Pages/organization/taskList.vue').default },
    { path: '/basicInformation', name: 'Basic Info', component: require('./Pages/organization/basicInformation.vue').default },
    { path: '/headQuaterOffice', name: 'HQ Office', component: require('./Pages/organization/headQuaterOffice.vue').default },
    { path: '/location', name: 'location', component: require('./Pages/organization/location.vue').default },
    { path: '/contactDetails', name: 'location', component: require('./Pages/organization/contactDetails.vue').default },
    { path: '/connectivity', name: 'location', component: require('./Pages/organization/connectivity.vue').default },
    { path: '/structure', name: 'location', component: require('./Pages/organization/structure.vue').default },
    { path: '/equipment', name: 'location', component: require('./Pages/organization/equipment.vue').default },
    { path: '/sportFacility', name: 'location', component: require('./Pages/organization/sportFacility.vue').default },
    { path: '/agricultureFacility', name: 'location', component: require('./Pages/organization/agricultureFacility.vue').default },
    { path: '/washFacility', name: 'location', component: require('./Pages/organization/washFacility.vue').default },

    { path: '/approveRejectEstablishment', name: 'location', component: require('./Pages/organization/verification/approveRejectEstablishment.vue').default },


    
    { path: '/taslistforall', name: 'Task List', component: require('./Pages/common/tasklist.vue').default },
    { path: '/searchapplication', name: 'Task List', component: require('./Pages/common/trackapplication.vue').default },
    { path: '/taslist', name: 'Task List', component: require('./Pages/organization/transactions/verificationpage.vue').default },
    { path: '/openapplicaiton', name: 'Organizaiton Verification and Approval', component: require('./Pages/organization/transactions/organizationapproval.vue').default },

    // Inset Route
    { path: '/createTraining', name: 'Create', component: require('./Pages/Inset/trainingindex.vue').default },
    { path: '/create_new_training', name: 'Create', component: require('./Pages/Inset/createTraining.vue').default },
    { path: '/participant', name: 'Create', component: require('./Pages/Inset/checkparticipant.vue').default },
    { path: '/traininglist', name: 'Create', component: require('./Pages/Inset/traininglist.vue').default },
    { path: '/showtrainingdetails', component: require('./Pages/Inset/showtrainingdetails.vue').default },
    { path: '/edit_training', component: require('./Pages/Inset/editTraining.vue').default },
    { path: '/apply_training', component: require('./Pages/Inset/trainingApply.vue').default },
    { path: '/applyfortraining', component: require('./Pages/Inset/applyfortraining.vue').default },
    { path: '/openapplicaitonfortraining', component: require('./Pages/Inset/verificationapplication.vue').default },
    
    
    


    //administration route 
    { path: '/rolesAndPriviledges', name: 'Roles', component: require('./Pages/administration/rolesAndPriviledges.vue').default },
    { path: '/workFlow', name: 'workFlow', component: require('./Pages/administration/workflow.vue').default },
    { path: '/administrationmaster', name: 'Administration', component: require('./Pages/administration/usermanagement/usermanagementindex.vue').default}, 

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
Vue.component('generaldashboard', require('./Pages/dashboard/general.vue').default);
Vue.component('deodashboard', require('./Pages/dashboard/deodashboard.vue').default);

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

