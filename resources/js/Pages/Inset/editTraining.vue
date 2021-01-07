<template>
    <div>
        <div class="breadcrumbs ace-save-state" id="breadcrumbs">
            <ol class="breadcrumb"> 
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item">INSET</li>
                <li class="breadcrumb-item active">Edit Training</li>
            </ol>
        </div>
        <div class="card card-success card-outline">
            <div class="card-header">
                <h2 class="card-title"><b>Edit Trainig</b></h2>
            </div>
            <div class="card-body">   
                <form>  
                    <div class="form-group row"> 
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12"> 
                            <label class="font-weight-normal">Trainig Type:<span class="text-danger">*</span></label>
                            <select class="form-control" name="training_type" id="training_type" @change="removeerror('training_type','training_type_error'),showfield('training_type')">
                                <option value="professional_section">Professional Development Program</option>
                                <option value="qualification_section">Qualification Upgradation</option>
                            </select>
                            <span id="training_type_error" class="text-danger"></span>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12"> 
                            <label class="font-weight-normal">Receive Particapent From:<span class="text-danger">*</span></label>
                            <select class="form-control" name="apply" id="apply" @change="removeerror('training_type','training_type_error'),showfield('training_type')">
                                <option value="dzongkahg">Dzongkhag Level</option>
                                <option value="qualification_section">Schools, ECCD and others</option>
                                <option value="na">Not applicable</option>
                            </select>
                        </div>
                    </div> 
                    <span id="professional_section">
                        <div class="form-group row">
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <label class="font-weight-normal">Category:<span class="text-danger">*</span></label>
                                <select class="form-control" @change="showhide('trining_type','13','professional_country')" name="SubLevelID" id="trining_type">
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
                                    <option value="2" label="ÅLAND ISLANDS [AX]">Bhutan</option>
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
                                <input type="text"  class="form-control">
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <label class="font-weight-normal">Course Type:<span class="text-danger">*</span></label>
                                <select class="form-control" name="CourseTypeID" id="CourseTypeID">
                                    <option value="27" label="Curriculum [0025]">Curriculum [0025]</option>
                                    <option value="28" label="Non Academic [0026]">Non Academic [0026]</option>
                                    <option value="26" label="Pedagogy [0024]">Pedagogy [0024]</option>
                                </select>
                            </div> 
                        </div>
                        <div class="form-group row">
                            <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                <br><input type="checkbox" value="Moderator"> Moderator &nbsp;
                                <input type="checkbox" checked value="Moderator"> Participant&nbsp;
                                <input type="checkbox" checked value="Participant"> Presenter&nbsp;
                                <input type="checkbox" checked value="Trainer/Facilitator"> Trainer/Facilitator&nbsp;
                                <input type="checkbox" checked value="Writer"> Writer&nbsp;
                                <input type="checkbox" value="Writer"> Others&nbsp;
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <label class="font-weight-normal">Course Title:<span class="text-danger">*</span></label>
                                <input type="text" value="System Administration and Training" class="form-control" name="course_title">
                            </div> 
                        </div>
                        <div class="form-group row">
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <label class="font-weight-normal">Course provider:<span class="text-danger">*</span></label>
                                <input type="text" value="MOE" class="form-control" name="course_provider">
                            </div> 
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <label class="font-weight-normal">Place/Vanue:<span class="text-danger">*</span></label>
                                <input type="text" value="MOE, Thimphu" class="form-control" name="training_place">
                            </div> 
                             <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <label class="font-weight-normal">Financial Source:<span class="text-danger">*</span></label>
                                <select class="form-control" name="FinancialSource" id="FinancialSource">
                                    <option value="2" label="External [0002]">External [0002]</option>
                                    <option value="1" label="RGoB [0001]">RGoB [0001]</option>
                                </select>
                            </div> 
                        </div>
                        <div class="form-group row">
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <label class="font-weight-normal">Start Date:<span class="text-danger">*</span></label>
                                <input type="text" value="2021-01-01" class="form-control" name="sdate">
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <label class="font-weight-normal">End Date:<span class="text-danger">*</span></label>
                                <input type="text" value="2021-06-31" class="form-control" name="enddate">
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <label class="font-weight-normal">Total Hours:<span class="text-danger">*</span></label>
                                <input type="text" value="540" class="form-control" name="totalhr">
                            </div>
                        </div>
                    </span> 
                   
                </form>
            </div>
            <div class="card-footer text-right">  
                <button type="button" class="btn btn-danger btn-flat" @click="cancelaction()"><i class="fa fa-recycle"></i> Cancel </button>
                <button type="button" class="btn btn-primary btn-flat" @click="createtraining()"><i class="fa fa-edit"></i> Update </button>
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
                title: 'Are you sure you wish to update this training details ?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes!',
                }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Success!',
                        'Training details has beed updated.',
                        'success',
                    )
                    this.$router.push("/createTraining")
                }
            });
        } 
    },
    mounted() {
        
    },
    
}
</script>


