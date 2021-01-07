<template>
    <div>
        <div class="breadcrumbs ace-save-state" id="breadcrumbs">
            <ol class="breadcrumb"> 
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item">INSET</li>
                <li class="breadcrumb-item active">Create Training</li>
            </ol>
        </div>
        <div class="card card-success card-outline">
            <div class="card-header">
                <h2 class="card-title"><b>Create New Trainig</b></h2>
            </div>
            <div class="card-body">   
                <form>  
                    <div class="form-group row"> 
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12"> 
                            <label class="font-weight-normal">Trainig Type:<span class="text-danger">*</span></label>
                            <select class="form-control" name="training_type" id="training_type" @change="removeerror('training_type','training_type_error'),showfield('training_type')">
                                <option value="">---Select---</option>
                                <option value="professional_section">Professional Development Program</option>
                                <option value="qualification_section">Qualification Upgradation</option>
                            </select>
                            <span id="training_type_error" class="text-danger"></span>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12"> 
                            <label class="font-weight-normal">Receive Particapent From:<span class="text-danger">*</span></label>
                            <select class="form-control" name="apply" id="apply" @change="removeerror('training_type','training_type_error'),showfield('training_type')">
                                <option value="">---Select---</option>
                                <option value="dzongkahg">Dzongkhag Level</option>
                                <option value="qualification_section">Schools, ECCD and others</option>
                                <option value="na">Not applicable</option>
                            </select>
                        </div>
                    </div> 
                    <span id="professional_section" style="display:none">
                        <div class="form-group row">
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <label class="font-weight-normal">Category:<span class="text-danger">*</span></label>
                                <select class="form-control" @change="showhide('trining_type','13','professional_country')" name="SubLevelID" id="trining_type">
                                    <option value="" label="- Please Select -">- Please Select -</option>
                                    <option value="10">CBIP</option>
                                    <option value="11">DBIP</option>
                                    <option value="13">International Program</option>
                                    <option value="12">NBIP </option>
                                    <option value="9">SBIP </option>
                                </select>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12" id="professional_country" style="display:none">
                                <label class="font-weight-normal">Country:<span class="text-danger">*</span></label>
                                <select class="form-control" name="MastersCountryID" id="MastersCountryID">
                                    <option value="" label="- Please Select -">- Please Select -</option>
                                    <option value="1" label="AFGHANISTAN [AF]">AFGHANISTAN [AF]</option>
                                    <option value="2" label="ÅLAND ISLANDS [AX]">ÅLAND ISLANDS [AX]</option>
                                    <option value="3" label="ALBANIA [AL]">ALBANIA [AL]</option>
                                    <option value="4" label="ALGERIA [DZ]">ALGERIA [DZ]</option>
                                    <option value="5" label="AMERICAN SAMOA [AS]">AMERICAN SAMOA [AS]</option>
                                    <option value="6" label="ANDORRA [AD]">ANDORRA [AD]</option>
                                    <option value="7" label="ANGOLA [AO]">ANGOLA [AO]</option>
                                    <option value="8" label="ANGUILLA [AI]">ANGUILLA [AI]</option>
                                    <option value="9" label="ANTARCTICA [AQ]">ANTARCTICA [AQ]</option>
                                    <option value="10" label="ANTIGUA AND BARBUDA [AG]">ANTIGUA AND BARBUDA [AG]</option>
                                    <option value="11" label="ARGENTINA [AR]">ARGENTINA [AR]</option>
                                    <option value="12" label="ARMENIA [AM]">ARMENIA [AM]</option>
                                    <option value="13" label="ARUBA [AW]">ARUBA [AW]</option>
                                    <option value="14" label="AUSTRALIA [AU]">AUSTRALIA [AU]</option>
                                </select>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <label class="font-weight-normal">Type:<span class="text-danger">*</span></label>
                                <select class="form-control" @change="showhide('typeofseminer','19','other_siminer')" name="Type" id="typeofseminer">
                                    <option value="" label="- Please Select -">- Please Select -</option>
                                    <option value="17" label="Conference [0015]">Conference [0015]</option>
                                    <option value="18" label="Meeting [0016]">Meeting [0016]</option>
                                    <option value="19">Others [0017]</option>
                                    <option value="16" label="Seminar [0014]">Seminar [0014]</option>
                                    <option value="14" label="Training [0012]">Training [0012]</option>
                                    <option value="15" label="Workshop [0013]">Workshop [0013]</option>
                                </select>
                            </div> 
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12" id="other_siminer" style="display:none">
                                <label class="font-weight-normal">Other Type:<span class="text-danger">*</span></label>
                                <input type="text" class="form-control">
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <label class="font-weight-normal">Course Type:<span class="text-danger">*</span></label>
                                <select class="form-control" name="CourseTypeID" id="CourseTypeID">
                                    <option value="" label="- Please Select -">- Please Select -</option>
                                    <option value="27" label="Curriculum [0025]">Curriculum [0025]</option>
                                    <option value="28" label="Non Academic [0026]">Non Academic [0026]</option>
                                    <option value="26" label="Pedagogy [0024]">Pedagogy [0024]</option>
                                </select>
                            </div> 
                        </div>
                        <div class="form-group row">
                            <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                <label class="ont-weight-normal">Nature of participation:<span class="text-danger">*</span></label>
                                <br><input type="checkbox" value="Moderator"> Moderator &nbsp;
                                <input type="checkbox" value="Moderator"> Participant&nbsp;
                                <input type="checkbox" value="Participant"> Presenter&nbsp;
                                <input type="checkbox" value="Trainer/Facilitator"> Trainer/Facilitator&nbsp;
                                <input type="checkbox" value="Writer"> Writer&nbsp;
                                <input type="checkbox" value="Writer"> Others&nbsp;
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <label class="font-weight-normal">Course Title:<span class="text-danger">*</span></label>
                                <input type="text" class="form-control" name="course_title">
                            </div> 
                        </div>
                        <div class="form-group row">
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <label class="font-weight-normal">Course provider:<span class="text-danger">*</span></label>
                                <input type="text" class="form-control" name="course_provider">
                            </div> 
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <label class="font-weight-normal">Place/Vanue:<span class="text-danger">*</span></label>
                                <input type="text" class="form-control" name="training_place">
                            </div> 
                             <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <label class="font-weight-normal">Financial Source:<span class="text-danger">*</span></label>
                                <select class="form-control" name="FinancialSource" id="FinancialSource">
                                    <option value="" label="- Please Select -">- Please Select -</option>
                                    <option value="2" label="External [0002]">External [0002]</option>
                                    <option value="1" label="RGoB [0001]">RGoB [0001]</option>
                                </select>
                            </div> 
                        </div>
                        <div class="form-group row">
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <label class="font-weight-normal">Start Date:<span class="text-danger">*</span></label>
                                <input type="text" class="form-control" name="sdate">
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <label class="font-weight-normal">End Date:<span class="text-danger">*</span></label>
                                <input type="text" class="form-control" name="enddate">
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <label class="font-weight-normal">Total Hours:<span class="text-danger">*</span></label>
                                <input type="text" class="form-control" name="totalhr">
                            </div>
                        </div>
                    </span> 
                    <span id="qualification_section" style="display:none">
                        <div class="form-group row">
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <label class="font-weight-normal">Category:<span class="text-danger">*</span></label>
                                <select class="form-control" name="MastersQualCategoryID" id="MastersQualCategoryID">
                                    <option value="" >- Please Select -</option>
                                    <option value="4" >In-service/Ex-Country</option>
                                    <option value="3">In-service/In-Country</option>
                                </select>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <label class="font-weight-normal">Donor Agency:<span class="text-danger">*</span></label>
                                <select class="form-control" name="MastersDonorAgencyID" id="MastersDonorAgencyID">
                                    <option value="" label="- Please Select -">- Please Select -</option>
                                    <option value="15" label="ADB [014]">ADB [014]</option>
                                    <option value="31" label="APCEIU [030]">APCEIU [030]</option>
                                    <option value="24" label="Australia [023]">Australia [023]</option>
                                    <option value="22" label="Canada [021]">Canada [021]</option>
                                    <option value="16" label="Colombo Plan [015]">Colombo Plan [015]</option>
                                    <option value="19" label="Denmark [018]">Denmark [018]</option>
                                    <option value="13" label="ESCAP [012]">ESCAP [012]</option>
                                    <option value="8" label="FAO [007]">FAO [007]</option>
                                    <option value="28" label="Germany [027]">Germany [027]</option>
                                    <option value="10" label="ILO [009]">ILO [009]</option>
                                    <option value="17" label="India [016]">India [016]</option>
                                    <option value="30" label="ITECH [029]">ITECH [029]</option>
                                    <option value="23" label="Japan [022]">Japan [022]</option>
                                    <option value="20" label="Netherlands [019]">Netherlands [019]</option>
                                    <option value="29" label="Privately funded [028]">Privately funded [028]</option>
                                    <option value="2" label="RGOB [001]">RGOB [001]</option>
                                    <option value="3" label="SAARC [002]">SAARC [002]</option>
                                    <option value="27" label="Sweden [026]">Sweden [026]</option>
                                    <option value="21" label="Switserland [020]">Switserland [020]</option>
                                    <option value="18" label="Thailand [017]">Thailand [017]</option>
                                    <option value="7" label="UNDP [006]">UNDP [006]</option>
                                    <option value="6" label="UNESCO [005]">UNESCO [005]</option>
                                    <option value="11" label="UNFPA [010]">UNFPA [010]</option>
                                    <option value="5" label="UNICEF [004]">UNICEF [004]</option>
                                    <option value="25" label="United Kingdom [024]">United Kingdom [024]</option>
                                    <option value="1" label="Unknown [999]">Unknown [999]</option>
                                    <option value="26" label="USA [025]">USA [025]</option>
                                    <option value="12" label="WFP [011]">WFP [011]</option>
                                    <option value="9" label="WHO [008]">WHO [008]</option>
                                    <option value="4" label="Worldbank [003]">Worldbank [003]</option>
                                    <option value="14" label="WWF [013]">WWF [013]</option>
                                </select>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <label class="font-weight-normal">Donor Agency:</label>
                                <select class="form-control" name="MastersDonorAgencyProjectsID" id="MastersDonorAgencyProjectsID" style="opacity: 1;">
                                    <option value="" label="- Please Select -">- Please Select -</option>
                                    <option value="37">CIDA [036]</option><option value="38">St Xavier University [037]</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <label class="font-weight-normal">Course Type:<span class="text-danger">*</span></label>
                                <select class="form-control" name="MastersFieldID" id="MastersFieldID">
                                    <option value="" label="- Please Select -">- Please Select -</option>
                                    <option value="13" label="Information Technology [07]">Information Technology [07]</option>
                                    <option value="6" label="Commercial [08]">Commercial [08]</option>
                                    <option value="8" label="Arts [09]">Arts [09]</option>
                                    <option value="15" label="Fine Arts [10]">Fine Arts [10]</option>
                                    <option value="9" label="Law [11]">Law [11]</option>
                                    <option value="10" label="Education [12]">Education [12]</option>
                                </select>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <label class="font-weight-normal">Degree:<span class="text-danger">*</span></label>
                                <select class="form-control" name="MastersDegreeID" id="MastersDegreeID" style="opacity: 1;">
                                    <option value="" label="- Please Select -">- Please Select -</option>
                                    <option value="4">PhD [02]</option><option value="5">Masters [03]</option><option value="6">PG Diploma [04]</option><option value="8">Bachelors [05]</option><option value="9">Diploma [06]</option>\
                                </select>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <label class="font-weight-normal">Subject:<span class="text-danger">*</span></label>
                                <select class="form-control" name="MastersQualificationSubject1stID" id="MastersQualificationSubject1stID" style="opacity: 1;">
                                    <option value="" label="- Please Select -">- Please Select -</option>
                                    <option value="65">Computer Application [066]</option><option value="66">Information Technology [067]</option><option value="26">Other [025]</option><option value="1">Undefined [999]</option>
                                </select>
                            </div>
                         </div>
                         <div class="form-group row">
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <label class="font-weight-normal">Country:<span class="text-danger">*</span></label>
                                <select class="form-control" name="MastersCountryID" id="MastersCountryID">
                                    <option value="" label="- Please Select -">- Please Select -</option>
                                    <option value="1" label="AFGHANISTAN [AF]">AFGHANISTAN [AF]</option>
                                    <option value="2" label="ÅLAND ISLANDS [AX]">ÅLAND ISLANDS [AX]</option>
                                    <option value="3" label="ALBANIA [AL]">ALBANIA [AL]</option>
                                    <option value="4" label="ALGERIA [DZ]">ALGERIA [DZ]</option>
                                    <option value="5" label="AMERICAN SAMOA [AS]">AMERICAN SAMOA [AS]</option>
                                    <option value="6" label="ANDORRA [AD]">ANDORRA [AD]</option>
                                    <option value="7" label="ANGOLA [AO]">ANGOLA [AO]</option>
                                    <option value="8" label="ANGUILLA [AI]">ANGUILLA [AI]</option>
                                    <option value="9" label="ANTARCTICA [AQ]">ANTARCTICA [AQ]</option>
                                    <option value="10" label="ANTIGUA AND BARBUDA [AG]">ANTIGUA AND BARBUDA [AG]</option>
                                    <option value="11" label="ARGENTINA [AR]">ARGENTINA [AR]</option>
                                    <option value="12" label="ARMENIA [AM]">ARMENIA [AM]</option>
                                    <option value="13" label="ARUBA [AW]">ARUBA [AW]</option>
                                    <option value="14" label="AUSTRALIA [AU]">AUSTRALIA [AU]</option>
                                </select>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <label class="font-weight-normal">Course Name:<span class="text-danger">*</span></label>
                                <input type="text" class="form-control">
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <label class="font-weight-normal">Thesis Name:</label>
                                <input type="text" class="form-control">
                            </div>
                         </div>
                         <div class="form-group row">
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <label class="font-weight-normal">Course Mode:<span class="text-danger">*</span></label>
                                <select class="form-control" name="MastersCountryID" id="MastersCountryID">
                                    <option value="1" label="Mixed Mode" selected="selected">Mixed Mode</option>
                                    <option value="2" label="Full-Time">Full-Time</option>
                                    <option value="3" label="Partime">Partime</option>
                                    <option value="4" label="Distant Education">Distant Education</option>
                                </select>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <label class="font-weight-normal">Start Date:<span class="text-danger">*</span></label>
                                <input type="text" class="form-control">
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <label class="font-weight-normal">End Date:</label>
                                <input type="text" class="form-control">
                            </div>
                         </div>
                        <div class="form-group row">
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <label class="font-weight-normal">Study Status:<span class="text-danger">*</span></label>
                                <select class="form-control" name="MastersStudyStatusID" id="MastersStudyStatusID">
                                    <option value="" label="- Please Select -">- Please Select -</option>
                                    <option value="4" label="Absconded [4]">Absconded [4]</option>
                                    <option value="1" label="Completed [1]">Completed [1]</option>
                                    <option value="2" label="In Complete [2]">In Complete [2]</option>
                                    <option value="6" label="Sought Political Asylum [6]">Sought Political Asylum [6]</option>
                                    <option value="7" label="Terminated [7]">Terminated [7]</option>
                                    <option value="3" label="Undergoing [3]">Undergoing [3]</option>
                                    <option value="8" label="Unknown [9]">Unknown [9]</option>
                                    <option value="5" label="Withdrawn [5]">Withdrawn [5]</option>
                                </select>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <label class="font-weight-normal">Effective Study Date:</label>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <label class="font-weight-normal">Remarks:</label>
                                <textarea class="form-control"></textarea>
                            </div>
                        </div>
                    </span>
                </form>
            </div>
            <div class="card-footer text-right">  
                <button type="button" class="btn btn-danger btn-flat" @click="cancelaction()"><i class="fa fa-recycle"></i> Cancel </button>
                <button type="button" class="btn btn-primary btn-flat" @click="createtraining()"><i class="fa fa-save"></i> Create </button>
            </div>
        </div>
    </div>
</template>  
<script>
import Input from '../../Jetstream/Input.vue';
export default {
  components: { Input },
    methods: {
        showfield(id){
            let field_id=$('#'+id).val();
            $('#qualification_section').hide();
            $('#professional_section').hide();
            $('#'+field_id).show();
        },
        removeerror(fieldId,errorId){
            if($('#'+fieldId).val()!=""){
                $('#'+errorId).html('');
                $('#'+fieldId).removeClass('is-invalid');
            }
        },
        showhide(id,valu,dis){
            if($('#'+id).val()==valu){
                $('#'+dis).show();
            }  else{
                $('#'+dis).hide();
            } 
        },
        cancelaction(){
            this.$router.push("/createTraining");
        },
        createtraining(){
            Swal.fire({
                title: 'Are you sure you wish to add this training details ?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes!',
                }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Success!',
                        'Training details is added successfully.',
                        'success',
                        window.location.reload()
                    )
                }
            });
        } 
    },
    mounted() {
        
    },
    
}
</script>


