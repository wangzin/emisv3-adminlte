<template>
    <div> 
        
        <div class="card">
            <div class="card-header">
            <div class="info-box bg-success">
                <span class="info-box-icon"><i class="ion-icon ion-android-checkmark-circle"></i></span>
                <div class="info-box-content">
                    <span class="info-box-number">Manage all organization masters from here!</span>
                    <span class="info-box-text">Select respective master link below to do further configuration</span>
                </div>
            </div>
            <button class="btn btn-info btn-sm fa-pull-right" type="button" @click="showmodal()"><span class="fa fa-plus"> Add New Master Type</span></button>
        </div>
        <table id="dynamic-table" class="table table-bordered table-striped">
            <thead>
                    <tr>
                    <th >No.</th>
                    <th >Master Type</th>
                    <th >Status</th>
                    <th >Last Action Date</th>
                    <th >Action</th> 
                </tr>
            </thead>
            <tbody>
                <tr id="record1">
                    <td>1</td>
                    <td>
                        <a href="#">
                            <router-link  to="/orgmasterlevel" data-toggle="tooltip" title="Click here to do further configuration">
                                <i class="menu-icon fa fa-caret-right"></i>
                                School Level
                            </router-link>
                        </a>
                    </td>
                    <td><span class="badge badge-success">Active</span></td>
                    <td>2019-10-12</td>
                    <td>
                        <button class="btn btn-primary btn-xs" type="button"><i class="fa fa-edit"></i> Edit</button>
                        <button class="btn btn-danger btn-xs" @click="showdelete('1')" type="button"><i class="fa fa-trash"></i> Delete</button>
                    </td>
                </tr>
                <tr id="record2">
                    <td class="">2</td>
                    <td class="">
                        <a href="#" @click="manageclasses('Org Location Type')">
                            <router-link to="/orglocationmaster" data-toggle="tooltip" title="Click here to do further configuration">
                                <i class="menu-icon fa fa-caret-right"></i>
                                Org Location Type
                            </router-link>
                        </a>
                    </td>
                    <td class=""><span class="badge badge-success">Active</span></td>
                    <td class="">2019-10-12</td>
                    <td class="">
                        <button class="btn btn-primary btn-xs"><i class="fa fa-edit"></i> Edit</button>
                        <button class="btn btn-danger btn-xs" @click="showdelete('2')"><i class="fa fa-trash"></i> Delete</button>
                    </td>
                </tr>
                <tr id="record3"> 
                    <td class="">3</td>
                    <td class="">
                        <a href="#" @click="manageclasses('School/Org Status')">
                            <router-link to="#">
                                <i class="menu-icon fa fa-caret-right"></i>
                                School/Org Status
                            </router-link>
                        </a>
                    </td>
                    <td class=""><span class="badge badge-danger">In Active</span></td>
                    <td class="">2019-10-12</td>
                    <td class="">
                        <button class="btn btn-primary btn-xs"><i class="fa fa-edit"></i> Edit</button>
                        <button class="btn btn-danger btn-xs" @click="showdelete('3')"><i class="fa fa-trash"></i> Delete</button>
                    </td>
                </tr>
                <tr id="record4">
                    <td class="">4</td>
                    <td class="">
                        <a href="#"  @click="manageclasses('Climate Type')">
                            <router-link to="#">
                                <i class="menu-icon fa fa-caret-right"></i>
                                Climate Type
                            </router-link>
                        </a>
                    </td>
                    <td class=""><span class="badge badge-danger">In Active</span></td>
                    <td class="">2019-10-12</td>
                    <td class="">
                        <button class="btn btn-primary btn-xs"><i class="fa fa-edit"></i> Edit</button>
                        <button class="btn btn-danger btn-xs" @click="showdelete('4')"><i class="fa fa-trash"></i> Delete</button>
                    </td>
                </tr>
                <tr id="record5">
                    <td class="">5</td>
                    <td class="">
                        <a href="#" @click="manageclasses('Road Type')">
                            <router-link to="#">
                                <i class="menu-icon fa fa-caret-right"></i>
                                Road Type
                            </router-link>
                        </a>
                    </td> 
                    <td class=""><span class="badge badge-danger">In Active</span></td>
                    <td class="">2019-10-12</td>
                    <td class=""> 
                        <button class="btn btn-primary btn-xs"><i class="fa fa-edit"></i> Edit</button>
                        <button class="btn btn-danger btn-xs" @click="showdelete('5')"><i class="fa fa-trash"></i> Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
        
        <div class="modal fade" id="deletemodal" tabindex="-1" role="dialog">
			<div class="modal-dialog">
				<div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Deleting Master type</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
					<div class="modal-body">
						<div class="bootbox-body">
							<form class="bootbox-form">
								<div class="row">
									<div class="col-12 alert alert-danger">
										<span class="">Are you sure you wish to delete the selected level?</span>
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
        <div class="modal fade" id="editmodal" tabindex="-1" role="dialog">
			<div class="modal-dialog">
				<div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Deleting Master type</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
					<div class="modal-body">
						<div class="bootbox-body">
							<form class="bootbox-form">
								<div class="row">
									<div class="col-12 alert alert-danger">
										<span class="">Are you sure you wish to delete the selected Master type ?</span>
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
        <div class="modal fade" id="samplemodal" tabindex="-1" role="dialog">
			<div class="modal-dialog">
				<div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Adding New Master Type</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
					<div class="modal-body">
						<div class="bootbox-body">
							<form class="bootbox-form">
								<div class="row">
									<div class="col-12">
										<label>Master Type Name</label> 
										<input class="form-control" autocomplete="off" id="newlevelname" type="text">
									</div>
								</div>
							</form>
						</div>
					</div>
					<div class="modal-footer">
						<button data-bb-handler="cancel" type="button" data-dismiss="modal" class="btn btn-default">Cancel</button>
						<button data-bb-handler="confirm" @click="addrecords()" type="button" class="btn btn-primary">OK</button>
					</div>
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
        showmodal:function(){
            $('#samplemodal').modal('show');
		},
		addrecords: function(){
			let tablestr="";
			this.count++;
			let today = new Date();
			let dd = String(today.getDate()).padStart(2, '0');
			let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
			let yyyy = today.getFullYear();
			today =   yyyy+'-'+mm+'-'+dd;
			tablestr="<tr id='record"+this.count+"'><td>"+this.count+"</td><td><a href='#'><i class='menu-icon fa fa-caret-right'></i>"+$('#newlevelname').val()+"</a></td><td><span class='badge badge-success'>Active</span></td><td>"+today+"</td><td> <button class='btn btn-primary btn-xs'><i class='fa fa-edit'></i> Edit</button><button class='btn btn-danger btn-xs'><i class='fa fa-trash'></i> Delete</button></td></tr>";
			$('#dynamic-table').append(tablestr);
			$('#samplemodal').modal('hide');
		}, 
		showdelete: function(id){
			$('#deleterecordid').val(id);
			$('#deletemodal').modal('show');
		},
		deleterecords(){
			$('#record'+$('#deleterecordid').val()).remove();
			$('#deletemodal').modal('hide');
		},
    },
    mounted() {
        $('[data-toggle="tooltip"]').tooltip();
    },
}
</script>