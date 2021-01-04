<template>
    <div>
        <div id="breadcrumbs" class="breadcrumbs ace-save-state">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li> 
                <li class="breadcrumb-item">Administration</li> 
                <li class="breadcrumb-item active">Role & Privileges</li>
            </ol>
        </div>
        <form>
            <div class="card card-primary card-outline">
                <div class="card-header">
                    <h3 class="card-title">Roles and Priviledges</h3>
                </div>
                <div class="card-body">
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label class="font-weight-normal">Name:<span class="text-danger">*</span></label>
                            <input type="text" @change="removeerror('role_name','role_name_error')" class="form-control font-weight-bolder" id="role_name"/>
                            <span id="role_name_error" class="text-danger"></span>
                        </div> 
                        <div class="col-md-8">
                            <label class="font-weight-normal">Description:</label>
                            <textarea class="form-control font-weight-bolder" id="description"></textarea>
                        </div>                                          
                    </div> 

                    <div class="form-group row" v-for='(user, index) in users' :key="index">    
                        <div class="col-4">
                            <label class="font-weight-normal">Assign Role:</label>
                            <select name="role" id="roles" class="form-control editable_fields font-weight-bolders" v-model="user.role">
                                <option value="">--- Please Select ---</option>
                                <option value="admin">Admin</option>
                                <option value="teacher">Principal</option>
                                <option value="teacher">Teacher</option>
                                <option value="deo">DEO</option>
                                <option value="admin">ADEO</option>
                                <option value="director">Director</option>
                            </select>
                        </div> 
                    </div>  
                    <div class="form-group row">
                        <div class="col-4">
                            <button type="button" class=" btn btn-flat btn-sm btn-primary"
                            @click="addMore()"><i class="fa fa-plus"></i> Add More</button>
                            <button type="button" class=" btn btn-flat btn-sm btn-danger" value="Remove"
                            @click="remove()" v-show="index || ( !index && users.length > 1)"><i class="fa fa-trash"></i> Remove</button>
                        </div>
                    </div>
                </div>
            </div> 

            <div class="card card-success card-outline">
                <div class="card-header">
                    <h3 class="card-title">Filter By</h3>
                </div>
                <div class="card-body">
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label class="col-md-4 font-weight-normal">Module:<span class="text-danger">*</span></label>
                            <select name="module" id="module" class="form-control editable_fields font-weight-bolder"
                                @change="removeerror('module','module_err'),getsubmodule('module')">
                                <option value="">--- Please Select ---</option>
                                <option value="1">System Admin</option>
                                <option value="2">Organization</option>
                            </select> 
                            <span id="module_err" class="text-danger"></span>                               
                        </div>  
                    
                        <div class="col-md-4">
                            <label class="col-md-5 font-weight-normal">Screen/Page:</label>
                            <select name="role" id="process" class="form-control editable_fields font-weight-bolder">
                                <option value="">--- Please Select ---</option>
                            </select>
                        </div>   
                        <div class="col-md-4" style="padding:35px">
                            <button type="button" id="view" class="col-md-3 btn btn-sm btn-flat btn-primary"
                            @click="getScreenList()"><i class="fa fa-eye"></i> List </button>
                        </div>                                                                  
                    </div> 
                    <table id="aaa" class="table table-bordered table-striped">
                        <thead>
                            <tr rowspan="2"> 
                                <th>Page</th>
                                <th></th>
                                <th colspan="3">Access Level</th>
                            </tr>
                            <tr>
                                <th></th>
                                <th>Privileges</th>
                                <th>Organization</th>
                                <th>Dzongkhag</th>
                                <th>National</th>
                            </tr>
                        </thead>
                        <tbody id="table_data_populate">
                        </tbody>  
                    </table>       
                </div>
                <div class="card-footer">
                    <div class="row form-group fa-pull-right">
                        <div class="col-md-12">
                            <button type="button" class="btn btn-flat btn-warning" id="reset" @click="reset()"><i class="fa fa-ban"></i> Cancel</button>
                            <button type="button" class="btn btn-flat btn-primary" id="submit" @click="save()"><i class="fa fa-edit"></i>Update</button>                                                
                        </div>
                    </div> 
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import Input from '../../Jetstream/Input.vue'
import Label from '../../Jetstream/Label.vue'
export default {
  components: { Input, Label },

  data(){
      return{
          users:
            [{
                role:''
            }]   
      }
  },

  methods: {
    /** method to reset forms */
      reset: function(){
           window.location.reload();
      },

    /** method to save data. */
      save: function(){
          if(this.validate()){
               Swal.fire(
                    'Success!',
                    'Your Data has been successfully saved.',
                    'success',
                )
          }
      },

      validate(){
          let validate =true;
          if($('#role_name').val()==""){
            $('#role_name').addClass('is-invalid');
            $('#role_name').focus();
            $('#role_name_error').html('Please mention role name'); 
            validate=false;
          }
          return validate;
      },

    /**method to add more field */
      addMore: function(){
            this.users.push({role:''})
        },
    /** method to remove field */
        remove(index){    
             this.users.splice(index,1);             
        },
        assignscreens(moduleid,screenid){
            let data_return="";
            for(let i=0;i<3;i++){
                let action="";
                let radio_name="";
                if(i===0){
                    action="Add/New";
                    radio_name="add";
                }
                if(i===1){
                    action="Edit/Delete";
                    radio_name="edit";
                }
                if(i===2){
                    action="View/Print";
                    radio_name="view";
                }
                data_return+='<tr id="'+moduleid+'_'+screenid+'_'+i+'" class="tdata"><td></td><td>'+action+'</td>'+
                '<td><input type="radio" name="'+radio_name+'_'+moduleid+'_'+screenid+'" class="org'+moduleid+'_'+screenid+'"/></td>'+
                '<td><input type="radio" name="'+radio_name+'_'+moduleid+'_'+screenid+'" class="dzo'+moduleid+'_'+screenid+'"/></td> '+
                '<td><input type="radio" name="'+radio_name+'_'+moduleid+'_'+screenid+'" class="nation_'+moduleid+'_'+screenid+'"/></td></tr>';
            }
            return data_return;
        },
        check_all_data(type,moduleid){
            alert(type);
            if(type=='orgdata'){
                $('.org_'+moduleid).prop('checked',true);
            }
        },
        getsubmodule(moduleid){
            let innerhtml='<option value="">--- Please Select ---</option>';
            let table_data="";
            moduleid=$('#'+moduleid).val();
            //let check_org_data="check_all_data('orgdata','"+moduleid+"')";
            table_data+='<tr id="module'+moduleid+'">'+
                    '<td><b>'+$("#module option:selected").text()+'</b></td><td></td><td><input type="radio"  name="module_head" /> Check All</td> <td><input type="radio" name="module_head" />Check All</td> <td><input type="radio" name="module_head" />Check All</td></tr>';
            if(moduleid=="1"){
                innerhtml+='<option value="1">Role & Privileges Management</option><option value="2">Workflow Management</option><option value="3">User Management</option>';
                table_data+='<tr id="1_1" class="tdata">'+
                    '<td>Role & Privileges Management</td><td></td><td><input type="radio" name="role_head" class="org_'+moduleid+'" /></td> <td><input type="radio" name="role_head" class="dzo_'+moduleid+'"/></td> <td><input type="radio" name="role_head" class="nation_'+moduleid+'"/></td>'+
                '</tr>'+this.assignscreens(moduleid,1);
                table_data+='<tr id="1_2" class="tdata">'+
                    '<td>Workflow Management</td><td></td><td><input type="radio" name="workflow_head" class="org_'+moduleid+'"/></td> <td><input type="radio" name="workflow_head" class="dzo_'+moduleid+'"/></td> <td><input type="radio" name="workflow_head" class="nation_'+moduleid+'"/></td>'+
                '</tr>'+this.assignscreens(moduleid,2);
                table_data+='<tr id="1_3" class="tdata">'+
                    '<td>User Management</td><td></td><td><input type="radio" name="user_head" class="org_'+moduleid+'"/></td> <td><input type="radio" name="user_head" class="dzo_'+moduleid+'"/></td> <td><input type="radio" name="user_head" class="nation_'+moduleid+'"/></td>'+
                '</tr>'+this.assignscreens(moduleid,3);
            }
            if(moduleid=="2"){
                innerhtml+='<option value="1">New Establishment</option><option value="2">Bifurcation </option><option value="3">Merger </option><option value="4">Closure </option><option value="5">Annual data update </option><option value="6">6.	Change of basic details </option>';

                table_data+='<tr id="2_1" class="tdata">'+
                    '<td>New Establishment</td><td></td><td><input type="radio" name="org_head" /></td> <td><input type="radio" name="org_head" /></td> <td><input type="radio" name="org_head" /></td>'+
                '</tr>'+this.assignscreens(moduleid,1);
                table_data+='<tr id="2_2" class="tdata">'+
                    '<td>Bifurcation</td><td></td><td><input type="radio" name="Bifurcation_head" /></td> <td><input type="radio" name="Bifurcation_head" /></td> <td><input type="radio" name="Bifurcation_head" /></td>'+
                '</tr>'+this.assignscreens(moduleid,2);
                table_data+='<tr id="2_3" class="tdata">'+
                    '<td>Merger</td><td></td><td><input type="radio" name="Merger_head" /></td> <td><input type="radio" name="Merger_head" /></td> <td><input type="radio" name="Merger_head" /></td>'+
                '</tr>'+this.assignscreens(moduleid,3);
                table_data+='<tr id="2_4" class="tdata">'+
                    '<td>Closure</td><td></td><td><input type="radio" name="Closure_head" /></td> <td><input type="radio" name="Closure_head" /></td> <td><input type="radio" name="Closure_head" /></td>'+
                '</tr>'+this.assignscreens(moduleid,4);
                table_data+='<tr id="2_5" class="tdata">'+
                    '<td>Annual data update</td><td></td><td><input type="radio" name="annual_data_head" /></td> <td><input type="radio" name="annual_data_head" /></td> <td><input type="radio" name="annual_data_head" /></td>'+
                '</tr>'+this.assignscreens(moduleid,5);
                table_data+='<tr id="2_6" class="tdata">'+
                    '<td> Change of basic details</td><td></td><td><input type="radio" name="change_basic_head" /></td> <td><input type="radio" name="change_basic_head" /></td> <td><input type="radio" name="change_basic_head" /></td>'+
                '</tr>'+this.assignscreens(moduleid,6);
            }
            $('#process').html(innerhtml);
            $('#table_data_populate').html(table_data);
        },
    /** method to get screen list based on module id */
        getScreenList: function(){
            let list = $("#process").val();
            if(list!=""){
                $('.tdata').hide();
                let modu = $("#module").val();
                $('#'+modu+'_'+list).show();
                $('#'+modu+'_'+list+'_0').show();
                $('#'+modu+'_'+list+'_1').show();
                $('#'+modu+'_'+list+'_2').show();
            }
        },

        removeerror(fieldid,errid){
            if($('#'+fieldid).val()!=""){
                $('#'+fieldid).removeClass('is-invalid');
                $('#'+errid).html(''); 
            }
        }
  },

  mounted() {
    

  }
    
}
</script>

