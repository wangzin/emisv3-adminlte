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
                                    <span class="step_no img-bordered pr-2 pl-2 pb-1 pt-1bg-gradient-secondary text-white">2</span>
                                    <label>Location Details</label>
                                    <span class="fa fa-angle-double-right"></span> 
                                </a>
                            </li>
                            <li class="nav-item schooldetails-tab">
                                <a class="nav-link disabled" id="schooldetails-tab-head" data-toggle="pill" @click="shownexttab('location-tab','schooldetails-tab')" role="tab" aria-controls="custom-tabs-four-messages" aria-selected="false">
                                    <span class="step_no img-bordered pr-2 pl-2 pb-1 pt-1 bg-gradient-secondary text-white">3</span>
                                    <label>School/organization Details</label>
                                    <span class="fa fa-angle-double-right"></span> 
                                </a>
                            </li>
                            <li class="nav-item contactdetails-tab">
                                <a class="nav-link disabled" id="contactdetails-tab-head" data-toggle="pill" @click="shownexttab('schooldetails-tab','contactdetails-tab')" role="tab" aria-controls="custom-tabs-four-settings" aria-selected="false">
                                    <span class="step_no img-bordered pr-2 pl-2 pb-1 pt-1 bg-gradient-secondary text-white">4</span>
                                    <label>Contact Details</label>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="card-body">
                        <div class="tab-content">
                            <div class="tab-pane fade active show" id="basic-tabs" role="tabpanel" aria-labelledby="basicdetails">
                                <div class="row form-group">
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <label class="font-weight-normal">Organization Type <span class="text-danger">*</span></label>
                                        <select class="select2bs4" id="organizationtype" style="width: 100%;">
                                            <option value="">Select</option> 
                                            <option value="School">School</option>
                                            <option value="Dzongkhag Administration">Dzongkhag Administration</option>
                                            <option value="Ministry">Ministry</option>
                                        </select>
                                        <span class="text-danger" id="organizatioid_err"></span>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12" id="schoolcat"> 
                                        <label class="font-weight-normal">School Category</label>
                                        <div class="clearfix">
                                            <div class="icheck-primary d-inline">
                                                <input type="radio" id="radioPrimary1" name="schoolcategory">
                                                <label for="radioPrimary1">
                                                    Public School
                                                </label>
                                            </div>
                                            <div class="icheck-primary d-inline pl-4">
                                                <input type="radio" id="radioPrimary2" name="schoolcategory">
                                                <label for="radioPrimary2">
                                                    Private School
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="schoolsections">
                                    <div class="row form-group">
                                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <label class="font-weight-normal">School Name (please do not enter level) <span class="text-danger">*</span></label>
                                            <input type="text" @change="removeerror('schoolname','schoolname_err')" class="form-control font-weight-bolder" id="schoolname" v-model="schoolname" style="width: 100%;"/>
                                            <span id="schoolname_err" class="text-danger"></span>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <label class="font-weight-normal">School Level</label>
                                            <select class="select2bs4" id="schoollevel" v-model="schoollevel" style="width: 100%;">
                                                <option value="" label="- Please Select -">- Please Select -</option>
                                                <option value="1" label="Community Primary School [01]">Community Primary School [01]</option>
                                                <option value="2" label="Primary School [02]">Primary School [02]</option>
                                                <option value="3" label="Lower Secondary School [03]">Lower Secondary School [03]</option>
                                                <option value="4" label="Middle Secondary School [04]">Middle Secondary School [04]</option>
                                                <option value="5" label="Higher Secondary School [05]">Higher Secondary School [05]</option>
                                                <option value="7" label="Special Institute [06]">Special Institute [06]</option>
                                                <option value="8" label="Extended Classroom [07]">Extended Classroom [07]</option>
                                                <option value="9" label="Early Childhood Care &amp; Development [09]">Early Childhood Care &amp; Development [09]</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row form-group">
                                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <label class="font-weight-normal">School Location</label>
                                            <select class="select2bs4" id="schoolLocation" v-model="schoolLocation" style="width: 100%;">
                                                <option value="" label="- Please Select -">- Please Select -</option>
                                                <option value="1" label="Urban Grade 1 [01]">Urban Grade 1 [01]</option>
                                                <option value="2" label="Urban Grade 2 [02]">Urban Grade 2 [02]</option>
                                                <option value="3" label="Semi-Urban [03]">Semi-Urban [03]</option>
                                                <option value="4" label="Semi-Remote [04]">Semi-Remote [04]</option>
                                                <option value="5" label="Remote [05]">Remote [05]</option>
                                                <option value="6" label="Very-Remote [06]">Very-Remote [06]</option>
                                                <option value="7" label="Difficult [07]">Difficult [07]</option>
                                                <option value="9" label="Rural [08]">Rural [08]</option>
                                                <option value="10" label="Semi-Rural [09]">Semi-Rural [09]</option>
                                                <option value="11" label="Urban [10]">Urban [10]</option>
                                                <option value="8" label="Unknown [99]">Unknown [99]</option>
                                            </select>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <label class="font-weight-normal">School Status</label>
                                            <select class="select2bs4 font-weight-bolder" id="schoolstatus" v-model="schoolstatus" style="width: 100%;">
                                                <option value="" label="- Please Select -">- Please Select -</option>
                                                <option value="1" label="Opened [1]">Opened [1]</option>
                                                <option value="2" label="Closed [2]">Closed [2]</option>
                                                <option value="3" label="Bifurcated [3]">Bifurcated [3]</option>
                                                <option value="4" label="Merged [4]">Merged [4]</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div class="row form-group">
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <label class="font-weight-normal">Agency Code (7 letters, like 028.001, defined by RCSC) <span class="text-danger">*</span></label>
                                        <input type="number" @change="removeerror('agencycode','agencycode_err')" class="form-control font-weight-bolder" id="agencycode" v-model="agencycode" style="width: 100%;"/>
                                        <span id="agencycode_err" class="text-danger"></span>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <label class="font-weight-normal">RCSC Code (15 letters, like 001.002.003.004, defined by RCSC)</label>
                                        <input type="number" class="form-control font-weight-bolder" id="rcsccode" v-model="rcsccode" style="width: 100%;"/>
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <label class="font-weight-normal"> MoF Code (6 letters, like 121.01, defined by MoF)</label>
                                        <input type="number" class="form-control font-weight-bolder" id="mofcode" v-model="mofcode" style="width: 100%;"/>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <label class="font-weight-normal">Year of establishment (e.g. 1976)</label>
                                        <input type="number" class="form-control font-weight-bolder" id="establishmentyear" v-model="establishmentyear" style="width: 100%;"/>
                                    </div>
                                </div>
                                <hr>
                                <div class="row form-group fa-pull-right">
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <button class="btn btn-flat btn-primary" @click="shownexttab('basic-tabs','location-tab')"> Next <i class="fa fa-arrow-right"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="location-tab" role="tabpanel" aria-labelledby="location">
                                <div class="row form-group">
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <label class="font-weight-normal">Dzongkhag <span class="text-danger">*</span></label>
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
                                        <label class="font-weight-normal">Gewog <span class="text-danger">*</span></label>
                                        <select class="select2bs4 font-weight-bolder" id="locationgewog" v-model="locationgewog" style="width: 100%;">
                                            <option value="" label="- First Select Dzongkhag -">- First Select Dzongkhag -</option>
                                            <option value="1">Chokhor</option><option value="2">Chumey </option>
                                            <option value="3">Tang </option><option value="4">Ura </option>
                                            <option value="208">Other </option>
                                        </select>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <label class="font-weight-normal">Village <span class="text-danger">*</span></label>
                                        <select class="select2bs4 font-weight-bolder" id="locationvillage" v-model="locationvillage" style="width: 100%;">
                                            <option value="" label="- First Select Gewog -">- First Select Gewog -</option>
                                            <option value="1">Chakhar [0001]</option><option value="2">Chamkhar [0002]</option><option value="3">Chamkhar Throm [0003]</option><option value="4">Changwa [0004]</option><option value="5">Damphel [0005]</option><option value="6">Dawathang [0006]</option><option value="7">Dhur Dok [0007]</option><option value="8">Dhur Lusibe [0008]</option><option value="9">Dhur Moen [0009]</option><option value="10">Dodrong [0010]</option><option value="11">Dorjibe [0011]</option><option value="12">Goling [0012]</option><option value="13">Gongkhar [0013]</option><option value="14">Gyelkhar [0014]</option><option value="15">Jakar [0015]</option><option value="16">Jakar Lhakhang [0016]</option><option value="17">Jampel Lhakhang [0017]</option><option value="18">Kenchosum [0018]</option><option value="19">Khangdok [0019]</option><option value="20">Kharsa [0020]</option><option value="21">Kharsum [0021]</option><option value="22">Lamagonpa [0022]</option><option value="23">Nanglakhang [0023]</option><option value="24">Nangsephel/Tendok [0024]</option><option value="25">Nangseyphel [0025]</option><option value="26">Norbugang [0026]</option><option value="27">Pangrey [0027]</option><option value="28">Petseling [0028]</option><option value="29">Poengar [0029]</option><option value="30">Potola [0030]</option><option value="31">Samthang [0031]</option><option value="32">Saram [0032]</option><option value="33">Shukdak [0033]</option><option value="34">Tamshing [0034]</option><option value="35">Tashiling [0035]</option><option value="36">Tendok [0036]</option><option value="37">Thangbi [0037]</option><option value="38">Torshong [0038]</option><option value="39">Wangdicholing [0039]</option><option value="40">Zangling [0040]</option><option value="41">Zhapthang [0041]</option><option value="4983">Sangsangma [5001]</option><option value="4984">Tashigatshel [5002]</option><option value="4985">Dekiling [5003]</option><option value="4356">Other [8501]</option><option value="4357">Unknown [9001]</option>
                                        </select>
                                    </div>
                                </div>
                               
                                <div class="row form-group">
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <label class="font-weight-normal"> Altitude: </label>
                                        <input type="number" class="form-control font-weight-bolder" id="altitute" v-model="altitute" style="width: 100%;"/>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <label class="font-weight-normal">Latitude</label>
                                        <input type="number" class="form-control font-weight-bolder" id="latitute" v-model="latitute" style="width: 100%;"/>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <label class="font-weight-normal">Longitude</label>
                                        <input type="number" class="form-control font-weight-bolder" id="longitute" v-model="longitute" style="width: 100%;"/>
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <label class="font-weight-normal"> Thram Number <span class="text-danger">*</span></label>
                                        <input type="text" class="form-control font-weight-bolder" id="thrmno" v-model="thrmno" style="width: 100%;"/>
                                    </div>
                                </div>
                                <hr>
                                <div class="row form-group fa-pull-right">
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <button class="btn btn-flat btn-success" @click="previoustab('basic-tabs','location-tab')"><i class="fa fa-arrow-left"></i> Previous </button>
                                        <button class="btn btn-flat btn-primary" @click="shownexttab('location-tab','schooldetails-tab')"> Next <i class="fa fa-arrow-right"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="schooldetails-tab" role="tabpanel" aria-labelledby="custom-tabs-four-messages-tab">
                                <div class="row form-group">
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <label class="font-weight-normal">Climate Type <span class="text-danger">*</span></label>
                                        <select class="select2bs4 font-weight-bolder" id="climatetype" v-model="climatetype" style="width: 100%;">
                                            <option value="" label="- Please Select -">- Please Select -</option>
                                            <option value="1" label="Hot Sub-tropical [01]">Hot Sub-tropical [01]</option>
                                            <option value="2" label="Warm Sub-tropical [02]">Warm Sub-tropical [02]</option>
                                            <option value="3" label="Warm Temprate [03]">Warm Temprate [03]</option>
                                            <option value="4" label="Cool Temprate [04]">Cool Temprate [04]</option>
                                            <option value="5" label="Alpine [05]">Alpine [05]</option>
                                        </select>                                 
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <label class="font-weight-normal">Road Type <span class="text-danger">*</span></label>
                                        <select class="select2bs4 font-weight-bolder" id="locationgewog" v-model="locationgewog" style="width: 100%;">
                                            <option value="" label="- Please Select -">- Please Select -</option>
                                            <option value="3" label="Farm/Power tiller Road [03]">Farm/Power tiller Road [03]</option>
                                            <option value="2" label="FeederRoad [02]">FeederRoad [02]</option>
                                            <option value="1" label="TarredRoad [01]">TarredRoad [01]</option>
                                        </select>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <label class="font-weight-normal">Is the school accessible by motor road? <span class="text-danger">*</span></label>
                                        <div class="clearfix">
                                            <div class="icheck-primary d-inline">
                                                <input type="radio" id="moterroadaccessible1" name="moterroadaccessible">
                                                <label for="moterroadaccessible1">
                                                   Yes
                                                </label>
                                            </div>
                                            <div class="icheck-primary d-inline pl-4">
                                                <input type="radio" id="moterroadaccessible2" name="moterroadaccessible">
                                                <label for="moterroadaccessible2">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row form-group" id="roadnotaccesible" style="display:none">
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <label class="font-weight-normal"> How far is the school from road in days (e.g. 1.3 days): </label>
                                        <input type="number" class="form-control font-weight-bolder" id="distancefromroaddays" v-model="distancefromroaddays" style="width: 100%;"/>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <label class="font-weight-normal">How far is the school from road in kilometers (e.g. 12.3 Km)</label>
                                        <input type="number" class="form-control font-weight-bolder" id="distancefromroadkm" v-model="distancefromroadkm" style="width: 100%;"/>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <label class="font-weight-normal">How far is the school from road in hours? (e.g. 4.8 hours)</label>
                                        <input type="number" class="form-control font-weight-bolder" id="distancefromroadhrs" v-model="distancefromroadhrs" style="width: 100%;"/>
                                    </div>
                                </div>
                                <div class="row form-group" >
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <label class="font-weight-normal"> Is the school a resource center? </label><br>
                                        <div class="icheck-primary d-inline">
                                            <input type="radio" id="resourceschool1" name="resourceschool">
                                            <label for="resourceschool1">
                                                Yes
                                            </label>
                                        </div>
                                        <div class="icheck-primary d-inline pl-4">
                                            <input type="radio" id="resourceschool2" name="resourceschool">
                                            <label for="resourceschool2">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <label class="font-weight-normal">Compound Area (in acres)</label>
                                        <input type="text" class="form-control font-weight-bolder" id="compoundarea" v-model="compoundarea" style="width: 100%;"/>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <label class="font-weight-normal">Play ground Area (in sq. M)</label>
                                        <input type="text" class="form-control font-weight-bolder" id="playgroundmeasure" v-model="playgroundmeasure" style="width: 100%;"/>
                                    </div>
                                </div>
                                <div class="row form-group" >
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <label class="font-weight-normal">Play ground Description</label>
                                        <textarea class="form-control font-weight-bolder" id="playgrounddescription" v-model="playgrounddescription"></textarea>
                                    </div>
                                </div>
                                <div class="row form-group" >
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <label class="font-weight-normal">Agriculture Area (in acres)</label>
                                        <input type="number" class="form-control font-weight-bolder" id="agrriculturearea" v-model="agrriculturearea" style="width: 100%;"/>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <label class="font-weight-normal">Used Agriculture Area (in acres)</label>
                                        <input type="number" class="form-control font-weight-bolder" id="usedagriculture" v-model="usedagriculture" style="width: 100%;"/>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <label class="font-weight-normal"> Does school have sufficient water supply? </label>
                                        <div class="icheck-primary d-inline">
                                            <input type="radio" id="watersupply1" name="watersupply">
                                            <label for="watersupply1">
                                                Yes
                                            </label>
                                        </div>
                                        <div class="icheck-primary d-inline pl-4">
                                            <input type="radio" id="watersupply12" name="watersupply">
                                            <label for="watersupply12">
                                                No
                                            </label>
                                        </div>
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
            organizationtype:"",
            schoollevel:"",
            schoolname:"",
            schoolLocation:"",schoolstatus:"",
            agencycode:"",rcsccode:"",mofcode:"",
            establishmentyear:"",
            locationdzongkhag:"",locationgewog:"",locationvillage:"",thrmno:"",altitute:"",latitute:"",longitute:"",
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
                        this.$router.push('/orgmanagement')
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
        }
    },

    mounted() {
        $('#cardheader').html('New Organization Form');
        $('#addneworg').hide();
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
 