<template>
    <div> 
        <br>
        <div class="card card-outline card-info">
            <div class="card-header">
                <h3 class="card-title"><b>Organizations </b>>> Location Details</h3>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-12"> 
                        <div class="card card-primary card-outline-tabs">
                            <div class="card-header p-0 border-bottom-0">
                                <ul class="nav nav-tabs">
                                    <li class="nav-item basic-tabs">
                                        <a class="nav-link" href="#" id="location-tab-head" data-toggle="pill" role="tab">
                                            <span class="step_no img-bordered pr-2 pl-2 pb-1 pt-1 bg-gradient-secondary text-white">1</span>
                                            <label>Location Details</label>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="card-body">
                                <div class="tab-content">
                                    <div class="tab-pane show active" role="tabpanel">
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
           
        }
    },
    methods: {
        previoustab(preclass,presentclass){
            $('.basic-tabs>a').removeClass('active');
            $('#basic-tabs').removeClass('active show');
            $('.contactdetails-tab >a').removeClass('active');
            $('#contactdetails-tab').removeClass('active show');
            $('.'+preclass+'> a').addClass('active');
            $('#'+preclass).addClass('active show');
        },
        shownexttab(presentclass,nextclass){
            $('.basic-tabs>a').removeClass('active');
            $('#basic-tabs').removeClass('active show');
            $('.contactdetails-tab >a').removeClass('active');
            $('#contactdetails-tab').removeClass('active show');
            $('.'+nextclass+'> a').addClass('active');
            $('#'+nextclass).addClass('active show');
            $('.'+nextclass+'> a').removeClass('disabled');
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
        
        removeerror(fieldid,errid){
            if($('#'+fieldid).val()!=""){
                $('#'+fieldid).removeClass('is-invalid');
                $('#'+errid).html(''); 
            }
        },
    },

    mounted() {
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
 