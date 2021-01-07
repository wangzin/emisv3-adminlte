<template>
    <div>
        <span v-if="user.indexOf('DBA') > -1">
            <generaldashboard />
        </span>
        <span v-if="user.indexOf('DEO') > -1">
            <deodashboard />
        </span> 
    </div>
</template>

<script>
    export default {
        components: {
        },
        data() {
            return {
                user: '',
            }
        }, 
        methods: {
            
        },
        mounted() {
            axios.get('verify')
            .then(response => {
                this.user = response.data.user;
            });
        },
    }
</script>
