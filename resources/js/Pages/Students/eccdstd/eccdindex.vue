<template>
    <div>
       <br>
       <div class="breadcrumbs ace-save-state" id="breadcrumbs">
            <ol class="breadcrumb"> 
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item">Student</li>
                <li class="breadcrumb-item active">ECCD Student</li>
            </ol>
       </div>
        <div class="card card-outline card-info">
          <div class="card-header">
                <h3 class="card-title" id="cardheader">ECCD Students</h3>
                <router-link to="/neweccdstd" id="addnewstd" class="btn btn-success btn-sm fa-pull-right">
                    <i class="menu-icon fa fa-save"></i>
                    <span class=""> Add New Student</span>
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
        $('#cardheader').html('ECCD Student');
        $('#addnewstd').show();
    },
    
}

</script>