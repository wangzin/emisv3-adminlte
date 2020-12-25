<template>
    <div> 
        <div class="row">
            
            <div class="col-12"> 
                <div class="card card-primary card-outline-tabs">
                    <div class="card-header p-0 border-bottom-0">
                        <ul class="nav nav-tabs">
                            <li class="nav-item basic-tabs">
                                <a class="nav-link active" id="basic-tabs-head" data-toggle="pill" href="#basic-tabs" role="tab" aria-controls="custom-tabs-four-home" aria-selected="true"> 
                                    <span class="step_no img-bordered pr-2 pl-2 pb-1 pt-1 bg-gradient-secondary text-white">1</span>
                                    <label> Basic Details </label><span class="fa fa-check pl-2"></span>                                
                                </a>
                            </li>
                            <li class="nav-item location-tab">
                                <a class="nav-link disabled" href="#" id="location-tab-head" data-toggle="pill" @click="shownexttab('basic-tabs','location-tab')" role="tab" aria-controls="custom-tabs-four-profile" aria-selected="false">
                                    <span class="step_no img-bordered pr-2 pl-2 pb-1 pt-1 bg-gradient-secondary text-white">2</span>
                                    <label>School Detail</label>
                                    <span class="fa fa-angle-double-right"></span> 
                                </a>
                            </li>
                            <li class="nav-item schooldetails-tab">
                                <a class="nav-link disabled" id="schooldetails-tab-head" data-toggle="pill" @click="shownexttab('location-tab','schooldetails-tab')" role="tab" aria-controls="custom-tabs-four-messages" aria-selected="false">
                                    <span class="step_no img-bordered pr-2 pl-2 pb-1 pt-1 bg-gradient-secondary text-white">3</span>
                                    <label>Student Guardian Details</label>
                                    <span class="fa fa-angle-double-right"></span> 
                                </a>
                            </li>
                            <li class="nav-item contactdetails-tab">
                                <a class="nav-link disabled" id="contactdetails-tab-head" data-toggle="pill" @click="shownexttab('schooldetails-tab','contactdetails-tab')" role="tab" aria-controls="custom-tabs-four-settings" aria-selected="false">
                                    <span class="step_no img-bordered pr-2 pl-2 pb-1 pt-1 bg-gradient-secondary text-white">4</span>
                                    <label>Student Co-curricular Activities</label>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="card-body">
                        <div class="tab-content">
                            <div class="tab-pane fade active show" id="basic-tabs" role="tabpanel" aria-labelledby="basicdetails">
                                <div class="row form-group">
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <label class="font-weight-normal">Citizenship ID No(11 letters): <span class="text-danger">*</span></label>
                                        <input type="number" @change="removeerror('cidno','cidno_err')" class="form-control font-weight-bolder" id="agencycode" v-model="agencycode" style="width: 100%;"/>
                                        <span class="text-danger" id="cidno_err"></span>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12" id="schoolcat"> 
                                        <label class="font-weight-normal">Student Code: <span class="text-danger">*</span></label>
                                        <input type="text" @change="removeerror('studentcode','studentcode_err')" class="form-control font-weight-bolder" id="schoolname" v-model="studentcode" style="width: 100%;"/>
                                        <span id="studentcode_err" class="text-danger"></span>
                                    </div>
                                </div>
                                <div id="schoolsections">
                                    <div class="row form-group">
                                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <label class="font-weight-normal">Student Name: <span class="text-danger">*</span></label>
                                            <input type="text" @change="removeerror('studentname','studentname_err')" class="form-control font-weight-bolder" id="schoolname" v-model="schoolname" style="width: 100%;"/>
                                            <span id="studentname_err" class="text-danger"></span>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <label class="font-weight-normal">Gender</label>
                                            <select class="select2bs4" id="gender" v-model="schoollevel" style="width: 100%;">
                                                <option value="" label="- Please Select -">- Please Select -</option>
                                                <option value="1" label="male">Male</option>
                                                <option value="2" label="female">Female</option>
                                                <option value="3" label="unknown">Unknown</option>
                                               
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row form-group">
                                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                           <label class="font-weight-normal">Date of Birth</label>
                                        <input type="date" class="form-control font-weight-bolder" id="establishmentyear" v-model="establishmentyear" style="width: 100%;"/>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <label class="font-weight-normal">Mother Tongue</label>
                                            <select class="select2bs4 font-weight-bolder" id="schoolstatus" v-model="schoolstatus" style="width: 100%;">
                                                <option value="" label="- Please Select -">- Please Select -</option>
                                                <option value="1" label="Dzongkha">Dzongkha</option>
                                                <option value="2" label="Tshangla">Tshangla</option>
                                                <option value="3" label="Lhotshampkha">Lhotshampkha</option>
                                                <option value="4" label="Kurtokha">Kurtokha</option>
                                                <option value="4" label="Bumthangkha">Bumthangkha</option>
                                                 <option value="4" label="Chalikha">Chalikha</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div class="row form-group">
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <label class="font-weight-normal">Nationality of the Student</label><br>
                                               <input type="radio" name="connecgtion" id="connecgtion" @click="showidentity('Bhutanese')"> Bhutanese
                                               <input type="radio" name="connecgtion" id="connecgtion" @click="showidentity('Non-Bhutanese')"> Non-Bhutanese 
                                          </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12" style="display:none" id="telephonesec">
                                                <label >If Non-Bhutanese, Please Specify your Nationality </label>
                                                <input type="text" class="form-control" @click="remove_err('error_Telephone')" id="Telephone" v-model="nationality" placeholder="Indian, Bangaldeshi, Nepalese">
                                                <span class="text-danger" id="error_Telephone"></span> <br>
                                                <label >Please Specify  </label>
                                                <input type="text" class="form-control" @click="remove_err('error_Telephone')" id="Telephone" v-model="nationality" placeholder="country diplomate, expriate">
                                                <span class="text-danger" id="error_Telephone"></span>
                                          </div> 

                                     
                                </div>
                               
                                <!--next button--> 
                                <div class="row form-group fa-pull-right">
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <button class="btn btn-flat btn-primary" @click="shownexttab('basic-tabs','location-tab')"> Next <i class="fa fa-arrow-right"></i></button>
                                    </div>
                                </div>

                            </div>
                            <!--school detail of the student-->

                            <div class="tab-pane fade" id="location-tab" role="tabpanel" aria-labelledby="location">
                                <div class="row form-group">
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <label class="font-weight-normal">Dzongkhag of the School <span class="text-danger">*</span></label>
                                        <select class="select2bs4 font-weight-bolder" id="locationdzongkhag" v-model="locationdzongkhag" style="width: 100%;">
                                            <option value="" label="- Please Select -">- Please Select -</option>
                                            <option value="1" label="Bumthang [01]">Bumthang </option>
                                            <option value="2" label="Chhukha [02]">Chhukha</option>
                                            <option value="3" label="Dagana [03]">Dagana</option>
                                            <option value="4" label="Gasa [04]">Gasa</option>
                                            <option value="5" label="Haa [05]">Haa</option>
                                            <option value="6" label="Lhuentse [06]">Lhuentse</option>
                                            <option value="7" label="Mongar [07]">Mongar</option>
                                            <option value="8" label="Paro [08]">Paro</option>
                                            <option value="9" label="Pema Gatshel [09]">Pema Gatshel</option>
                                            <option value="10" label="Punakha [10]">Punakha</option>
                                            <option value="11" label="Samdrup Jongkhar [11]">Samdrup Jongkhar</option>
                                            <option value="12" label="Samtse [12]">Samtse</option>
                                            <option value="13" label="Sarpang [13]">Sarpang</option>
                                            <option value="14" label="Thimphu [14]">Thimphu</option>
                                            <option value="15" label="Trashigang [15]">Trashigang </option>
                                            <option value="16" label="Trashiyangtse [16]">Trashiyangtse </option>
                                            <option value="17" label="Trongsa [17]">Trongsa </option>
                                            <option value="18" label="Tsirang [18]">Tsirang </option>
                                            <option value="19" label="Wangdue Phodrang [19]">Wangdue Phodrang </option>
                                            <option value="20" label="Zhemgang [20]">Zhemgang </option>
                                            <option value="25" label="SJongkhar Thromde [55]">SJongkhar Thromde </option>
                                            <option value="24" label="Phuntsholing Thromde [66]">Phuntsholing Thromde</option>
                                            <option value="23" label="Gelephu Thromde [77]">Gelephu Thromde </option>
                                            <option value="22" label="Thimphu Thromde [88]">Thimphu Thromde </option>
                                        </select>                                    
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                         <label class="font-weight-normal">Gewog: <span class="text-danger">*</span></label>
                                        <select class="select2bs4 font-weight-bolder" id="locationgewog" v-model="locationgewog" style="width: 100%;">
                                            <option value="" label="- First Select Dzongkhag -">- Please Select Gewog -</option>
                                            <option value="1">Chokhor</option><option value="2">Chumey  </option>
                                            <option value="3">Tang </option><option value="4">Tang</option>
                                            <option value="208">Ura </option>
                                        </select>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <label class="font-weight-normal">School Name: <span class="text-danger">*</span></label>
                                        <select class="select2bs4 font-weight-bolder" id="locationschool" v-model="locationschool" style="width: 100%;">
                                            <option value="" label="- First Select Gewog -">- Select School -</option>
                                            <option value="1">Chhumey Central School</option><option value="2">Jakar HSS</option><option value="3">Ura Central School</option><option value="4">Tang Central School</option><option value="5">Wangdicholing	LSS</option><option value="6">Chhoekhor Toe	PS</option><option value="7">Chungphel	PS</option><option value="8">Dhur PS</option><option value="9">Gytesa PS</option><option value="10">Gangrithang	PS</option><option value="11">Jigmeling	PS</option><option value="12">Khangrab PS</option><option value="13">Kharsat PS</option><option value="14">Shingnyer PS</option><option value="15">Tangsibi	PS</option><option value="16">Zangtherpo PS</option><option value="17">Zungnye PS</option><option value="18">Chukha Central School HSS</option><option value="19">Phuentsholing	LSS</option><option value="20">Kharsa [0020]</option><option value="21">Kharsum [0021]</option><option value="22">Lamagonpa [0022]</option><option value="23">Nanglakhang [0023]</option><option value="24">Nangsephel/Tendok [0024]</option><option value="25">Nangseyphel [0025]</option><option value="26">Norbugang [0026]</option><option value="27">Pangrey [0027]</option><option value="28">Petseling [0028]</option><option value="29">Poengar [0029]</option><option value="30">Potola [0030]</option><option value="31">Samthang [0031]</option><option value="32">Saram [0032]</option><option value="33">Shukdak [0033]</option><option value="34">Tamshing [0034]</option><option value="35">Tashiling [0035]</option><option value="36">Tendok [0036]</option><option value="37">Thangbi [0037]</option><option value="38">Torshong [0038]</option><option value="39">Wangdicholing [0039]</option><option value="40">Zangling [0040]</option><option value="41">Zhapthang [0041]</option><option value="4983">Sangsangma [5001]</option><option value="4984">Tashigatshel [5002]</option><option value="4985">Dekiling [5003]</option><option value="4356">Other [8501]</option><option value="4357">Unknown [9001]</option>
                                        </select>
                                    </div>
                                </div>
                               
                                <div class="row form-group">
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <label class="font-weight-normal">Student Class: <span class="text-danger">*</span></label>
                                        <select class="select2bs4 font-weight-bolder" id="studentclass" v-model="studentclass" style="width: 100%;">
                                            <option value="" label="- First Select Class -">- Please Select Class -</option>
                                            <option value="1">PP</option><option value="2">I</option><option value="3">II</option><option value="4">III</option>
                                            <option value="5">IV</option><option value="6">V</option><option value="7">VI</option><option value="8">VII</option>
                                             <option value="9">VIII</option><option value="10">IX</option><option value="11">X</option><option value="12">XI</option><option value="13">XII</option>
                                      </select>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <label class="font-weight-normal">Student Section: <span class="text-danger">*</span></label>
                                        <select class="select2bs4 font-weight-bolder" id="studentsection" v-model="studentsection" style="width: 100%;">
                                            <option value="" label="- First Select Section -">- Please Select Section -</option>
                                            <option value="1">A</option><option value="2">B</option><option value="3">C</option><option value="4">D</option>
                                            <option value="5">E</option><option value="6">F</option><option value="7">G</option><option value="8">H</option>
                                             <option value="9">I</option><option value="10">J</option><option value="11">K</option><option value="12">L</option><option value="13">M</option>
                                      </select>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <label class="font-weight-normal">Student Stream: <span class="text-danger">*</span></label>
                                        <select class="select2bs4 font-weight-bolder" id="studentstream" v-model="studentstream" style="width: 100%;">
                                            <option value="" label="- First Select Stream -">- Please Select Stream -</option>
                                            <option value="1">General</option><option value="2">Science</option><option value="3">Arts</option>
                                            <option value="4">Commerce</option>
                                             
                                      </select>
                                    </div>
                                </div> <br>
                                <div class="row form-group">
                                    <!--<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">-->
                                        <label class="font-weight-normal"> Do you think the children/student has a disability? (Eg: difficulty seeing, hearing, walking, learning or remembering, focusing, with fine motor skills, self care, being understood, controlling behavior, socializing or playing) </label>
                                        <div class="icheck-primary d-inline">
                                            <input type="radio" id="SENdetail1" name="SENdetail">
                                            <label for="SENdetail1">
                                                Yes
                                            </label>
                                        </div>
                                        <div class="icheck-primary d-inline pl-4">
                                            <input type="radio" id="SENdetail2" name="SENdetail">
                                            <label for="SENdetail2">
                                                No
                                            </label>
                                        </div>
                                   <!-- </div>-->
                                </div>
                                <hr>
                                <div class="row form-group fa-pull-right">
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <button class="btn btn-flat btn-success" @click="previoustab('basic-tabs','location-tab')"><i class="fa fa-arrow-left"></i> Previous </button>
                                        <button class="btn btn-flat btn-primary" @click="shownexttab('location-tab','schooldetails-tab')"> Next <i class="fa fa-arrow-right"></i></button>
                                    </div>
                                </div>
                            </div>

                            <!--Student Guardain Info-->
                            <div class="tab-pane fade" id="schooldetails-tab" role="tabpanel" aria-labelledby="custom-tabs-four-messages-tab">
                                <div class="row form-group">
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <label class="font-weight-normal">Father's Name: <span class="text-danger">*</span></label>
                                            <input type="text" @change="removeerror('fathername','studentname_err')" class="form-control font-weight-bolder" id="fathername" v-model="fathername" style="width: 100%;"/>
                                            <span id="studentname_err" class="text-danger"></span>                               
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <label class="font-weight-normal">Mother's Name: <span class="text-danger">*</span></label>
                                            <input type="text" @change="removeerror('mothername','studentname_err')" class="form-control font-weight-bolder" id="mothername" v-model="mothername" style="width: 100%;"/>
                                            <span id="studentname_err" class="text-danger"></span>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <label class="font-weight-normal">Guardain's Name: <span class="text-danger">*</span></label>
                                            <input type="text" @change="removeerror('guardainname','studentname_err')" class="form-control font-weight-bolder" id="guardainname" v-model="guardainname" style="width: 100%;"/>
                                            <span id="studentname_err" class="text-danger"></span>
                                    </div>
                                </div>
                                
                                <div class="row form-group" >
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                       <label class="font-weight-normal">Father's Contact No: <span class="text-danger">*</span></label>
                                            <input type="number" @change="removeerror('fathercontact','studentname_err')" class="form-control font-weight-bolder" id="fathercontact" v-model="fathercontact" style="width: 100%;"/>
                                            <span id="studentname_err" class="text-danger"></span>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <label class="font-weight-normal">Mother's Contact No: <span class="text-danger">*</span></label>
                                            <input type="text" @change="removeerror('mothercontact','studentname_err')" class="form-control font-weight-bolder" id="mothercontact" v-model="mothercontact" style="width: 100%;"/>
                                            <span id="studentname_err" class="text-danger"></span>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <label class="font-weight-normal">Guardain's Contact No: <span class="text-danger">*</span></label>
                                            <input type="text" @change="removeerror('guardaincontact','studentname_err')" class="form-control font-weight-bolder" id="guardaincontact" v-model="guardaincontact" style="width: 100%;"/>
                                            <span id="studentname_err" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="row form-group" >
                                    <p><B>Present Address of the Student</B></p>
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <label class="font-weight-normal">Specify location of your address</label>
                                        <textarea class="form-control font-weight-bolder" id="playgrounddescription" v-model="playgrounddescription" placeholder="lama building, langjophkha, Thimphu"></textarea>
                                    </div>
                                </div>
          <hr>          
                                <div class="row form-group" >
                                          <p><b>Permanent Address of the Student </b></p> 
                                </div>
                                <div class="row form-group" > 
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <label class="font-weight-normal">Dzongkhag <span class="text-danger">*</span></label>
                                        <select class="select2bs4 font-weight-bolder" id="dzongkhag" v-model="dzongkhag" style="width: 100%;">
                                            <option value="" label="- Please Select -">- Please Select -</option>
                                            <option value="1" label="Bumthang [01]">Bumthang </option>
                                            <option value="2" label="Chhukha [02]">Chhukha</option>
                                            <option value="3" label="Dagana [03]">Dagana</option>
                                            <option value="4" label="Gasa [04]">Gasa</option>
                                            <option value="5" label="Haa [05]">Haa</option>
                                            <option value="6" label="Lhuentse [06]">Lhuentse</option>
                                            <option value="7" label="Mongar [07]">Mongar</option>
                                            <option value="8" label="Paro [08]">Paro</option>
                                            <option value="9" label="Pema Gatshel [09]">Pema Gatshel</option>
                                            <option value="10" label="Punakha [10]">Punakha</option>
                                            <option value="11" label="Samdrup Jongkhar [11]">Samdrup Jongkhar</option>
                                            <option value="12" label="Samtse [12]">Samtse</option>
                                            <option value="13" label="Sarpang [13]">Sarpang</option>
                                            <option value="14" label="Thimphu [14]">Thimphu</option>
                                            <option value="15" label="Trashigang [15]">Trashigang </option>
                                            <option value="16" label="Trashiyangtse [16]">Trashiyangtse </option>
                                            <option value="17" label="Trongsa [17]">Trongsa </option>
                                            <option value="18" label="Tsirang [18]">Tsirang </option>
                                            <option value="19" label="Wangdue Phodrang [19]">Wangdue Phodrang </option>
                                            <option value="20" label="Zhemgang [20]">Zhemgang </option>
                                            <option value="25" label="SJongkhar Thromde [55]">SJongkhar Thromde </option>
                                            <option value="24" label="Phuntsholing Thromde [66]">Phuntsholing Thromde</option>
                                            <option value="23" label="Gelephu Thromde [77]">Gelephu Thromde </option>
                                            <option value="22" label="Thimphu Thromde [88]">Thimphu Thromde </option>
                                        </select>                                    
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <label class="font-weight-normal">Gewog: <span class="text-danger">*</span></label>
                                        <select class="select2bs4 font-weight-bolder" id="gewog" v-model="gewog" style="width: 100%;">
                                            <option value="" label="- First Select Dzongkhag -">- Select Gewog -</option>
                                            <option value="1">Chokhor</option><option value="2">Chumey  </option>
                                            <option value="3">Tang </option><option value="4">Tang</option>
                                            <option value="208">Ura </option>
                                        </select>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <label class="font-weight-normal">Village: <span class="text-danger">*</span></label>
                                        <select class="select2bs4 font-weight-bolder" id="locationvillage" v-model="locationvillage" style="width: 100%;">
                                            <option value="" label="- First Select Gewog -">- Select VIllage -</option>
                                            <option value="1">Chakhar [0001]</option><option value="2">Chokhor</option><option value="3">Chamkhar Throm [0003]</option><option value="4">Changwa [0004]</option><option value="5">Damphel [0005]</option><option value="6">Dawathang [0006]</option><option value="7">Dhur Dok [0007]</option><option value="8">Dhur Lusibe [0008]</option><option value="9">Dhur Moen [0009]</option><option value="10">Dodrong [0010]</option><option value="11">Dorjibe [0011]</option><option value="12">Goling [0012]</option><option value="13">Gongkhar [0013]</option><option value="14">Gyelkhar [0014]</option><option value="15">Jakar [0015]</option><option value="16">Jakar Lhakhang [0016]</option><option value="17">Jampel Lhakhang [0017]</option><option value="18">Kenchosum [0018]</option><option value="19">Khangdok [0019]</option><option value="20">Kharsa [0020]</option><option value="21">Kharsum [0021]</option><option value="22">Lamagonpa [0022]</option><option value="23">Nanglakhang [0023]</option><option value="24">Nangsephel/Tendok [0024]</option><option value="25">Nangseyphel [0025]</option><option value="26">Norbugang [0026]</option><option value="27">Pangrey [0027]</option><option value="28">Petseling [0028]</option><option value="29">Poengar [0029]</option><option value="30">Potola [0030]</option><option value="31">Samthang [0031]</option><option value="32">Saram [0032]</option><option value="33">Shukdak [0033]</option><option value="34">Tamshing [0034]</option><option value="35">Tashiling [0035]</option><option value="36">Tendok [0036]</option><option value="37">Thangbi [0037]</option><option value="38">Torshong [0038]</option><option value="39">Wangdicholing [0039]</option><option value="40">Zangling [0040]</option><option value="41">Zhapthang [0041]</option><option value="4983">Sangsangma [5001]</option><option value="4984">Tashigatshel [5002]</option><option value="4985">Dekiling [5003]</option><option value="4356">Other [8501]</option><option value="4357">Unknown [9001]</option>
                                        </select>
                                    </div>
                                        
                                </div>
                                <div class="row form-group" >
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <label class="font-weight-normal">No of tap stand for students</label>
                                        <input type="number" class="form-control font-weight-bolder" id="tabstandNo" v-model="tabstandNo" style="width: 100%;"/>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <label class="font-weight-normal">Reason for Water Problem</label>
                                        <textarea class="form-control font-weight-bolder" id="waterproblem" v-model="waterproblem"></textarea>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <label class="font-weight-normal"> Does the school have sufficient electricity? </label>
                                        <div class="icheck-primary d-inline">
                                            <input type="radio" id="electricity1" name="electricity">
                                            <label for="electricity1">
                                                Yes
                                            </label>
                                        </div>
                                        <div class="icheck-primary d-inline pl-4">
                                            <input type="radio" id="electricity12" name="electricity">
                                            <label for="electricity12">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="row form-group" >
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <label class="font-weight-normal">Remarks on electricity</label>
                                        <textarea class="form-control font-weight-bolder" id="electricremarks" v-model="electricremarks"></textarea>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <label class="font-weight-normal">The way to collect data from school</label>
                                        <select class="select2bs4 font-weight-bolder" id="wayofdatacollection" v-model="wayofdatacollection" style="width: 100%;">
                                            <option value="" label="- Please Select -" selected="selected">- Please Select -</option>
                                            <option value="2" label="By web interface [1]">By web interface [1]</option>
                                            <option value="3" label="By excel sheet [2]">By excel sheet [2]</option>
                                            <option value="4" label="By paper form [3]">By paper form [3]</option>
                                            <option value="1" label="Unknown [9]">Unknown [9]</option>
                                        </select>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <label class="font-weight-normal">Owner of land</label><br>
                                        <div class="icheck-primary d-inline">
                                            <input type="radio" id="landowner1" name="landowner">
                                            <label for="landowner1">
                                                Government 
                                            </label>
                                        </div>
                                        <div class="icheck-primary d-inline pl-4">
                                            <input type="radio" id="landowner12" name="landowner">
                                            <label for="landowner12">
                                                Private 
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="row form-group" >
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <label class="font-weight-normal">Internet at laboratory</label>
                                        <div class="icheck-primary d-inline">
                                            <input type="radio" id="internetlaboratory1" name="internetlaboratory">
                                            <label for="internetlaboratory1">
                                                Yes 
                                            </label>
                                        </div>
                                        <div class="icheck-primary d-inline pl-4">
                                            <input type="radio" id="internetlaboratory12" name="internetlaboratory">
                                            <label for="internetlaboratory12">
                                                No 
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <label class="font-weight-normal">LAN at laboratory</label>
                                        <div class="icheck-primary d-inline">
                                            <input type="radio" id="lanlaboratory1" name="lanlaboratory">
                                            <label for="lanlaboratory1">
                                                Yes 
                                            </label>
                                        </div>
                                        <div class="icheck-primary d-inline pl-4">
                                            <input type="radio" id="lanlaboratory12" name="lanlaboratory">
                                            <label for="lanlaboratory12">
                                                No 
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <hr>
                                <div class="row form-group fa-pull-right">
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <button class="btn btn-flat btn-success" @click="previoustab('location-tab','schooldetails-tab')"><i class="fa fa-arrow-left"></i> Previous </button>
                                        <button class="btn btn-flat btn-primary" @click="shownexttab('schooldetails-tab','contactdetails-tab')"> Next <i class="fa fa-arrow-right"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="contactdetails-tab" role="tabpanel" aria-labelledby="custom-tabs-four-settings-tab" >
                                <div class="row form-group" >
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <label class="font-weight-normal">Does the school have telephone connection?</label>
                                        <div class="icheck-primary d-inline">
                                            <input type="radio" id="telephoneconnection1" name="telephoneconnection">
                                            <label for="telephoneconnection1">
                                                Yes 
                                            </label>
                                        </div>
                                        <div class="icheck-primary d-inline pl-4">
                                            <input type="radio" id="telephoneconnection12" name="telephoneconnection">
                                            <label for="telephoneconnection12">
                                                No 
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <label class="font-weight-normal">Telephone No (less than 15 letters)</label>
                                        <input type="text" class="form-control font-weight-bolder" id="telephone" style="width: 100%;"/>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <label class="font-weight-normal">Fax No (less than 15 letters)</label>
                                        <input type="text" class="form-control font-weight-bolder" id="faxno" style="width: 100%;"/>
                                    </div>
                                </div>
                                <div class="row form-group" >
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <label class="font-weight-normal">Does the school have internet connection?</label>
                                        <div class="icheck-primary d-inline">
                                            <input type="radio" id="internetconn1" name="internetconn">
                                            <label for="internetconn1">
                                                Yes 
                                            </label>
                                        </div>
                                        <div class="icheck-primary d-inline pl-4">
                                            <input type="radio" id="internetconn12" name="internetconn">
                                            <label for="internetconn12">
                                                No 
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <label class="font-weight-normal">Email Address (e.g. hajime.ishii@gmail.com)</label>
                                        <input type="text" class="form-control font-weight-bolder" id="email" style="width: 100%;"/>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <label class="font-weight-normal">Remarks On Telephone (less than 100 letters)</label>
                                        <textarea class="form-control font-weight-bolder" id="teleremarks" ></textarea>
                                    </div>
                                </div>
                                <hr>
                                <div class="row form-group fa-pull-right">
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <button class="btn btn-flat btn-success" @click="previoustab('schooldetails-tab','contactdetails-tab')"><i class="fa fa-arrow-left"></i> Previous </button>
                                        <button class="btn btn-flat btn-primary" @click="submitfinalform('')"> Submit <i class="fa fa-arrow-save"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    components: {
    },
    data() {
        return {
            organizationtype:"", fathername:"", mothername:"", fathercontact:"", mothercontact:"",
            schoollevel:"", guardaincontact:"", 
            schoolname:"", studentclass:"", studentsection:"", studentstream:"",
            nationality:"", dzongkhag:"", gewog:"",
            schoolLocation:"",schoolstatus:"",
            agencycode:"",rcsccode:"",mofcode:"",
            establishmentyear:"", locationroadtype:"",
            locationdzongkhag:"", locationgewog:"", locationvillage:"",thrmno:"",altitute:"",latitute:"",longitute:"", locationschool:"",
            climatetype:"",locationvillage:"",distancefromroaddays:"",distancefromroadkm:"",distancefromroadhrs:"",compoundarea:"",playgroundmeasure:"",playgrounddescription:"",
            agrriculturearea:"",usedagriculture:"",tabstandNo:"",waterproblem:"",electricremarks:"",wayofdatacollection:"",
            count:5,
        }
    },
    methods: {
        previoustab(preclass,presentclass){
            $('.basic-tabs>a').removeClass('active');
            $('#basic-tabs').removeClass('active show');
            $('.location-tab >a').removeClass('active');
            $('#location-tab').removeClass('active show');
            $('.schooldetails-tab >a').removeClass('active');
            $('#schooldetails-tab').removeClass('active show');
            $('.contactdetails-tab >a').removeClass('active');
            $('#contactdetails-tab').removeClass('active show');
            $('.'+preclass+'> a').addClass('active');
            $('#'+preclass).addClass('active show');
        },
        shownexttab(presentclass,nextclass){
            $('.basic-tabs>a').removeClass('active');
            $('#basic-tabs').removeClass('active show');
            $('.location-tab >a').removeClass('active');
            $('#location-tab').removeClass('active show');
            $('.schooldetails-tab >a').removeClass('active');
            $('#schooldetails-tab').removeClass('active show');
            $('.contactdetails-tab >a').removeClass('active');
            $('#contactdetails-tab').removeClass('active show');
            if(this.validatedforms(presentclass)){
                $('.'+nextclass+'> a').addClass('active');
                $('#'+nextclass).addClass('active show');
                $('.'+nextclass+'> a').removeClass('disabled');
            }
            else{
                $('.'+presentclass+'> a').addClass('active');
                $('#'+presentclass).addClass('active show');
                $('.'+nextclass+'-head').removeClass('active');
                $('.basic-tabs> a').addClass('active');
            }
        },
        submitfinalform(){
            Swal.fire({
                title: 'Are you sure you wish to submit the entire information mention in the form?',
                text: "You won't be able to revert this back once you submit!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes!',
                }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Submitted!',
                        'Your Applicaiton details has been submitted. System generated application number for this transaction is: #02234. You may use this application nunber to track application status.',
                        'success',
                        this.$router.push('/regstdmanagement')
                    )
                }
            })
        },
        validatedforms(presentclass){
            let returntype=true;
            if(presentclass=="basic-tabs"){
                if($('#organizationtype').val()==""){
                    $('#organizationtype').addClass('is-invalid');
                    $('#organizatioid_err').html('Please select organization type'); 
                    returntype=false;
                }
                
                if($('#schoolname').val()==""){
                    $('#schoolname').addClass('is-invalid');
                    $('#schoolname_err').html('Please mention the name of the school'); 
                    returntype=false;
                }
               
               
               
                if($('#agencycode').val()==""){
                    $('#agencycode').addClass('is-invalid');
                    $('#agencycode_err').html('Please mention agency code'); 
                    returntype=false;
                }
            }
            return returntype;
        },
        removeerror(fieldid,errid){
            if($('#'+fieldid).val()!=""){
                $('#'+fieldid).removeClass('is-invalid');
                $('#'+errid).html(''); 
            }
        },
        showidentity:function(type){
                if(type=="Non-Bhutanese"){
                    $('#telephonesec').show();
                }
                else{
                    $('#telephonesec').hide();
                }
        }

    },

    
           

    mounted() {
        $('#cardheader').html('New Student Form');
        $('#addnewstd').hide();
        $('.select2').select2()
        $('.select2bs4').select2({
            theme: 'bootstrap4'
        });
        $('.select2-selection__rendered').addClass('font-weight-bolder');
        $('#organizationtype').change(function(){
            //this.removeerror('organizationtype','organizatioid_err');
            if($('#organizationtype').val()=="School"){
                $('#schoolcat').show();
            }
            else{
                $('#schoolcat').hide();
            }
        });
    },
    
}
</script>
 