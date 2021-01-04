<template>
    <div>
        <aside class="main-sidebar sidebar-dark-primary elevation-4">
            <a v-bind:href="url" class="brand-link">
                <img src="admin3/dist/img/MoE_Logo.png" alt="AdminLTE Logo" class="brand-image elevation-3"
                    style="opacity: .8">
                <span class="brand-text"><b>MOE</b> >> EMIS</span>
            </a>
            <div class="sidebar"> 
                <nav class="mt-2">
                    <ul class="nav nav-pills nav-sidebar flex-column nav-child-indent" data-widget="treeview" role="menu" data-accordion="false">
                        <!-- global master side menu -->
                       
                        <li class="nav-item has-treeview" v-if="user === 'DBA'" id="globalsetup">
                            <a href="#" class="nav-link"> 
                                <i class="nav-icon fas fa-database"></i>
                                <p>
                                    Global Master
                                    <i class="fas fa-angle-left right"></i>
                                </p>
                            </a>
                            <ul class="nav nav-treeview">
                                <li class="nav-item" id="globaldzongkhag" @click="setclass('globalsetup','globaldzongkhag')">
                                    <router-link to="/dzongmasters"   class="nav-link" data-toggle="awesome_tooltip" title="Organization">
                                        <i class="fa fa-angle-double-right nav-icon"></i>
                                        <p>Dzongkhag Master</p>
                                    </router-link>
                                </li>
                                <li class="nav-item"  id="globalgewog" @click="setclass('globalsetup','globalgewog')">
                                    <router-link to="/gewogmasters"   class="nav-link" data-toggle="awesome_tooltip" title="Organization">
                                        <i class="fa fa-angle-double-right nav-icon"></i>
                                        <p>Gewog Master</p>
                                    </router-link>
                                </li>
                                <li class="nav-item" id="villageglobal" @click="setclass('globalsetup','villageglobal')"> 
                                    <router-link to="/villagemaster"   class="nav-link" data-toggle="awesome_tooltip" title="Organization">
                                        <i class="fa fa-angle-double-right nav-icon"></i>
                                        <p>Village Master</p>
                                    </router-link>
                                </li>
                            </ul>
                        </li>

                        <!-- administration side menu -->
                        <li class="nav-item has-treeview" id="administrationlink">
                            <a href="#" class="nav-link">
                                <i class="nav-icon fas fa-edit"></i>
                                <p>
                                    Administration
                                    <i class="fas fa-angle-left right"></i>
                                </p>
                            </a>
                            <ul class="nav nav-treeview">                                
                                <li class="nav-item" id="rolepriv" @click="setclass('administrationlink','rolepriv')">
                                    <router-link to="/rolesAndPriviledges"   class="nav-link" data-toggle="awesome_tooltip" title="Administration">
                                        <i class="fa fa-angle-double-right nav-icon"></i>
                                        <p>Role & Privileges</p>
                                    </router-link>
                                </li>
                                <li class="nav-item" id="usermanagement" @click="setclass('administrationlink','usermanagement')">
                                    <router-link to="/administrationmaster"   class="nav-link" data-toggle="awesome_tooltip" title="Administration">
                                        <i class="fa fa-angle-double-right nav-icon"></i>
                                        <p>User Management</p>
                                    </router-link>
                                </li>
                                <li class="nav-item" id="workflowmanagement" @click="setclass('administrationlink','workflowmanagement')">
                                    <router-link to="/workFlow"   class="nav-link" data-toggle="awesome_tooltip" title="Administration">
                                        <i class="fa fa-angle-double-right nav-icon"></i>
                                        <p>Workflow Management</p>
                                    </router-link>
                                </li>
                            </ul>
                        </li>

                        <!-- organization side menu -->
                        <li class="nav-item has-treeview" id="organizationlink">
                            <a href="#" class="nav-link">
                                <i class="nav-icon fas fa-home"></i>
                                <p>
                                    Organization
                                    <i class="fas fa-angle-left right"></i>
                                </p>
                            </a>
                            <ul class="nav nav-treeview">
                                <li class="nav-item" id="roganizationmaster" @click="setclass('organizationlink','roganizationmaster')">
                                    <router-link to="/orgmastermanagement" class="nav-link">
                                        <p>
                                            <i class="fa fa-angle-double-right nav-icon"></i>
                                            Organization Masters
                                        </p>
                                    </router-link>
                                </li>
                                <!-- <li class="nav-item" id="organizationlinksub" @click="setclass('organizationlink','organizationlinksub')">
                                    <router-link to="/orgmanagement" class="nav-link">
                                        <p>
                                            <i class="fa fa-angle-double-right nav-icon"></i>
                                            Organization
                                        </p>
                                    </router-link>
                                </li>
                                <li class="nav-item" id="organizationapproval" @click="setclass('organizationlink','organizationapproval')">
                                    <router-link to="/taslist" class="nav-link">
                                        <p>
                                            <i class="fa fa-angle-double-right nav-icon"></i>
                                            Org. Verif. & Approval
                                        </p>
                                    </router-link>
                                </li> -->
                              
                                <li class="nav-item" id="applicationProcess" @click="setclass('organizationlink','applicationProcess')">
                                    <router-link to="/applicationProcess"   class="nav-link" data-toggle="awesome_tooltip" title="applicationProcess">
                                        <i class="fa fa-angle-double-right nav-icon"></i>
                                        <p>Application Process</p>
                                    </router-link>
                                </li>

                                <li class="nav-item" id="taskList" @click="setclass('organizationlink','taskList')">
                                    <router-link to="/taskList" class="nav-link">
                                        <p>
                                            <i class="fa fa-angle-double-right nav-icon"></i>
                                            Task List
                                        </p>
                                    </router-link>
                                </li>

                                <li class="nav-item" id="basicInformation" @click="setclass('organizationlink','basicInformation')">
                                    <router-link to="/basicInformation" class="nav-link">
                                        <p>
                                            <i class="fa fa-angle-double-right nav-icon"></i>
                                            Basic Information
                                        </p>
                                    </router-link>
                                </li>

                                <li class="nav-item" id="headQuaterOffice" @click="setclass('organizationlink','headQuaterOffice')">
                                    <router-link to="/headQuaterOffice" class="nav-link">
                                        <p>
                                            <i class="fa fa-angle-double-right nav-icon"></i>
                                            HQ/Dzongkhag Office
                                        </p>
                                    </router-link>
                                </li>
                                <!-- <li class="nav-item" id="location" @click="setclass('organizationlink','location')">
                                    <router-link to="/location" class="nav-link">
                                        <p>
                                            <i class="fa fa-angle-double-right nav-icon"></i>
                                            Location
                                        </p>
                                    </router-link>
                                </li>
                                <li class="nav-item" id="contactDetails" @click="setclass('organizationlink','contactDetails')">
                                    <router-link to="/contactDetails" class="nav-link">
                                        <p>
                                            <i class="fa fa-angle-double-right nav-icon"></i>
                                            Contact Details
                                        </p>
                                    </router-link>
                                </li>

                                <li class="nav-item" id="connectivity" @click="setclass('organizationlink','connectivity')">
                                    <router-link to="/connectivity" class="nav-link">
                                        <p>
                                            <i class="fa fa-angle-double-right nav-icon"></i>
                                            Connectivity
                                        </p>
                                    </router-link>
                                </li>
                                <li class="nav-item" id="structure" @click="setclass('organizationlink','structure')">
                                    <router-link to="/structure" class="nav-link">
                                        <p>
                                            <i class="fa fa-angle-double-right nav-icon"></i>
                                            Structure
                                        </p>
                                    </router-link>
                                </li>
                                <li class="nav-item" id="equipment" @click="setclass('organizationlink','equipment')">
                                    <router-link to="/equipment" class="nav-link">
                                        <p>
                                            <i class="fa fa-angle-double-right nav-icon"></i>
                                            Equipment & Furniture
                                        </p>
                                    </router-link>
                                </li>

                                <li class="nav-item" id="sportFacility" @click="setclass('organizationlink','sportFacility')">
                                    <router-link to="/sportFacility" class="nav-link">
                                        <p>
                                            <i class="fa fa-angle-double-right nav-icon"></i>
                                            Sport Facility
                                        </p>
                                    </router-link>
                                </li>
                                <li class="nav-item" id="agricultureFacility" @click="setclass('organizationlink','agricultureFacility')">
                                    <router-link to="/agricultureFacility" class="nav-link">
                                        <p>
                                            <i class="fa fa-angle-double-right nav-icon"></i>
                                            Agriculture Facility
                                        </p>
                                    </router-link>
                                </li>
                                <li class="nav-item" id="washFacility" @click="setclass('organizationlink','washFacility')">
                                    <router-link to="/washFacility" class="nav-link">
                                        <p>
                                            <i class="fa fa-angle-double-right nav-icon"></i>
                                            Wash Facility
                                        </p>
                                    </router-link>
                                </li> -->
                            </ul>
                        </li>

                        <!-- staff side menu  -->
                        <li class="nav-item has-treeview" id="stafflink">
                            <a href="#" class="nav-link">
                                <i class="nav-icon fas fa-user"></i>
                                <p>
                                    Staff
                                    <i class="fas fa-angle-left right"></i>
                                </p>
                            </a>
                            <ul class="nav nav-treeview">
                                <li class="nav-item" id="staffMaster" @click="setclass('stafflink','staffMaster')">
                                    <router-link to="/staffMaster" class="nav-link">
                                        <p>
                                            <i class="fa fa-angle-double-right nav-icon"></i>
                                            Staff Masters
                                        </p>
                                    </router-link>
                                </li>
                                <li class="nav-item" id="stafflinksub" @click="setclass('stafflink','stafflinksub')">
                                    <router-link to="/" class="nav-link">
                                        <p>
                                            <i class="fa fa-angle-double-right nav-icon"></i>
                                            Staff
                                        </p>
                                    </router-link>
                                </li>
                            </ul>
                        </li>

                        <!-- student side menu -->
                         <li class="nav-item has-treeview">
                            <a href="#" class="nav-link">
                                <i class="nav-icon fas fa-graduation-cap"></i>
                                <p> 
                                    Students
                                    <i class="fas fa-angle-left right"></i>
                                </p>
                            </a>
                            <ul class="nav nav-treeview">
                                <li class="nav-item">
                                    <router-link to="regstdmanagement" class="nav-link" data-toggle="awesome_tooltip" title="Regular Student">
                                        <i class="fa fa-angle-double-right nav-icon"></i>
                                        <p>Regular Student</p>
                                    </router-link>
                                </li>
                               
                                <li class="nav-item">
                                    <router-link to="stdmanagement" class="nav-link" data-toggle="awesome_tooltip" title="ECCD Student">
                                    <i class="fa fa-angle-double-right nav-icon"></i>
                                    <p>ECCD Students</p>
                                    </router-link>
                                </li>
                                 <li class="nav-item">
                                    <router-link to="cestdmanagement" class="nav-link" data-toggle="awesome_tooltip" title="ECCD Student">
                                    <i class="fa fa-angle-double-right nav-icon"></i>
                                    <p>CE Students</p>     
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                        
                        <!-- Inset side menu -->
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                            <i class="far fa-address-card nav-icon"></i>
                            <p>Inset Module</p>
                             <i class="fas fa-angle-left right"></i>
                            </a>
                                <ul class="nav nav-treeview">                                
                                <li class="nav-item" id="rolepriv" @click="setclass('','')">
                                    <router-link to="/createTraining"   class="nav-link" data-toggle="awesome_tooltip" title="Administration">
                                        <i class="fa fa-angle-double-right nav-icon"></i>
                                        <p>Create Training</p>
                                    </router-link>
                                </li>
                                <li class="nav-item" id="usermanagement" @click="setclass('','')">
                                    <router-link to="/applyTraining"   class="nav-link" data-toggle="awesome_tooltip" title="Administration">
                                        <i class="fa fa-angle-double-right nav-icon"></i>
                                        <p>Apply for Training</p>
                                    </router-link>
                                </li>
                                <li class="nav-item" id="verifyParticipants" @click="setclass('','')">
                                    <router-link to="/verifyParticipants"   class="nav-link" data-toggle="awesome_tooltip" title="Administration">
                                        <i class="fa fa-angle-double-right nav-icon"></i>
                                        <p>Verify Participants</p>
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item" id="tasklistlink" @click="setclass('','tasklistlink')">
                            <router-link to="/taslistforall" class="nav-link">
                                <p>
                                    <i class="fa fa-list nav-icon"></i>
                                    Task List
                                </p>
                            </router-link>
                        </li>
                        <li class="nav-item" id="searchapplication" @click="setclass('','searchapplication')">
                            <router-link to="/searchapplication" class="nav-link">
                                <p>
                                    <i class="fa fa-search nav-icon"></i>
                                    Track/ Search Application
                                </p>
                            </router-link>
                        </li>
                        <!-- result processing side menu -->
                        <li class="nav-item" id="resultprocessing">
                            <a href="#" class="nav-link">
                            <i class="fa fa-book nav-icon"></i>
                            <p>Result Processing</p>
                             <i class="fas fa-angle-left right"></i>
                            </a>
                                <ul class="nav nav-treeview">                                
                                <li class="nav-item" id="resultsubmitive" @click="setclass('resultprocessing','resultsubmitive')">
                                    <router-link to="/createTraining"   class="nav-link" data-toggle="awesome_tooltip" title="Administration">
                                        <i class="fa fa-angle-double-right nav-icon"></i>
                                        <p>Submitive (IV-XII)</p>
                                    </router-link>
                                </li>
                                <li class="nav-item" id="resultformative" @click="setclass('resultprocessing','resultformative')">
                                    <router-link to="/applyTraining"   class="nav-link" data-toggle="awesome_tooltip" title="Administration">
                                        <i class="fa fa-angle-double-right nav-icon"></i>
                                        <p>Formative (PP-III)</p>
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                       
                        <!-- MDCA side menu -->
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                            <i class="fa fa-mobile-alt nav-icon"></i>
                            <p>MDCA</p>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    </div> 
</template> 
<script>
export default {
    data() {
        return {
            url: 'userlogin',
            user: '',
        }
    },
    methods: {
        setclass(mainmenu,submenu){
            //global masters
            $('#globalsetup').removeClass('menu-open');
            $('#globalsetup'+'>ul').hide();
            $('#globaldzongkhag').removeClass('navbar-cyan active');
            $('#globalgewog').removeClass('navbar-cyan active');
            $('#villageglobal').removeClass('navbar-cyan active');

            //administration
            $('#administrationlink').removeClass('menu-open');
            $('#administrationlink'+'>ul').hide();
            $('#rolepriv').removeClass('navbar-cyan active');
            $('#usermanagement').removeClass('navbar-cyan active');
            $('#workflowmanagement').removeClass('navbar-cyan active');
              
            //organizations
            $('#organizationlink').removeClass('menu-open');
            $('#organizationlink'+'>ul').hide();
            $('#roganizationmaster').removeClass('navbar-cyan active');
            $('#organizationlinksub').removeClass('navbar-cyan active');
            $('#applicationProcess').removeClass('navbar-cyan active');
            $('#organizationapproval').removeClass('navbar-cyan active');
            $('#taskList').removeClass('navbar-cyan active');
            $('#basicInformation').removeClass('navbar-cyan active');
            $('#headQuaterOffice').removeClass('navbar-cyan active');
            $('#location').removeClass('navbar-cyan active');
            $('#contactDetails').removeClass('navbar-cyan active');
            $('#connectivity').removeClass('navbar-cyan active');
            $('#structure').removeClass('navbar-cyan active');
            $('#equipment').removeClass('navbar-cyan active');
            $('#sportFacility').removeClass('navbar-cyan active');
            $('#agricultureFacility').removeClass('navbar-cyan active');
            $('#washFacility').removeClass('navbar-cyan active');

            //staff
            $('#stafflink').removeClass('menu-open');
            $('#stafflink'+'>ul').hide();
            $('#staffMaster').removeClass('navbar-cyan active');
            $('#stafflinksub').removeClass('navbar-cyan active');

            //result processing
            $('#resultprocessing').removeClass('menu-open');
            $('#resultprocessing'+'>ul').hide();
            $('#resultsubmitive').removeClass('navbar-cyan active');
            $('#resultformative').removeClass('navbar-cyan active');

            $('#searchapplication').removeClass('navbar-cyan active');
            $('#tasklistlink').removeClass('navbar-cyan active');

            $('#'+mainmenu).addClass('menu-open');
            $('#'+mainmenu+'>ul').show();
            $('#'+submenu).addClass('navbar-cyan active');
            $('#'+submenu+ ">a").addClass('text-white');
        },
        mounted() {
			axios.get('verify')
			.then(response => {
				this.user = response.data.user;
			})
			.catch(error => {
				//Vue.component('default-component', require('./components/unauthorized.vue').default);
			});
			
        },
    },
    
}
</script>