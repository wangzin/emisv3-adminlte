<template>
    <div>
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Staff User</h3>
            </div>
            <form>
                <div class="card-body">
                    <div class="form-group row">
                        <div class="col-md-6">
                            <label>Employee ID:</label>
                            <input type="text" class="form-control editable_fields" id="employeeID" @change="employeeDetails()">
                        </div>                   
                    </div> 

                    <div class="form-group row">
                        <div class="col-md-6">
                            <label>Name:</label>
                            <input type="text" class="form-control editable_fields" id="name">
                        </div>

                        <div class="col-md-6">
                            <label>Email:</label>
                            <input type="text" class="form-control editable_fields" id="email">      
                        </div>
                    </div>

                    <div class="form-group row">
                        <div class="col-md-6">
                            <label>Position Title:</label>
                            <input type="text" class="form-control editable_fields" id="positionTitle">
                        </div>

                        <div class="col-md-6">
                            <label>Organization Unit:</label>
                            <input type="text" class="form-control editable_fields" id="organizationUnit">      
                        </div>
                    </div>  

                    <div class="form-group row">
                        <div class="col-md-6">
                            <label>Role:</label>
                            <select name="role" id="roles" class="form-control editable_fields">
                                    <option value="">--- Please Select ---</option>
                                    <option value="admin">Admin</option>
                                    <option value="teacher">Teacher</option>
                                    <option value="deo">DEO</option>
                                    <option value="director">Director</option>
                            </select>
                        </div>

                        <div class="col-md-6">
                            <label>Status:</label>
                            <div>
                                    <label class="line-height-1 blue">
                                        <input name="schoolcategory" value="Active" type="radio" class="editable_fields" />
                                        <span class="lbl">Active</span>
                                    </label>
                                    &nbsp;&nbsp;&nbsp;
                                    <label class="line-height-1 blue">
                                        <input name="schoolcategory" value="Inactive" type="radio" class="editable_fields" />
                                        <span class="lbl"> Inactive</span>
                                    </label>
                                </div>     
                        </div>
                    </div>          
                </div>
           
                <div class="clearfix form-actions">
                    <div class="col-md-9 col-md-offset-12">
                        <input type="button" class="btn btn-primary" value="Reset" id="reset" @click="reset()"/>
                                                &nbsp; &nbsp; &nbsp;
                        <input type="button" class="btn btn-primary" value="Submit" id="submit" @click="save()"/>

                            
                    </div>
                </div>  
            </form>

        </div>
    </div>
    
</template>

<script>
import Input from '../../../Jetstream/Input.vue'
export default {
  components: { Input },

  data(){
      return{

      }
  },

  methods:{
      employeeDetails: function(){
            $('#name').val('Ugyen Rinzin');
            $('#email').val('Ugyen@gmail.com');
            $('#organizationUnit').val('Yangchenphug HSS');
            $('#positionTitle').val('Teacher');

        },

        save: function(){
            alert("Data save successfully.");
        },

        reset: function(){
            $(".editable_fields").val("");
        }
  }
    
}
</script>