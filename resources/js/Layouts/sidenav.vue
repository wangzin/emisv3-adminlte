<template>
    <div>
        <aside class="main-sidebar sidebar-dark-primary elevation-4">
            <a href="/userlogin" class="brand-link">
                <img src="admin3/dist/img/MoE_Logo.png" alt="AdminLTE Logo" class="brand-image elevation-3"
                    style="opacity: .8">
                <span class="brand-text"><b>MOE</b> >> EMIS</span>
            </a>
            <div class="sidebar">
                <nav class="mt-2">
                    <ul class="nav nav-pills nav-sidebar flex-column nav-child-indent" data-widget="treeview" role="menu" data-accordion="false">
                        <li class="nav-item has-treeview" id="globalsetup">
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
                                        <p>user management</p>
                                    </router-link>
                                </li>
                                <li class="nav-item" id="workflowmanagement" @click="setclass('administrationlink','workflowmanagement')">
                                    <router-link to="/workFlow"   class="nav-link" data-toggle="awesome_tooltip" title="Administration">
                                        <i class="fa fa-angle-double-right nav-icon"></i>
                                        <p>workflow management</p>
                                    </router-link>
                                </li>
                            </ul>
                        </li>
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
                                <li class="nav-item" id="organizationlinksub" @click="setclass('organizationlink','organizationlinksub')">
                                    <router-link to="/orgmastermanagement" class="nav-link">
                                        <p>
                                            <i class="fa fa-angle-double-right nav-icon"></i>
                                            Organization
                                        </p>
                                    </router-link>
                                </li>
                            </ul>
                        </li>

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
                                    <router-link to="regularstd" class="nav-link" data-toggle="awesome_tooltip" title="Regular Student">
                                        <i class="fa fa-angle-double-right nav-icon"></i>
                                        <p>Regular Student</p>
                                    </router-link>
                                </li>
                               
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                    <i class="fa fa-angle-double-right nav-icon"></i>
                                    <p>ECCD Students</p>
                                    </a>
                                </li>
                                 <li class="nav-item">
                                    <a href="#" class="nav-link">
                                    <i class="fa fa-angle-double-right nav-icon"></i>
                                    <p>CE Students</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                            <i class="far fa-address-card nav-icon"></i>
                            <p>Inset Module</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                            <i class="fa fa-book nav-icon"></i>
                            <p>Result Processing</p>
                            </a>
                        </li>
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

            $('#'+mainmenu).addClass('menu-open');
            $('#'+mainmenu+'>ul').show();
            $('#'+submenu).addClass('navbar-cyan active');
            $('#'+submenu+ ">p").addClass('text-white');
        },
    },
    
}
</script>