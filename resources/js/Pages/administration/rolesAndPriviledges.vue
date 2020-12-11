<template>
    <div>
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Roles and Priviledges</h3>
            </div>
        </div> 

        <form>
           <div class="card-body">
                <div class="form-group row">
                        <div class="col-md-4">
                            <label class="col-md-2">Name:<span class="required">*</span></label>

                            <input type="text" class="form-control" id="name"/>
                        </div> 

                        <div class="col-md-4">
                            <label class="col-md-2">Description:<span class="required">*</span></label>

                            <input type="text" class="form-control" id="description"/>
                        </div>                                          
                </div>    
                <div class="form-group row">    
                         <div class="col-md-8">
                             <label class="col-md-4">Managed by:</label>

                            <select name="role" id="roles" class="form-control editable_fields">
                                    <option value="">--- Please Select ---</option>
                                    <option value="admin">Admin</option>
                                    <option value="teacher">Teacher</option>
                                    <option value="deo">DEO</option>
                                    <option value="director">Director</option>
                            </select>
                        </div> 
                </div>   
               
                <fieldset>
                    <legend><b>Filter By</b></legend>

                    <div class="form-group row">

                        <div class="col-md-4">
                            <label class="col-md-2">Module:</label>

                            <select name="role" id="roles" class="form-control editable_fields">
                                    <!-- <option value="">--- Please Select ---</option> -->
                                    <option value="1">All</option>
                                    <option value="2">Organization</option>
                                    <option value="3">Student</option>
                                    <option value="4">Staff</option>
                                    <option value="5">Admission</option>
                                    <option value="5">Result Processing</option>
                            </select>
                        </div>  

                        <div class="col-md-4">
                           <label class="col-md-2">Service:</label>

                            <select name="role" id="process" class="form-control editable_fields">
                                    <option value="">--- Please Select ---</option>
                                    <!-- <option value="1">All</option> -->
                                    <option value="2">Student Registration</option>
                                    <option value="3">Administration process</option>
                                    <option value="4">Staff Registration</option>
                            </select>
                        </div>   

                        <div class="col-md-4" style="padding:25px">
                           <input type="button" id="view" class="col-md-3 btn btn-primary" @click="showData()" 
                           value="View"/>
                        </div>                                                                  
                    </div>          
                          
                </fieldset>
                

                <table id="rolesAndPriviledges" class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Screen/Pages</th>
                            <th>Individual</th>
                            <th>Organization</th>
                            <th>Dzongkhag</th>
                            <th>National</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr id="record1">
                            <td>Result Process</td>
                            <td><input type="radio" id="individual"/><label for="individual"></label></td>
                            <td><input type="radio" id="organization"/><label for="organization"></label></td>
                            <td><input type="radio" id="dzongkhag"/><label for="dzongkhag"></label></td>
                            <td><input type="radio" id="national"/><label for="national"></label></td>
                        </tr>
                        <tr id="record2">
                            <td>Student Registration</td>
                            <td><input type="radio" id="individual"/></td>
                            <td><input type="radio" id="organization"/></td>
                            <td><input type="radio" id="dzongkhag"/></td>
                            <td><input type="radio" id="national"/></td>
                        </tr>

                        <tr id="record3">
                            <td>Admission Process</td>
                            <td><input type="radio" id="individual"/></td>
                            <td><input type="radio" id="organization"/></td>
                            <td><input type="radio" id="dzongkhag"/></td>
                            <td><input type="radio" id="national"/></td>
                        </tr>

                    </tbody>

                </table>
            </div> 
        </form>    
        <div class="row">
            <div class="col-md-1" style="margin-left: 400px;">
                <input type="button" class="btn btn-primary" value="cancel" id="reset" @click="reset()"/>
            </div>
                               
            <div class="col-md-1">
                <input type="button" class="btn btn-primary" value="Submit" id="submit" @click="save()"/>                                                  
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

      }
  },

  methods: {

      /** method to show screen detail based on module */
      showData: function(){

            $("#record1").remove();
            $("#record2").remove();
            $("#record3").remove();

            let tablestr="";
            tablestr = "<tr>" +
                    "<td><input type='text' class='' id='employeeName' value='Admission Process' readonly></td>" +
                    "<td><input type='radio' class='' id='post'></td>" +
                    "<td><input type='radio' class='' id='role' >" +
                    "<td><input type='radio' class=''></td>" +
                    "<td><input type='radio' class='' id='level'></td>" +
                    "</tr>";            
            $('#rolesAndPriviledges').append(tablestr);     
                    
        },

    /** method to reset forms */
      reset: function(){
           window.location.reload();
      },

    /** method to save data. */
      save: function(){
          alert("Data saved successfully.");
          window.location.reload();
      }
  }
    
}
</script>

<style scoped>
.required
{
    color: red;
}
</style>