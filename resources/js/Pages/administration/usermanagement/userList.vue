<template>
    <div>
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">User Lists</h3>
            </div>

            <div class="card-body">
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
                                <input type="button" class="btn btn-flat btn-primary" value="Edit" id="edit">
                            </td>
                            <td width="3%">
                                <input type="button" class="btn btn-flat btn-danger delete" value="Delete" id="edit"
                                @click="showdelete()" >
                            </td>                            
                        </tr>
                        <tr id="record2">
                            <td>Pema Dorji</td>
                            <td>pema@gmaill.com</td>
                            <td>Motithang HSS</td>
                            <td>Teacher</td> 
                            <td width="3%">
                                <input type="button" class="btn btn-flat btn-primary" value="Edit" id="edit">
                            </td>
                            <td width="3%">
                                <input type="button" class="btn btn-flat btn-danger delete" value="Delete"
                                @click="showdelete()" id="delete">
                            </td>                           
                        </tr>
                        <tr id="record3">
                            <td>Karma Phuntsho</td>
                            <td>karma@gmaill.com</td>
                            <td>MOE</td>
                            <td>IT personnel</td> 
                            <td width="3%">
                                <input type="button" class="btn btn-flat btn-primary" value="Edit" id="edit">
                            </td>
                            <td width="3%">
                                <input type="button" class="btn btn-flat btn-danger delete" value="Delete"
                                @click="showdelete()" id="edit">
                            </td>                           
                        </tr>                        
                        
                    </tbody>
                </table>

                
            </div>

        </div>
       <div class="modal fade" id="deletemodal" tabindex="-1" role="dialog">
			<div class="modal-dialog">
				<div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Delete Confirmation</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
					<div class="modal-body">
						<div class="bootbox-body">
							<form class="bootbox-form">
								<div class="row">
									<div class="col-md-12 alert alert-danger">
										<span class="">Are you sure you wish to delete the user?</span>
										<input type="hidden" id="deleterecordid"/>
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
    methods: {
        showdelete: function(){           
			// $('#deleterecordid').val(id);
			$('#deletemodal').modal('show');
		},
        
    },

    mounted(){
        
    }
}
</script>