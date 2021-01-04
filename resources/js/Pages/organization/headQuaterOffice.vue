<template>
    <div>
        <form>
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">HQ and Dzongkhag Office</h3>
                </div> 
                <div class="card-body">
                    <div class="form-group row" >    
                        <div class="col-md-6" >
                            <label class="col-md-7 font-weight-normal">Zest Working Agency Code:<span class="text-danger">*</span></label>

                            <input type="text" id="workingAgencyCode" class="form-control"/>
                        </div> 
                        <div class="col-md-5" style="padding:28px">
                            <input type="button" class="col-md-3 btn btn-flat btn-primary" value="Search" @click="getSchoolDeails"/>
                        </div>
                        
                    </div>

                    <div class="form-group row">
                        <div class="col-md-5">
                            <label class="col-md-5 font-weight-normal">Working Agency Code:</label>
                            <input type="text" class="form-control editable_fields" id="agencyCode" readonly/>
                        
                        </div>
                        <div class="col-md-5">
                            <label class="col-md-5 font-weight-normal">Agency Name:</label>
                            <input type="text" class="form-control editable_fields" id="agencyName" readonly/>
                        </div>                   
                    </div>

                    <div class="form-group row">
                        <div class="col-md-5">
                            <label class="col-md-5 font-weight-normal">Parent Agency:</label>
                            <input type="text" class="form-control editable_fields" id="parentAgency" readonly/>
                        
                        </div>
                        <div class="col-md-5">
                            <label class="col-md-5 font-weight-normal">Dzongkhag:</label>
                            <input type="text" class="form-control editable_fields" id="dzongkhag" readonly/>
                        </div>                   
                    </div>

                    <div class="form-group row">
                        <div class="col-md-5">
                            <label class="col-md-5 font-weight-normal">Gewog:</label>
                            <input type="text" class="form-control editable_fields" id="gewog" readonly/>
                        </div>
                    </div>
                </div>     
            </div>
        </form>
    </div>
</template>
<script>
export default {
    
}
</script>