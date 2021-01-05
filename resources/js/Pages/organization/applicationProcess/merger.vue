<template>
    <div>
        <form>
        <!-- merger card -->
        <div class="card">
             <div class="card-header">
                <h3 class="card-title">Merger</h3>
            </div>

                <div class="card-body" >
                        <div class="form-group row">
                            <div class="col-md-5">
                            <label class="col-md-7 font-weight-normal">1st School/ECR/ECCD:<span class="text-danger">*</span></label>

                                <select name="organization1" id="organization1" class="form-control editable_fields font-weight-bolder" @change="getSchoolDetails()">
                                        <option value="">--- Please Select ---</option>
                                        <option value="1">YHSS</option>
                                </select>
                            </div>
                            <div class="col-md-5">
                            <label class="col-md-7 font-weight-normal">2nd School/ECR/ECCD:<span class="text-danger">*</span></label>

                                <select name="organization2" id="organization2" class="form-control editable_fields font-weight-bolder" @change="getSchool2Details()">
                                        <option value="">--- Please Select ---</option>
                                        <option value="1">MHSS</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-5">
                            <label class="col-md-5 font-weight-normal">Year of Merger:</label>
                                <input type="text" class="form-control" id="yearOfMerger"/>
                            </div>                   
                        </div>
                </div>
        </div>

        <!-- section -->
        <section class="content">
        <div class="container-fluid">
            <div class="row">
            <!-- left column -->
            <div class="col-md-6">
                <div class="card card-primary">
                <div class="card-header">
                    <h3 class="card-title">Detail of School 1</h3>
                </div>

                    <div class="card-body">
                    <div class="form-group">
                        <label for="code">Code:</label>
                        <input type="code" class="form-control" id="code" readonly>
                    </div>
                    <div class="form-group">
                        <label for="name">Name:</label>
                        <input type="name" class="form-control" id="name" readonly>
                    </div>
                    
                    </div>
                </div>

            </div>
            <!-- right column -->
            <div class="col-md-6">
                <div class="card card-success">
                <div class="card-header">
                    <h3 class="card-title">Detail of School 2</h3>
                </div>

                <div class="card-body">
                    <div class="form-group">
                        <label for="code">Code:</label>
                        <input type="code" class="form-control" id="code2" readonly>
                    </div>
                    <div class="form-group">
                        <label for="name">Name:</label>
                        <input type="name" class="form-control" id="name2" readonly>
                    </div>
                </div>

                </div>
            </div>
            </div>
        </div>
        </section>

        <!-- merge school card -->
        <div class="card">
             <div class="card-header">
                <h3 class="card-title">Merge the above schools</h3>
            </div>

                <div class="card-body" >
                    <div class="form-group row">
                            <div class="col-md-5">
                            <label class="col-md-5 font-weight-normal">Code:<span class="text-danger">*</span></label>

                                <input type="text" class="form-control font-weight-bolder editable_fields" id="code"/>
                            </div>    
                            <div class="col-md-5">
                            <label class="col-md-5 font-weight-normal">Name:<span class="text-danger">*</span></label>

                                <input type="text" class="form-control font-weight-bolder editable_fields" id="name"/>
                            </div>                                           
                        </div>
                </div>
        </div>
    </form>
        <!-- button -->
        <div class="row">
            <div class="col-md-1" style="margin-left: 800px;">
                <input type="button" class="btn btn-flat btn-primary" value="Cancel" id="reset" @click="reset()"/>
            </div>
                               
            <div class="col-md-1">
                <input type="button" class="btn btn-flat btn-primary" value="Submit" id="submit" @click="save()"/>                                                  
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        /** method to save data */
        save: function(){
            alert("data save successfully.");
            window.location.reload();
        },
        /** method to reset forms */
        reset: function(){
           window.location.reload();
        },

        /** method to get schools/ECR/ECCD details based on code */
        getSchoolDetails: function(){
                $("#code").val("00020292"); 
                $("#name").val("YangchenPhug HSS");
        },

        /** method to get schools/ECR/ECCD details based on code */
        getSchool2Details: function(){
                $("#code2").val("00020295"); 
                $("#name2").val("Motithang HSS");
        }
    }
}
</script>