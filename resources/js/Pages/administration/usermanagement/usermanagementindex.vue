<template>
    <div>
        <div class="breadcrumbs ace-save-state" id="breadcrumbs">
            <ol class="breadcrumb"> 
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item">Administration</li>
                <li class="breadcrumb-item active">User Management</li>
            </ol>
        </div>
        <div class="card card-primary card-outline" id="useraddsection">
            <div class="card-header">
                <h3 class="card-title">Add New User</h3>
                <button type="button" class="btn btn-success btn-flat btn-sm fa-pull-right" @click="showexistingusers()"><i class="fa fa-eye"></i> List Users</button>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-12">
                        <form>
                            <div class="form-group row">
                                <div class="col-6">
                                    <label class="font-weight-normal">User Type:<span class="text-danger">*</span></label>
                                    <select class="form-control" name="usertype" id="usertype" @change="showfield(),removeerror('usertype','usertype_error')">
                                        <option value=""> Select </option>
                                        <option value="1"> Internal User </option>
                                        <option value="2"> External User </option>
                                    </select>
                                    <span id="usertype_error" class="text-danger"></span>
                                </div>
                                <div class="col-6">
                                    <label class="font-weight-normal" id="levelname"></label>
                                    <input type="text" class="form-control editable_fields font-weight-bolder"  id="employeeID" @change="employeeDetails(),removeerror('employeeID','employeeID_err')">
                                    <span id="employeeID_err" class="text-danger"></span>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-6">
                                    <label class="font-weight-normal">Name:</label>
                                    <input type="text" class="form-control editable_fields" id="name" readonly>
                                </div>
                                <div class="col-6">
                                    <label class="font-weight-normal">Email:</label>
                                    <input type="text" class="form-control editable_fields" id="email" readonly>  
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-6" id="positionalTitle" style="display:none">
                                    <label class="font-weight-normal">Position Title:</label>
                                    <input type="text" class="form-control editable_fields" id="positiontitle" readonly>
                                </div>
                                 <div class="col-6" id="description_section" style="display:none">
                                    <label class="font-weight-normal">Description:</label>
                                    <input type="text" class="form-control editable_fields" id="description">
                                </div>
                                <div class="col-6">
                                    <label class="font-weight-normal">Organization Unit:</label>
                                    <input type="text" class="form-control editable_fields" id="organizationalunit" readonly>  
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-6">
                                    <label class="font-weight-normal">Status:</label>
                                    <div class="clearfix">
                                    <div class="icheck-primary d-inline">
                                        <input type="radio" id="radioPrimary1" name="status" checked>
                                        <label for="radioPrimary1">
                                            Active
                                        </label>
                                    </div>
                                    <div class="icheck-primary d-inline pl-4">
                                        <input type="radio" id="radioPrimary2" name="status">
                                        <label for="radioPrimary2">
                                            Inactive
                                        </label>
                                    </div>
                                </div>
                                </div>
                                 <div class="col-6">
                                     <label class="font-weight-normal">Role<span class="text-danger">*</span></label>
                                     <select name="role" id="roles" @change="removeerror('roles','roles_error')" class="form-control editable_fields font-weight-bolder">
                                        <option value="">--- Please Select ---</option>
                                        <option value="admin">Admin</option>
                                        <option value="teacher">Teacher</option>
                                        <option value="deo">DEO</option>
                                        <option value="director">Director</option>
                                    </select>
                                    <span id="roles_error" class="text-danger"></span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <div class="row form-group fa-pull-right">
                    <div class="col-md-12">
                        <button type="button" class="btn btn-flat btn-warning" @click="reset()"> <i class="fa fa-ban"></i> Cancel</button>
                        <button type="button" class="btn btn-flat btn-primary" @click="adduser()"> <i class="fa fa-check"></i> Add</button>
                    </div>
                </div>
            </div>
        </div>
         <div class="card card-primary card-outline" id="userlistsection" style="display:none">
              <div class="card-header">
                <h3 class="card-title">User List</h3>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-12">
                        <table id="dynamic-table" class="table table-bordered table-striped">
                            <thead>
                                    <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Organization Unit</th>
                                    <th>Role</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr id="record1">
                                    <td>Ugyen</td>
                                    <td>ugyen@gmaill.com</td>
                                    <td>Yangchenphug HSS</td>
                                    <td>Teacher</td>
                                    <td width="3%">
                                        <input type="button" class="btn btn-sm btn-flat btn-primary" value="Edit" id="edit">
                                    </td>
                                    <td width="3%">
                                        <input type="button" class="btn btn-sm btn-flat btn-danger delete" value="Deactivate" id="edit"
                                        @click="showdelete('deactivate')" >
                                    </td>                            
                                </tr>
                                <tr id="record2">
                                    <td>Pema Dorji</td>
                                    <td>pema@gmaill.com</td>
                                    <td>Motithang HSS</td>
                                    <td>Teacher</td> 
                                    <td width="3%">
                                        <input type="button" class="btn btn-sm btn-flat btn-primary" value="Edit" id="edit">
                                    </td>
                                    <td width="3%">
                                        <input type="button" class="btn btn-sm btn-flat btn-danger delete" value="Deactivate"
                                        @click="showdelete('deactivate')" id="delete">
                                    </td>                           
                                </tr>
                                <tr id="record3">
                                    <td>Karma Phuntsho</td>
                                    <td>karma@gmaill.com</td>
                                    <td>MOE</td>
                                    <td>IT personnel</td> 
                                    <td width="3%">
                                        <input type="button" class="btn btn-sm btn-flat btn-primary" value="Edit" id="edit">
                                    </td>
                                    <td width="3%">
                                        <input type="button" class="btn btn-sm btn-flat btn-success delete" value="Activate"
                                        @click="showdelete('activate')" id="edit">
                                    </td>                           
                                </tr>                        
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="deletemodal" tabindex="-1" role="dialog">
			<div class="modal-dialog">
				<div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Confirmation</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
					<div class="modal-body">
						<div class="bootbox-body">
							<form class="bootbox-form">
								<div class="row">
									<div class="col-md-12 alert alert-danger" id="deactivation">
										<span class="">Are you sure you wish to deactivate this user?</span>
									</div>
                                    <div class="col-md-12 alert alert-success" id="activation">
										<span class="">Are you sure you wish to activate this user?</span>
									</div>
								</div>
							</form>
						</div>
					</div>
					<div class="modal-footer">
						<button data-bb-handler="cancel" type="button" data-dismiss="modal" class="btn btn-default">No</button>
						<button data-bb-handler="confirm" @click="deleterecords()" type="button" class="btn btn-primary">Yes</button>
					</div>
				</div>
			</div>
		</div>

    </div>
</template>

<script>
export default {
    data(){
        return{
        }
    },

    methods:{
        manageclasses(currid){
            $('#selected').html(' Managing '+currid);
        },
        showfield(){
            $('#name').val('');
            $('#email').val('');
            $('#positiontitle').val('');
            $('#organizationalunit').val('');
            $('#employeeID').val('');
            if($('#usertype').val()==1){
                $('#levelname').html('Employee Id<span class="text-danger">*</span>');
                $('#positionalTitle').show();
                $('#description_section').hide();
                $('#organizationalunit').prop('readonly',true);
                $('#email').prop('readonly',true);
            }
            else{
                $('#levelname').html('CID<span class="text-danger">*</span>');
                $('#description_section').show();
                $('#positionalTitle').hide();
                $('#organizationalunit').prop('readonly',false);
                $('#email').prop('readonly',false);
            }
        },
        adduser(){
            if(this.validateuser()){
                Swal.fire({
                    title: 'Are you sure you wish to add this user?',
                    text: "You won't be able to revert this back once you take action from here!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes!',
                    }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire(
                            'Success!',
                            'User details is added successfully.',
                            'success',
                            window.location.reload()
                        )
                    }
                });
            }
        },
        validateuser(){
            let returntype=true;
            if($('#usertype').val()==""){
                $('#usertype_error').html('Please select user type');
                $('#usertype').focus();
                $('#usertype').removeClass('is-invalid');
                returntype=false;
            }
            if($('#employeeID').val()==""){
                $('#employeeID_err').html('This field is required');
                $('#employeeID').focus();
                $('#employeeID').removeClass('is-invalid');
                returntype=false;
            }
            if($('#roles').val()==""){
                $('#roles_error').html('Please select role');
                $('#roles').focus();
                $('#roles').removeClass('is-invalid');
                returntype=false;
            }
            return returntype;
        },
        removeerror(fieldid,errid){
            if($('#'+fieldid).val()!=""){
                $('#'+fieldid).removeClass('is-invalid');
                $('#'+errid).html(''); 
            }
        },
        employeeDetails(){
            $('#name').val('Sonam Tashi');
            if($('#usertype').val()==1){
                $('#email').val('tashi@moe.gov.bt');
                $('#positiontitle').val('ICTD');
                $('#organizationalunit').val('Yangchenphug HSS');
            }
            
        },
        showexistingusers(){
            $('#useraddsection').hide();
            $('#userlistsection').show();
        },
        showdelete: function(val){           
            if(val=="deactivate"){
                $('#activation').hide();
                $('#deactivation').show();
            }
            else{
                $('#activation').show();
                $('#deactivation').hide();
            }
            $('#deletemodal').modal('show');
		},
        
    },
    mounted(){

    }
}
</script>