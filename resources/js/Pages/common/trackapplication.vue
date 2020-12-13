<template>
    <div>
        <div class="breadcrumbs ace-save-state" id="breadcrumbs">
            <ol class="breadcrumb"> 
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item">Track/ Search Application</li>
            </ol>
        </div>
        <div class="card card-outline card-primary">
            <div class="card-header">
                <h3 class="card-title" id="cardheader">Search application form</h3>
            </div>
            <div class="card-body">
               <div class="row form-group">
                    <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                        <label class="font-weight-normal">Provide Application Number</label>
                        <input type="text" class="form-control font-weight-bolder" id="search" style="width: 100%;"/>
                        <span id="search_err" class="text-danger"></span>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 pt-2">
                        <br>
                        <button class="btn btn-flat btn-primary" @click="showsearchresult()"> Search <i class="fa fa-search"></i></button>
                    </div>
                </div>
            </div>
        </div>
        <div class="card card-outline card-success" id="searchresult" style="display:none">
            <div class="card-header">
                <h3 class="card-title" id="cardheader">Search Result for applicaiton number: <b><span id="appno"></span></b></h3>
            </div>
            <div class="card-body">
                <div class="row form-group">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <label>Application for Organization Approval</label>
                    </div>
                </div>
               <table id="own-tasklist-table" class="table table-bordered table-striped table-head-fixed">
                    <thead>
                        <tr>
                            <th >Sl No.</th>
                            <th >Action Date</th>
                            <th >Action By</th>
                            <th >Status</th>
                            <th >Remarks</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="">1</td>
                            <td class="">2020-12-15</td>
                            <td class="">Kelzang Tshering</td>
                            <td class=""> <span class="badge bg-warning">Resubmited</span></td>
                            <td class=""></td>
                           
                        </tr>
                        <tr>
                            <td class="">2</td>
                             <td class="">2020-12-13</td>
                            <td class="">SPCD</td>
                            <td class=""> <span class="badge bg-danger">Rejected</span></td>
                            <td class="">Please attach Location clearance and submit again</td>
                        </tr>
                        <tr>
                            <td class="">3</td>
                            <td class="">2020-12-12</td>
                            <td class="">DEO</td>
                            <td class=""> <span class="badge bg-info">Verified</span></td>
                            <td class="">Verified and forwarded for further action</td>
                           
                        </tr>
                        <tr>
                            <td class="">4</td>
                            <td class="">2020-12-12</td>
                            <td class="">Kelzang Tshering</td>
                            <td class=""> <span class="badge bg-primary">Submitted</span></td>
                            <td class=""></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import Label from '../../Jetstream/Label.vue';
export default {
    components: {
    },
    methods: {
        showsearchresult(){
            if($('#search').val()==""){
                $('#search_err').html('Please provide application number');
                $('#search').addClass('is-invalid');
            }
            else{
                $('#search_err').html('');
                $('#search').removeClass('is-invalid');
                $('#appno').html($('#search').val());
                $('#searchresult').show();
            }
        },
    },
    mounted() {
        $("#organization-table").DataTable({
            "responsive": true,
            "autoWidth": true,
        }); 
        $('.dataTables_filter').addClass('fa-pull-right');
        $('#organization-table_paginate').addClass('fa-pull-right');
    },
}
</script>