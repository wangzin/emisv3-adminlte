<template>
    <div>
        <div class="card">
        <div class="card-header">
                <h3 class="card-title">Adding External User</h3>
        </div>

         <form>
                <div class="card-body">                   

                    <div class="form-group row">
                        <div class="col-md-6">
                            <label class="font-weight-normal">Name:<span class="text-danger">*</span></label>
                            <input type="text" class="form-control editable_fields font-weight-bolder" id="name">
                        </div>

                        <div class="col-md-6">
                            <label class="font-weight-normal">Email:<span class="text-danger">*</span></label>
                            <input type="text" class="form-control editable_fields font-weight-bolder" id="email">      
                        </div>
                    </div>

                    <div class="form-group row">
                        <div class="col-md-6">
                            <label class="font-weight-normal">Description:</label>
                            <input type="text" class="form-control editable_fields font-weight-bolder" id="description">
                        </div>

                        <div class="col-md-6">
                            <label class="font-weight-normal">Organiztion Unit:<span class="text-danger">*</span></label>
                            <select name="role" id="roles" class="form-control editable_fields font-weight-bolder">
                                    <option value="">--- Please Select ---</option>
                                    <option value="admin">MOE</option>
                                    <option value="teacher">YHSS</option>
                                    <option value="deo">MHSS</option>
                            </select>      
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
            <div class="col-md-9 col-md-offset-8" style="margin-left: 400px;">
                <input type="button" class="btn btn-primary" value="Cancel" id="reset" style="margin-left: 400px;" @click="reset()"/>
                        &nbsp; &nbsp; &nbsp;
                <input type="button" class="btn btn-primary" value="Submit" id="submit" @click="save()"/>
                           
            </div>
        </div> 
    </div>
    
</template>

<script>
export default {
    data(){
        return{
            users:
            [{
                role:''
            }] 
        }
    },
     methods:{     
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