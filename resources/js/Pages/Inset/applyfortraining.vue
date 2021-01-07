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
                <h2 class="card-title"><b>Apply Form</b></h2>
            </div>
            <div class="card-body"> 
                <div class="form-group row">
                    <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                        <label class="ont-weight-normal">Participating as:<span class="text-danger">*</span></label>
                        <br><input type="radio" name="participantas" value="Moderator"> Moderator &nbsp;
                        <input type="radio" name="participantas" value="Moderator"> Participant&nbsp;
                        <input type="radio" name="participantas" value="Participant"> Presenter&nbsp;
                        <input type="radio" name="participantas" value="Trainer/Facilitator"> Trainer/Facilitator&nbsp;
                        <input type="radio" name="participantas" value="Writer"> Writer&nbsp;
                        <input type="radio" name="participantas" value="Writer"> Others&nbsp;
                    </div>
                    
                </div>  
                <div class="form-group row">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <label class="font-weight-normal">Contact Number:<span class="text-danger">*</span></label>
                        <input type="text" class="form-control" name="course_title">
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <label class="font-weight-normal">Email<span class="text-danger">*</span></label>
                        <input type="text" class="form-control" name="course_title">
                    </div>
                </div>  
                <div class="form-group row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <label class="font-weight-normal">Remarks</label>
                        <textarea class="form-control" name="remarks"></textarea>
                    </div>
                </div>
            </div>
            <div class="card-footer text-right">   
                <button type="button" class="btn btn-danger btn-sm btn-flat pl-1 mb-0.5"><i class="fa fa-ban"></i> Cancel</button>
                <button type="button" class="btn btn-dark btn-sm btn-flat pl-1" @click="applynow('applyfortraining')"><i class="fa fa-check"></i> &nbsp;Apply Now &nbsp;</button>
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
        applynow(){
            Swal.fire({
                title: 'Are you sure you wish to submit your application for this training ?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes!',
                }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Success!',
                        'Your application is submitted. Track your application with the system generated application number: #2311.',
                        'success',
                    )
                    this.$router.push("/apply_training")
                }
            });
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


