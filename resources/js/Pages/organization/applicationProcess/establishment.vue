<template>
    <div>
        <!-- new establishment card -->
        <div class="card">
             <div class="card-header">
                <h3 class="card-title">New Establishment</h3>
            </div>

             <form>
             <input type="hidden" class="form-control" id="establishmentID"/>
            <div class="card-body" >
                <div class="form-group row">
                        <div class="col-md-5">
                        <label class="col-md-5 font-weight-normal">Category:<span class="text-danger">*</span></label>

                            <select name="category" id="category" class="form-control editable_fields font-weight-bolder">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Public</option>
                                    <option value="2">Private</option>
                            </select>
                        </div>
                        <div class="col-md-5">
                        <label class="col-md-5 font-weight-normal">Level:<span class="text-danger">*</span></label>

                            <select name="level" id="level" class="form-control editable_fields font-weight-bolder" @change="showDiv()">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Higher Secondary School</option>
                                    <option value="2">Middle Secondary School</option>
                                    <option value="3">Lower Secondary School</option>
                                    <option value="4">Primary School</option>
                                    <option value="5">ECR</option>
                                    <option value="6">ECCD</option>
                            </select>
                        </div>                   
                </div>
                 <div class="form-group row">
                        <div class="col-md-5">
                        <label class="col-md-6 font-weight-normal">Proposed Name:<span class="text-danger">*</span></label>

                            <input type="text" class="form-control font-weight-bolder" id="proposedName"/>
                        </div>
                        <div class="col-md-5">
                        <label class="col-md- font-weight-normal">Dzongkhag:<span class="text-danger">*</span></label>

                            <select name="dzongkhag" id="dzongkhag" class="form-control editable_fields font-weight-bolder">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Thimphu</option>
                            </select>
                        </div>                   
                </div>
                <div class="form-group row">
                        <div class="col-md-5">
                        <label class="col-md- font-weight-normal">Gewog:<span class="text-danger">*</span></label>

                            <select name="gewog" id="gewog" class="form-control editable_fields font-weight-bolder">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Babesa</option>
                                    <option value="2">Motithang</option>
                                    <option value="3">Chubachu</option>
                            </select>
                        </div>
                        <div class="col-md-5">
                        <label class="col-md- font-weight-normal">Chiwog:<span class="text-danger">*</span></label>

                            <select name="chiwog" id="chiwog" class="form-control editable_fields font-weight-bolder">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">olakha</option>
                                    <option value="2">changbandu</option>
                            </select>
                        </div>                   
                </div>

                <div class="form-group row">
                        <div class="col-md-5">
                        <label class="col-md- font-weight-normal">Location Category:<span class="text-danger">*</span></label>

                            <select name="locationCategory" id="locationCategory" class="form-control editable_fields font-weight-bolder">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">olakha</option>
                            </select>
                        </div>
                        <div class="col-md-5">
                        <label class="col-md- font-weight-normal">Geopolitically Located:</label>

                            <select name="geoLocated" id="geoLocated" class="form-control editable_fields font-weight-bolder">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Yes</option>
                                    <option value="2">No</option>
                            </select>
                        </div>                   
                </div>
                <div class="form-group row">
                        <div class="col-md-5 hidden" id="parentSchoolDiv">
                        <label class="col-md- font-weight-normal">Parent School:</label>

                            <select name="parentSchool" id="parentSchool" class="form-control  editable_fields font-weight-bolder">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Kabisa</option>
                            </select>
                        </div>
                        <div class="col-md-5 hidden" id="coLocatedDiv">
                        <label class="col-md-8 font-weight-normal">Co-located with Parent School:</label>

                            <select name="coLocatedParent" id="coLocatedParent" class="form-control editable_fields font-weight-bolder">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Yes</option>
                                    <option value="2">No</option>
                            </select>
                        </div>                   
                </div>
                 <div class="form-group row">
                        <div class="col-md-5">
                        <label class="col-md- font-weight-normal">Sen School/ECCD:<span class="text-danger">*</span></label>

                            <select name="senSchool" id="senSchool" class="form-control editable_fields font-weight-bolder">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Yes</option>
                                    <option value="2">No</option>

                            </select>
                        </div>
                </div>
                 
            </div>
            
        </form>
       
        </div>

        <!-- button -->
         <div class="row">
            <div class="col-md-1" style="margin-left: 800px;">
                <input type="button" class="btn btn-flat btn-primary" value="Cancel" id="reset" @click="reset()"/>
            </div>
                               
            <div class="col-md-1">
                <input type="button" class="btn btn-flat btn-primary" value="Submit" id="submit" @click="save()"/>                                                  
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

        }
    },
    
    methods:{

        /** method to save data */
        save: function(){
            let establishmentID = $("#establishmentID").val();
                alert("Data saved successfully.");
                $(".editable_fields").val("");
        },
        /** method to reset fields */
        reset: function(){
            $(".editable_fields").val("");
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

        /** method to populated data based on newEstablishmentID */
        edit: function(){
            $("#category option:selected").text("Public");
            $("#level option:selected").text("Higher Secondary School"); 
            $("#proposedName").val("YangchenPhug HSS");
            $("#dongkhag option:selected").text("Thimphu");
            $("#gewog option:selected").text("babesa");
            $("#chiwog option:selected").text("olakha");
            $("#locationCategory option:selected").text("olakha");
            $("#senSchool option:selected").text("No");   
            $("#establishmentID").val(1);
        },

        /** method to approve application based on newEstablishmentID */
        approve: function(){
            alert("New establishment approved sucessfully.");
        },

        /** method to reject application based on newEstablishmentID */
        reject: function(){
            alert("New establishment rejected sucessfully.");
        },

    }
}
</script>