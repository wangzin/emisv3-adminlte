<template>
    <div>
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Work Flow</h3>
            </div>
        </div>

        <form>
            <div class="card-body">
                <div class="form-group row">
                        <label class="col-md-1">Process:</label>
                        <div class="col-md-6">
                            <select name="role" id="roles" class="form-control editable_fields">
                                    <option value="">--- Please Select ---</option>
                                    <option value="1">Admission</option>
                                    <option value="2">New School Opening</option>
                                    <option value="3">Approval Process</option>
                                    <option value="4">Result</option>
                            </select>
                        </div>                   
                </div>

                <table id="dynamic-table" class="table table-bordered table-striped">
                    <thead>
                         <tr>
                            <th >Authority Type</th>
                            <th >Role</th>                           
                            <th ></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr id="record1">
                            <td>
                                <span>
                                    <select name="role" id="roles" class="form-control editable_fields">
                                        <option value="">--- Please Select ---</option>
                                        <option value="verifier">Verifier</option>
                                        <option value="approver">Approver</option>
                                        <option value="director">Director</option>
                                    </select>
                                </span>
                            </td>
                            <td>ugyen@gmaill.com</td>
                            <td>Yangchenphug HSS</td>
                        </tr>                                           
                        
                    </tbody>
                </table> 
            </div>
        </form>
    </div>
</template>

<script>
export default {
    
}
</script>