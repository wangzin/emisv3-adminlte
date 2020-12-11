<template>
    <div> 
        <div class="breadcrumbs ace-save-state" id="breadcrumbs">
            <ol class="breadcrumb"> 
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item">Staff</li>
                <li class="breadcrumb-item active">Staff Masters</li>
            </ol>
        </div>
        <div class="card card-primary card-outline card-tabs">
            <div class="card-header p-0 pt-1 border-bottom-0">
                <ul class="nav nav-tabs" id="custom-tabs-three-tab" role="tablist">
                    <li class="nav-item dropdown">
                        <a class="nav-link active dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">
                            <i class="green ace-icon fa fa-database bigger-120"></i>
                            <span id="selected">Select Masters &nbsp; <span class="caret"></span></span>
                        </a>
                        <div class="dropdown-menu" style="">
                            <a href="#" @click="manageclasses('School Level')">
                                <router-link  to="/orgmasterlevel"  class="dropdown-item">
                                    <i class="menu-icon fa fa-caret-right"></i>
                                    School Level
                                </router-link>
                            </a>
                            <div class="dropdown-divider"></div>
                            <a href="#" @click="manageclasses('Org Location Type')">
                                <router-link to="/orglocationmaster" class="dropdown-item">
                                    <i class="menu-icon fa fa-caret-right"></i>
                                    Org Location Type
                                </router-link>
                            </a>                          
                        </div>
                    </li>                  
                </ul>
            </div>
            <div class="card-body">
                <div class="tab-content" id="custom-tabs-three-tabContent">
                    <div class="tab-pane fade active show" id="custom-tabs-three-home" role="tabpanel" aria-labelledby="custom-tabs-three-home-tab">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    components: {
    },
    data() {
        return {
        }
    },
    methods: {
		
    },
    mounted() {
       
        
    },
    
}
</script>

