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
                        <li class="nav-item has-treeview">
                            <a href="#" class="nav-link">
                                <i class="nav-icon fas fa-database"></i>
                                <p>
                                    Global Master
                                    <i class="fas fa-angle-left right"></i>
                                </p>
                            </a>
                            <ul class="nav nav-treeview">
                                <li class="nav-item">
                                    <router-link to="/dzongmasters"   class="nav-link" data-toggle="awesome_tooltip" title="Organization">
                                        <i class="fa fa-angle-double-right nav-icon"></i>
                                        <p>Dzongkhag Master</p>
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/gewogmasters"   class="nav-link" data-toggle="awesome_tooltip" title="Organization">
                                        <i class="fa fa-angle-double-right nav-icon"></i>
                                        <p>Gewog Master</p>
                                    </router-link>
                                </li>
                                <li class="nav-item"> 
                                    <router-link to="/villagemaster"   class="nav-link" data-toggle="awesome_tooltip" title="Organization">
                                        <i class="fa fa-angle-double-right nav-icon"></i>
                                        <p>Village Master</p>
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item has-treeview">
                            <a href="#" class="nav-link">
                                <i class="nav-icon fas fa-edit"></i>
                                <p>
                                    Administration
                                    <i class="fas fa-angle-left right"></i>
                                </p>
                            </a>
                            <ul class="nav nav-treeview">
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                    <i class="fa fa-angle-double-right nav-icon"></i>
                                    <p>Role & Privileges</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                    <i class="fa fa-angle-double-right nav-icon"></i>
                                    <p>User Registration</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                    <i class="fa fa-angle-double-right nav-icon"></i>
                                    <p>Workflow management</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item has-treeview">
                            <a href="#" class="nav-link">
                                <i class="nav-icon fas fa-home"></i>
                                <p>
                                    Organization
                                    <i class="fas fa-angle-left right"></i>
                                </p>
                            </a>
                            <ul class="nav nav-treeview">
                                <li class="nav-item">
                                    <router-link to="/orgmastermanagement"   class="nav-link" data-toggle="awesome_tooltip" title="Organization">
                                        <i class="fa fa-angle-double-right nav-icon"></i>
                                        <p>Organization Masters</p>
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                    <i class="fa fa-angle-double-right nav-icon"></i>
                                    <p>Organization</p>
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
                            <p>MODA</p>
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
    },
    
}
</script>