<template>
    <div>
        <!-- new establishment card -->
        <div class="card">
             <div class="card-header">
                <h3 class="card-title">New Establishment Approve Reject</h3>
            </div>

             <form>
             <input type="hidden" class="form-control" id="establishmentID"/>
            <div class="card-body" >
                <div class="form-group row">
                        <div class="col-md-5">
                        <label class="col-md-5 font-weight-normal">Category:</label>

                            <select name="category" id="category" class="form-control editable_fields font-weight-bolder" readonly>
                                    <option value="">Public</option>
                            </select>
                        </div>
                        <div class="col-md-5">
                        <label class="col-md-5 font-weight-normal">Level:</label>

                            <select name="level" id="level" class="form-control editable_fields font-weight-bolder" readonly>
                                    <option value="">Higher Secondary School</option>
                            </select>
                        </div>                   
                </div>
                 <div class="form-group row">
                        <div class="col-md-5">
                        <label class="col-md-6 font-weight-normal">Proposed Name:<span class="text-danger">*</span></label>

                            <input type="text" class="form-control font-weight-bolder" id="proposedName" value="YHSS" readonly/>
                        </div>
                        <div class="col-md-5">
                        <label class="col-md- font-weight-normal">Dzongkhag:</label>

                            <select name="dzongkhag" id="dzongkhag" class="form-control editable_fields font-weight-bolder" readonly>
                                    <option value="">Thimphu</option>
                            </select>
                        </div>                   
                </div>
                <div class="form-group row">
                        <div class="col-md-5">
                        <label class="col-md- font-weight-normal">Gewog:</label>

                            <select name="gewog" id="gewog" class="form-control editable_fields font-weight-bolder" readonly>
                                    <option value="">Babesa</option>
                            </select>
                        </div>
                        <div class="col-md-5">
                        <label class="col-md- font-weight-normal">Chiwog:</label>

                            <select name="chiwog" id="chiwog" class="form-control editable_fields font-weight-bolder" readonly>
                                    <option value="">Olakha</option>
                            </select>
                        </div>                   
                </div>

                <div class="form-group row">
                        <div class="col-md-5">
                        <label class="col-md- font-weight-normal">Location Category:</label>

                            <select name="locationCategory" id="locationCategory" class="form-control editable_fields font-weight-bolder" readonly>
                                    <option value="">Olakha</option>
                            </select>
                        </div>
                        <div class="col-md-5">
                        <label class="col-md- font-weight-normal">Geopolitically Located:</label>

                            <select name="geoLocated" id="geoLocated" class="form-control editable_fields font-weight-bolder" readonly>
                                    <option value="">Yes</option>
                            </select>
                        </div>                   
                </div>
                <div class="form-group row">
                        <div class="col-md-5 hidden" id="parentSchoolDiv">
                        <label class="col-md- font-weight-normal">Parent School:</label>

                            <select name="parentSchool" id="parentSchool" class="form-control  editable_fields font-weight-bolder" readonly>
                                    <option value="">Kabisa</option>
                            </select>
                        </div>
                        <div class="col-md-5 hidden" id="coLocatedDiv">
                        <label class="col-md-8 font-weight-normal">Co-located with Parent School:</label>

                            <select name="coLocatedParent" id="coLocatedParent" class="form-control editable_fields font-weight-bolder" readonly>
                                    <option value="">Yes</option>
                            </select>
                        </div>                   
                </div>
                 <div class="form-group row">
                        <div class="col-md-5">
                        <label class="col-md- font-weight-normal">Sen School/ECCD:</label>

                            <select name="senSchool" id="senSchool" class="form-control editable_fields font-weight-bolder" readonly>
                                    <option value="">Yes</option>

                            </select>
                        </div>

                        <div class="col-md-5">
                        <label class="col-md- font-weight-normal">Remark:</label>

                            <textarea id="remark" class="form-control"></textarea> 
                        </div>
                </div>
                 
            </div>
            
        </form>
       
        </div>

        <!-- button -->
         <div class="row">
            <div class="col-md-1" style="margin-left: 800px;">
                <input type="button" class="btn btn-flat btn-success" value="Approve" id="approve" @click="approve()"/>
            </div>
                               
            <div class="col-md-1">
                <input type="button" class="btn btn-flat btn-danger" value="Reject" id="reject" @click="reject()"/>                                                  
            </div>
        </div>
        
    </div>
   
</template>

<script>
import Input from '../../../Jetstream/Input.vue';
export default {
  components: { Input },
    data(){
        return{

        }
    },
    
    methods:{
            /** method to approve application */
            approve: function(){
                alert("Your application is approved sucessfully.");
            },

            /** method to reject the application */
            reject: function(){
                window.location.href = "http://127.0.0.1:8000/userlogin#/establishment";
                // window.location.href = "http://localhost/emisv3-adminlte/public/userlogin?username=DBA#/establishment";
            }

    }
}
</script>