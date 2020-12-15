<template>
    <div>
       <br>
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
        $('#cardheader').html('Organization');
        $('#addneworg').show();
    },
    
}

</script>