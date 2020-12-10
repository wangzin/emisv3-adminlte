<template>
    <div>
        <div class="card">
        <div class="card-header">
                <h3 class="card-title">Adding New External User</h3>
        </div>

         <form>
                <div class="card-body">                   

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
                            <label>Description:</label>
                            <input type="text" class="form-control editable_fields" id="description">
                        </div>

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
                    </div>  

                    <div class="form-group row">                        

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
           
                 
            </form>
        </div>
        <div class="row">
            <div class="col-md-9 col-md-offset-8">
                <input type="button" class="btn btn-primary" value="cancel" id="reset" @click="reset()"/>
                        &nbsp; &nbsp; &nbsp;
                <input type="button" class="btn btn-primary" value="Submit" id="submit" @click="save()"/>
                           
            </div>
        </div> 
    </div>
    
</template>

<script>
export default {
     methods:{     
        save: function(){
            alert("Data save successfully.");
            $(".editable_fields").val("");
        },

        reset: function(){
            $(".editable_fields").val("");
        }
  }
}
</script>