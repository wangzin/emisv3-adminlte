<template>
    <div>
        <div class="breadcrumbs ace-save-state" id="breadcrumbs">
            <ol class="breadcrumb"> 
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item">INSET</li>
                <li class="breadcrumb-item active">Apply Training</li>
            </ol>
        </div>
        <div class="card card-success card-outline">
            <div class="card-header">
                <h2 class="card-title"><b>Training Under Process</b></h2>
            </div>
            <div class="card-body">   
                <div class="form-group row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <table id="training-table" class="table table-sm table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>Sl No</th>
                                    <th>Training Name</th>
                                    <th>Place/Vanue</th>    
                                    <th>Start Date</th>    
                                    <th>Date Of Completion</th> 
                                    <th>Duration</th> 
                                    <th>Status</th> 
                                    <th style="width:100px">Action</th>                     
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> 1</td>
                                    <td>Qualification Upgradation</td>
                                    <td> Thimphu, Bhutan</td>
                                    <td> 2021/01/01</td>
                                    <td> 2023/12/31</td>
                                    <td> 3 years</td>
                                    <td><span class="badge badge-success"> Processing</span> </td>
                                    <td> 
                                        <button type="button" class="btn btn-dark btn-sm btn-flat mb-0.5" @click="showadprocess('viewdetails')"><i class="fa fa-eye"></i> View Details</button>
                                        <button type="button" class="btn btn-info btn-sm btn-flat pl-1.5 pr-1,5" @click="showadprocess('applyfortraining')"><i class="fa fa-edit"></i> &nbsp;Apply Now &nbsp;</button>
                                    </td>
                                </tr> 
                                 <tr>
                                    <td> 2</td>
                                    <td>Professional Development Program</td>
                                    <td> Thimphu, Bhutan</td>
                                    <td> 2021/01/01</td>
                                    <td> 2021/06/31</td>
                                    <td> 6 Months</td>
                                    <td><span class="badge badge-success"> Processing</span> </td>
                                    <td> 
                                        <button type="button" class="btn btn-dark btn-sm btn-flat pl-1 mb-0.5" @click="showadprocess('viewdetails')"><i class="fa fa-eye"></i> View Details</button>
                                        <button type="button" class="btn btn-info btn-sm btn-flat pl-1" @click="showadprocess('applyfortraining')"><i class="fa fa-edit"></i> &nbsp;Apply Now &nbsp;</button>
                                    </td>
                                </tr> 
                                <tr>
                                    <td> 3</td>
                                    <td> Workshop</td>
                                    <td> Phuntsholing, Bhutan</td>
                                    <td> 2021/02/01</td>
                                    <td> 2021/02/31</td>
                                    <td> 1 Month</td>
                                    <td><span class="badge badge-success"> Processing</span> </td>
                                    <td> 
                                        <button type="button" class="btn btn-dark btn-sm btn-flat pl-1 mb-0.5" @click="showadprocess('viewdetails')"><i class="fa fa-eye"></i> View Details</button>
                                        <button type="button" class="btn btn-info btn-sm btn-flat pl-1" @click="showadprocess('applyfortraining')"><i class="fa fa-edit"></i> &nbsp;Apply Now &nbsp;</button>
                                    </td>
                                </tr> 
                            </tbody>
                        </table>
                    </div>
                </div>  
            </div>
        </div>
        <div class="modal fade show" id="trainingdetailsid" aria-modal="true" style="padding-right: 17px;">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Training Details</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form class="bootbox-form">
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
                        </form>
                    </div>
                    <div class="modal-footer justify-content-right">
                        <button type="button" data-dismiss="modal" class="btn btn-warning btn-flat">Cancel</button>
						<button type="button" class="btn btn-primary btn-flat">OK</button>
                    </div>
                </div>
            </div>
        </div> 
    </div>
</template>
<script>
export default {
    methods: {
        showadprocess(type){
            if(type=="viewdetails"){
                $('#trainingdetailsid').modal('show');
            }
            else{
                this.$router.push("/"+type);
            }
		},
    },
    mounted() {
        $("#training-table").DataTable({
            "responsive": true,
            "autoWidth": true,
        }); 
    },
    
}
</script>


