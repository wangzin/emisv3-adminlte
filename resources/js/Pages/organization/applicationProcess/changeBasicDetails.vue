<template>
    <div>
        <form>
            <!--change basic detail card -->
            <div class="card card-primary card-outline">
                <div class="card-header">
                    <h3 class="card-title">Change of Basic Details</h3>
                </div>
                    <div class="card-body" >
                        <div class="form-group row">
                            <div class="col-md-5">
                            <label class="col-md-5 font-weight-normal">School/ECR/ECCD:<span class="text-danger">*</span></label>

                                <select name="organization" id="organization" class="form-control editable_fields font-weight-bolder" @change="getSchoolDetails(),getClassAndStream('organization'),getClassAndStreamForAfterChange('organization')">
                                        <option value="">--- Please Select ---</option>
                                        <option value="1">YHSS</option>
                                        <option value="2">ECCD1</option>
                                </select>
                            </div>
                            <div class="col-md-5">
                            <label class="col-md-5 font-weight-normal">Year of Change:</label>
                                <input type="text" class="form-control editable_fields" id="yearOfUpgrade"/>
                            </div>                   
                        </div>
                    </div>
            </div>
<!-- section -->
    <section class="content">
        <div class="container-fluid">
            <div class="row">
            <!-- left column -->
                <div class="col-md-6">
                    <div class="card card-primary">
                        <div class="card-header">
                            <h3 class="card-title">Current Details</h3>
                        </div>

                    <div class="card-body">
                        <div class="row">
                            <div class="col-sm-6">
                            <!-- text input -->
                                <div class="form-group">
                                    <label class="col-md-5 font-weight-normal">Code:</label>
                                    <input type="text" class="form-control font-weight-bolder editable_fields currentDetails" id="code" readonly/>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label class="col-md-5 font-weight-normal">Name:</label>
                                <input type="text" class="form-control font-weight-bolder editable_fields currentDetails" id="name" readonly/>
                                </div>
                             </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6">
                            <!-- text input -->
                                <div class="form-group">
                                    <label class="col-md-5 font-weight-normal">Category:</label>

                                <select name="category" id="category" class="form-control font-weight-bolder editable_fields currentDetails" readonly>
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Public</option>
                                    <option value="2">Private</option>
                                </select>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label class="col-md-5 font-weight-normal">Level:</label>
                                <select name="category" id="level" class="form-control font-weight-bolder editable_fields currentDetails" readonly>
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
                        </div>

                        <div class="row">
                            <div class="col-sm-6">
                            <!-- text input -->
                                <div class="form-group">
                                    <label class="col-md-6 font-weight-normal">Dzongkhag:</label>
                                <select name="dzongkhag" id="dzongkhag" class="form-control font-weight-bolder editable_fields currentDetails" readonly>
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Thimphu</option>
                                    <option value="2">Paro</option>
                                    <option value="3">punakha</option>
                                    <option value="4">Lhuntse</option>
                                </select>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label class="col-md-5 font-weight-normal">Gewog:</label>
                                <select name="category" id="gewog" class="form-control font-weight-bolder editable_fields currentDetails" readonly>
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Kabisa</option>
                                    <option value="2">Babesa</option>
                                    <option value="3">Motithang</option>
                                    <option value="4">Chubachu</option>
                                </select>
                                </div>
                             </div>
                        </div>

                        <div class="row">
                            <div class="col-sm-6">
                            <!-- text input -->
                                <div class="form-group">
                                    <label class="col-md-5 font-weight-normal">Chiwog:</label>
                                <select name="category" id="chiwog" class="form-control font-weight-bolder editable_fields currentDetails" readonly>
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">olakha</option>
                                    <option value="2">chngbandu</option>
                                </select>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label class="col-md-8 font-weight-normal">Location Category:</label>
                                <select name="category" id="locationCategory" class="form-control font-weight-bolder editable_fields currentDetails" readonly>
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Kabisa</option>
                                </select>
                                </div>
                             </div>
                        </div> 
                        <div class="row">
                            <div class="col-sm-6">
                            <!-- text input -->
                                <div class="form-group">
                                    <label class="col-md-10 font-weight-normal">Geopolitically Located:</label>
                                <select name="category" id="geopoliticallyLocated" class="form-control font-weight-bolder editable_fields currentDetails" readonly>
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Yes</option>
                                    <option value="2">No</option>
                                </select>
                                </div>
                            </div>
                           
                            
                        <div class="col-sm-6">
                                <div class="form-group">
                                    <label class="col-md-6 font-weight-normal">SEN School:</label>
                                <select name="category" id="senSchool" class="form-control font-weight-bolder editable_fields currentDetails" readonly>
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Yes</option>
                                    <option value="2">No</option>
                                </select>
                                </div>
                             </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6">
                            <!-- text input -->
                                <div class="form-group hidden" id="coLocatedCurrent">
                                    <label class="col-md-12 font-weight-normal">Co-located with Parent School:</label>
                                <select name="category" id="coLoParent" class="form-control font-weight-bolder editable_fields currentDetails" readonly>
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Yes</option>
                                    <option value="2">No</option>
                                </select>
                                </div>
                            </div>
                             <div class="col-sm-6">
                                <div class="form-group hidden" id="parentSchoolCurrent">
                                    <label class="col-md-10 font-weight-normal">Parent School:</label>
                                <select name="category" id="parentSchool" class="form-control font-weight-bolder editable_fields currentDetails" readonly>
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Kabisa</option>
                                </select>
                                </div>
                             </div>
                        </div> 
                         
                    </div>
                    </div>
                </div>
            <!-- right column -->
                <div class="col-md-6">
                    <div class="card card-success">
                        <div class="card-header">
                            <h3 class="card-title">After Change</h3>
                        </div>

                        <div class="card-body">
                            <div class="row">
                            <div class="col-sm-6">
                            <!-- text input -->
                                <div class="form-group">
                                    <label class="col-md-5 font-weight-normal">Code:</label>
                                    <input type="text" class="form-control font-weight-bolder editable_fields currentDetails" id="afterChangeCode"/>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label class="col-md-5 font-weight-normal">Name:</label>
                                <input type="text" class="form-control font-weight-bolder editable_fields currentDetails" id="afterChangeName"/>
                                </div>
                             </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6">
                            <!-- text input -->
                                <div class="form-group">
                                    <label class="col-md-5 font-weight-normal">Category:</label>

                                <select name="category" id="afterChangeCategory" class="form-control font-weight-bolder editable_fields currentDetails">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Public</option>
                                    <option value="2">Private</option>
                                </select>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label class="col-md-5 font-weight-normal">Level:</label>
                                <select name="category" id="afterChangeLevel" class="form-control font-weight-bolder editable_fields currentDetails">
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
                        </div>

                        <div class="row">
                            <div class="col-sm-6">
                            <!-- text input -->
                                <div class="form-group">
                                    <label class="col-md-6 font-weight-normal">Dzongkhag:</label>
                                <select name="dzongkhag" id="afterChangeDzongkhag" class="form-control font-weight-bolder editable_fields currentDetails">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Thimphu</option>
                                    <option value="2">Paro</option>
                                    <option value="3">punakha</option>
                                    <option value="4">Lhuntse</option>
                                </select>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label class="col-md-5 font-weight-normal">Gewog:</label>
                                <select name="category" id="afterChangeGewog" class="form-control font-weight-bolder editable_fields currentDetails">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Kabisa</option>
                                    <option value="2">Babesa</option>
                                    <option value="3">Motithang</option>
                                    <option value="4">Chubachu</option>
                                </select>
                                </div>
                             </div>
                        </div>

                        <div class="row">
                            <div class="col-sm-6">
                            <!-- text input -->
                                <div class="form-group">
                                    <label class="col-md-5 font-weight-normal">Chiwog:</label>
                                <select name="category" id="afterChangeChiwog" class="form-control font-weight-bolder editable_fields currentDetails">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">olakha</option>
                                    <option value="2">chngbandu</option>
                                </select>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label class="col-md-8 font-weight-normal">Location Category:</label>
                                <select name="category" id="afterChangeLocationCategory" class="form-control font-weight-bolder editable_fields currentDetails">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Kabisa</option>
                                </select>
                                </div>
                             </div>
                        </div> 
                        <div class="row">
                            <div class="col-sm-6">
                            <!-- text input -->
                                <div class="form-group">
                                    <label class="col-md-10 font-weight-normal">Geopolitically Located:</label>
                                <select name="category" id="afterChangeGeopoliticallyLocated" class="form-control font-weight-bolder editable_fields currentDetails">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Yes</option>
                                    <option value="2">No</option>
                                </select>
                                </div>
                            </div>

                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label class="col-md-6 font-weight-normal">SEN School:</label>
                                <select name="category" id="afterChangeSenSchool" class="form-control font-weight-bolder editable_fields currentDetails">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Yes</option>
                                    <option value="2">No</option>
                                </select>
                                </div>
                             </div>

                            
                        </div>
                        <div class="row">
                            <div class="col-sm-6">
                            <!-- text input -->
                                <div class="form-group hidden" id="coLocatedChange">
                                    <label class="col-md-12 font-weight-normal">Co-located with Parent School:</label>
                                <select name="category" id="afterChangeCoLoParent" class="form-control font-weight-bolder editable_fields afterChange">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Yes</option>
                                    <option value="2">No</option>
                                </select>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group hidden" id="parentSchoolChange">
                                    <label class="col-md-10 font-weight-normal">Parent School:</label>
                                <select name="category" id="afterChangeParentSchool" class="form-control font-weight-bolder editable_fields afterChange">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Kabisa</option>
                                </select>
                                </div>
                             </div>
                            
                        </div> 
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- class and stream -->
    <section class="content">
        <div class="container-fluid">
            <div class="row">
            <!-- left column -->
                <div class="col-md-6">
                    <div class="card card-primary">
                        <!-- <div class="card-header">
                            <h3 class="card-title">Current Details</h3>
                        </div> -->

                    <div class="card-body">
                    <table id="bbb" class="table table-bordered table-striped">
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
                        <tbody id="table_data_populate">
                        </tbody>  
                    </table>
                    </div>
                    </div>
                </div>
            <!-- right column -->
                <div class="col-md-6">
                    <div class="card card-success">
                        <!-- <div class="card-header">
                            <h3 class="card-title">After Change</h3>
                        </div> -->

                        <div class="card-body">
                           
                        <table id="aaa" class="table table-bordered table-striped">
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
                        <tbody id="table_data_populate1">
                        </tbody>  
                        </table>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
           
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
            Swal.fire(
                    'Success!',
                    'Your Data has been successfully saved.',
                    'success',
                )
            // window.location.reload();
            $(".changeBasicDetaiList").show();
        },
        /** method to reset forms */
        reset: function(){
           window.location.reload();
        },

        /** method to get schools/ECR/ECCD details based on code */
        getSchoolDetails: function(){
        let organization = $("#organization").val();
        
        if(organization == 1){
                /** current details */
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
                $("#coLocatedCurrent").hide();
                $("#parentSchoolCurrent").hide();

                /** after change */
                $("#afterChangeCode").val("00020292"); 
                $("#afterChangeName").val("YangchenPhug HSS");
                $("#afterChangeCategory option:selected").text("Public");
                $("#afterChangeLevel option:selected").text("Higher Secondary School");
                $("#afterChangeDzongkhag option:selected").text("Thimphu");
                $("#afterChangeGewog option:selected").text("yhs");
                $("#afterChangeChiwog option:selected").text("Yhs");
                $("#afterChangeGeopoliticallyLocated option:selected").text("Yes");
                $("#afterChangeLocationCategory option:selected").text("Town");
                $("#afterChangeSenSchool option:selected").text("No");
                $("#coLocatedChange").hide();
                $("#parentSchoolChange").hide();
           }else{
                /** current details */
                $("#code").val("0022000"); 
                $("#name").val("ECCD1");
                $("#category option:selected").text("Public");
                $("#level option:selected").text("ECCD");
                $("#dzongkhag option:selected").text("Thimphu");
                $("#gewog option:selected").text("jungshina");
                $("#chiwog option:selected").text("hejo");
                $("#geopoliticallyLocated option:selected").text("Yes");
                $("#locationCategory option:selected").text("jungshina");
                $("#parentSchool option:selected").text("jungshina");
                $("#coLoParent option:selected").text("No");
                $("#senSchool option:selected").text("No");
                $("#coLocatedCurrent").show();
                $("#parentSchoolCurrent").show();

                /** after change */

                $("#afterChangeCode").val("0022000"); 
                $("#afterChangeName").val("ECCD1");
                $("#afterChangeCategory option:selected").text("Public");
                $("#afterChangeLevel option:selected").text("ECCD");
                $("#afterChangeDzongkhag option:selected").text("Thimphu");
                $("#afterChangeGewog option:selected").text("jungshina");
                $("#afterChangeChiwog option:selected").text("hejo");
                $("#afterChangeGeopoliticallyLocated option:selected").text("Yes");
                $("#afterChangeLocationCategory option:selected").text("jungshina");
                $(".afterChange").show();
                $("#afterChangeParentSchool option:selected").text("jungshina");
                $("#afterChangeCoLoParent option:selected").text("No");
                $("#afterChangeSenSchool option:selected").text("No");
                $("#coLocatedChange").show();
                $("#parentSchoolChange").show();
           }
        },

        getClassAndStream(organization){
            let table_data="";
            organization=$('#'+organization).val();
            
            if(organization=="1"){
                table_data+='<tr id="1_1" class="tdata">'+
                    '<td><input type="text" class="form-control" value="9" readonly/></td><td><input type="checkbox" class="" checked/></td> <td><input type="checkbox" name="role_head" /></td><td><input type="checkbox" name="role_head" /></td> <td><input type="checkbox" name="role_head" class=""/></td>'+
                '</tr>';
                table_data+='<tr id="1_1" class="tdata">'+
                    '<td><input type="text" class="form-control" value="10" readonly/></td><td><input type="checkbox" class="" checked/></td> <td><input type="checkbox" name="role_head" /></td><td><input type="checkbox" name="role_head" /></td> <td><input type="checkbox" name="role_head" class=""/></td>'+
                '</tr>';
                table_data+='<tr id="1_1" class="tdata">'+
                    '<td><input type="text" class="form-control" value="11" readonly/></td><td><input type="checkbox" class="" /></td> <td><input type="checkbox" name="role_head" checked/></td><td><input type="checkbox" name="role_head" checked/></td> <td><input type="checkbox" name="role_head" class="" checked/></td>'+
                '</tr>';
                table_data+='<tr id="1_1" class="tdata">'+
                    '<td><input type="text" class="form-control" value="12" readonly/></td><td><input type="checkbox" class="" /></td> <td><input type="checkbox" name="role_head" checked/></td><td><input type="checkbox" name="role_head" checked/></td> <td><input type="checkbox" name="role_head" class="" checked/></td>'+
                '</tr>';
                
            }
            
            $('#table_data_populate').html(table_data);
        },

        getClassAndStreamForAfterChange(organization){
            let table_data="";
            organization=$('#'+organization).val();
            
            if(organization=="1"){
                table_data+='<tr id="1_1" class="tdata">'+
                    '<td><input type="text" class="form-control" value="9"/></td><td><input type="checkbox" readonly class="" checked/></td> <td><input type="checkbox" name="role_head" /></td><td><input type="checkbox" name="role_head" /></td> <td><input type="checkbox" name="role_head" class=""/></td>'+
                '</tr>';
                table_data+='<tr id="1_1" class="tdata">'+
                    '<td><input type="text" class="form-control" value="10"/></td><td><input type="checkbox" class="" checked/></td> <td><input type="checkbox" name="role_head" /></td><td><input type="checkbox" name="role_head" /></td> <td><input type="checkbox" name="role_head" class=""/></td>'+
                '</tr>';
                table_data+='<tr id="1_1" class="tdata">'+
                    '<td><input type="text" class="form-control" value="11"/></td><td><input type="checkbox" class="" /></td> <td><input type="checkbox" name="role_head" checked/></td><td><input type="checkbox" name="role_head" checked/></td> <td><input type="checkbox" name="role_head" class="" checked/></td>'+
                '</tr>';
                table_data+='<tr id="1_1" class="tdata">'+
                    '<td><input type="text" class="form-control" value="12"/></td><td><input type="checkbox" class="" /></td> <td><input type="checkbox" name="role_head" checked/></td><td><input type="checkbox" name="role_head" checked/></td> <td><input type="checkbox" name="role_head" class="" checked/></td>'+
                '</tr>';
            }
            
            $('#table_data_populate1').html(table_data);
        },
    },


    mounted() {
    }
  
    
}
</script>