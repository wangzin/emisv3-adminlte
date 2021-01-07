<template>
<div>
    <div id="breadcrumbs" class="breadcrumbs ace-save-state">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li> 
            <li class="breadcrumb-item">Organization</li> 
            <li class="breadcrumb-item active">Structure</li>
        </ol>
    </div>
    <form>
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Structure List</h3>
                <button class="btn btn-primary btn-sm fa-pull-right" type="button" @click="showmodal()"><span class="fa fa-plus"> Add Structure</span></button>
            </div>
            <div class="card-body">
                <div class="card-body">
                <table id="dynamic-table" class="table table-bordered table-striped">
                    <thead>
                         <tr>
                            <th >Sl No.</th>
                            <th >Category</th>
                            <th >Sub-Category</th>
                            <th >Structure No.</th>
                            <th >Action</th> 
                        </tr>
                    </thead>
                    <tbody>
                        <tr id="record1">
                                <td>1</td>
                                <td>A</td>
                                <td>AX</td>
                                <td>Staff Quater1</td>
                                <td>
                                    <button class="btn btn-primary btn-xs" type="button"><i class="fa fa-edit"></i> Edit</button>
                                </td>
                            </tr>
                            <tr id="record2">
                                <td class="">2</td>
                                <td class="">B</td>
                                <td class="">BX</td>
                                <td class="">Staff Quater2</td>
                                <td class="">
                                    <button class="btn btn-primary btn-xs"><i class="fa fa-edit"></i> Edit</button>
                                </td>
                            </tr>
							<tr id="record3"> 
                                <td class="">3</td>
                                <td class="">C</td>
                                <td class="">CX</td>
                                <td class="">Staff Quater3</td>
                                <td class="">
                                    <button class="btn btn-primary btn-xs"><i class="fa fa-edit"></i> Edit</button>
                                </td>
                            </tr>
							
                    </tbody>
                </table>
            </div>
                    
            </div>
        </div>

        <div class="modal fade" id="samplemodal" tabindex="-1" role="dialog">
			<div class="modal-dialog">
				<div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Add Structure</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
					<div class="modal-body">
						<div class="bootbox-body">
							<form class="bootbox-form">
								<div class="form-group row">
									<div class="col-6">
										<label>Category</label> 
										<input class="form-control" id="category" type="text">
									</div>
                                    <div class="col-6">
										<label>Sub Category</label> 
										<input class="form-control" id="sub-category" type="text">
									</div>
								</div>
                                
                                <div class="row">
									<div class="col-6">
										<label>Year of Construction</label> 
										<input class="form-control" id="sub-category" type="text">
									</div>
                                    <div class="col-6">
										<label>No of Floors</label> 
										<input class="form-control" id="sub-category" type="text">
									</div>
								</div>
							</form>
						</div>
					</div>
					<div class="modal-footer">
                        <button type="button" class="btn btn-flat btn-warning" id="reset" @click="reset()"><i class="fa fa-ban"></i> Cancel</button>
                        <button type="button" class="btn btn-flat btn-primary" @click="addrecords()"> <i class="fa fa-check"></i> Add</button> 
					</div>
				</div>
			</div>
		</div>
    </form>
</div>
</template>

<script>
export default {
    data() {
        return{

        }
    },

    methods: {
        showmodal:function(){
            $('#samplemodal').modal('show');
		},
    }
    
}
</script>