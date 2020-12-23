<template>
    <div>
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Work Flow</h3>
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
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr id="record1" v-for='(user, index) in users' :key="index">
                            <td>
                                <select name="role" id="roles" class="form-control editable_fields" v-model="user.authority">
                                    <option value="">--- Please Select ---</option>
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

                            <td width="3%">
                                <input type="button" class="btn btn-flat btn-primary" value="Add More" id="addMore" 
                                @click="addMore()" v-show="index == users.length-1">
                            </td>
                            <td width="3%">
                                <input type="button" class="btn btn-danger" value="Remove" id="addMore" 
                                @click="remove()" v-show="index || ( !index && users.length > 1)">
                            </td>
                        </tr>                                           
                        
                    </tbody>
                </table> 
                 
            </div>
            
        </form>
       </div>

            <div class="row">
                <div class="col-md-9 col-md-offset-8" style="margin-left: 850px;">
                    <input type="button" class="btn btn-flat btn-primary" value="Cancel" id="reset"  @click="reset()"/>
                            &nbsp; &nbsp; &nbsp;
                    <input type="button" class="btn btn-flat btn-primary" value="Submit" id="submit" @click="save()"/>
                            
                </div>
            </div> 
    </div>
</template>

<script>
export default {

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
        }
    },

    mounted() {
      $("#dynamic-table").DataTable({
            "responsive": true,
            "autoWidth": true,
        }); 
        $('.dataTables_filter').addClass('fa-pull-right');
        $('#dynamic-table_paginate').addClass('fa-pull-right');
  }
    
}
</script>