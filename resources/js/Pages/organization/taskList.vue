<template>
    <div>
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Task List</h3>
            </div>
        
        <div class="card-body">
                             
            <table id="dynamic-table" class="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th >Sl No.</th>
                        <th >Application Number</th>
                        <th >Service/Module Name</th>
                        <th >Status</th>
                        <th >Date of Submission</th>
                        <th >Last Action By</th>
                        <th >Last Action Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr id="record1">
                        <td>1</td>
                        <td>
                            <router-link to="/approveRejectEstablishment" class="nav-link">
                                <p> 1222 </p>
                            </router-link>
                        </td>
                        <td>New Establishment</td>
                        <td>Submitted</td>
                        <td>01/01/2021</td>
                        <td >DEO</td>
                        <td>01/01/2021</td>
                    </tr>

                    <tr id="record2">
                        <td>2</td>
                        <td>
                            <router-link to="#" class="nav-link">
                                <p> 1222 </p>
                            </router-link>
                        </td>
                        <td>Change Basic Details</td>
                        <td>Submitted</td>
                        <td>01/01/2021</td>
                        <td >Principle</td>
                        <td>01/01/2021</td>
                    </tr>
                </tbody>
            </table>
                             
        </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>