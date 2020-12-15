<template>
    <div>
        <div class="breadcrumbs ace-save-state" id="breadcrumbs">
            <ol class="breadcrumb"> 
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item">Task List</li>
            </ol>
        </div>
        <div class="card card-outline card-primary">
            <div class="card-header">
                <h3 class="card-title" id="cardheader">Group Task</h3>
            </div>
            <div class="card-body">
               <table id="organization-table" class="table table-bordered table-striped table-head-fixed">
                    <thead>
                        <tr>
                            <th >Sl No.</th>
                            <th >Application Number</th>
                            <th >Service Name</th>
                            <th >Status</th>
                            <th >Submitted Date</th>
                            <th >Submitted By</th>
                            <th >Last Action Date</th>
                            <th >Last Action By</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="">1</td>
                            <td class="">
                                <router-link to="/openapplicaiton" class="nav-link" data-toggle="tooltip" title="Open and claim Application">
                                    <p>
                                        #02234
                                    </p>
                                </router-link>
                            </td> 
                            <td class="">Application for Organization Approval</td>
                            <td class=""> <span class="badge bg-primary">Submitted</span></td>
                            <td class="">2020-12-12</td>
                            <td class="">Kelzang Tshering</td>
                            <td class="">2020-12-12</td>
                            <td class="">Deo</td>
                        </tr>
                        <tr>
                            <td class="">2</td>
                            <td class="">
                                <router-link to="/openapplicaiton" class="nav-link" data-toggle="tooltip" title="Open and claim Application">
                                    <p>
                                        #02238
                                    </p>
                                </router-link>
                            </td> 
                            <td class="">Application for Organization Approval</td>
                            <td class=""><span class="badge bg-success">Verified</span></td>
                            <td class="">2020-12-12</td>
                            <td class="">Dorji</td>
                            <td class="">2020-12-13</td>
                            <td class="">SPCD</td>
                        </tr>
                        <tr>
                            <td class="">3</td>
                            <td class="">
                                <router-link to="/openapplicaiton" class="nav-link" data-toggle="tooltip" title="Open and claim Application">
                                    <p>
                                        #02232
                                    </p>
                                </router-link>
                            </td> 
                            <td class="">Application for Organization Approval</td>
                            <td class=""><span class="badge bg-primary">Submitted</span></td>
                            <td class="">2020-12-12</td>
                            <td class="">Sangay Dorji</td>
                            <td class="">2020-12-12</td>
                            <td class="">Deo</td>
                        </tr>
                        <tr>
                            <td class="">4</td>
                            <td class="">
                                <router-link to="/trainingpartifipantverification" class="nav-link" data-toggle="tooltip" title="Open and claim Application">
                                    <p>
                                        #02332
                                    </p>
                                </router-link>
                            </td> 
                            <td class="">Application for Training Participant</td>
                            <td class=""><span class="badge bg-primary">Submitted</span></td>
                            <td class="">2020-12-12</td>
                            <td class="">Chimi Rinzin</td>
                            <td class="">2020-12-12</td>
                            <td class="">Teacher</td>
                        </tr>
                        <tr>
                            <td class="">5</td>
                            <td class="">
                                <router-link to="/trainingpartifipantverification" class="nav-link" data-toggle="tooltip" title="Open and claim Application">
                                    <p>
                                        #02336
                                    </p>
                                </router-link>
                            </td> 
                            <td class="">Application for Training Participant</td>
                            <td class=""><span class="badge bg-info">Forwarded</span></td>
                            <td class="">2020-12-12</td>
                            <td class="">Sonam Tshomo</td>
                            <td class="">2020-12-13</td>
                            <td class="">DYS</td>
                        </tr>
                        <tr>
                            <td class="">6</td>
                            <td class="">
                                <router-link to="/transger" class="nav-link" data-toggle="tooltip" title="Open and claim Application">
                                    <p>
                                        #03336
                                    </p>
                                </router-link>
                            </td> 
                            <td class="">Application for Transfer Request</td>
                            <td class=""><span class="badge bg-primary">Submitted</span></td>
                            <td class="">2020-12-12</td>
                            <td class="">Karma Tenzin</td>
                            <td class="">2020-12-12</td>
                            <td class="">Teacher</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="card card-outline card-success">
            <div class="card-header">
                <h3 class="card-title" id="cardheader">My/Own Task</h3>
            </div>
            <div class="card-body">
               <table id="own-tasklist-table" class="table table-bordered table-striped table-head-fixed">
                    <thead>
                        <tr>
                            <th >Sl No.</th>
                            <th colspan="2">Application Number</th>
                            <th >Service Name</th>
                            <th >Status</th>
                            <th >Submitted Date</th>
                            <th >Submitted By</th>
                            <th >Last Action Date</th>
                            <th >Last Action By</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <td class="">1</td>
                            <td class="">
                                <router-link to="/openapplicaiton" class="nav-link" data-toggle="tooltip" title="Open Application">
                                    <p>
                                        #02234
                                    </p>
                                </router-link>
                            </td>
                            <td class="">
                                <a href="#" class="nav-link" data-toggle="tooltip" title="Release Application">
                                    <p>
                                       <span class="text-danger fa fa-times"></span>
                                    </p>
                                </a>
                            </td> 
                            <td class="">Application for Organization Approval</td>
                            <td class=""> <span class="badge bg-primary">Submitted</span></td>
                            <td class="">2020-12-12</td>
                            <td class="">Kelzang Tshering</td>
                            <td class="">2020-12-12</td>
                            <td class="">Deo</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    components: {
    },
    methods: {
    },
    mounted() {
        $("#organization-table").DataTable({
            "responsive": true,
            "autoWidth": true,
        }); 
        $('.dataTables_filter').addClass('fa-pull-right');
        $('#organization-table_paginate').addClass('fa-pull-right');
        $('[data-toggle="tooltip"]').tooltip();
    },
}
</script>