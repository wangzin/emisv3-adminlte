<template>
    <div>
        <div id="breadcrumbs" class="breadcrumbs ace-save-state">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li> 
                <li class="breadcrumb-item">Organization</li> 
                <li class="breadcrumb-item active">HQ and Dzongkhag Office</li>
            </ol>
        </div>
        <form>
            <div class="card card-primary card-outline">
                <div class="card-header">
                    <h3 class="card-title">HQ and Dzongkhag Office</h3>
                </div> 
                <div class="card-body">
                    <div class="form-group row" >    
                        <div class="col-md-6" >
                            <label class="col-md-7 font-weight-normal">Zest Working Agency Code:<span class="text-danger">*</span></label>

                            <input type="text" id="workingAgencyCode" class="form-control editable_fields" @change="removeerror('workingAgencyCode','workingAgencyCode_error')"/>
                            <span id="workingAgencyCode_error" class="text-danger"></span>
                        </div> 
                        <div class="col-md-5" style="padding:30px">
                            <input type="button" class="col-md-3 btn btn-flat btn-primary" value="Search" @click="getOrgDetais()"/>
                        </div>
                        
                    </div>

                    <div class="form-group row">
                        <div class="col-md-4">
                            <label class="col-md-8 font-weight-normal">Working Agency Code:</label>
                            <input type="text" class="form-control editable_fields" id="agencyCode" readonly/>
                        
                        </div>
                        <div class="col-md-4">
                            <label class="col-md-5 font-weight-normal">Agency Name:</label>
                            <input type="text" class="form-control editable_fields" id="agencyName" readonly/>
                        </div> 
                        <div class="col-md-4">
                            <label class="col-md-5 font-weight-normal">Parent Agency:</label>
                            <input type="text" class="form-control editable_fields" id="parentAgency" readonly/>
                        
                        </div>                  
                    </div>

                    <div class="form-group row">
                        <div class="col-md-4">
                            <label class="col-md-5 font-weight-normal">Dzongkhag:</label>
                            <input type="text" class="form-control editable_fields" id="dzongkhag" readonly/>
                        </div>   
                        <div class="col-md-4">
                            <label class="col-md-5 font-weight-normal">Gewog:</label>
                            <input type="text" class="form-control editable_fields" id="gewog" readonly/>
                        </div>                
                    </div>
                    
                </div>     
            </div>

            <div class="card">
                <div class="card-body">
                    <div class="form-group" >    
                        <div class="col-md-5" >
                            <label class="col-md-7 font-weight-normal">Agency Type:</label>
                            <select name="agencyType" id="agencyType" class="form-control editable_fields font-weight-bolder">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Agency in HQ</option>
                                    <option value="2">Dzongkhag Education Office</option>
                            </select>
                        </div> 
                        
                    </div>
                </div>     
            </div>
        </form>
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

        }
    },

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
        /** method to get HQ and Dzongkhag Office based on code */
        getOrgDetais: function(){
            if($('#workingAgencyCode').val()==""){
                $('#workingAgencyCode_error').html('Please enter zest working agency code.');
                $('#workingAgencyCode').focus();
                $('#workingAgencyCode').removeClass('is-invalid');
            }else{
                $("#agencyCode").val(2222);
                $("#workingAgencyCode").val(2222);
                $("#agencyName").val("SEN Department");
                $("#parentAgency").val("MOE");
                $("#dzongkhag").val("Thimphu");
                $("#gewog").val("Chang");
            }
        },

        removeerror(fieldid,errid){
            if($('#'+fieldid).val()!=""){
                $('#'+fieldid).removeClass('is-invalid');
                $('#'+errid).html(''); 
            }
        },
    }
    
}
</script>