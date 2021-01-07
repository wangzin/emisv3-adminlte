<template>
    <div>
        <div id="breadcrumbs" class="breadcrumbs ace-save-state">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li> 
                <li class="breadcrumb-item">Organization</li> 
                <li class="breadcrumb-item active">Contact Details</li>
            </ol>
        </div>
        <form>
            <div class="card card-primary card-outline">
                <div class="card-header">
                    <h3 class="card-title">Contact Details</h3>
                </div>
                <div class="card-body">
                     <table id="dynamic-table" class="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Name/Description</th>
                                <th>Phone</th>
                                <th>Fax</th>
                                <th>Mobile</th>
                                <th>Email</th>                            
                            </tr>
                        </thead>
                        <tbody>
                            <tr id="record1" v-for='(user, index) in users' :key="index">
                                <td>
                                    <select name="names" id="names" class="form-control editable_fields" v-model="user.names">
                                        <option value="">--- Please Select ---</option>
                                        <option value="principalOffice">Principle office</option>
                                        <option value="generalOffice">General Office</option>
                                    </select>
                                </td>
                                <td>                                
                                    <input type="text" name="phone" class="form-control" v-model="user.phone"/>
                                </td>
                                <td>                                
                                    <input type="text" name="fax" class="form-control" v-model="user.fax"/>
                                </td>
                                <td>                                
                                    <input type="text" name="mobile" class="form-control" v-model="user.mobile"/>
                                </td>
                                <td>                                
                                    <input type="text" name="email" class="form-control" v-model="user.email"/>
                                </td>
                            </tr> 
                            <tr>
                                <td colspan="5"> 
                                    <button type="button" class="btn btn-flat btn-sm btn-primary" id="addMore" 
                                    @click="addMore()"><i class="fa fa-plus"></i> Add More</button>
                                    <button type="button" class="btn btn-flat btn-sm btn-danger" id="addMore" 
                                    @click="remove()"><i class="fa fa-trash"></i> Remove</button>
                                </td>
                            </tr>                                          
                        </tbody>
                    </table>
                </div>
            </div>
        </form>

        <!-- buttons -->
        <div class="card-footer">
            <div class="row form-group fa-pull-right">
                <div class="col-md-12">
                    <button type="button" class="btn btn-flat btn-warning" id="reset" @click="reset()"><i class="fa fa-ban"></i> Cancel</button>
                    <button type="button" class="btn btn-flat btn-primary" @click="save()"> <i class="fa fa-check"></i> Add</button>                                                
                </div>
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
                names:'',phone:'',fax:'',mobile:'',email:''
            }] 
        }
    },

    methods: {
        addMore: function(){
            this.users.push({names:'',phone:'',fax:'',mobile:'',email:''})
        },

        remove(index){    
             this.users.splice(index,1);             
        },

        /** method to reset forms */
        reset: function(){
            window.location.reload();
        },
        /** method to save data */
        save: function(){
            Swal.fire(
                    'Success!',
                    'Your Data has been successfully saved.',
                    'success',
                )
                $(".editable_fields").val("");
        },
    }
    
}
</script>