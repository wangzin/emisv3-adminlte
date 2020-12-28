<template>
    <div>
        <form>
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Bifurcation</h3>
                </div>

                    <div class="card-body" >
                        <div class="form-group row">
                            <div class="col-md-5">
                            <label class="col-md-5 font-weight-normal">School/ECR/ECCD:<span class="text-danger">*</span></label>

                                <select name="category" id="category" class="form-control editable_fields font-weight-bolder">
                                        <option value="">--- Please Select ---</option>
                                        <option value="1">YHSS</option>
                                        <option value="2">MHSS</option>
                                        <option value="2">ECCD1</option>
                                </select>
                            </div>
                            <div class="col-md-5">
                            <label class="col-md-5 font-weight-normal">Year of Bifurcation:</label>
                                <input type="text" class="form-control" id="yearOfBifuraction"/>
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