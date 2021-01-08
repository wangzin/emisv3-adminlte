<template>
<div>
    <form>
    <!-- Bifurcation card -->
    <div class="card card-primary card-outline">
        <div class="card-header">
            <h3 class="card-title">Bifurcation</h3>
        </div>

        <div class="card-body" >
            <div class="form-group row">
                <div class="col-md-5">
                    <label class="col-md-5 font-weight-normal">School/ECR/ECCD:<span class="text-danger">*</span></label>

                    <select name="organization" id="organization" class="form-control editable_fields font-weight-bolder" @change="getSchoolDetails()">
                        <option value="">--- Please Select ---</option>
                        <option value="1">YHSS</option>
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

    <!-- Basic details card -->
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Current Details</h3>
        </div>

    <div class="card-body" >
        <div class="form-group row">
            <div class="col-md-5">
                <label class="col-md-5 font-weight-normal">Code:</label>

                <input type="text" class="form-control font-weight-bolder editable_fields" id="code"/>
            </div>

            <div class="col-md-5">
                <label class="col-md-5 font-weight-normal">Name:</label>

                <input type="text" class="form-control font-weight-bolder editable_fields" id="name"/>
            </div>
        </div>

        <div class="form-group row">
            <div class="col-md-5">
                <label class="col-md-5 font-weight-normal">Category:</label>

                <select name="category" id="category" class="form-control font-weight-bolder editable_fields">
                    <option value="">--- Please Select ---</option>
                    <option value="1">Public</option>
                    <option value="2">Private</option>
                </select>
            </div>

            <div class="col-md-5">
                <label class="col-md-5 font-weight-normal">Level:</label>

                <select name="category" id="level" class="form-control font-weight-bolder editable_fields">
                    <option value="">--- Please Select ---</option>
                    <option value="1">Higher Secondary School</option>
                    <option value="2">Middle Secondary School</option>
                    <option value="3">Lower Secondary School</option>
                    <option value="4">Primary School</option>
                    <option value="5">ECR</option>
                    <option value="6">ECCD</option>
                </select>
            </div>
        </div>

        <div class="form-group row">
            <div class="col-md-5">
                <label class="col-md-5 font-weight-normal">Dzongkhag:</label>

                <select name="dzongkhag" id="dzongkhag" class="form-control font-weight-bolder editable_fields">
                    <option value="">--- Please Select ---</option>
                    <option value="1">Thimphu</option>
                    <option value="2">Paro</option>
                    <option value="3">punakha</option>
                    <option value="4">Lhuntse</option>
                </select>
            </div>
            <div class="col-md-5">
                <label class="col-md-5 font-weight-normal">Gewog:</label>

                <select name="category" id="gewog" class="form-control font-weight-bolder editable_fields">
                    <option value="">--- Please Select ---</option>
                    <option value="1">Kabisa</option>
                    <option value="2">Babesa</option>
                    <option value="3">Motithang</option>
                    <option value="4">Chubachu</option>
                </select>
            </div>
        </div>

        <div class="form-group row">
            <div class="col-md-5">
                <label class="col-md-5 font-weight-normal">Chiwog:</label>

                <select name="category" id="chiwog" class="form-control font-weight-bolder editable_fields">
                    <option value="">--- Please Select ---</option>
                    <option value="1">olakha</option>
                    <option value="2">chngbandu</option>
                </select>
            </div>
            <div class="col-md-5">
                <label class="col-md-5 font-weight-normal">Location Category:</label>

                <select name="category" id="locationCategory" class="form-control font-weight-bolder editable_fields">
                    <option value="">--- Please Select ---</option>
                    <option value="1">Kabisa</option>
                </select>
            </div>
        </div>

        <div class="form-group row">
            <div class="col-md-5">
                <label class="col-md-5 font-weight-normal">Geopolitically Located:</label>

                <select name="category" id="geopoliticallyLocated" class="form-control font-weight-bolder editable_fields">
                    <option value="">--- Please Select ---</option>
                    <option value="1">Yes</option>
                    <option value="2">No</option>
                </select>
            </div>

            <div class="col-md-5">
                <label class="col-md-6 font-weight-normal">SEN School:</label>

                <select name="category" id="senSchool" class="form-control font-weight-bolder editable_fields">
                    <option value="">--- Please Select ---</option>
                    <option value="1">Yes</option>
                    <option value="2">No</option>
                </select>
            </div>
            
        </div>

        <div class="form-group row">

            <div class="col-md-5 hidden aaa">
                <label class="col-md-5 font-weight-normal">Parent School:</label>

                <select name="category" id="parentSchool" class="form-control font-weight-bolder editable_fields">
                    <option value="">--- Please Select ---</option>
                    <option value="1">Kabisa</option>
                </select>
            </div>

            <div class="col-md-5 hidden aaa">
                <label class="col-md-8 font-weight-normal">Co-located with Parent School:</label>

                <select name="category" id="coLoParent" class="form-control font-weight-bolder editable_fields">
                    <option value="">--- Please Select ---</option>
                    <option value="1">Yes</option>
                    <option value="2">No</option>
                </select>
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
                            <h3 class="card-title">School/ECR/ECCD 1</h3>
                        </div>

                    <div class="card-body">
                        <div class="row">
                            <div class="col-sm-6">
                            <!-- text input -->
                                <div class="form-group">
                                    <label class="col-md-5 font-weight-normal">Code:</label>
                                    <input type="text" class="form-control font-weight-bolder editable_fields currentDetails" id="code"/>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label class="col-md-5 font-weight-normal">Name:</label>
                                <input type="text" class="form-control font-weight-bolder editable_fields currentDetails" id="name"/>
                                </div>
                             </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6">
                            <!-- text input -->
                                <div class="form-group">
                                    <label class="col-md-5 font-weight-normal">Category:</label>

                                <select name="category" id="category" class="form-control font-weight-bolder editable_fields currentDetails">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Public</option>
                                    <option value="2">Private</option>
                                </select>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label class="col-md-5 font-weight-normal">Level:</label>
                                <select name="category" id="level" class="form-control font-weight-bolder editable_fields currentDetails">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Higher Secondary School</option>
                                    <option value="2">Middle Secondary School</option>
                                    <option value="3">Lower Secondary School</option>
                                    <option value="4">Primary School</option>
                                    <option value="5">ECR</option>
                                    <option value="6">ECCD</option>
                                </select>
                                </div>
                             </div>
                        </div>

                        <div class="row">
                            <div class="col-sm-6">
                            <!-- text input -->
                                <div class="form-group">
                                    <label class="col-md-6 font-weight-normal">Dzongkhag:</label>
                                <select name="dzongkhag" id="dzongkhag" class="form-control font-weight-bolder editable_fields currentDetails">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Thimphu</option>
                                    <option value="2">Paro</option>
                                    <option value="3">punakha</option>
                                    <option value="4">Lhuntse</option>
                                </select>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label class="col-md-5 font-weight-normal">Gewog:</label>
                                <select name="category" id="gewog" class="form-control font-weight-bolder editable_fields currentDetails">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Kabisa</option>
                                    <option value="2">Babesa</option>
                                    <option value="3">Motithang</option>
                                    <option value="4">Chubachu</option>
                                </select>
                                </div>
                             </div>
                        </div>

                        <div class="row">
                            <div class="col-sm-6">
                            <!-- text input -->
                                <div class="form-group">
                                    <label class="col-md-5 font-weight-normal">Chiwog:</label>
                                <select name="category" id="chiwog" class="form-control font-weight-bolder editable_fields currentDetails">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">olakha</option>
                                    <option value="2">chngbandu</option>
                                </select>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label class="col-md-8 font-weight-normal">Location Category:</label>
                                <select name="category" id="locationCategory" class="form-control font-weight-bolder editable_fields currentDetails">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Kabisa</option>
                                </select>
                                </div>
                             </div>
                        </div> 
                        <div class="row">
                            <div class="col-sm-6">
                            <!-- text input -->
                                <div class="form-group">
                                    <label class="col-md-10 font-weight-normal">Geopolitically Located:</label>
                                <select name="category" id="geopoliticallyLocated" class="form-control font-weight-bolder editable_fields currentDetails">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Yes</option>
                                    <option value="2">No</option>
                                </select>
                                </div>
                            </div>
                           
                            
                        <div class="col-sm-6">
                                <div class="form-group">
                                    <label class="col-md-6 font-weight-normal">SEN School:</label>
                                <select name="category" id="senSchool" class="form-control font-weight-bolder editable_fields currentDetails">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Yes</option>
                                    <option value="2">No</option>
                                </select>
                                </div>
                             </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6">
                            <!-- text input -->
                                <div class="form-group hidden aaa">
                                    <label class="col-md-12 font-weight-normal">Co-located with Parent School:</label>
                                <select name="category" id="coLoParent" class="form-control font-weight-bolder editable_fields currentDetails">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Yes</option>
                                    <option value="2">No</option>
                                </select>
                                </div>
                            </div>
                             <div class="col-sm-6">
                                <div class="form-group hidden aaa">
                                    <label class="col-md-10 font-weight-normal">Parent School:</label>
                                <select name="category" id="parentSchool" class="form-control font-weight-bolder editable_fields currentDetails">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Kabisa</option>
                                </select>
                                </div>
                             </div>
                        </div> 
                         

                    </div>
                    </div>
                </div>
            <!-- right column -->
                <div class="col-md-6">
                    <div class="card card-success">
                        <div class="card-header">
                            <h3 class="card-title">School/ECR/ECCD 2</h3>
                        </div>

                        <div class="card-body">
                            <div class="row">
                            <div class="col-sm-6">
                            <!-- text input -->
                                <div class="form-group">
                                    <label class="col-md-5 font-weight-normal">Code:</label>
                                    <input type="text" class="form-control font-weight-bolder editable_fields currentDetails" id="afterChangeCode"/>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label class="col-md-5 font-weight-normal">Name:</label>
                                <input type="text" class="form-control font-weight-bolder editable_fields currentDetails" id="afterChangeName"/>
                                </div>
                             </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6">
                            <!-- text input -->
                                <div class="form-group">
                                    <label class="col-md-5 font-weight-normal">Category:</label>

                                <select name="category" id="afterChangeCategory" class="form-control font-weight-bolder editable_fields currentDetails">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Public</option>
                                    <option value="2">Private</option>
                                </select>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label class="col-md-5 font-weight-normal">Level:</label>
                                <select name="category" id="afterChangeLevel" class="form-control font-weight-bolder editable_fields currentDetails">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Higher Secondary School</option>
                                    <option value="2">Middle Secondary School</option>
                                    <option value="3">Lower Secondary School</option>
                                    <option value="4">Primary School</option>
                                    <option value="5">ECR</option>
                                    <option value="6">ECCD</option>
                                </select>
                                </div>
                             </div>
                        </div>

                        <div class="row">
                            <div class="col-sm-6">
                            <!-- text input -->
                                <div class="form-group">
                                    <label class="col-md-6 font-weight-normal">Dzongkhag:</label>
                                <select name="dzongkhag" id="afterChangeDzongkhag" class="form-control font-weight-bolder editable_fields currentDetails">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Thimphu</option>
                                    <option value="2">Paro</option>
                                    <option value="3">punakha</option>
                                    <option value="4">Lhuntse</option>
                                </select>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label class="col-md-5 font-weight-normal">Gewog:</label>
                                <select name="category" id="afterChangeGewog" class="form-control font-weight-bolder editable_fields currentDetails">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Kabisa</option>
                                    <option value="2">Babesa</option>
                                    <option value="3">Motithang</option>
                                    <option value="4">Chubachu</option>
                                </select>
                                </div>
                             </div>
                        </div>

                        <div class="row">
                            <div class="col-sm-6">
                            <!-- text input -->
                                <div class="form-group">
                                    <label class="col-md-5 font-weight-normal">Chiwog:</label>
                                <select name="category" id="afterChangeChiwog" class="form-control font-weight-bolder editable_fields currentDetails">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">olakha</option>
                                    <option value="2">chngbandu</option>
                                </select>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label class="col-md-8 font-weight-normal">Location Category:</label>
                                <select name="category" id="afterChangeLocationCategory" class="form-control font-weight-bolder editable_fields currentDetails">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Kabisa</option>
                                </select>
                                </div>
                             </div>
                        </div> 
                        <div class="row">
                            <div class="col-sm-6">
                            <!-- text input -->
                                <div class="form-group">
                                    <label class="col-md-10 font-weight-normal">Geopolitically Located:</label>
                                <select name="category" id="afterChangeGeopoliticallyLocated" class="form-control font-weight-bolder editable_fields currentDetails">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Yes</option>
                                    <option value="2">No</option>
                                </select>
                                </div>
                            </div>

                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label class="col-md-6 font-weight-normal">SEN School:</label>
                                <select name="category" id="afterChangeSenSchool" class="form-control font-weight-bolder editable_fields currentDetails">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Yes</option>
                                    <option value="2">No</option>
                                </select>
                                </div>
                             </div>

                            
                        </div>
                        <div class="row">
                            <div class="col-sm-6">
                            <!-- text input -->
                                <div class="form-group hidden aaa">
                                    <label class="col-md-12 font-weight-normal">Co-located with Parent School:</label>
                                <select name="category" id="afterChangeCoLoParent" class="form-control font-weight-bolder editable_fields currentDetails">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Yes</option>
                                    <option value="2">No</option>
                                </select>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group hidden aaa">
                                    <label class="col-md-10 font-weight-normal">Parent School:</label>
                                <select name="category" id="afterChangeParentSchool" class="form-control font-weight-bolder editable_fields currentDetails">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Kabisa</option>
                                </select>
                                </div>
                             </div>
                            
                        </div> 
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
</form>

        <!-- button card -->
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
        methods: {
        /** method to save data */
        save: function(){
            Swal.fire(
                    'Success!',
                    'Your Data has been successfully saved.',
                    'success',
                )
            window.location.reload();
        },
        /** method to reset forms */
        reset: function(){
        window.location.reload();
        },

        /** method to get schools/ECR/ECCD details based on code */
        getSchoolDetails: function(){
        let organization = $("#organization").val();

        if(organization == 1){
                $("#code").val("00020292");
                $("#name").val("YangchenPhug HSS");
                $("#category option:selected").text("Public");
                $("#level option:selected").text("Higher Secondary School");
                $("#dzongkhag option:selected").text("Thimphu");
                $("#gewog option:selected").text("yhs");
                $("#chiwog option:selected").text("Yhs");
                $("#geopoliticallyLocated option:selected").text("Yes");
                $("#locationCategory option:selected").text("Town");
                $("#senSchool option:selected").text("No");
                $(".aaa").hide();
        }
        else {
                $("#code").val("0022000");
                $("#name").val("ECCD1");
                $("#category option:selected").text("Public");
                $("#level option:selected").text("ECCD");
                $("#dzongkhag option:selected").text("Thimphu");
                $("#gewog option:selected").text("jungshina");
                $("#chiwog option:selected").text("hejo");
                $("#geopoliticallyLocated option:selected").text("Yes");
                $("#locationCategory option:selected").text("jungshina");
                $("#parentSchool option:selected").text("jungshina");
                $("#coLoParent option:selected").text("No");
                $("#senSchool option:selected").text("No");
                $(".aaa").show();
             }
         }
        }
        }
</script>