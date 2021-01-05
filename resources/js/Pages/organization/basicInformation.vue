<template>
    <div>
        <form>
            <div class="card"> 
                    <div class="card-body" >
                        <div class="form-group row">
                            <div class="col-md-5">
                            <label class="col-md-5 font-weight-normal">Category:<span class="text-danger">*</span></label>

                                <select name="category" id="category" class="form-control editable_fields font-weight-bolder" @change="show()">
                                        <option value="">--- Please Select ---</option>
                                        <option value="1">Public</option>
                                        <option value="2">Private</option>
                                </select>
                            </div>
                            <div class="col-md-5">
                            <label class="col-md-5 font-weight-normal">Year of Establishment:</label>
                                <input type="text" class="form-control editable_fields" id="yearOfEst"/>
                            </div>                   
                        </div>
                    </div>
            </div> 
            <!-- for public category -->
            <div class="card"> 
                <div class="card-body hidden" id="publicCategory">
                    <div class="form-group row" >    
                        <div class="col-md-6" >
                            <label class="col-md-7 font-weight-normal">Zest Working Agency Code:<span class="text-danger">*</span></label>

                            <input type="text" id="workingAgencyCode" class="form-control"/>
                        </div> 
                        <div class="col-md-5" style="padding:28px">
                            <input type="button" class="col-md-3 btn btn-flat btn-primary" value="Search" @click="getSchoolDeails"/>
                        </div>
                        
                    </div> 

                    <div class="form-group row" >    
                        <div class="col-md-5" >
                                <label class="col-md-7 font-weight-normal">Working Agency Code:</label>

                            <input type="text" id="workingCode" class="form-control" readonly/>
                        </div> 
                       <div class="col-md-5" >
                                <label class="col-md-5 font-weight-normal">Name:</label>

                            <input type="text" id="name" class="form-control" readonly/>
                        </div> 
                        
                    </div>

                    <div class="form-group row" >    
                        <div class="col-md-5" >
                                <label class="col-md-5 font-weight-normal">Parent Agency:</label>

                            <input type="text" id="parentAgency" class="form-control" readonly/>
                        </div> 
                       <div class="col-md-5" >
                                <label class="col-md-5 font-weight-normal">Dzongkhag:</label>

                            <input type="text" id="dzongkhag" class="form-control" readonly/>
                        </div> 
                        
                    </div> 

                    <div class="form-group" >    
                        <div class="col-md-5" >
                                <label class="col-md-5 font-weight-normal">Gewog:</label>

                            <input type="text" id="gewog" class="form-control" readonly/>
                        </div> 
                    </div> 
                </div>
            </div>

            <!-- for private category -->
            <div class="card"> 
                <div class="card-body hidden" id="privateCategory">
                    <div class="form-group row" >    
                        <div class="col-md-6" >
                            <label class="col-md-5 font-weight-normal">School/ECR/ECCD:</label>

                                <select name="organization" id="organization" class="form-control editable_fields font-weight-bolder" @change="getSchoolDetails()">
                                        <option value="">--- Please Select ---</option>
                                        <!-- <option value="1">YHSS</option> -->
                                </select>
                        </div> 
                    </div> 

                    <div class="form-group row" >    
                        <div class="col-md-5" >
                                <label class="col-md-5 font-weight-normal">Name:</label>

                            <input type="text" id="name" class="form-control"/>
                        </div> 
                        <div class="col-md-5" >
                                <label class="col-md-5 font-weight-normal">Dongkhag:</label>

                            <select name="dzongkhag" id="dzongkhag" class="form-control editable_fields font-weight-bolder">
                                        <option value="">--- Please Select ---</option>
                                        <option value="1">Thimphu</option>
                            </select>
                        </div>
                        
                    </div>

                    <div class="form-group row" >    
                        <div class="col-md-5" >
                                <label class="col-md-5 font-weight-normal">Gewog:</label>

                            <select name="gewog" id="gewog" class="form-control editable_fields font-weight-bolder">
                                        <option value="">--- Please Select ---</option>
                                        <option value="1">Babesa</option>
                            </select>
                        </div>

                        <div class="col-md-5" >
                                <label class="col-md-5 font-weight-normal">Chiwog:</label>

                            <select name="gewog" id="gewog" class="form-control editable_fields font-weight-bolder">
                                        <option value="">--- Please Select ---</option>
                                        <option value="1">Olakha</option>
                            </select>
                        </div> 
                        
                    </div>

                    <div class="form-group row" >    
                        <div class="col-md-5" >
                                <label class="col-md-5 font-weight-normal">Code:</label>

                            <input type="text" id="code" name="code" class="form-control"/>
                        </div>

                        <div class="col-md-5" >
                                <label class="col-md-5 font-weight-normal">Level:</label>

                            <select name="category" id="level" class="form-control font-weight-bolder editable_fields">
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

                    <div class="form-group row" >    
                        <div class="col-md-5" >
                                <label class="col-md-5 font-weight-normal">Location Category:</label>

                            <select name="locationCategory" id="locationCategory" class="form-control font-weight-bolder editable_fields">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Urban</option>
                                    <option value="2">Rural</option>
                                    <option value="3">Remote</option>
                            </select>
                        </div>

                        <div class="col-md-5" >
                                <label class="col-md-5 font-weight-normal">Geopolitically Located:</label>

                            <select name="category" id="level" class="form-control font-weight-bolder editable_fields">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Yes</option>
                                    <option value="2">No</option>
                            </select>
                        </div> 
                        
                    </div>

                    <div class="form-group row" >    
                        <div class="col-md-5" >
                                <label class="col-md-5 font-weight-normal">Parent School:</label>

                            <select name="parentSchool" id="parentSchool" class="form-control font-weight-bolder editable_fields">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Yes</option>
                                    <option value="2">No</option>
                            </select>
                        </div>

                        <div class="col-md-5" >
                                <label class="col-md-7 font-weight-normal">Co-located with parent school:</label>

                            <select name="category" id="level" class="form-control font-weight-bolder editable_fields">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Yes</option>
                                    <option value="2">No</option>
                            </select>
                        </div> 
                        
                    </div> 

                    <div class="form-group row" >    
                        <div class="col-md-5" >
                                <label class="col-md-5 font-weight-normal">SEN School/ECCD:</label>

                            <select name="parentSchool" id="parentSchool" class="form-control font-weight-bolder editable_fields">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Yes</option>
                                    <option value="2">No</option>
                            </select>
                        </div>

                        <div class="col-md-5" >
                                <label class="col-md-7 font-weight-normal">School Feeding Program:</label>

                            <select name="category" id="level" class="form-control font-weight-bolder editable_fields">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Yes</option>
                                    <option value="2">No</option>
                            </select>
                        </div> 
                        
                    </div>  

                </div>
            </div>
        </form>

        <!-- buttons -->
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
import Input from '../../Jetstream/Input.vue'
export default {
  components: { Input },
    data(){
        return{

        }
    },

    methods: {
        /** method to show div*/
        show: function(){
            let category = $("#category").val();

            if(category == 1){
                $("#publicCategory").show();
                $("#privateCategory").hide();

            }else{
                $("#privateCategory").show();
                $("#publicCategory").hide();
            }
        },

        /** method to get org details from ZEST system */

        getSchoolDeails: function(){
            $("#workingCode").val("019202");
            $("#name").val("YHSS");
            $("#parentAgency").val("MOE");
            $("#dzongkhag").val("Thimphu");
            $("#gewog").val("Babesa");
        }
    }
}
</script>