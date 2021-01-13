<template>
    <div>
        <div id="breadcrumbs" class="breadcrumbs ace-save-state">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li> 
                <li class="breadcrumb-item">Organization</li> 
                <li class="breadcrumb-item active">Location</li>
            </ol>
        </div>
        <form>
            <div class="card card-primary card-outline">
                <div class="card-header">
                    <h3 class="card-title">Location</h3>
                </div>
                <div class="card-body">
                    <div class="form-group row">
                            <div class="col-md-4">
                            <label class="col-md-6 font-weight-normal">School/ECR/ECCD:</label>

                                <select name="organization" id="organization" class="form-control editable_fields font-weight-bolder">
                                        <option value="">--- Please Select ---</option>
                                        <option value="1">YHSS</option>
                                        <option value="2">MHSS</option>
                                </select>
                            </div>
                            <div class="col-md-4">
                            <label class="col-md-5 font-weight-normal">Dzongkhag:</label>

                                <select name="dzongkhag" id="dzongkhag" class="form-control editable_fields font-weight-bolder">
                                        <option value="">--- Please Select ---</option>
                                        <option value="1">Thimphu</option>
                                        <option value="2">Paro</option>
                                </select>
                            </div> 
                            <div class="col-md-4">
                            <label class="col-md-5 font-weight-normal">Gewog:</label>

                                <select name="gewog" id="gewog" class="form-control editable_fields font-weight-bolder">
                                        <option value="">--- Please Select ---</option>
                                        <option value="1">Kawang</option>
                                        <option value="2">Chang</option>
                                </select>
                            </div> 
                                            
                    </div>

                    <div class="form-group row">
                            <div class="col-md-4">
                            <label class="col-md-5 font-weight-normal">Chiwog:</label>

                                <select name="chiwog" id="chiwog" class="form-control editable_fields font-weight-bolder">
                                        <option value="">--- Please Select ---</option>
                                        <option value="1">Changangkha</option>
                                        <option value="2">Olakha</option>
                                </select>
                            </div> 
                            <div class="col-md-4">
                            <label class="col-md-5 font-weight-normal">Thram No:</label>
                                <input type="text" class="form-control editable_fields" id="thramNo"/>
                            </div>
                            <div class="col-md-4">
                            <label class="col-md-5 font-weight-normal">Compound Area:</label>
                                <input type="text" class="form-control editable_fields" id="compoundArea"/>
                            </div>                  
                    </div>
                    <div class="form-group row">
                            
                            <div class="col-md-4">
                            <label class="col-md-5 font-weight-normal">Longitude:</label>
                                <input type="text" class="form-control editable_fields" id="latitude"/>
                            </div> 
                            <div class="col-md-4">
                            <label class="col-md-5 font-weight-normal">Latitude:</label>
                                <input type="text" class="form-control editable_fields" id="latitude"/>
                            </div> 
                            <div class="col-md-4">
                            <label class="col-md-5 font-weight-normal">Altitude:</label>
                                <input type="text" class="form-control editable_fields" id="latitude"/>
                            </div>                   
                    </div>

                    <div class="form-group row">
                              
                            <div class="col-md-4">
                            <label class="col-md-5 font-weight-normal">Land Ownership:</label>

                                <select name="landOwnerShip" id="landOwnerShip" class="form-control editable_fields font-weight-bolder">
                                        <option value="">--- Please Select ---</option>
                                        <option value="1">Public</option>
                                        <option value="2">Private</option>
                                </select>
                            </div>
                            <div class="col-md-4">
                            <label class="col-md-5 font-weight-normal">CID No. of Owner:</label>

                                <input type="text" class="form-control editable_fields" id="cidOfOwner"/>
                            </div>
                            <div class="col-md-4">
                            <label class="col-md-5 font-weight-normal">Name of Owner:</label>
                                <input type="text" class="form-control editable_fields" id="nameOwner"/>
                            </div>                  
                    </div>

                    <div class="form-group row">
                        <div class="col-md-4">
                            <label class="col-md-8 font-weight-normal">Compound Fencing:</label>
                            <select name="compundFencing" id="compundFencing" class="form-control editable_fields font-weight-bolder">
                                <option value="">--- Please Select ---</option>
                                <option value="1">Yes</option>
                                <option value="2">No</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label class="col-md-5 font-weight-normal">Entrance Gate:</label>
                            <select name="entranceGate" id="entranceGate" class="form-control editable_fields font-weight-bolder">
                                <option value="">--- Please Select ---</option>
                                <option value="1">Yes</option>
                                <option value="2">No</option>
                            </select>
                        </div>                   
                    </div>
                    
                    
                </div>
            </div>
            <div class="card card-success card-outline">
                <div class="card-header">
                    <h3 class="card-title">Attachment</h3>
                </div>
                <div class="card-body">
                    <table id="dynamic-table" class="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>File</th>
                                <th>Remark</th>                            
                            </tr>
                        </thead>
                        <tbody>
                            <tr id="record1" v-for='(user, index) in users' :key="index">
                                <td>
                                    <select name="title" id="title" class="form-control editable_fields" v-model="user.title">
                                        <option value="">--- Please Select ---</option>
                                        <option value="title1">Title1</option>
                                        <option value="title2">title2</option>
                                    </select>
                                </td>
                                <td>                                
                                    <div class="input-group">
                                    <div class="custom-file">
                                        <input type="file"  class="custom-file-input" id="file" >
                                        <label class="custom-file-label" for="file">Choose file</label>
                                    </div>
                      
                                    </div>
                                </td>
                                <td>                                
                                    <input type="text" name="remark" class="form-control" v-model="user.remark"/>
                                </td>
                            </tr> 
                            <tr>
                                <td colspan="3"> 
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
        return  {
            users:
            [{
                title:'',remark:''
            }]   
        }
    },

    methods:{
         addMore: function(){
            this.users.push({title:'',remark:''})
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