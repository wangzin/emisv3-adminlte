<template>
<div>
    <div id="breadcrumbs" class="breadcrumbs ace-save-state">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li> 
            <li class="breadcrumb-item">Organization</li> 
            <li class="breadcrumb-item active">Connectivity</li>
        </ol>
    </div>
    <form>
        <div class="card card-primary card-outline">
            <div class="card-header">
                <h3 class="card-title">Connectivity</h3>
            </div>
            <div class="card-body">
                 <div class="form-group row">
                            
                    <div class="col-md-4">
                        <label class="col-md-5 font-weight-normal">Approach Road:</label>
                        <select name="approachRoad" id="approachRoad" class="form-control editable_fields font-weight-bolder">
                            <option value="">--- Please Select ---</option>
                            <option value="1">Paved</option>
                            <option value="2">Unpaved</option>
                            <option value="3">No Road</option>
                        </select>
                    </div> 
                     <div class="col-md-4">
                        <label class="col-md-5 font-weight-normal">Electricity Source:</label>
                        <select name="electricitySource" id="electricitySource" class="form-control editable_fields font-weight-bolder" @change="electricitySourceIsGrid()">
                            <option value="">--- Please Select ---</option>
                            <option value="1">Grid</option>
                            <option value="2">Solar</option>
                            <option value="3">No electricity</option>
                        </select>
                    </div> 
                                      
                </div>
                <div class="form-group row">
                    <div class="col-md-4">
                        <label class="col-md-10 font-weight-normal">Telephone Service provider:</label>
                        <select name="telephone" id="telephone" class="form-control editable_fields font-weight-bolder">
                            <option value="">--- Please Select ---</option>
                            <option value="1">No telephone connection</option>
                            <option value="2">BT</option>
                            <option value="3">TCell</option>
                        </select>
                    </div> 
                     <div class="col-md-4">
                        <label class="col-md-10 font-weight-normal">Internet Service provider:</label>
                        <select name="internet" id="internet" class="form-control editable_fields font-weight-bolder">
                            <option value="">--- Please Select ---</option>
                            <option value="1">No internet connection</option>
                            <option value="2">BT</option>
                            <option value="3">TCell</option>
                        </select>
                    </div> 
                                      
                </div>

                 <div class="form-group row">
                    <div class="col-md-3">
                     <label class="col-md-10 font-weight-normal">Distance from Road Head:</label>

                        <input type="text" class="col-md-4 form-control"/>
                    </div>

                    <div class="col-md-4">
                    <label class="col-md-8 font-weight-normal">Days/Hrs from Road Head:</label>

                        <input type="text" class="col-md-4 form-control"/>
                    </div>
                    
                </div>

                <div class="form-group row">
                    <div class="col-md-4 hidden grid">
                        <label class="col-md-10 font-weight-normal">Eectricity Machine Suppy:</label>
                        <select name="telephone" id="telephone" class="form-control editable_fields font-weight-bolder">
                            <option value="">--- Please Select ---</option>
                            <option value="1">Underground cable</option>
                            <option value="2">Overhead cable</option>
                        </select>
                    </div> 
                     <div class="col-md-4 hidden grid">
                        <label class="col-md-10 font-weight-normal">Electrical substation:</label>
                        <select name="internet" id="internet" class="form-control editable_fields font-weight-bolder">
                            <option value="">--- Please Select ---</option>
                            <option value="1">Yes</option>
                            <option value="3">TCell</option>
                        </select>
                    </div> 
                                      
                </div>
            </div>
        </div>

         <div class="card card-success card-outline">
            <div class="card-header">
                <h3 class="card-title">Website and Social Media Links</h3>
            </div>
            <div class="card-body">

                <table id="dynamic-table" class="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>URL(link)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr id="record1">
                                <td>
                                    <input type="text" class="form-control" value="Facebook" readonly/>
                                </td>
                                <td>                                
                                    <input type="text" class="form-control" />
                                </td>
                            </tr>
                            <tr id="record2">
                                <td>
                                    <input type="text" class="form-control" value="Website" readonly/>
                                </td>
                                <td>                                
                                    <input type="text" class="form-control" />
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
import Input from '../../Jetstream/Input.vue'
export default {
  components: { Input },
    
    methods: {
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

        electricitySourceIsGrid: function(){
            let electricitySource = $("#electricitySource").val();
            if(electricitySource == 1){
                $(".grid").show();
            }else{
                $(".grid").hide();
            }
        }
    }
}
</script>