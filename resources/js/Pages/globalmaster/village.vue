<template>
    <div>
        <section class="content">
            <div class="">
                <div class="breadcrumbs ace-save-state" id="breadcrumbs">
                    <ol class="breadcrumb"> 
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item">Master Management</li>
                        <li class="breadcrumb-item active">Village</li>
                    </ol>
                </div>
                <div class="row"> 
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">Existing Village Details</h3>
                                <button class="btn btn-success btn-sm fa-pull-right" type="button" @click="showmodal()"><span class="fa fa-plus"> Add New Village</span></button>
                            </div>
                            <div class="card-body">
                                <table id="dynamic-table" class="table table-striped table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th >No.</th>
                                            <th >Dzongkhag Name</th>
                                            <th >Gewog Name</th>
                                            <th >Village Name</th>
                                            <th >Status</th>
                                            <th >Last Action Date</th>
                                            <th >Action</th> 
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr id="record1">
                                            <td>1</td>
                                            <td>Bumthang</td>
                                            <td>Chumey</td>
                                            <td>Chakhar</td>
                                            <td><span class="label label-success label-sm">Active</span></td>
                                            <td>2019-10-12</td>
                                            <td>
                                                <button class="btn btn-primary btn-xs" type="button"><i class="fa fa-edit"></i> Edit</button>
                                                <button class="btn btn-danger btn-xs" @click="showdelete('1')" type="button"><i class="fa fa-trash"></i> Delete</button>
                                            </td>
                                        </tr>
                                        <tr id="record2">
                                            <td class="">2</td>
                                            <td>Bumthang</td>
                                            <td>Chokhor</td>
                                            <td>Chakhar</td>
                                            <td class=""><span class="label label-danger label-sm">In Active</span></td>
                                            <td class="">2019-10-12</td>
                                            <td class="">
                                                <button class="btn btn-primary btn-xs"><i class="fa fa-edit"></i> Edit</button>
                                                <button class="btn btn-danger btn-xs" @click="showdelete('2')"><i class="fa fa-trash"></i> Delete</button>
                                            </td>
                                        </tr>
                                        <tr id="record3"> 
                                            <td class="">3</td>
                                            <td>Bumthang</td>
                                            <td>Tang</td>
                                            <td>Chakhar</td>
                                            <td class=""><span class="label label-success label-sm">Active</span></td>
                                            <td class="">2019-10-12</td>
                                            <td class="">
                                                <button class="btn btn-primary btn-xs"><i class="fa fa-edit"></i> Edit</button>
                                                <button class="btn btn-danger btn-xs" @click="showdelete('3')"><i class="fa fa-trash"></i> Delete</button>
                                            </td>
                                        </tr>
                                        <tr id="record4"> 
                                            <td class="">4</td>
                                            <td class="">Chukha</td>
                                            <td class="">Sampheling/Bhalujora</td>
                                            <td>Chakhar</td>
                                            <td class=""><span class="label label-success label-sm">Active</span></td>
                                            <td class="">2019-10-12</td>
                                            <td class="">
                                                <button class="btn btn-primary btn-xs"><i class="fa fa-edit"></i> Edit</button>
                                                <button class="btn btn-danger btn-xs" @click="showdelete('4')"><i class="fa fa-trash"></i> Delete</button>
                                            </td>
                                        </tr>
                                        <tr id="record5"> 
                                            <td class="">5</td>
                                            <td class="">Chukha</td>
                                            <td class="">Bongo</td>
                                            <td>Chakhar</td>
                                            <td class=""><span class="label label-success label-sm">Active</span></td>
                                            <td class="">2019-10-12</td>
                                            <td class="">
                                                <button class="btn btn-primary btn-xs"><i class="fa fa-edit"></i> Edit</button>
                                                <button class="btn btn-danger btn-xs" @click="showdelete('5')"><i class="fa fa-trash"></i> Delete</button>
                                            </td>
                                        </tr>
                                        <tr id="record6"> 
                                            <td class="">6</td>
                                            <td class="">Chukha</td>
                                            <td class="">Chapcha</td>
                                            <td>Chakhar</td>
                                            <td class=""><span class="label label-success label-sm">Active</span></td>
                                            <td class="">2019-10-12</td>
                                            <td class="">
                                                <button class="btn btn-primary btn-xs"><i class="fa fa-edit"></i> Edit</button>
                                                <button class="btn btn-danger btn-xs" @click="showdelete('6')"><i class="fa fa-trash"></i> Delete</button>
                                            </td>
                                        </tr>
                                        <tr id="record7"> 
                                            <td class="">7</td>
                                            <td class="">Chukha</td>
                                            <td class="">Darla</td>
                                            <td>Chakhar</td>
                                            <td class=""><span class="label label-success label-sm">Active</span></td>
                                            <td class="">2019-10-12</td>
                                            <td class="">
                                                <button class="btn btn-primary btn-xs"><i class="fa fa-edit"></i> Edit</button>
                                                <button class="btn btn-danger btn-xs" @click="showdelete('7')"><i class="fa fa-trash"></i> Delete</button>
                                            </td>
                                        </tr>
                                        <tr id="record8"> 
                                            <td class="">8</td>
                                            <td class="">Chukha</td>
                                            <td class="">Dungna</td>
                                            <td>Chakhar</td>
                                            <td class=""><span class="label label-success label-sm">Active</span></td>
                                            <td class="">2019-10-12</td>
                                            <td class="">
                                                <button class="btn btn-primary btn-xs"><i class="fa fa-edit"></i> Edit</button>
                                                <button class="btn btn-danger btn-xs" @click="showdelete('8')"><i class="fa fa-trash"></i> Delete</button>
                                            </td>
                                        </tr>
                                        <tr id="record9"> 
                                            <td class="">9</td>
                                            <td class="">Chukha</td>
                                            <td class="">Getana</td>
                                            <td>Chakhar</td>
                                            <td class=""><span class="label label-success label-sm">Active</span></td>
                                            <td class="">2019-10-12</td>
                                            <td class="">
                                                <button class="btn btn-primary btn-xs"><i class="fa fa-edit"></i> Edit</button>
                                                <button class="btn btn-danger btn-xs" @click="showdelete('9')"><i class="fa fa-trash"></i> Delete</button>
                                            </td>
                                        </tr>
                                        <tr id="record10"> 
                                            <td class="">10</td>
                                            <td class="">Samdrup Jongkhag</td>
                                            <td class="">Khoma</td>
                                            <td>Chakhar</td>
                                            <td class=""><span class="label label-success label-sm">Active</span></td>
                                            <td class="">2019-10-12</td>
                                            <td class="">
                                                <button class="btn btn-primary btn-xs"><i class="fa fa-edit"></i> Edit</button>
                                                <button class="btn btn-danger btn-xs" @click="showdelete('10')"><i class="fa fa-trash"></i> Delete</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="modal fade show" id="samplemodal" aria-modal="true" style="padding-right: 17px;">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Adding New Village</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form class="bootbox-form">
                            <div class="row">
                                <div class="col-6">
                                    <label>Select Dzongkhag</label> 
                                    <select class="form-control" id="dzongkahgid">
                                        <option value="Bumthang">Bumthang</option>
                                        <option value="Chukha">Chukha</option>
                                        <option value="Paro">Paro</option>
                                        <option value="Thimphu">Thimphu</option>
                                        <option value="Punakha">Punakha</option>
                                        <option value="Gasa">Gasa</option>
                                    </select>
                                </div>
                                <div class="col-6">
                                    <label>Gewog Name</label> 
                                    <select class="form-control" id="gewogid">
                                        <option value="Chumey">Chumey</option>
                                        <option value="Chokhor">Chokhor</option>
                                        <option value="Tang">Tang</option>
                                        <option value="Sampheling/Bhalujora">Sampheling/Bhalujora</option>
                                        <option value="Bongo">Bongo</option>
                                        <option value="Chapcha">Chapcha</option>
                                    </select>
                                </div>
                                <div class="col-12">
                                    <label>Village Name</label> 
                                    <input class="form-control" autocomplete="off" id="newlevelname" type="text">
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer justify-content-between">
                        <button data-bb-handler="cancel" type="button" data-dismiss="modal" class="btn btn-default">Cancel</button>
						<button data-bb-handler="confirm" @click="addrecords()" type="button" class="btn btn-primary">OK</button>
                    </div>
                </div>
            </div>
        </div>    
		<div class="modal fade" id="deletemodal" tabindex="-1" role="dialog">
			<div class="modal-dialog">
				<div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Deleting Village</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
					<div class="modal-body">
						<div class="bootbox-body">
							<form class="bootbox-form">
								<div class="row">
									<div class="col-12 alert alert-danger">
										<span class="">Are you sure you wish to delete the selected Village?</span>
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
import Input from '../../Jetstream/Input.vue';
import Label from '../../Jetstream/Label.vue';
export default {
    components: {
        Input
    },
    data() {
        return {
			count:10,
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
			tablestr="<tr id='record"+this.count+"'><td>"+this.count+"</td><td>"+$('#dzongkahgid').val()+"</td><td>"+$('#gewogid').val()+"</td><td>"+$('#newlevelname').val()+"</td><td><span class='label label-success label-sm'>Active</span></td><td>"+today+"</td><td> <button class='btn btn-primary btn-xs'><i class='fa fa-edit'></i> Edit</button><button class='btn btn-danger btn-xs'><i class='fa fa-trash'></i> Delete</button></td></tr>";
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
        
        jQuery(function($) {
			var myTable = $('#dynamic-table')
			.DataTable( {
				bAutoWidth: false,
				"aoColumns": [
					{ "bSortable": false },
					null, null,null, null,
					{ "bSortable": false }
				],
				"aaSorting": [], 
				select: {
					style: 'multi'
				}
			} );
		} );	
    },
    
}
</script>

