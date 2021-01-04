  <template>
    <div>
        
        <div class="card card-outline card-info">
            <div class="card-header">
                Existing Organization Details
            </div>
            <div class="card-body">
                <div class="col-12">
                    
                    <table id="organization-table" class="table table-bordered table-striped table-head-fixed text-center">
                        <thead>
                            <tr>
                                <th >No.</th>
                                <th >Dzongkhag</th>
                                <th >School Name</th>
                                <th >Status</th>
                                <th >Action type</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in orgList" :key="index">
                                <td>{{index+1}}</td>
                                <td>{{item.org_name}}</td>
                                <td>{{item.org_name}}</td>
                                <td>{{item.org_status}}</td>
                                <td><button class="btn btn-sm btn-success" type="button" @click="showedit()"> Edit</button></td>
                            </tr> 
                        </tbody>
                    </table>
                </div>
                
            </div>
        </div>
    </div>   
</template>
<script>
import Button from '../../../Jetstream/Button.vue';
export default {
    components: {
        Button
    },
    data() {
        return {
            orgList:{},
        }
    },
    methods: {
        loadData(){
            axios.get("/getorgDetails").then(response =>{
                this.orgList = response.data.data;
                 $('#organization-table').DataTable().destroy();
                // $('#organization-table').DataTable();
            });
            
        }
    },
    created() {
        this.loadData();
    },
    mounted() {
        $("#organization-table").DataTable({
            "responsive": true,
        }); 
        $('.pagination').addClass('fa-pull-right');
        $('#organization-table_filter').addClass('fa-pull-right');
        
    },
}
</script>