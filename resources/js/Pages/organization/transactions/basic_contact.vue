<template>
    <div> 
        <br>
        <div class="card card-outline card-info">
            <div class="card-header">
                <h3 class="card-title"><b>Organizations </b>>> Basic and Contact Details</h3>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-12"> 
                        <div class="card card-primary card-outline-tabs">
                            <div class="card-header p-0 border-bottom-0">
                                <ul class="nav nav-tabs">
                                    <li class="nav-item basic-tabs">
                                        <a class="nav-link active" id="basic-tabs-head" data-toggle="pill" href="#basic-tabs" role="tab" aria-controls="custom-tabs-four-home" aria-selected="true"> 
                                            <span class="step_no img-bordered pr-2 pl-2 pb-1 pt-1 bg-gradient-secondary text-white">1</span>
                                            <label> Basic Details </label><span class="fa fa-check pl-2"></span>                                
                                        </a>
                                    </li>
                                   
                                    <li class="nav-item contactdetails-tab">
                                        <a class="nav-link disabled" id="contactdetails-tab-head" data-toggle="pill" @click="shownexttab('basic-tabs','contactdetails-tab')" role="tab" aria-controls="custom-tabs-four-settings" aria-selected="false">
                                            <span class="step_no img-bordered pr-2 pl-2 pb-1 pt-1 bg-gradient-secondary text-white">2</span>
                                            <label>Contact Details</label>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="card-body">
                                <div class="tab-content">
                                    <div class="tab-pane fade active show" id="basic-tabs" role="tabpanel" aria-labelledby="basicdetails">
                                        <div class="row form-group">
                                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                <label class="font-weight-normal">Organization Type <span class="text-danger">*</span></label>
                                                <select class="select2bs4" id="organizationtype" style="width: 100%;">
                                                    <option value="">Select</option> 
                                                    <option value="School">School</option>
                                                    <option value="Dzongkhag Administration">Dzongkhag Administration</option>
                                                    <option value="Ministry">Ministry</option>
                                                </select>
                                                <span class="text-danger" id="organizatioid_err"></span>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12" id="schoolcat"> 
                                                <label class="font-weight-normal">School Category</label>
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
                                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                    <label class="font-weight-normal">School Name (please do not enter level) <span class="text-danger">*</span></label>
                                                    <input type="text" @change="removeerror('schoolname','schoolname_err')" class="form-control font-weight-bolder" id="schoolname" v-model="schoolname" style="width: 100%;"/>
                                                    <span id="schoolname_err" class="text-danger"></span>
                                                </div>
                                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                    <label class="font-weight-normal">School Level</label>
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
                                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                    <label class="font-weight-normal">School Location</label>
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
                                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                    <label class="font-weight-normal">School Status</label>
                                                    <select class="select2bs4 font-weight-bolder" id="schoolstatus" v-model="schoolstatus" style="width: 100%;">
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
                                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                <label class="font-weight-normal">Agency Code (7 letters, like 028.001, defined by RCSC) <span class="text-danger">*</span></label>
                                                <input type="number" @change="removeerror('agencycode','agencycode_err')" class="form-control font-weight-bolder" id="agencycode" v-model="agencycode" style="width: 100%;"/>
                                                <span id="agencycode_err" class="text-danger"></span>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                <label class="font-weight-normal">RCSC Code (15 letters, like 001.002.003.004, defined by RCSC)</label>
                                                <input type="number" class="form-control font-weight-bolder" id="rcsccode" v-model="rcsccode" style="width: 100%;"/>
                                            </div>
                                        </div>
                                        <div class="row form-group">
                                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                <label class="font-weight-normal"> MoF Code (6 letters, like 121.01, defined by MoF)</label>
                                                <input type="number" class="form-control font-weight-bolder" id="mofcode" v-model="mofcode" style="width: 100%;"/>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                <label class="font-weight-normal">Year of establishment (e.g. 1976)</label>
                                                <input type="number" class="form-control font-weight-bolder" id="establishmentyear" v-model="establishmentyear" style="width: 100%;"/>
                                            </div>
                                        </div>
                                        <hr>
                                        <div class="row form-group fa-pull-right">
                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <button class="btn btn-flat btn-primary" @click="shownexttab('basic-tabs','contactdetails-tab')">Save & Next <i class="fa fa-arrow-right"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                    <div class="tab-pane fade" id="contactdetails-tab" role="tabpanel" aria-labelledby="custom-tabs-four-settings-tab" >
                                         
                                        <div class="row form-group" >
                                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                <label class="font-weight-normal">Telephone No (less than 15 letters)</label>
                                                <input type="text" class="form-control font-weight-bolder" id="telephone" style="width: 100%;"/>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                <label class="font-weight-normal">Fax No (less than 15 letters)</label>
                                                <input type="text" class="form-control font-weight-bolder" id="faxno" style="width: 100%;"/>
                                            </div>
                                             <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                <label class="font-weight-normal">Email (e.g. hajime.ishii@gmail.com)</label>
                                                <input type="text" class="form-control font-weight-bolder" id="email" style="width: 100%;"/>
                                            </div>
                                        </div>
                                        <div class="row form-group" >
                                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                <label class="font-weight-normal">Does the school have internet connection?</label>
                                                <div class="icheck-primary d-inline">
                                                    <input type="radio" id="internetconn1" name="internetconn">
                                                    <label for="internetconn1">
                                                        Yes 
                                                    </label>
                                                </div>
                                                <div class="icheck-primary d-inline pl-4">
                                                    <input type="radio" id="internetconn12" name="internetconn">
                                                    <label for="internetconn12">
                                                        No 
                                                    </label>
                                                </div>
                                            </div>
                                           
                                            <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                                <label class="font-weight-normal">Remarks</label>
                                                <textarea class="form-control font-weight-bolder" id="teleremarks" ></textarea>
                                            </div>
                                        </div>
                                        <span id="addedcontact"></span>
                                        <div class="card-header">
                                            <button class="btn btn-danger btn-sm" @click="removecontact()" style="display:none" id="removeaddedcontact">
                                                <i class="menu-icon fa fa-plus"></i>
                                                Remove contact
                                            </button>
                                            <button class="btn btn-success btn-sm fa-pull-right" @click="addmorecontact()">
                                                <i class="menu-icon fa fa-plus"></i>
                                               Add more contact
                                            </button>
                                        </div>
                                        
                                        <hr>
                                        <div class="row form-group fa-pull-right">
                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <button class="btn btn-flat btn-success" @click="previoustab('basic-tabs','contactdetails-tab')"><i class="fa fa-arrow-left"></i> Previous </button>
                                                <button class="btn btn-flat btn-info"><i class="fa fa-save"></i> Save As Draft </button>
                                                <button class="btn btn-flat btn-primary" @click="submitfinalform('')"> Submit for approval <i class="fa fa-arrow-save"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
            organizationtype:"",
            schoollevel:"",
            schoolname:"",
            schoolLocation:"",schoolstatus:"",
            agencycode:"",rcsccode:"",mofcode:"",
            establishmentyear:"",
            locationdzongkhag:"",locationgewog:"",locationvillage:"",thrmno:"",altitute:"",latitute:"",longitute:"",
            climatetype:"",locationvillage:"",distancefromroaddays:"",distancefromroadkm:"",distancefromroadhrs:"",compoundarea:"",playgroundmeasure:"",playgrounddescription:"",
            agrriculturearea:"",usedagriculture:"",tabstandNo:"",waterproblem:"",electricremarks:"",wayofdatacollection:"",
            count:0,
        }
    },
    methods: {
        previoustab(preclass,presentclass){
            $('.basic-tabs>a').removeClass('active');
            $('#basic-tabs').removeClass('active show');
            $('.contactdetails-tab >a').removeClass('active');
            $('#contactdetails-tab').removeClass('active show');
            $('.'+preclass+'> a').addClass('active');
            $('#'+preclass).addClass('active show');
        },
        shownexttab(presentclass,nextclass){
            $('.basic-tabs>a').removeClass('active');
            $('#basic-tabs').removeClass('active show');
            $('.contactdetails-tab >a').removeClass('active');
            $('#contactdetails-tab').removeClass('active show');
            $('.'+nextclass+'> a').addClass('active');
            $('#'+nextclass).addClass('active show');
            $('.'+nextclass+'> a').removeClass('disabled');
        },
        submitfinalform(){
            Swal.fire({
                title: 'Are you sure you wish to submit the entire information mention in the form?',
                text: "You won't be able to revert this back once you submit!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes!',
                }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Submitted!',
                        'Your Applicaiton details has been submitted. System generated application number for this transaction is: #02234. You may use this application nunber to track application status.',
                        'success',
                        this.$router.push('/orgmanagement')
                    )
                }
            })
        },
        validatedforms(presentclass){
            let returntype=true;
            if(presentclass=="basic-tabs"){
                if($('#organizationtype').val()==""){
                    $('#organizationtype').addClass('is-invalid');
                    $('#organizatioid_err').html('Please select organization type'); 
                    returntype=false;
                }
                
                if($('#schoolname').val()==""){
                    $('#schoolname').addClass('is-invalid');
                    $('#schoolname_err').html('Please mention the name of the school'); 
                    returntype=false;
                }
                if($('#agencycode').val()==""){
                    $('#agencycode').addClass('is-invalid');
                    $('#agencycode_err').html('Please mention agency code'); 
                    returntype=false;
                }
            }
            return returntype;
        },
        removeerror(fieldid,errid){
            if($('#'+fieldid).val()!=""){
                $('#'+fieldid).removeClass('is-invalid');
                $('#'+errid).html(''); 
            }
        },
       
        addmorecontact(){
            this.count++;
            let divadd='<div id="addeddiv'+this.count+'"><div class="row form-group" > <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">'+
                        '                        <label class="font-weight-normal">Telephone No (less than 15 letters)</label>'+
                        '                        <input type="text" class="form-control font-weight-bolder" id="telephone" style="width: 100%;"/>'+
                        '                    </div>'+
                        '                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">'+
                         '                       <label class="font-weight-normal">Fax No (less than 15 letters)</label>'+
                          '                      <input type="text" class="form-control font-weight-bolder" id="faxno" style="width: 100%;"/>'+
                           '                 </div>'+
                            '                 <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">'+
                             '                   <label class="font-weight-normal">Email (e.g. hajime.ishii@gmail.com)</label>'+
                              '                  <input type="text" class="form-control font-weight-bolder" id="email" style="width: 100%;"/>'+
                               '             </div>'+
                                '        </div>'+
                                 '       <div class="row form-group" >'+
                                           
                            '                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">'+
                             '                   <label class="font-weight-normal">Remarks</label>'+
                              '                  <textarea class="form-control font-weight-bolder" id="teleremarks" ></textarea>'+
                               '             </div>'+
                                '        </div></div>';
            $('#addedcontact').append(divadd);
            if(this.count>0){
                $('#removeaddedcontact').show();
            }
            else{
                $('#removeaddedcontact').hide();
            }
        },
        removecontact(){
            $('#addeddiv'+this.count).remove();
            this.count--;
            if(this.count>0){
                $('#removeaddedcontact').show();
            }
            else{
                $('#removeaddedcontact').hide();
            }
        },
    },

    mounted() {
        $('#addneworg').hide();
        $('.select2').select2()
        $('.select2bs4').select2({
            theme: 'bootstrap4'
        });
        $('.select2-selection__rendered').addClass('font-weight-bolder');
        $('#organizationtype').change(function(){
            //this.removeerror('organizationtype','organizatioid_err');
            if($('#organizationtype').val()=="School"){
                $('#schoolcat').show();
            }
            else{
                $('#schoolcat').hide();
            }
        });
    },
    
}
</script>
 