<template>
    <div>
        <div class="breadcrumbs ace-save-state" id="breadcrumbs">
            <ol class="breadcrumb"> 
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item">INSET</li>
                <li class="breadcrumb-item active">Training Details</li>
            </ol> 
        </div>
        <div class="card card-success card-outline">
            <div class="card-header">
                <h2 class="card-title"><b>Trainig Details</b></h2>
            </div>
            <div class="card-body">    
                <form>  
                    <div class="form-group row"> 
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12"> 
                            <label class="font-weight-normal">Trainig Type:<span class="text-danger">*</span></label>
                            <select class="form-control" name="training_type" id="training_type" @change="removeerror('training_type','training_type_error'),showfield('training_type')">
                                <option value="professional_section">Professional Development Program</option>
                            </select>
                            <span id="training_type_error" class="text-danger"></span>
                        </div>
                    </div> 
                    <span id="professional_section">
                        <div class="form-group row">
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <label class="font-weight-normal">Category:<span class="text-danger">*</span></label>
                                <select class="form-control" @change="showhide('trining_type','13','professional_country')" name="SubLevelID" id="trining_type">
                                    <option value="9">SBIP </option>
                                </select>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12" id="professional_country" style="display:none">
                                <label class="font-weight-normal">Country:<span class="text-danger">*</span></label>
                                <select class="form-control" name="MastersCountryID" id="MastersCountryID">
                                    <option value="14" label="AUSTRALIA [AU]">Bhutan</option>
                                </select>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <label class="font-weight-normal">Type:<span class="text-danger">*</span></label>
                                <select class="form-control" @change="showhide('typeofseminer','19','other_siminer')" name="Type" id="typeofseminer">
                                    <option value="17" label="Conference [0015]">Conference</option>
                                </select>
                            </div> 
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <label class="font-weight-normal">Course Type:<span class="text-danger">*</span></label>
                                <select class="form-control" name="CourseTypeID" id="CourseTypeID">
                                    <option value="27" label="Curriculum [0025]">Curriculum</option>
                                </select>
                            </div> 
                        </div>
                        <div class="form-group row">
                            <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                <label class="ont-weight-normal">Nature of participation:<span class="text-danger">*</span></label>
                                <br><input type="checkbox" value="Moderator"> Moderator &nbsp;
                                <input type="checkbox" checked value="Moderator"> Participant&nbsp;
                                <input type="checkbox" checked value="Participant"> Presenter&nbsp;
                                <input type="checkbox" value="Trainer/Facilitator"> Trainer/Facilitator&nbsp;
                                <input type="checkbox" checked value="Writer"> Writer&nbsp;
                                <input type="checkbox" value="Writer"> Others&nbsp;
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <label class="font-weight-normal">Course Title:<span class="text-danger">*</span></label>
                                <input type="text" value="Course Title" class="form-control" name="course_title">
                            </div> 
                        </div>
                        <div class="form-group row">
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <label class="font-weight-normal">Course provider:<span class="text-danger">*</span></label>
                                <input type="text" value="Ministry of Education" class="form-control" name="course_provider">
                            </div> 
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <label class="font-weight-normal">Place/Vanue:<span class="text-danger">*</span></label>
                                <input type="text" value="Ministry of Education, Thimphu" class="form-control" name="training_place">
                            </div> 
                             <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <label class="font-weight-normal">Financial Source:<span class="text-danger">*</span></label>
                                <select class="form-control" name="FinancialSource" id="FinancialSource">
                                    <option value="1" label="RGoB [0001]">RGoB</option>
                                </select>
                            </div> 
                        </div>
                        <div class="form-group row">
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <label class="font-weight-normal">Start Date:<span class="text-danger">*</span></label>
                                <input type="text" value="2021-01-01" class="form-control" name="sdate">
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <label class="font-weight-normal">End Date:<span class="text-danger">*</span></label>
                                <input type="text" value="2021-06-31"  class="form-control" name="enddate">
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <label class="font-weight-normal">Total Hours:<span class="text-danger">*</span></label>
                                <input type="text" value="560"  class="form-control" name="totalhr">
                            </div>
                        </div>
                    </span> 
                </form>
            </div>
        </div>
    </div>
</template>  



