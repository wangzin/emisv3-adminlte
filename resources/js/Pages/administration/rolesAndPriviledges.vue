<template>
    <div>
        <form>
            <!-- role setup form -->
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Roles and Priviledges</h3>
                </div>

            <div class="card-body">
                    <div class="form-group row">
                            <div class="col-md-4">
                                <label class="col-md-3 font-weight-normal">Name:<span class="text-danger">*</span></label>

                                <input type="text" class="form-control font-weight-bolder" id="name"/>
                            </div> 

                            <div class="col-md-4">
                                <label class="col-md-4 font-weight-normal">Description:</label>

                                <input type="text" class="form-control font-weight-bolder" id="description"/>
                            </div>                                          
                    </div> 

                    <div class="form-group row" v-for='(user, index) in users' :key="index">    
                        <div class="col-md-6" >
                                <label class="col-md-4 font-weight-normal">Assign Role:</label>

                            <select name="role" id="roles" class="form-control editable_fields font-weight-bolders" v-model="user.role">
                                <option value="">--- Please Select ---</option>
                                <option value="admin">Admin</option>
                                <option value="teacher">Teacher</option>
                                <option value="deo">DEO</option>
                                <option value="director">Director</option>
                            </select>
                        </div> 
                        <div class="col-md-5" style="padding:28px">
                            <input type="button" class="col-md-3 btn btn-flat btn-primary" value="Add More"
                            @click="addMore()" v-show="index == users.length-1"/>

                            <input type="button" class="col-md-3 btn btn-flat btn-danger" value="Remove"
                            @click="remove()" v-show="index || ( !index && users.length > 1)"/>
                        </div>
                        
                    </div>   
                </div>
            </div>

            <!-- permission form -->
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Filter By</h3>
                </div>
                    <div class="card-body">
                        <div class="form-group row">

                            <div class="col-md-4">
                                <label class="col-md-4 font-weight-normal">Module:<span class="text-danger">*</span></label>

                                <select name="module" id="module" class="form-control editable_fields font-weight-bolder">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">System Admin</option>
                                    <option value="2">Organization</option>
                                    <option value="3">Student</option>
                                    <option value="4">Staff</option>
                                    <option value="5">Admission</option>
                                    <option value="5">Result Processing</option>
                                </select>                                
                            </div>  
                        
                            <div class="col-md-4">
                            <label class="col-md-5 font-weight-normal">Screen/Page:</label>
                                <select name="role" id="process" class="form-control editable_fields font-weight-bolder">
                                    <option value="">--- Please Select ---</option>
                                    <option value="2">Student Registration</option>
                                    <option value="3">Administration process</option>
                                    <option value="4">Staff Registration</option>
                                </select>
                            </div>   

                            <div class="col-md-4" style="padding:25px">
                                <input type="button" id="view" class="col-md-3 btn btn-flat btn-primary"
                                @click="getScreenList()" value="View"/>
                            </div>                                                                  
                        </div>        

                    <table id="ddd" class="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Screen/Page</th>
                                <th>Organization</th>
                                <th>Dzongkhag</th>
                                <th>National</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>

                    <table id="rolesAndPriviledges" class="table table-bordered table-striped hidden">
                        <thead>
                            <tr>
                                <th>Screen/Page</th>
                                <th>Organization</th>
                                <th>Dzongkhag</th>
                                <th>National</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr id="record1" style="float-right;">
                                <td>User Management
                                    <tr><td>View</td></tr>
                                    <tr><td>Add</td></tr>
                                    <tr><td>Edit</td></tr>
                                    <tr><td>Delete</td></tr>
                                </td>
                                <td>dsdfsdf
                                    <tr><td><input type="radio" name ="permission" id="organization"/></td></tr>
                                    <tr><td><input type="radio" name ="permission" id="organization"/></td></tr>
                                    <tr><td><input type="radio" name ="permission" id="organization"/></td></tr>
                                    <tr><td><input type="radio" name ="permission" id="organization"/></td></tr>

                                </td>
                                <td>dsdfsdf
                                    <tr><td><input type="radio" name ="permission" id="organization"/></td></tr>
                                    <tr><td><input type="radio" name ="permission" id="organization"/></td></tr>
                                    <tr><td><input type="radio" name ="permission" id="organization"/></td></tr>
                                    <tr><td><input type="radio" name ="permission" id="organization"/></td></tr>

                                </td><td>dsdfsdf
                                    <tr><td><input type="radio" name ="permission" id="organization"/></td></tr>
                                    <tr><td><input type="radio" name ="permission" id="organization"/></td></tr>
                                    <tr><td><input type="radio" name ="permission" id="organization"/></td></tr>
                                    <tr><td><input type="radio" name ="permission" id="organization"/></td></tr>

                                </td>
                            </tr>
                            <tr id="record2">
                                <td>Roles And Priviledges
                                    <tr><td>View</td></tr>
                                    <tr><td>Add</td></tr>
                                    <tr><td>Edit</td></tr>
                                    <tr><td>Delete</td></tr>
                                </td>
                                <td>dsdfsdf
                                    <tr><td><input type="radio" name ="permission" id="organization"/></td></tr>
                                    <tr><td><input type="radio" name ="permission" id="organization"/></td></tr>
                                    <tr><td><input type="radio" name ="permission" id="organization"/></td></tr>
                                    <tr><td><input type="radio" name ="permission" id="organization"/></td></tr>

                                </td>
                                <td>dsdfsdf
                                    <tr><td><input type="radio" name ="permission" id="organization"/></td></tr>
                                    <tr><td><input type="radio" name ="permission" id="organization"/></td></tr>
                                    <tr><td><input type="radio" name ="permission" id="organization"/></td></tr>
                                    <tr><td><input type="radio" name ="permission" id="organization"/></td></tr>

                                </td>
                                <td>dsdfsdf
                                    <tr><td><input type="radio" name ="permission" id="organization"/></td></tr>
                                    <tr><td><input type="radio" name ="permission" id="organization"/></td></tr>
                                    <tr><td><input type="radio" name ="permission" id="organization"/></td></tr>
                                    <tr><td><input type="radio" name ="permission" id="organization"/></td></tr>

                                </td>
                            </tr>

                            <tr id="record3">
                                <td>WorkFlow Management
                                    <tr><td>View</td></tr>
                                    <tr><td>Add</td></tr>
                                    <tr><td>Edit</td></tr>
                                    <tr><td>Delete</td></tr>
                                </td>
                                <td>dsdfsdf
                                    <tr><td><input type="radio" name ="permission" id="organization"/></td></tr>
                                    <tr><td><input type="radio" name ="permission" id="organization"/></td></tr>
                                    <tr><td><input type="radio" name ="permission" id="organization"/></td></tr>
                                    <tr><td><input type="radio" name ="permission" id="organization"/></td></tr>

                                </td>
                                <td>dsdfsdf
                                    <tr><td><input type="radio" name ="permission" id="organization"/></td></tr>
                                    <tr><td><input type="radio" name ="permission" id="organization"/></td></tr>
                                    <tr><td><input type="radio" name ="permission" id="organization"/></td></tr>
                                    <tr><td><input type="radio" name ="permission" id="organization"/></td></tr>

                                </td>
                                <td>dsdfsdf
                                    <tr><td><input type="radio" name ="permission" id="organization"/></td></tr>
                                    <tr><td><input type="radio" name ="permission" id="organization"/></td></tr>
                                    <tr><td><input type="radio" name ="permission" id="organization"/></td></tr>
                                    <tr><td><input type="radio" name ="permission" id="organization"/></td></tr>

                                </td>
                            </tr>

                        </tbody>

                    </table>
                    
                </div>
            </div>
        </form>

        <div class="row">
            <div class="col-md-1" style="margin-left: 900px;">
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
          alert("Data saved successfully.");
          window.location.reload();
      },

    /**method to add more field */
      addMore: function(){
            this.users.push({role:''})
        },
    /** method to remove field */
        remove(index){    
             this.users.splice(index,1);             
        },

    /** method to get screen list based on module id */
        getScreenList: function(){
            $("#ddd").hide();
            $("#rolesAndPriviledges").show();
            // var dd = $('#module option:selected').text();
            // let tablestr="";

            //     tablestr = "<tr>" +
            //         "<td><input type='text' class='' id='employeeName' value='User Management' readonly></td>" +
            //         "<td><input type='radio' class='' id='role' >" +
            //         "<td><input type='radio' class=''></td>" +
            //         "<td><input type='radio' class='' id='level'></td>" +
            //         "</tr>";            
            //        $('#rolesAndPriviledges').append(tablestr); 
            
        }
  },

  mounted() {
    //   $("#rolesAndPriviledges").DataTable({
    //         "responsive": true,
    //         "autoWidth": true,
    //     }); 
        // $('.dataTables_filter').addClass('fa-pull-right');
        // $('#rolesAndPriviledges_paginate').addClass('fa-pull-right');

  }
    
}
</script>

