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

                                <select name="module" id="module" class="form-control editable_fields font-weight-bolder"
                                    @change="removeerror('module','module_err')">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">System Admin</option>
                                    <option value="2">Organization</option>
                                    <option value="3">Student</option>
                                    <option value="4">Staff</option>
                                    <option value="5">Admission</option>
                                    <option value="5">Result Processing</option>
                                </select> 
                                <span id="module_err" class="text-danger"></span>                               
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

                    <table id="aaa" class="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Screen</th>
                                <th></th>
                                <th>Organization</th>
                                <th>Dzongkhag</th>
                                <th>National</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>

                    
                    <table id="ddd" class="table table-bordered table-striped hidden">
                        <tr>
                            <th>Screen</th>
                            <th></th>
                            <th>Organization</th>
                            <th>Dzongkhag</th>
                            <th>National</th>
                        </tr>
                        <tr>
                            <th rowspan="4">User Management</th>
                            <th>Add</th>
                            <td><input type="radio" name="add" /></td>
                            <td><input type="radio" name="add" /></td>
                            <td><input type="radio" name="add" /></td>
                        </tr>
                        <tr>
                            <th>View</th>
                            <td><input type="radio" name="view" /></td>
                            <td><input type="radio" name="view" /></td>
                            <td><input type="radio" name="view" /></td>
                        </tr>
                         <tr>
                            <th>Edit</th>
                            <td><input type="radio" name="edit" /></td>
                            <td><input type="radio" name="edit" /></td>
                            <td><input type="radio" name="edit" /></td>
                        </tr>
                         <tr>
                            <th>Delete</th>
                            <td><input type="radio" name="delete" /></td>
                            <td><input type="radio" name="delete" /></td>
                            <td><input type="radio" name="delete" /></td>
                        </tr>
                        <tr>
                            <th rowspan="4">Roles And Priviledges</th>
                            <th>Add</th>
                            <td><input type="radio" name="add1" /></td>
                            <td><input type="radio" name="add1" /></td>
                            <td><input type="radio" name="add1" /></td>
                        </tr>
                        <tr>
                            <th>View</th>
                            <td><input type="radio" name="view1" /></td>
                            <td><input type="radio" name="view1" /></td>
                            <td><input type="radio" name="view1" /></td>
                        </tr>
                         <tr>
                            <th>Edit</th>
                            <td><input type="radio" name="edit1" /></td>
                            <td><input type="radio" name="edit1" /></td>
                            <td><input type="radio" name="edit1" /></td>
                        </tr>
                         <tr>
                            <th>Delete</th>
                            <td><input type="radio" name="delete1" /></td>
                            <td><input type="radio" name="delete1" /></td>
                            <td><input type="radio" name="delete1" /></td>
                        </tr>

                        <tr>
                            <th rowspan="4">WorkFow Management</th>
                            <th>Add</th>
                            <td><input type="radio" name="add2" /></td>
                            <td><input type="radio" name="add2" /></td>
                            <td><input type="radio" name="add2" /></td>
                        </tr>
                        <tr>
                            <th>View</th>
                            <td><input type="radio" name="view2" /></td>
                            <td><input type="radio" name="view2" /></td>
                            <td><input type="radio" name="view2" /></td>
                        </tr>
                         <tr>
                            <th>Edit</th>
                            <td><input type="radio" name="edit2" /></td>
                            <td><input type="radio" name="edit2" /></td>
                            <td><input type="radio" name="edit2" /></td>
                        </tr>
                         <tr>
                            <th>Delete</th>
                            <td><input type="radio" name="delete2" /></td>
                            <td><input type="radio" name="delete2" /></td>
                            <td><input type="radio" name="delete2" /></td>
                        </tr>
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
            let list = $("#module").val();
           if(list === ''){
                $('#module').addClass('is-invalid');
                $('#module_err').html('Please select the module'); 
                returntype=false;
           }else{
               if(list == 1){
                    $("#aaa").hide();
                    $("#ddd").show();
               }else{
                   $("#aaa").show();
                    $("#ddd").hide();
               }
                
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

