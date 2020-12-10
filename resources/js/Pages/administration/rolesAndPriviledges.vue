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
                            <label class="col-md-2">Name:</label>

                            <input type="text" class="form-control" id="name"/>
                        </div> 

                        <div class="col-md-4">
                            <label class="col-md-2">Description:</label>

                            <input type="text" class="form-control" id="description"/>
                        </div>  

                        <div class="col-md-4">
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
                    <legend>Filter By</legend>

                    <div class="form-group row">

                        <div class="col-md-4">
                            <label class="col-md-2">Module:</label>

                            <select name="role" id="roles" class="form-control editable_fields">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">ALL</option>
                                    <option value="2">Organization</option>
                                    <option value="3">Student</option>
                                    <option value="4">Staff</option>
                                    <option value="5">Admission</option>
                                    <option value="5">Result Processing</option>
                            </select>
                        </div>  

                        <div class="col-md-4">
                           <label class="col-md-2">Service:</label>

                            <select name="role" id="roles" class="form-control editable_fields">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">ALL</option>
                                    <option value="2">Student Registration</option>
                                    <option value="3">Administration process</option>
                                    <option value="4">Staff Registration</option>
                            </select>
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
                            <td>Admission Process</td>
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

                    </tbody>

                </table>
            </div> 
        </form>    
        <div class="row ">
            <div class="col-md-1 text-right">
                <input type="button" class="btn btn-primary" value="cancel" id="reset" @click="reset()"/>
            </div>
                               
            <div class="col-md-1 text-right">
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
    
}
</script>