<template>
    <div>
        <div class="card card-outline card-info">
            <div class="card-header">
                <h3 class="card-title" id="cardheader">Organizations</h3>
                <router-link to="/neworganization" id="addneworg" class="btn btn-success btn-sm fa-pull-right">
                    <i class="menu-icon fa fa-save"></i>
                    <span class=""> Apply For New Organization</span>
                </router-link>
                
            </div>
            <div class="card-body">
                <router-view></router-view>
            </div>
        </div>

        <table id="organization-table" class="table table-bordered table-striped table-head-fixed">
            <thead>
                <tr>
                    <th >Sl No.</th>
                    <th >Dzongkhag</th>
                    <th >Gewog</th>
                    <th >School Name</th>
                    <th >Category</th>
                    <th >School Code</th>
                    <th >School Status</th>
                    <th >Contact</th>
                    <th >Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="">1</td>
                    <td class="">Bumthang</td>
                    <td class="">Chokhor</td>
                    <td class="">Jakar HSS</td>
                    <td class="">Public Schools</td>
                    <td class="">028.201.00001</td>
                    <td class="">Opened</td>
                    <td class="">631115</td>
                    <td class="">
                        <button @click="showdetails('professional')" class="btn btn-primary btn-xs btn-block">
                            <i class="fa fa-eye"></i> View Details
                        </button>
                    </td>
                </tr>
                <tr>
                    <td class="">2</td>
                    <td class="">Chhukha</td>
                    <td class="">Bjachho</td>
                    <td class="">Chukha Central School HSS</td>
                    <td class="">Public Schools</td>
                    <td class="">028.201.00019</td>
                    <td class="">Opened</td>
                    <td class="">08478413</td>
                    <td class="">
                        <button @click="showdetails('professional')" class="btn btn-primary btn-xs">
                            <i class="fa fa-eye"></i> View Details
                        </button>
                    </td>
                </tr>
                <tr>
                    <td class="">3</td>
                    <td class="">Bumthang</td>
                    <td class="">Chokhor</td>
                    <td class="">Jakar HSS</td>
                    <td class="">Public Schools</td>
                    <td class="">028.201.00001</td>
                    <td class="">Opened</td>
                    <td class="">631115</td>
                    <td class="">
                        <button @click="showdetails('professional')" class="btn btn-primary btn-xs">
                            <i class="fa fa-eye"></i> View Details
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    components: {
    },
    data() {
        return {
            count:5,
        }
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
    },
}
</script>