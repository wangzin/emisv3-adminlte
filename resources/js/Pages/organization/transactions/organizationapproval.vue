<template>
    <div>
       <br>
        <div class="card card-outline card-info">
            <div class="card-header">
                <h3 class="card-title" id="cardheader">Organizations Application</h3>
            </div>
            <div class="card-body">
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
                                        <a class="nav-link" href="#" id="location-tab-head" data-toggle="pill" @click="shownexttab('basic-tabs','location-tab')" role="tab" aria-controls="custom-tabs-four-profile" aria-selected="false">
                                            <span class="step_no img-bordered pr-2 pl-2 pb-1 pt-1 bg-gradient-secondary text-white">2</span>
                                            <label>Location Details</label>
                                            <span class="fa fa-angle-double-right"></span> 
                                        </a>
                                    </li>
                                    <li class="nav-item schooldetails-tab">
                                        <a class="nav-link" id="schooldetails-tab-head" data-toggle="pill" @click="shownexttab('location-tab','schooldetails-tab')" role="tab" aria-controls="custom-tabs-four-messages" aria-selected="false">
                                            <span class="step_no img-bordered pr-2 pl-2 pb-1 pt-1 bg-gradient-secondary text-white">3</span>
                                            <label>School/organization Details</label>
                                            <span class="fa fa-angle-double-right"></span> 
                                        </a>
                                    </li>
                                    <li class="nav-item contactdetails-tab">
                                        <a class="nav-link" id="contactdetails-tab-head" data-toggle="pill" @click="shownexttab('schooldetails-tab','contactdetails-tab')" role="tab" aria-controls="custom-tabs-four-settings" aria-selected="false">
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
                                                <label class="font-weight-normal">Organization Type</label>
                                                <select class="select2bs4" id="organizationtype" disabled style="width: 100%;">
                                                    <option value="School">School</option>
                                                </select>
                                                <span class="text-danger" id="organizatioid_err"></span>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12" id="schoolcat"> 
                                                <label class="font-weight-normal">School Category</label>
                                                <div class="clearfix">
                                                    <div class="icheck-primary d-inline">
                                                        <input type="radio" checked disabled id="radioPrimary1" name="schoolcategory">
                                                        <label for="radioPrimary1">
                                                            Public School
                                                        </label>
                                                    </div>
                                                    <div class="icheck-primary d-inline pl-4">
                                                        <input type="radio" disabled id="radioPrimary2" name="schoolcategory">
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
                                                    <label class="font-weight-normal">School Name (please do not enter level)</label>
                                                    <input type="text" value="Name of the applied school" readonly class="form-control font-weight-bolder" id="schoolname" style="width: 100%;"/>
                                                </div>
                                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                    <label class="font-weight-normal">School Level</label>
                                                    <select class="select2bs4" id="schoollevel" disabled style="width: 100%;">
                                                        <option value="5" label="Higher Secondary School [05]">Higher Secondary School [05]</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="row form-group">
                                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                    <label class="font-weight-normal">School Location</label>
                                                    <select class="select2bs4" id="schoolLocation" disabled style="width: 100%;">
                                                        <option value="2" label="Urban Grade 2 [02]">Urban Grade 2 [02]</option>
                                                    </select>
                                                </div>
                                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                    <label class="font-weight-normal">School Status</label>
                                                    <select class="select2bs4 font-weight-bolder" id="schoolstatus" disabled style="width: 100%;">
                                                        <option value="1" label="Opened [1]">Opened [1]</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row form-group">
                                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                <label class="font-weight-normal">Agency Code</label>
                                                <input type="number" value="028.023" readonly class="form-control font-weight-bolder" id="agencycode" style="width: 100%;"/>
                                                <span id="agencycode_err" class="text-danger"></span>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                <label class="font-weight-normal">RCSC Code</label>
                                                <input type="number" class="form-control font-weight-bolder" id="rcsccode" value="001.002.003.023" readonly style="width: 100%;"/>
                                            </div>
                                        </div>
                                        <div class="row form-group">
                                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                <label class="font-weight-normal"> MoF Code</label>
                                                <input type="number" class="form-control font-weight-bolder" id="mofcode" value="121.21" readonly style="width: 100%;"/>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                <label class="font-weight-normal">Year of establishment</label>
                                                <input type="number" class="form-control font-weight-bolder" id="establishmentyear" value="2019" readonly style="width: 100%;"/>
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
                                                <label class="font-weight-normal">Dzongkhag </label>
                                                <select class="select2bs4 font-weight-bolder" id="locationdzongkhag" disabled style="width: 100%;">
                                                    <option value="6" label="Lhuentse [06]">Lhuentse</option>
                                                </select>                                    
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                <label class="font-weight-normal">Gewog:</label>
                                                <select class="select2bs4 font-weight-bolder" id="locationdzongkhag" disabled style="width: 100%;">
                                                    <option value="Tang">Tang</option>
                                                </select>                                    
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                <label class="font-weight-normal">Village </label>
                                                <select class="select2bs4 font-weight-bolder" id="locationvillage" disabled style="width: 100%;">
                                                    <option value="1">Chakhar [0001]</option>
                                                </select>
                                            </div>
                                        </div>  
                                    
                                        <div class="row form-group">
                                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                <label class="font-weight-normal"> Altitude: </label>
                                                <input type="text" class="form-control font-weight-bolder" id="altitute" value="23" readonly style="width: 100%;"/>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                <label class="font-weight-normal">Latitude</label>
                                                <input type="number" class="form-control font-weight-bolder" id="latitute" value="12" readonly style="width: 100%;"/>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                <label class="font-weight-normal">Longitude</label>
                                                <input type="number" class="form-control font-weight-bolder" id="longitute" readonly value="11" style="width: 100%;"/>
                                            </div>
                                        </div>
                                        <div class="row form-group">
                                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                <label class="font-weight-normal"> Thram Number <span class="text-danger">*</span></label>
                                                <input type="text" class="form-control font-weight-bolder" id="thrmno" value="123" readonly style="width: 100%;"/>
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
                                                <select class="select2bs4 font-weight-bolder" id="climatetype" disabled style="width: 100%;">
                                                    <option value="2" label="Warm Sub-tropical [02]">Warm Sub-tropical [02]</option>
                                                </select>                                 
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                <label class="font-weight-normal">Road Type <span class="text-danger">*</span></label>
                                                <select class="select2bs4 font-weight-bolder" id="locationgewog" disabled style="width: 100%;">
                                                    <option value="2" label="FeederRoad [02]">FeederRoad [02]</option>
                                                </select>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                <label class="font-weight-normal">Is the school accessible by motor road? <span class="text-danger">*</span></label>
                                                <div class="clearfix">
                                                    <div class="icheck-primary d-inline">
                                                        <input type="radio"  disabled id="moterroadaccessible1" name="moterroadaccessible">
                                                        <label for="moterroadaccessible1">
                                                        Yes
                                                        </label>
                                                    </div>
                                                    <div class="icheck-primary d-inline pl-4">
                                                        <input type="radio" checked disabled id="moterroadaccessible2" name="moterroadaccessible">
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
                                                <input type="number" class="form-control font-weight-bolder" id="distancefromroaddays" value="1 day" readonly style="width: 100%;"/>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                <label class="font-weight-normal">How far is the school from road in kilometers (e.g. 12.3 Km)</label>
                                                <input type="number" class="form-control font-weight-bolder" id="distancefromroadkm" value="20 km" readonly style="width: 100%;"/>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                <label class="font-weight-normal">How far is the school from road in hours? (e.g. 4.8 hours)</label>
                                                <input type="number" class="form-control font-weight-bolder" id="distancefromroadhrs" value="24 hrs" readonly style="width: 100%;"/>
                                            </div>
                                        </div>
                                        <div class="row form-group" >
                                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                <label class="font-weight-normal"> Is the school a resource center? </label><br>
                                                <div class="icheck-primary d-inline">
                                                    <input type="radio" checked disabled id="resourceschool1" name="resourceschool">
                                                    <label for="resourceschool1">
                                                        Yes
                                                    </label>
                                                </div>
                                                <div class="icheck-primary d-inline pl-4">
                                                    <input type="radio" disabled id="resourceschool2" name="resourceschool">
                                                    <label for="resourceschool2">
                                                        No
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                <label class="font-weight-normal">Compound Area (in acres)</label>
                                                <input type="text" class="form-control font-weight-bolder" id="compoundarea" value="1 acre" readonly style="width: 100%;"/>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                <label class="font-weight-normal">Play ground Area (in sq. M)</label>
                                                <input type="text" class="form-control font-weight-bolder" id="playgroundmeasure" readonly value="20 sq M" style="width: 100%;"/>
                                            </div>
                                        </div>
                                        <div class="row form-group" >
                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <label class="font-weight-normal">Play ground Description</label>
                                                <textarea class="form-control font-weight-bolder" id="playgrounddescription" readonly> standard size of football ground.</textarea>
                                            </div>
                                        </div>
                                        <div class="row form-group" >
                                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                <label class="font-weight-normal">Agriculture Area (in acres)</label>
                                                <input type="number" class="form-control font-weight-bolder" id="agrriculturearea" value="2 acres" readonly style="width: 100%;"/>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                <label class="font-weight-normal">Used Agriculture Area (in acres)</label>
                                                <input type="number" class="form-control font-weight-bolder" id="usedagriculture" value="1 acre" readonly style="width: 100%;"/>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                <label class="font-weight-normal"> Does school have sufficient water supply? </label>
                                                <div class="icheck-primary d-inline">
                                                    <input type="radio" checked disabled id="watersupply1" name="watersupply">
                                                    <label for="watersupply1">
                                                        Yes
                                                    </label>
                                                </div>
                                                <div class="icheck-primary d-inline pl-4">
                                                    <input type="radio" disabled id="watersupply12" name="watersupply">
                                                    <label for="watersupply12">
                                                        No
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row form-group" >
                                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                <label class="font-weight-normal">No of tap stand for students</label>
                                                <input type="number" class="form-control font-weight-bolder" id="tabstandNo" value="5" readonly style="width: 100%;"/>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                <label class="font-weight-normal">Reason for Water Problem</label>
                                                <textarea class="form-control font-weight-bolder" id="waterproblem" readonly></textarea>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                <label class="font-weight-normal"> Does the school have sufficient electricity? </label>
                                                <div class="icheck-primary d-inline">
                                                    <input type="radio" checked disabled id="electricity1" name="electricity">
                                                    <label for="electricity1">
                                                        Yes
                                                    </label>
                                                </div>
                                                <div class="icheck-primary d-inline pl-4">
                                                    <input type="radio" disabled id="electricity12" name="electricity">
                                                    <label for="electricity12">
                                                        No
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row form-group" >
                                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                <label class="font-weight-normal">Remarks on electricity</label>
                                                <textarea class="form-control font-weight-bolder" id="electricremarks" readonly></textarea>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                <label class="font-weight-normal">The way to collect data from school</label>
                                                <select class="select2bs4 font-weight-bolder" id="wayofdatacollection" disabled style="width: 100%;">
                                                    <option value="3" label="By excel sheet [2]">By excel sheet [2]</option>
                                                </select>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                <label class="font-weight-normal">Owner of land</label><br>
                                                <div class="icheck-primary d-inline">
                                                    <input type="radio" checked disabled id="landowner1" name="landowner">
                                                    <label for="landowner1">
                                                        Government 
                                                    </label>
                                                </div>
                                                <div class="icheck-primary d-inline pl-4">
                                                    <input type="radio" disabled id="landowner12" name="landowner">
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
                                                    <input type="radio" id="internetlaboratory1" disabled name="internetlaboratory">
                                                    <label for="internetlaboratory1">
                                                        Yes 
                                                    </label>
                                                </div>
                                                <div class="icheck-primary d-inline pl-4">
                                                    <input type="radio" id="internetlaboratory12" checked disabled name="internetlaboratory">
                                                    <label for="internetlaboratory12">
                                                        No 
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                <label class="font-weight-normal">LAN at laboratory</label>
                                                <div class="icheck-primary d-inline">
                                                    <input type="radio" disabled id="lanlaboratory1" name="lanlaboratory">
                                                    <label for="lanlaboratory1">
                                                        Yes 
                                                    </label>
                                                </div>
                                                <div class="icheck-primary d-inline pl-4">
                                                    <input type="radio" disabled checked id="lanlaboratory12" name="lanlaboratory">
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
                                                    <input type="radio" checked disabled  id="telephoneconnection1" name="telephoneconnection">
                                                    <label for="telephoneconnection1">
                                                        Yes 
                                                    </label>
                                                </div>
                                                <div class="icheck-primary d-inline pl-4">
                                                    <input type="radio" disabled id="telephoneconnection12" name="telephoneconnection">
                                                    <label for="telephoneconnection12">
                                                        No 
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                <label class="font-weight-normal">Telephone No (less than 15 letters)</label>
                                                <input type="text" value="1212312" readonly class="form-control font-weight-bolder" id="telephone" style="width: 100%;"/>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                <label class="font-weight-normal">Fax No (less than 15 letters)</label>
                                                <input type="text" value="234321" readonly class="form-control font-weight-bolder" id="faxno" style="width: 100%;"/>
                                            </div>
                                        </div>
                                        <div class="row form-group" >
                                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                <label class="font-weight-normal">Does the school have internet connection?</label>
                                                <div class="icheck-primary d-inline">
                                                    <input type="radio" checked disabled id="internetconn1" name="internetconn">
                                                    <label for="internetconn1">
                                                        Yes 
                                                    </label>
                                                </div>
                                                <div class="icheck-primary d-inline pl-4">
                                                    <input type="radio" disabled id="internetconn12" name="internetconn">
                                                    <label for="internetconn12">
                                                        No 
                                                    </label>
                                                </div> 
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                <label class="font-weight-normal">Email Address (e.g. hajime.ishii@gmail.com)</label>
                                                <input type="text" value="school@gov.bt" readonly class="form-control font-weight-bolder" id="email" style="width: 100%;"/>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                <label class="font-weight-normal">Remarks On Telephone (less than 100 letters)</label>
                                                <textarea class="form-control font-weight-bolder" id="teleremarks" readonly></textarea>
                                            </div>
                                        </div>
                                        <hr>
                                        <div class="row form-group fa-pull-right">
                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <button class="btn btn-flat btn-success" @click="previoustab('schooldetails-tab','contactdetails-tab')"><i class="fa fa-arrow-left"></i> Previous </button>
                                                <button class="btn btn-flat btn-primary" @click="submitfinalform('approve')"><i class="fa fa-check"></i> Approve </button>
                                                <button class="btn btn-flat btn-danger" @click="submitfinalform('reject')"><i class="fa fa-times"></i> Reject</button>
                                                <button class="btn btn-flat btn-info" @click="submitfinalform('forward')"><i class="fa fa-forward"></i> Forward</button>
                                            </div>
                                        </div>
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
            $('.'+nextclass+'> a').addClass('active');
            $('#'+nextclass).addClass('active show');
        },
        submitfinalform(type){
            let title="";
            let icon="";
            let afteraction="";
            let acknowledgement="";
            if(type=="approve"){
                title="Are you sure you wish to approve this application?";  
                icon="info";  
                afteraction="Approved";
                acknowledgement="Thank you for approving this application";
            }
            if(type=="reject"){
                title="Are you sure you wish to reject this application?";  
                icon="danger"; afteraction="Rejected";
                acknowledgement="You have rejected the application";

            }
            if(type=="forward"){
                title="Are you sure you wish to forward this application?";  
                icon="warning";  
                afteraction="Forwarded";
                acknowledgement="You have forwarded this application for further actions.";
            }
            Swal.fire({  
                title: title,
                text: "You won't be able to revert this back once you take action from here!",
                icon: icon,
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes!',
                }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        afteraction,
                        acknowledgement,
                        'success',
                        this.$router.push('/taslistforall')
                    )
                }
            })
        },
    },

    mounted() {
        $('.select2').select2()
        $('.select2bs4').select2({
            theme: 'bootstrap4'
        });
        $('.select2-selection__rendered').addClass('font-weight-bolder');
    },
}
</script>