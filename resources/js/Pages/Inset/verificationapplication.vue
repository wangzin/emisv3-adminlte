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
                <h2 class="card-title"><b>Training Details</b></h2>
            </div>
            <div class="card-body">   
                <div class="form-group row">
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <label class="font-weight-normal">Trainig Type: </label>
                        <span class="text-indigo-600">Professional Development Program</span>
                    </div> 
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <label class="font-weight-normal">Category: </label>
                        <span class="text-indigo-600">DBIP</span>
                    </div> 
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <label class="font-weight-normal">Type: </label>
                        <span class="text-indigo-600">Workshop</span>
                    </div> 
                </div>
                <div class="form-group row">
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <label class="font-weight-normal">Course Title: </label>
                        <span class="text-indigo-600">System Development Training</span>
                    </div> 
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <label class="font-weight-normal">Place/Vanue: </label>
                        <span class="text-indigo-600">Thimphu, Bhutan</span>
                    </div> 
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <label class="font-weight-normal">Financial Source: </label>
                        <span class="text-indigo-600">RGoB</span>
                    </div> 
                </div>
                <div class="form-group row">
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <label class="font-weight-normal">Start Date: </label>
                        <span class="text-indigo-600">2021-6-01</span>
                    </div> 
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <label class="font-weight-normal">End Date: </label>
                        <span class="text-indigo-600">2021-06-31</span>
                    </div> 
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <label class="font-weight-normal">Total Hours: </label>
                        <span class="text-indigo-600">2340 Hrs</span>
                    </div> 
                </div>
                <div class="form-group row">
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <label class="font-weight-normal">Training Status: </label>
                        <span class="text-indigo-600">Selecting Participant</span>
                    </div> 
                </div>
            </div>
        </div>
        <div class="card card-primary card-outline">
            <div class="card-header">
                <h2 class="card-title"><b>Applicaiton Details</b></h2>
            </div>
            <div class="card-body"> 
                <div class="form-group row">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <label class="font-weight-normal">Applicaiton Number:</label>
                        <input type="text" readonly value="#02234" class="form-control" name="course_title">
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <label class="font-weight-normal">Submission Date</label>
                        <input type="text" readonly value="2021-01-04" class="form-control" name="course_title">
                    </div>
                </div>  
                <div class="form-group row">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <label class="font-weight-normal">Applicant Name:</label>
                        <input type="text" readonly value="Phurba Dorji" class="form-control" name="course_title">
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <label class="font-weight-normal">Gender</label>
                        <input type="text" readonly value="Male" class="form-control" name="course_title">
                    </div>
                </div> 
                <div class="form-group row">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <label class="font-weight-normal">Working Agency:</label>
                        <input type="text" readonly value="Mothithang HSS" class="form-control" name="course_title">
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <label class="font-weight-normal">Dzonghag</label>
                        <input type="text" readonly value="Thimphu" class="form-control" name="course_title">
                    </div>
                </div>  
                <div class="form-group row">
                    <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                        <label class="ont-weight-normal">Participating as:<span class="text-danger">*</span></label>
                        <br><input type="radio" disabled name="participantas" value="Moderator"> Moderator &nbsp;
                        <input type="radio" disabledname="participantas" value="Moderator"> Participant&nbsp;
                        <input type="radio" disabled checked name="participantas" value="Participant"> Presenter&nbsp;
                        <input type="radio" disabled name="participantas" value="Trainer/Facilitator"> Trainer/Facilitator&nbsp;
                        <input type="radio" disabled name="participantas" value="Writer"> Writer&nbsp;
                        <input type="radio" disabled name="participantas" value="Writer"> Others&nbsp;
                    </div>                    
                </div>  
                <div class="form-group row">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <label class="font-weight-normal">Contact Number:<span class="text-danger">*</span></label>
                        <input type="text" readonly value="11111111" class="form-control" name="course_title">
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <label class="font-weight-normal">Email<span class="text-danger">*</span></label>
                        <input type="text" readonly value="phurba@mothithang.bt" class="form-control" name="course_title">
                    </div>
                </div>  
                <div class="form-group row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <label class="font-weight-normal">Remarks</label>
                        <textarea class="form-control" readonly name="remarks">
                            Participating for the first time
                        </textarea>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <label class="font-weight-normal">Your Remarks</label>
                        <textarea class="form-control"  @change="removeerror('verificationremarks','verificationremarks_error')" id="verificationremarks" name="remarks"></textarea>
                        <span class="text-danger" id="verificationremarks_error"></span>
                    </div>
                </div>
            </div>
            <div class="card-footer text-right">   
                <button type="button" class="btn btn-danger btn-sm btn-flat pl-1 mb-0.5" @click="takeaction('reject')"><i class="fa fa-times"></i> Reject</button>
                <button type="button" class="btn btn-success btn-sm btn-flat pl-1 mb-0.5" @click="takeaction('approve')"><i class="fa fa-check"></i> Approve</button>
                <button type="button" class="btn btn-dark btn-sm btn-flat pl-1" @click="takeaction('verify')"><i class="fa fa-forward"></i> &nbsp;Verify &nbsp;</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        showadprocess(type){
           this.$router.push("/"+type);
        },
        removeerror(fieldid,errid){
            if($('#'+fieldid).val()!=""){
                $('#'+fieldid).removeClass('is-invalid');
                $('#'+errid).html(''); 
            }
        },
        validateform(tye){
            let returntuype=true;
            if(tye=="reject" && $('#verificationremarks').val()==""){
                $('#verificationremarks_error').html('Please mention your remarks');
                $('#verificationremarks').focus();
                $('#verificationremarks').removeClass('is-invalid');
                returntuype=false;
            }
            return returntuype;
        },
        takeaction(type){
            if(this.validateform(type)){
                Swal.fire({
                    title: 'Are you sure you wish to take this action ?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes!',
                    }).then((result) => { 
                    if (result.isConfirmed) {
                        Swal.fire(
                            'Success!',
                            'information successfully updated against application number: #2311.',
                            'success',
                        )
                        this.$router.push("/taslist")
                    }
                });
            }
        }
    },
    mounted() {
        $("#training-table").DataTable({
            "responsive": true,
            "autoWidth": true,
        }); 
    },
    
}
</script>


