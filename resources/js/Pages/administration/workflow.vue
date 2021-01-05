<template>
    <div>
        <div id="breadcrumbs" class="breadcrumbs ace-save-state">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li> 
                <li class="breadcrumb-item">Administration</li> 
                <li class="breadcrumb-item active">Workflow Management</li>
            </ol>
        </div>
        <div class="card card-primary card-outline" id="newworkflow">
            <div class="card-header">
                <h3 class="card-title">Work Flow</h3>
                <button type="button" class="btn btn-success btn-flat btn-sm fa-pull-right" @click="showExsitingWorkflow()"><i class="fa fa-eye"></i> Add More List Workflow</button>
            </div>
            <form>
                <div class="card-body">
                    <div class="form-group row">
                        <label class="col-md-1 font-weight-normal">Process:<span class="text-danger">*</span></label>
                        <div class="col-md-6">
                            <select name="role" id="roles" class="form-control editable_fields font-weight-bolder">
                                <option value="">--- Please Select ---</option>
                                <option value="1">Admission</option>
                                <option value="2">New School Opening</option>
                                <option value="3">Approval Process</option>
                                <option value="4">Result</option>
                            </select>
                        </div>                   
                    </div>
                    <table id="dynamic-table" class="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Authority Type</th>
                                <th>Role</th>                           
                            </tr>
                        </thead>
                        <tbody>
                            <tr id="record1" v-for='(user, index) in users' :key="index">
                                <td>
                                    <select name="role" id="roles" class="form-control editable_fields" v-model="user.authority">
                                        <option value="">--- Please Select ---</option>
                                        <option value="Submitter">Submitter</option>
                                        <option value="verifier">Verifier</option>
                                        <option value="approver">Approver</option>
                                        <option value="director">Director</option>
                                    </select>
                                </td>
                                <td>                                
                                    <select name="role" id="roles" class="form-control editable_fields" v-model="user.role">
                                        <option value="">--- Please Select ---</option>
                                        <option value="admin">Admin</option>
                                        <option value="teacher">Teacher</option>
                                        <option value="deo">DEO</option>
                                        <option value="director">Director</option>
                                    </select>
                                </td>
                            </tr> 
                            <tr>
                                <td colspan="2"> 
                                    <button type="button" class="btn btn-flat btn-sm btn-primary" id="addMore" 
                                    @click="addMore()"><i class="fa fa-plus"></i> Add More</button>
                                    <button type="button" class="btn btn-flat btn-sm btn-danger" id="addMore" 
                                    @click="remove()"><i class="fa fa-trash"></i> Remove</button>
                                </td>
                            </tr>                                          
                        </tbody>
                    </table> 
                </div>
                <div class="card-footer">
                    <div class="row form-group fa-pull-right">
                        <div class="col-md-12">
                            <button type="button" class="btn btn-flat btn-warning" @click="reset()"> <i class="fa fa-ban"></i> Cancel</button>
                            <button type="button" class="btn btn-flat btn-primary" @click="reset()"> <i class="fa fa-edit"></i> Update</button>
                        </div>
                    </div>
                </div>
            </form>
       </div>
       <div class="card card-info card-outline" id="existingworkflow" style="display:none">
            <div class="card-header">
                <h3 class="card-title">Work Flow</h3>
            </div>
             <div class="card-body">
                <div class="form-group row">
                    <div class="col-12">
                        <table id="existingworkflow-table" class="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Process</th>
                                    <th>Workflow</th>                           
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> 1</td>
                                    <td>  Admission </td>
                                    <td> 
                                        Submitter (Teacher) -> Verifier (DEO) -> Approver (Director)                            
                                    </td>
                                </tr> 
                                 <tr>
                                    <td> 2</td>
                                    <td> New Opening</td>
                                    <td> 
                                        Submitter (DEO) -> Approver (Director)                            
                                    </td>
                                </tr> 
                                 <tr>
                                    <td>3</td>
                                    <td>  Annual Data Update </td>
                                    <td> 
                                        Submitter (Principal) -> Verifier (DEO) -> Approver (Director)                            
                                    </td>
                                </tr> 
                            </tbody>
                        </table> 
                    </div>
                </div>
             </div>
       </div>
    </div>
</template>
<script>
import Button from '../../Jetstream/Button.vue';
export default {
  components: { Button },

    data(){
        return  {
            users:
            [{
                authority:'',role:''
            }]   
        }
    },

    methods:{
        save: function(){
            alert("Data save successfully.");
            window.location.reload();

        },

        reset: function(){
            window.location.reload();
        },

        addMore: function(){
            this.users.push({authority:'',role:''})
        },

        remove(index){    
             this.users.splice(index,1);             
        },
        showExsitingWorkflow(){
            $('#newworkflow').hide();
            $('#existingworkflow').show();
        }
    },

    mounted() { }
    
}
</script>