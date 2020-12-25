<template>
    <div>
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Adding New Staff/Internal User</h3>
            </div>
            <form>
                <div class="card-body">
                    <div class="form-group row">
                        <label class="col-md-2 font-weight-normal">Employee ID:<span class="text-danger">*</span></label>
                        <div class="col-md-6">
                            <input type="text" class="form-control editable_fields font-weight-bolder" id="employeeID" @change="employeeDetails()">
                        </div>     
                        <span class="text-danger" id="employeeID_err"></span>              
                    </div> 

                    <div class="form-group row">
                        <div class="col-md-6">
                            <label class="font-weight-normal">Name:</label>
                            <input type="text" class="form-control editable_fields" id="name" readonly>
                        </div>

                        <div class="col-md-6">
                            <label class="font-weight-normal">Email:</label>
                            <input type="text" class="form-control editable_fields" id="email" readonly>      
                        </div>
                    </div>

                    <div class="form-group row">
                        <div class="col-md-6">
                            <label class="font-weight-normal">Position Title:</label>
                            <input type="text" class="form-control editable_fields" id="positionTitle" readonly>
                        </div>

                        <div class="col-md-6">
                            <label class="font-weight-normal">Organization Unit:</label>
                            <input type="text" class="form-control editable_fields" id="organizationUnit" readonly>      
                        </div>
                    </div>  

                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12" id="schoolcat"> 
                                        <label class="font-weight-normal">Status</label>
                                        <div class="clearfix">
                                            <div class="icheck-primary d-inline">
                                                <input type="radio" id="radioPrimary1" name="status" checked>
                                                <label for="radioPrimary1">
                                                    Active
                                                </label>
                                            </div>
                                            <div class="icheck-primary d-inline pl-4">
                                                <input type="radio" id="radioPrimary2" name="status">
                                                <label for="radioPrimary2">
                                                    Inactive
                                                </label>
                                            </div>
                                        </div>
                    </div> 

                     <div class="form-group row" v-for='(user, index) in users' :key="index">    
                        <div class="col-md-6" >
                                <label class="col-md-4 font-weight-normal">Role:<span class="text-danger">*</span></label>

                            <select name="role" id="roles" class="form-control editable_fields font-weight-bolder" v-model="user.role">
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
           
                 
            </form>

        </div>
        <div class="row">
                    <div class="col-md-9" style="margin-left: 400px;">
                        <input type="button" style="margin-left: 400px;" class="btn btn-flat btn-primary" value="Cancel" id="reset" @click="reset()"/>
                                                &nbsp; &nbsp; &nbsp;
                        <input type="button" class="btn btn-flat btn-primary" value="Submit" id="submit" @click="save()"/>
                           
                    </div>
                </div> 
    </div>
    
</template>

<script>
import Input from '../../../Jetstream/Input.vue'
export default {
  components: { Input },

  data(){
      return{
          users:
            [{
                role:''
            }] 
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
            $(".editable_fields").val("");
        },

        reset: function(){
            $(".editable_fields").val("");
        },

         /**method to add more field */
      addMore: function(){
            this.users.push({role:''})
        },
    /** method to remove field */
        remove(index){    
             this.users.splice(index,1);             
        },
  }
    
}
</script>