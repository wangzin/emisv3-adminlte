<template>
    <div> 
        <div class="row">
            <div class="col-12"> 
                <div class="card card-primary card-outline-tabs">
                    <div class="card-header p-0 border-bottom-0">
                        <ul class="nav nav-tabs">
                            <li class="nav-item basic-tabs">
                                <a class="nav-link active" id="basicdetails" data-toggle="pill" href="#basic-tabs" role="tab" aria-controls="custom-tabs-four-home" aria-selected="true"> 
                                    <span class="step_no img-bordered pr-2 pl-2 pb-2 pt-2">1</span>
                                     Basic Details <span class="fa fa-check pl-2"></span>                                
                                </a>
                            </li>
                            <li class="nav-item location-tab">
                                <a class="nav-link" id="locationdetails" data-toggle="pill" href="#location-tab" role="tab" aria-controls="custom-tabs-four-profile" aria-selected="false">
                                    <span class="step_no img-bordered pr-2 pl-2 pb-2 pt-2">2</span>
                                    Location Details
                                    <span class="fa fa-angle-double-right"></span> 
                                </a>
                            </li>
                            <li class="nav-item schooldetails-tab">
                                <a class="nav-link" id="schooldetails" data-toggle="pill" href="#schooldetails-tab" role="tab" aria-controls="custom-tabs-four-messages" aria-selected="false">
                                    <span class="step_no img-bordered pr-2 pl-2 pb-2 pt-2">3</span>
                                    School/organization Details
                                    <span class="fa fa-angle-double-right"></span> 
                                </a>
                            </li>
                            <li class="nav-item contactdetails-tab">
                                <a class="nav-link" id="contactdetails" data-toggle="pill" href="#contactdetails-tab" role="tab" aria-controls="custom-tabs-four-settings" aria-selected="false">
                                    <span class="step_no img-bordered pr-2 pl-2 pb-2 pt-2">4</span>
                                    Contact Details
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="card-body">
                        <div class="tab-content">
                            <div class="tab-pane fade active show" id="basic-tabs" role="tabpanel" aria-labelledby="basicdetails">
                                <div class="row form-group">
                                    <div class="col-6">
                                        <label>Organization Type</label>
                                        <select class="select2bs4" id="organizatioid" v-model="organizationtype" style="width: 100%;">
                                            <option value="">Select</option> 
                                            <option value="School">School</option>
                                            <option value="Dzongkhag Administration">Dzongkhag Administration</option>
                                            <option value="Ministry">Ministry</option>
                                        </select>
                                    </div>
                                    <div class="col-6" id="schoolcat"> 
                                        <label>School Category</label>
                                        <div class="clearfix">
                                            <div class="icheck-primary d-inline">
                                                <input type="radio" id="radioPrimary1" name="schoolcategory">
                                                <label for="radioPrimary1">
                                                    Public School
                                                </label>
                                            </div>
                                            <div class="icheck-primary d-inline pl-4">
                                                <input type="radio" id="radioPrimary2" name="schoolcategory">
                                                <label for="radioPrimary2">
                                                    Private School
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="schoolsections">
                                    <div class="row form-group">
                                        <div class="col-6">
                                            <label>School Name (please do not enter level)</label>
                                            <input type="text" class="form-control" id="schoolname" v-model="schoolname" style="width: 100%;"/>
                                        </div>
                                        <div class="col-6">
                                            <label>School Level</label>
                                            <select class="select2bs4" id="schoollevel" v-model="schoollevel" style="width: 100%;">
                                                <option value="" label="- Please Select -">- Please Select -</option>
                                                <option value="1" label="Community Primary School [01]">Community Primary School [01]</option>
                                                <option value="2" label="Primary School [02]">Primary School [02]</option>
                                                <option value="3" label="Lower Secondary School [03]">Lower Secondary School [03]</option>
                                                <option value="4" label="Middle Secondary School [04]">Middle Secondary School [04]</option>
                                                <option value="5" label="Higher Secondary School [05]">Higher Secondary School [05]</option>
                                                <option value="7" label="Special Institute [06]">Special Institute [06]</option>
                                                <option value="8" label="Extended Classroom [07]">Extended Classroom [07]</option>
                                                <option value="9" label="Early Childhood Care &amp; Development [09]">Early Childhood Care &amp; Development [09]</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row form-group">
                                        <div class="col-6">
                                            <label>School Location</label>
                                            <select class="select2bs4" id="schoolLocation" v-model="schoolLocation" style="width: 100%;">
                                                <option value="" label="- Please Select -">- Please Select -</option>
                                                <option value="1" label="Urban Grade 1 [01]">Urban Grade 1 [01]</option>
                                                <option value="2" label="Urban Grade 2 [02]">Urban Grade 2 [02]</option>
                                                <option value="3" label="Semi-Urban [03]">Semi-Urban [03]</option>
                                                <option value="4" label="Semi-Remote [04]">Semi-Remote [04]</option>
                                                <option value="5" label="Remote [05]">Remote [05]</option>
                                                <option value="6" label="Very-Remote [06]">Very-Remote [06]</option>
                                                <option value="7" label="Difficult [07]">Difficult [07]</option>
                                                <option value="9" label="Rural [08]">Rural [08]</option>
                                                <option value="10" label="Semi-Rural [09]">Semi-Rural [09]</option>
                                                <option value="11" label="Urban [10]">Urban [10]</option>
                                                <option value="8" label="Unknown [99]">Unknown [99]</option>
                                            </select>
                                        </div>
                                        <div class="col-6">
                                            <label>School Status</label>
                                            <select class="select2bs4" id="schoolstatus" v-model="schoolstatus" style="width: 100%;">
                                                <option value="" label="- Please Select -">- Please Select -</option>
                                                <option value="1" label="Opened [1]">Opened [1]</option>
                                                <option value="2" label="Closed [2]">Closed [2]</option>
                                                <option value="3" label="Bifurcated [3]">Bifurcated [3]</option>
                                                <option value="4" label="Merged [4]">Merged [4]</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div class="row form-group">
                                    <div class="col-6">
                                        <label>Agency Code (7 letters, like 028.001, defined by RCSC)</label>
                                        <input type="number" class="form-control" id="agencycode" v-model="agencycode" style="width: 100%;"/>
                                    </div>
                                    <div class="col-6">
                                        <label>RCSC Code (15 letters, like 001.002.003.004, defined by RCSC)</label>
                                        <input type="number" class="form-control" id="rcsccode" v-model="rcsccode" style="width: 100%;"/>
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col-6">
                                        <label> MoF Code (6 letters, like 121.01, defined by MoF)</label>
                                        <input type="number" class="form-control" id="mofcode" v-model="mofcode" style="width: 100%;"/>
                                    </div>
                                    <div class="col-6">
                                        <label>Year of establishment (e.g. 1976)</label>
                                        <input type="number" class="form-control" id="establishmentyear" v-model="establishmentyear" style="width: 100%;"/>
                                    </div>
                                </div>
                                <hr>
                                <div class="row form-group fa-pull-right">
                                    <div class="col-12">
                                        <button class="btn btn-primary"> Next <i class="fa fa-arrow-right"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="location-tab" role="tabpanel" aria-labelledby="location">
                                location details
                            </div>
                            <div class="tab-pane fade" id="schooldetails-tab" role="tabpanel" aria-labelledby="custom-tabs-four-messages-tab">
                                School Details
                            </div>
                            <div class="tab-pane fade" id="contactdetails-tab" role="tabpanel" aria-labelledby="custom-tabs-four-settings-tab">
                                Contact Details
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    </div>
</template>
<script>
import Button from '../../../Jetstream/Button.vue';
import Input from '../../../Jetstream/Input.vue';
export default {
    components: {
        Input,
        Button
    },
    data() {
        return {
            organizationtype:"",
            schoollevel:"",
            schoolname:"",
            schoolLocation:"",schoolstatus:"",
            agencycode:"",rcsccode:"",mofcode:"",
            establishmentyear:"",
            count:5,
        }
    },
    methods: {
    },
    mounted() {
        $('#cardheader').html('New Organization Form');
        $('#addneworg').hide();
        $('.select2').select2()
        $('.select2bs4').select2({
            theme: 'bootstrap4'
        });
        $('#organizatioid').change(function(){
            if($('#organizatioid').val()=="School"){
                $('#schoolcat').show();
            }
            else{
                $('#schoolcat').hide();
            }
        });
    },
    
}
</script>
 