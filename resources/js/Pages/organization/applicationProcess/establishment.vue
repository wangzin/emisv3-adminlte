<template>
    <div>
        <!-- new establishment card -->
        <div class="card card-primary card-outline">
             <div class="card-header">
                <h3 class="card-title">New Establishment</h3>
            </div>

             <form>
            <div class="card-body" >
                <div class="form-group row">
                        <div class="col-md-4">
                        <label class="col-md-5 font-weight-normal">Category:<span class="text-danger">*</span></label>

                            <select name="category" id="category" class="form-control editable_fields font-weight-bolder" @change="removeerror('category','category_error')">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Public</option>
                                    <option value="2">Private</option>
                            </select>
                            <span id="category_error" class="text-danger"></span>
                        </div>
                        <div class="col-md-4">
                        <label class="col-md-5 font-weight-normal">Level:<span class="text-danger">*</span></label>

                            <select name="level" id="level" class="form-control editable_fields font-weight-bolder" @change="showDiv(),removeerror('level','level_error')">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Higher Secondary School</option>
                                    <option value="2">Middle Secondary School</option>
                                    <option value="3">Lower Secondary School</option>
                                    <option value="4">Primary School</option>
                                    <option value="5">ECR</option>
                                    <option value="6">ECCD</option>
                            </select>
                            <span id="level_error" class="text-danger"></span>
                        </div>  
                        <div class="col-md-4">
                        <label class="col-md-6 font-weight-normal">Proposed Name:<span class="text-danger">*</span></label>

                            <input type="text" class="form-control font-weight-bolder" id="proposedName" @change="removeerror('proposedName','proposedName_error')"/>
                            <span id="proposedName_error" class="text-danger"></span>

                        </div>                 
                </div>
                 <div class="form-group row">
                        
                        <div class="col-md-4">
                        <label class="col-md- font-weight-normal">Dzongkhag:<span class="text-danger">*</span></label>

                            <select v-model="selectedDzongkhag" name="dzongkhag" id="dzongkhag" class="form-control editable_fields font-weight-bolder" @change="removeerror('dzongkhag','dzongkhag_error')">
                                <option value="">--- Please Select ---</option>
                                <option v-for="(gewog_obj, gewog) in places" :key="gewog_obj" :value="gewog">{{gewog}}</option>
                            </select>
                             <span id="dzongkhag_error" class="text-danger"></span>
                           
                        </div>  
                        <div class="col-md-4">
                        <label class="col-md- font-weight-normal">Gewog:<span class="text-danger">*</span></label>

                            <select v-model="selectedGewog" name="gewog" id="gewog" class="form-control editable_fields font-weight-bolder" @change="removeerror('gewog','gewog_error')">
                                <option value="">--- Please Select ---</option>
                                <option v-for="(chiwog_obj, chiwog) in gewogs" :key="chiwog_obj" :value="chiwog">{{chiwog}}</option>

                            </select>
                             <span id="gewog_error" class="text-danger"></span>
                           
                        </div>
                        <div class="col-md-4">
                        <label class="col-md- font-weight-normal">Chiwog:<span class="text-danger">*</span></label>

                        <select v-model="selectedChiwog" name="chiwog" id="chiwog" class="form-control editable_fields font-weight-bolder" @change="removeerror('chiwog','chiwog_error')">
                            <option value="">--- Please Select ---</option>
                            <option v-for="chiwog in chiwogs" :key="chiwog">{{chiwog}}</option>
                        </select>
                        <span id="chiwog_error" class="text-danger"></span>

                        </div>                 
                </div>
                <div class="form-group row">
                                           
                </div>

                <div class="form-group row">
                        <div class="col-md-4">
                        <label class="col-md- font-weight-normal">Location Category:<span class="text-danger">*</span></label>

                            <select name="locationCategory" id="locationCategory" class="form-control editable_fields font-weight-bolder" @change="removeerror('locationCategory','locationCategory_error')">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">olakha</option>
                            </select>
                             <span id="locationCategory_error" class="text-danger"></span>
                           
                        </div>
                        <div class="col-md-4">
                        <label class="col-md- font-weight-normal">Geopolitically Located:</label>

                            <select name="geoLocated" id="geoLocated" class="form-control editable_fields font-weight-bolder">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Yes</option>
                                    <option value="2">No</option>
                            </select>
                        </div> 
                        <div class="col-md-4">
                        <label class="col-md- font-weight-normal">Sen School/ECCD:<span class="text-danger">*</span></label>

                            <select name="senSchool" id="senSchool" class="form-control editable_fields font-weight-bolder" @change="removeerror('senSchool','senSchool_error')">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Yes</option>
                                    <option value="2">No</option>
                            </select>
                             <span id="senSchool_error" class="text-danger"></span>
                        </div>                  
                </div>
                <div class="form-group row">
                        <div class="col-md-4 hidden" id="parentSchoolDiv">
                        <label class="col-md- font-weight-normal">Parent School:</label>

                            <select name="parentSchool" id="parentSchool" class="form-control  editable_fields font-weight-bolder">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Kabisa</option>
                            </select>
                        </div>
                        <div class="col-md-4 hidden" id="coLocatedDiv">
                        <label class="col-md-10 font-weight-normal">Co-located with Parent School:</label>

                            <select name="coLocatedParent" id="coLocatedParent" class="form-control editable_fields font-weight-bolder">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Yes</option>
                                    <option value="2">No</option>
                            </select>
                        </div>                   
                </div>
                 <div class="form-group row">
                        
                </div>
                 
            </div>
            
        </form>

        <!-- button -->
        <div class="card-footer">
            <div class="row form-group fa-pull-right">
                <div class="col-md-12">
                    <button type="button" class="btn btn-flat btn-warning" id="reset" @click="reset()"><i class="fa fa-ban"></i> Cancel</button>
                    <button type="button" class="btn btn-flat btn-primary" @click="save()"> <i class="fa fa-check"></i> Add</button>                                                
                </div>
            </div> 
        </div>

    </div>
        
    </div>
   
</template>

<script>
import Input from '../../../Jetstream/Input.vue';
export default {
  components: { Input },
    data(){
        return{
            places:{
                "Thimphu":{
                    "Chang":["Lhoongtsho Tashigang","Yoedselpang","Ramtogtog Tsangrina"],
                    "Kawang":["Boegarna Dodennang","Dazhi Zhoshuel"],
                },

                "Paro":{
                    "Dokar":["Tenchhekha Tsiphoog","Goensakha Phuchhekha","Mendrel Uesuna"],
                    "Dopshari":["olDuezhi Jipaakha","Kempa Kuduphoog"],
                },
                
            },
            gewogs: [],
            chiwogs: [],
            selectedDzongkhag: "",
            selectedGewog: "",
            selectedChiwog: ""
        }
    },
    
    methods:{

        /** method to save data */
        save: function(){
            if(this.validate()){
                Swal.fire(
                    'Success!',
                    'Your Data has been successfully saved.',
                    'success',
                )
                $(".editable_fields").val("");
            }
        },
        /** method to reset fields */
        reset: function(){
            $(".editable_fields").val("");
            window.location.reload();
        },

        /** method enable fields if selected level is ECR and ECCD */
        showDiv: function(){
            let level = $("#level").val();
            if(level == 5 || level == 6){
                $("#parentSchoolDiv").show();
                $("#coLocatedDiv").show();
            }else{
                $("#parentSchoolDiv").hide();
                $("#coLocatedDiv").hide();
            }
        },

        /** method to validate fields */
        validate: function(){
            let returntype=true;
            if($('#category').val()==""){
                $('#category_error').html('Please select category');
                $('#category').focus();
                $('#category').removeClass('is-invalid');
                returntype=false;
            }
            if($('#level').val()==""){
                $('#level_error').html('Please select level');
                $('#level').focus();
                $('#level').removeClass('is-invalid');
                returntype=false;
            }
            if($('#proposedName').val()==""){
                $('#proposedName_error').html('Please select proposed name');
                $('#proposedName').focus();
                $('#proposedName').removeClass('is-invalid');
                returntype=false;
            }
            if($('#dzongkhag').val()==""){
                $('#dzongkhag_error').html('Please select dzongkhag');
                $('#dzongkhag').focus();
                $('#dzongkhag').removeClass('is-invalid');
                returntype=false;
            }
            if($('#gewog').val()==""){
                $('#gewog_error').html('Please select gewog');
                $('#gewog').focus();
                $('#gewog').removeClass('is-invalid');
                returntype=false;
            }
            if($('#chiwog').val()==""){
                $('#chiwog_error').html('Please select chiwog');
                $('#chiwog').focus();
                $('#chiwog').removeClass('is-invalid');
                returntype=false;
            }
            
            if($('#locationCategory').val()==""){
                $('#locationCategory_error').html('Please select location category');
                $('#locationCategory').focus();
                $('#locationCategory').removeClass('is-invalid');
                returntype=false;
            }
            if($('#senSchool').val()==""){
                $('#senSchool_error').html('Please select sen school/ECCD');
                $('#senSchool').focus();
                $('#senSchool').removeClass('is-invalid');
                returntype=false;
            }
            return returntype;
        },

        removeerror(fieldid,errid){
            if($('#'+fieldid).val()!=""){
                $('#'+fieldid).removeClass('is-invalid');
                $('#'+errid).html(''); 
            }
        },
    },

    watch: {
        
        selectedDzongkhag: function() {
            // Clear previously selected values
            this.gewogs = [];
            this.chiwogs = [];
            this.selectedGewog = "";
            this.selectedChiwog = "";
            // Populate list of gewogs in the second dropdown
            if (this.selectedDzongkhag.length > 0) {
                this.gewogs = this.places[this.selectedDzongkhag]
            }
            
        },
        selectedGewog: function() {
            // Clear previously selected values
            this.chiwogs = [];
            this.selectedChiwog = "";
            // Now we have a Dongkhag and gewog. Populate list of chiwogs in the third dropdown
            if (this.selectedGewog.length > 0) {
                this.chiwogs = this.places[this.selectedDzongkhag][this.selectedGewog]
            }
        }
    }
}
</script>