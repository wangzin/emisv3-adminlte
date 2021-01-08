<template>
    <div>
         <form>
             <!-- closure card -->
            <div class="card card-primary card-outline">
                <div class="card-header">
                    <h3 class="card-title">Closure</h3>
                </div>

                    <div class="card-body" >
                        <div class="form-group row">
                            <div class="col-md-5">
                            <label class="col-md-5 font-weight-normal">School/ECR/ECCD:<span class="text-danger">*</span></label>

                                <select name="organization" id="organization" class="form-control editable_fields font-weight-bolder" @change="getSchoolDetails()"> 
                                        <option value="">--- Please Select ---</option>
                                        <option value="1">YHSS</option>
                                </select>
                            </div>
                            <div class="col-md-5">
                            <label class="col-md-5 font-weight-normal">Year of Closure:</label>
                                <input type="text" class="form-control editable_fields font-weight-bolder datepicker" id="closure"/>
                            </div>                   
                        </div>
                    </div>
            </div>

            <!-- details of school card -->
             <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Details of School</h3>
                </div>
                
                    <div class="card-body" >
                        <div class="form-group row">
                            <div class="col-md-5">
                            <label class="col-md-5 font-weight-normal">Code:</label>

                                <input type="text" class="form-control editable_fields font-weight-bolder" id="code"/>
                            </div>    
                            <div class="col-md-5">
                            <label class="col-md-5 font-weight-normal">Name:</label>

                                <input type="text" class="form-control editable_fields font-weight-bolder" id="name"/>
                            </div>                                           
                        </div>

                        <div class="form-group row">
                            <div class="col-md-5">
                            <label class="col-md-5 font-weight-normal">Category:</label>

                                <select name="category" id="category" class="form-control editable_fields font-weight-bolder">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Public</option>
                                    <option value="2">Private</option>
                                </select>
                            </div>
                            <div class="col-md-5">
                            <label class="col-md-5 font-weight-normal">Level:</label>

                                <select name="level" id="level" class="form-control editable_fields font-weight-bolder">
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
                            <label class="col-md-5 font-weight-normal">Dzongkhag:</label>

                                <select name="dzongkhag" id="dzongkhag" class="form-control editable_fields font-weight-bolder">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Thimphu</option>
                                    <option value="2">Paro</option>
                                    <option value="3">punakha</option>
                                    <option value="4">Lhuntse</option>
                            </select>
                            </div>
                            <div class="col-md-5">
                            <label class="col-md-5 font-weight-normal">Gewog:</label>

                                <select name="gewog" id="gewog" class="form-control editable_fields font-weight-bolder">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Kabisa</option>
                                    <option value="2">Babesa</option>
                                    <option value="3">Motithang</option>
                                    <option value="4">Chubachu</option>
                            </select>
                            </div>                                              
                        </div>

                        <div class="form-group row">
                            <div class="col-md-5">
                            <label class="col-md-5 font-weight-normal">Chiwog:</label>

                                <select name="chiwog" id="chiwog" class="form-control editable_fields font-weight-bolder">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">olakha</option>
                                    <option value="2">chngbandu</option>
                            </select>
                            </div>
                            <div class="col-md-5">
                            <label class="col-md-5 font-weight-normal">Location Category:</label>

                                <select name="locationCategory" id="locationCategory" class="form-control editable_fields font-weight-bolder">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Kabisa</option>
                            </select>
                            </div>                                              
                        </div>

                        <div class="form-group row">
                            <div class="col-md-5">
                            <label class="col-md-5 font-weight-normal">Geopolitically Located:</label>

                                <select name="geopoliticallyLocated" id="geopoliticallyLocated" class="form-control editable_fields font-weight-bolder">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Yes</option>
                                    <option value="2">No</option>
                                </select>
                            </div>

                            <div class="col-md-5">
                            <label class="col-md-6 font-weight-normal">SEN School:</label>

                                <select name="senSchool" id="senSchool" class="form-control editable_fields font-weight-bolder">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Kabisa</option>
                                </select>
                            </div>
                                                                          
                        </div>

                        <div class="form-group row">

                            <div class="col-md-5 hidden aaa">
                            <label class="col-md-5 font-weight-normal">Parent School:</label>

                                <select name="parentSchool" id="parentSchool" class="form-control editable_fields font-weight-bolder">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Kabisa</option>
                                </select>
                            </div>
                            
                            <div class="col-md-5 hidden aaa">
                            <label class="col-md-8 font-weight-normal">Co-located with Parent School:</label>

                                <select name="coLoParent" id="coLoParent" class="form-control editable_fields font-weight-bolder">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Yes</option>
                                    <option value="2">No</option>
                                </select>
                            </div>
                                                                          
                        </div>
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
</template>
<script>
export default {

    methods: {

        /** method to save data */
        save: function(){
            Swal.fire(
                    'Success!',
                    'Your Data has been successfully saved.',
                    'success',
                )
        },
        /** method to reset forms */
        reset: function(){
           window.location.reload();
        },
        
        /** method to get schools/ECR/ECCD details based on code */
        getSchoolDetails: function(){
            $("#code").val("00020292"); 
            $("#name").val("YangchenPhug HSS");
            $("#category option:selected").text("Public");
            $("#level option:selected").text("Higher Secondary School");
            $("#dzongkhag option:selected").text("Thimphu");
            $("#gewog option:selected").text("yhs");
            $("#chiwog option:selected").text("Yhs");
            $("#geopoliticallyLocated option:selected").text("Yes");
            $("#locationCategory option:selected").text("Town");
            $("#senSchool option:selected").text("No");
        }
    }
}
</script>