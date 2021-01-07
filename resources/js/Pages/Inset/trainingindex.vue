<template>
    <div>
        <div class="breadcrumbs ace-save-state" id="breadcrumbs">
            <ol class="breadcrumb"> 
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item">INSET</li>
                <li class="breadcrumb-item active">Training</li>
            </ol>
        </div>
        <div class="card card-success card-outline">
            <div class="card-header">
                <h2 class="card-title"><b>Trainig Ongoing & Under Process List</b></h2>
                <span class="fa-pull-right">
                    <button type="button" class="btn btn-dark btn-flat text-white btn-sm" @click="showadprocess('create_new_training')"><i class="fa fa-plus"></i> Create New Training</button>
                    <button type="button" class="btn btn-primary btn-flat text-white btn-sm" @click="showadprocess('traininglist')"><i class="fa fa-list"></i> View All Training Details</button>
                </span>
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
                                    <th>Action</th>                     
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
                                    <td><span class="badge badge-warning"> On going</span> </td>
                                    <td> 
                                        <button type="button" class="btn btn-success btn-sm btn-flat mb-0.5" @click="showadprocess('edit_training')">Edit Details</button>
                                        <button type="button" class="btn btn-info btn-sm btn-flat pl-1" @click="showadprocess('participant')">Participants</button>
                                    </td>
                                </tr> 
                                 <tr>
                                    <td> 2</td>
                                    <td>Professional Development Program</td>
                                    <td> Thimphu, Bhutan</td>
                                    <td> 2021/01/01</td>
                                    <td> 2021/06/31</td>
                                    <td> 6 Months</td>
                                    <td><span class="badge badge-warning"> On going</span> </td>
                                    <td> 
                                         <button type="button" class="btn btn-success btn-sm btn-flat mb-0.5" @click="showadprocess('edit_training')">Edit Details</button>
                                        <button type="button" class="btn btn-info btn-sm btn-flat pl-1" @click="showadprocess('participant')">Participants</button>
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
                                        <button type="button" class="btn btn-success btn-sm btn-flat mb-0.5" @click="showadprocess('edit_training')">Edit Details</button>
                                        <button type="button" class="btn btn-info btn-sm btn-flat pl-1" @click="showadprocess('participant')">Participants</button>
                                    </td>
                                </tr> 
                                <tr>
                                    <td> 4</td>
                                    <td> Workshop (System Training)</td>
                                    <td> Punakha, Bhutan</td>
                                    <td> 2021/06/01</td>
                                    <td> 2021/06/31</td>
                                    <td> 1 Month</td>
                                    <td><span class="badge badge-success"> Processing</span> </td>
                                    <td> 
                                         <button type="button" class="btn btn-success btn-sm btn-flat mb-0.5" @click="showadprocess('edit_training')"> Edit Details </button>
                                        <button type="button" class="btn btn-info btn-sm btn-flat pl-1" @click="showadprocess('participant')">Participants</button>
                                    </td>
                                </tr> 
                                <tr>
                                    <td> 5</td>
                                    <td> Siminer</td>
                                    <td> Thimphu, Bhutan</td>
                                    <td> 2021/06/01</td>
                                    <td> 2021/07/31</td>
                                    <td> 2 Month</td>
                                    <td><span class="badge badge-success"> Processing</span> </td>
                                    <td> 
                                        <button type="button" class="btn btn-success btn-sm btn-flat mb-0.5" @click="showadprocess('edit_training')">Edit Details</button>
                                        <button type="button" class="btn btn-info btn-sm btn-flat pl-1" @click="showadprocess('participant')">Participants</button>
                                    </td>
                                </tr> 
                            </tbody>
                        </table>
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
           this.$router.push("/"+type);
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


