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
                <h2 class="card-title"><b>Participant List</b></h2>
            </div>
            <div class="card-body">   
                <div class="form-group row">
                   
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <table id="training-table" class="table table-sm table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>Sl No</th>
                                    <th>Participant Name</th>
                                    <th>Gendar</th> 
                                    <th>Contact Number</th>    
                                    <th>Working Agency</th>    
                                    <th>Dzongkhag</th> 
                                    <th>Status</th> 
                                    <th>Last Action Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> 1</td>
                                    <td>Kuenga Wangchuk</td>
                                    <td> Male</td>
                                    <td> 17888888</td>
                                    <td> Mothithang HSS</td>
                                    <td> Thumphu</td>
                                    <td><span class="badge badge-success"> Selected </span></td>
                                    <td>2021-01-04 </td>
                                </tr> 
                                 <tr>
                                    <td> 2</td>
                                    <td>Phuntsho Chogyel</td>
                                    <td>Male</td>
                                    <td> 77777777</td>
                                    <td>Yangchenphug HSS</td>
                                    <td> Thimphu</td>
                                    <td><span class="badge badge-success"> Selected </span></td>
                                    <td> 2021-01-04 </td>
                                </tr> 
                                <tr>
                                    <td> 3</td>
                                    <td> Sonam Zangmo</td>
                                    <td> Female</td>
                                    <td> 22222222</td>
                                    <td> Wangbama MSS</td>
                                    <td> Thimphu</td>
                                    <td><span class="badge badge-primary"> Pending </span></td>
                                    <td> 2021-01-01 </td>
                                </tr> 
                                <tr>
                                    <td> 4</td>
                                    <td> Phuntsho Wangmo</td>
                                    <td> Female</td>
                                    <td> 22111111</td>
                                    <td> Rinchen HSS</td>
                                    <td> Thimphu</td>
                                    <td><span class="badge badge-danger"> Rejected </span></td>
                                    <td> 2021-01-04</td>
                                </tr> 
                                <tr>
                                    <td> 5</td>
                                    <td> Karma Sonam</td>
                                    <td> Female</td>
                                    <td> 11111111</td>
                                    <td> Ugyen Dorji HSS</td>
                                    <td> Haa</td>
                                    <td><span class="badge badge-danger"> Rejected </span></td>
                                    <td>2020-01-04</td>
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


