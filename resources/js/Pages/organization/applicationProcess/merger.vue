<template>
    <div>
        <div class="card">
             <div class="card-header">
                <h3 class="card-title">Merger</h3>
            </div>

            <form>
                <div class="card-body" >
                        <div class="form-group row">
                            <div class="col-md-5">
                            <label class="col-md-5 font-weight-normal">1st School/ECR/ECCD:<span class="text-danger">*</span></label>

                                <select name="category" id="category" class="form-control editable_fields font-weight-bolder">
                                        <option value="">--- Please Select ---</option>
                                        <option value="1">YHSS</option>
                                        <option value="2">MHSS</option>
                                        <option value="2">ECCD1</option>
                                </select>
                            </div>
                            <div class="col-md-5">
                            <label class="col-md-5 font-weight-normal">2nd School/ECR/ECCD:<span class="text-danger">*</span></label>

                                <select name="category" id="category" class="form-control editable_fields font-weight-bolder">
                                        <option value="">--- Please Select ---</option>
                                        <option value="1">YHSS</option>
                                        <option value="2">MHSS</option>
                                        <option value="2">ECCD1</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-5">
                            <label class="col-md-5 font-weight-normal">Year of Merger:</label>
                                <input type="text" class="form-control" id="yearOfBifuraction"/>
                            </div>                   
                        </div>
                    </div>

            </form>

        </div>
    </div>
</template>
<script>
export default {
    
}
</script>