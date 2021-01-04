<template>
    <div>
        <div class="col-12">
            <div class="position-relative p-3 bg-gray" style="height: 180px">
                <div class="ribbon-wrapper ribbon-xl">
                    <div class="ribbon bg-success">
                        Organization Fomrs
                    </div>
                </div>
                <div class="col-8">
                    Organization forms inlcudes all details of organization (school, ECCD, Head Quarters, etc). According to your access level, you can able to proceed for further action. <br>
                </div>
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
        $('.select2').select2()
        $('.select2bs4').select2({
            theme: 'bootstrap4'
        });
        $('.select2-selection__rendered').addClass('font-weight-bolder');
    },
}
</script>