<template>
    <div>
        <div id="breadcrumbs" class="breadcrumbs ace-save-state">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li> 
                <li class="breadcrumb-item">Organization</li> 
                <li class="breadcrumb-item active">Basic Information</li>
            </ol>
        </div>
        <form>
            <div class="card card-primary card-outline"> 
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
                        <div class="col-md-4" >
                                <label class="col-md-7 font-weight-normal">Working Agency Code:</label>

                            <input type="text" id="workingCode" class="form-control" readonly/>
                        </div> 
                       <div class="col-md-4" >
                                <label class="col-md-5 font-weight-normal">Name:</label>

                            <input type="text" id="name" class="form-control" readonly/>
                        </div> 
                        <div class="col-md-4" >
                                <label class="col-md-5 font-weight-normal">Parent Agency:</label>

                            <input type="text" id="parentAgency" class="form-control" readonly/>
                        </div>
                    </div>

                    <div class="form-group row" >    
                         
                       <div class="col-md-4" >
                                <label class="col-md-5 font-weight-normal">Dzongkhag:</label>

                            <input type="text" id="dzongkhag" class="form-control" readonly/>
                        </div> 

                        <div class="col-md-4" >
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
                                        <option value="1">YHSS</option>
                                </select>
                        </div> 
                    </div> 

                    <div class="form-group row" >    
                        <div class="col-md-4" >
                                <label class="col-md-5 font-weight-normal">Name:</label>

                            <input type="text" id="name" class="form-control"/>
                        </div> 
                        <div class="col-md-4" >
                                <label class="col-md-5 font-weight-normal">Dongkhag:</label>

                            <select name="dzongkhag" id="dzongkhag" class="form-control editable_fields font-weight-bolder">
                                        <option value="">--- Please Select ---</option>
                                        <option value="1">Thimphu</option>
                            </select>
                        </div>
                        <div class="col-md-4" >
                                <label class="col-md-5 font-weight-normal">Gewog:</label>

                            <select name="gewog" id="gewog" class="form-control editable_fields font-weight-bolder">
                                        <option value="">--- Please Select ---</option>
                                        <option value="1">Babesa</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group row" >    
                        <div class="col-md-4" >
                                <label class="col-md-5 font-weight-normal">Chiwog:</label>

                            <select name="gewog" id="gewog" class="form-control editable_fields font-weight-bolder">
                                        <option value="">--- Please Select ---</option>
                                        <option value="1">Olakha</option>
                            </select>
                        </div> 
                        <div class="col-md-4" >
                                <label class="col-md-5 font-weight-normal">Code:</label>

                            <input type="text" id="code" name="code" class="form-control"/>
                        </div>

                        <div class="col-md-4" >
                                <label class="col-md-5 font-weight-normal">Level:</label>

                            <select name="category" id="level" class="form-control font-weight-bolder editable_fields" @change="getClassAndStream('level')">
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
                        <div class="col-md-4" >
                                <label class="col-md-10 font-weight-normal">Location Category:</label>

                            <select name="locationCategory" id="locationCategory" class="form-control font-weight-bolder editable_fields">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Urban</option>
                                    <option value="2">Rural</option>
                                    <option value="3">Remote</option>
                            </select>
                        </div>

                        <div class="col-md-4" >
                                <label class="col-md-10 font-weight-normal">Geopolitically Located:</label>

                            <select name="category" id="level" class="form-control font-weight-bolder editable_fields">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Yes</option>
                                    <option value="2">No</option>
                            </select>
                        </div> 
                        <div class="col-md-4" >
                                <label class="col-md-10 font-weight-normal">Parent School:</label>

                            <select name="parentSchool" id="parentSchool" class="form-control font-weight-bolder editable_fields">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Yes</option>
                                    <option value="2">No</option>
                            </select>
                        </div>
                        
                    </div>

                    <div class="form-group row" >    
                        <div class="col-md-4" >
                                <label class="col-md-10 font-weight-normal">Co-located with parent school:</label>

                            <select name="category" id="level" class="form-control font-weight-bolder editable_fields">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Yes</option>
                                    <option value="2">No</option>
                            </select>
                        </div> 
                        <div class="col-md-4" >
                                <label class="col-md-5 font-weight-normal">SEN School/ECCD:</label>

                            <select name="parentSchool" id="parentSchool" class="form-control font-weight-bolder editable_fields">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Yes</option>
                                    <option value="2">No</option>
                            </select>
                        </div>

                        <div class="col-md-4" >
                                <label class="col-md-7 font-weight-normal">School Feeding Program:</label>

                            <select name="category" id="level" class="form-control font-weight-bolder editable_fields">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Yes</option>
                                    <option value="2">No</option>
                            </select>
                        </div>
                    </div> 

                    <table id="dynamic-table" class="table table-bordered table-striped" style="width:800px">
                        <thead>
                            <tr rowspan="2"> 
                                <th>Class</th>
                                <th colspan="4">Stream</th>
                            </tr>
                            <tr>
                                <th></th>
                                <th>General</th>
                                <th>Science</th>
                                <th>Commerce</th>
                                <th>Arts</th>
                            </tr>
                        </thead>
                        <tbody id="populate">
                             
                        </tbody>
                    </table>

                </div>
            </div>
        </form>

        <!-- buttons -->
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
import Input from '../../Jetstream/Input.vue'
export default {
  components: { Input },
    data(){
        return{

        }
    },

    methods: {

        /** method to reset forms */
        reset: function(){
            window.location.reload();
        },
        /** method to save data */
        save: function(){
            Swal.fire(
                    'Success!',
                    'Your Data has been successfully saved.',
                    'success',
                )
                $(".editable_fields").val("");
        },
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
        },
        /** method to get class and stream based on level */
         getClassAndStream(level){
            let table_data="";
            level=$('#'+level).val();
            
            if(level=="1"){
                table_data+='<tr id="1_1" class="tdata">'+
                    '<td><label>IX  </><input type="checkbox" class="" value="IX"/></td><td><input type="checkbox" class=""/></td> <td><input type="checkbox" name="role_head" /></td><td><input type="checkbox" name="role_head" /></td> <td><input type="checkbox" name="role_head" class=""/></td>'+
                '</tr>';
                table_data+='<tr id="1_1" class="tdata">'+
                    '<td><label>X  </><input type="checkbox" class="" value="X"/></td><td><input type="checkbox" class=""/></td> <td><input type="checkbox" name="role_head" /></td><td><input type="checkbox" name="role_head" /></td> <td><input type="checkbox" name="role_head" class=""/></td>'+
                '</tr>';
                table_data+='<tr id="1_1" class="tdata">'+
                    '<td><label>XI  </><input type="checkbox" class="" value="XI"/></td><td><input type="checkbox" class="" /></td> <td><input type="checkbox" name="role_head"/></td><td><input type="checkbox" name="role_head"/></td> <td><input type="checkbox" name="role_head" class=""/></td>'+
                '</tr>';
                table_data+='<tr id="1_1" class="tdata">'+
                    '<td><label>XII  </><input type="checkbox" class="" value="XII"/></td><td><input type="checkbox" class="" /></td> <td><input type="checkbox" name="role_head"/></td><td><input type="checkbox" name="role_head"/></td> <td><input type="checkbox" name="role_head" class=""/></td>'+
                '</tr>';
                
            }
            
            $('#populate').html(table_data);
        },
        
    }
}
</script>