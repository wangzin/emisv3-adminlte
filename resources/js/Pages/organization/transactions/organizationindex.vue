<template>
    <div>
       <br>
        <div class="card card-outline card-info">
            <!-- <div class="card-header">
                <h3 class="card-title" id="cardheader">Organizations</h3>
                <router-link to="/neworganization" id="addneworg" class="btn btn-success btn-sm fa-pull-right">
                    <i class="menu-icon fa fa-save"></i>
                    <span class=""> Apply For New Organization</span>
                </router-link>
                
            </div> -->
            <div class="card-body">
                <div class="row" style="margin-left : -28px">
                    <div class="col-5 col-sm-3" style="margin-top : -20px">
                        <div class="card">
                            <div class="card-header" style="background-color:#459e9a36">
                                <h3 class="card-title">
                                    <i class=" fas fa-home"></i>
                                    Organization
                                    </h3> 
                                <div class="card-tools">
                                <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i>
                                </button>
                                </div>  
                            </div>  
                            <div class="card-body p-0" style="display: block;">
                                <div class="nav flex-column h-100" id="vert-tabs-tab" role="tablist" aria-orientation="vertical">
                                    <ul class="nav nav-pills flex-column">
                                        <li class="nav-item">
                                            <router-link to="/neworganization" class="nav-link" id="basicAndContact-tab" data-toggle="pill" href="#basicAndContact" role="tab" aria-controls="basic-contact" aria-selected="true">
                                                <i class="nav-icon fas fa-phone"></i>
                                                &nbsp;&nbsp;Basic & Contact
                                                <i class="fas fa-angle-double-right float-right pt-1"></i>  
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="location-organization-tab" data-toggle="pill" href="#location-organization" role="tab" aria-controls="location-organization" aria-selected="false">
                                                <i class="nav-icon fas fa-map-marker-alt"></i>
                                                &nbsp;&nbsp;Location & Organization
                                                <i class="fas fa-angle-double-right float-right pt-1"></i>  
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="structure-tab" data-toggle="pill" href="#structure" role="tab" aria-controls="structure" aria-selected="false">
                                                <i class="nav-icon fas fa-hotel"></i>
                                                &nbsp;&nbsp;Building & Structure
                                                <i class="fas fa-angle-double-right float-right pt-1"></i>  
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="wash-tab" data-toggle="pill" href="#wash" role="tab" aria-controls="wash" aria-selected="false">
                                                <i class="nav-icon fas fa-map-marker-alt"></i>
                                                &nbsp;&nbsp;Wash Facility
                                                <i class="fas fa-angle-double-right float-right pt-1"></i>  
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-7 col-sm-9">
                        <div class="tab-content" id="vert-tabs-tabContent">
                            <div class="tab-pane text-left fade show active" id="basicAndContact" role="tabpanel" aria-labelledby="basicAndContact-tab">
                                <!-- <router-view></router-view> -->
                                <div class="col-12">
                                    <div class="position-relative p-3 bg-gray" style="height: 180px">
                                        <div class="ribbon-wrapper ribbon-xl">
                                            <div class="ribbon bg-success">
                                                Organization Fomrs
                                            </div>
                                        </div>
                                        <div class="col-8">
                                            Organization forms inlcudes all details of organization (school, ECCD, Head Quarters, etc). According to your access level, you can able to proceed for further action. <br>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- <div class="tab-pane text-left fade show active" id="basicAndContact" role="tabpanel" aria-labelledby="basicAndContact-tab">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada lacus ullamcorper dui molestie, sit amet congue quam finibus. Etiam ultricies nunc non magna feugiat commodo. Etiam odio magna, mollis auctor felis vitae, ullamcorper ornare ligula. Proin pellentesque tincidunt nisi, vitae ullamcorper felis aliquam id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin id orci eu lectus blandit suscipit. Phasellus porta, ante et varius ornare, sem enim sollicitudin eros, at commodo leo est vitae lacus. Etiam ut porta sem. Proin porttitor porta nisl, id tempor risus rhoncus quis. In in quam a nibh cursus pulvinar non consequat neque. Mauris lacus elit, condimentum ac condimentum at, semper vitae lectus. Cras lacinia erat eget sapien porta consectetur. 
                            </div>
                            <div class="tab-pane fade" id="location-organization" role="tabpanel" aria-labelledby="location-organization-tab">
                                Mauris tincidunt mi at erat gravida, eget tristique urna bibendum. Mauris pharetra purus ut ligula tempor, et vulputate metus facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas sollicitudin, nisi a luctus interdum, nisl ligula placerat mi, quis posuere purus ligula eu lectus. Donec nunc tellus, elementum sit amet ultricies at, posuere nec nunc. Nunc euismod pellentesque diam. 
                            </div>
                            <div class="tab-pane fade" id="structure" role="tabpanel" aria-labelledby="structure-tab">
                                Morbi turpis dolor, vulputate vitae felis non, tincidunt congue mauris. Phasellus volutpat augue id mi placerat mollis. Vivamus faucibus eu massa eget condimentum. Fusce nec hendrerit sem, ac tristique nulla. Integer vestibulum orci odio. Cras nec augue ipsum. Suspendisse ut velit condimentum, mattis urna a, malesuada nunc. Curabitur eleifend facilisis velit finibus tristique. Nam vulputate, eros non luctus efficitur, ipsum odio volutpat massa, sit amet sollicitudin est libero sed ipsum. Nulla lacinia, ex vitae gravida fermentum, lectus ipsum gravida arcu, id fermentum metus arcu vel metus. Curabitur eget sem eu risus tincidunt eleifend ac ornare magna. 
                            </div>
                            <div class="tab-pane fade" id="wash" role="tabpanel" aria-labelledby="wash-tab">
                                Pellentesque vestibulum commodo nibh nec blandit. Maecenas neque magna, iaculis tempus turpis ac, ornare sodales tellus. Mauris eget blandit dolor. Quisque tincidunt venenatis vulputate. Morbi euismod molestie tristique. Vestibulum consectetur dolor a vestibulum pharetra. Donec interdum placerat urna nec pharetra. Etiam eget dapibus orci, eget aliquet urna. Nunc at consequat diam. Nunc et felis ut nisl commodo dignissim. In hac habitasse platea dictumst. Praesent imperdiet accumsan ex sit amet facilisis. 
                            </div> -->
                        </div>
                    </div>
                </div>

                <br>
                <hr>
                
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
            count:5,
        }
    },
    methods: {
    },
    mounted() {
        $('#cardheader').html('Organization');
        $('#addneworg').show();
    },
    
}

</script>