<template>
    <div> 
        <div class="info-box mb-3 bg-success">
            <span class="info-box-icon"><i class="ion-icon ion-android-checkmark-circle"></i></span>
            <div class="info-box-content">
                <span class="info-box-number">Manage all organization masters from here!</span>
                <span class="info-box-text">Select respective master link in above dropdown to do further configuration</span>
            </div>
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
                    <td><span class="label label-success label-sm">Active</span></td>
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
                    <td class=""><span class="label label-danger label-sm">In Active</span></td>
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
                            <router-link to="#"  @click="manageclasses('')" class="dropdown-item">
                                <i class="menu-icon fa fa-caret-right"></i>
                                School/Org Status
                            </router-link>
                        </a>
                    </td>
                    <td class=""><span class="label label-success label-sm">Active</span></td>
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
                            <router-link to="#" class="dropdown-item">
                                <i class="menu-icon fa fa-caret-right"></i>
                                Climate Type
                            </router-link>
                        </a>
                    </td>
                    <td class=""><span class="label label-success label-sm">Active</span></td>
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
                            <router-link to="#" class="dropdown-item">
                                <i class="menu-icon fa fa-caret-right"></i>
                                Road Type
                            </router-link>
                        </a>
                    </td>
                    <td class=""><span class="label label-success label-sm">Active</span></td>
                    <td class="">2019-10-12</td>
                    <td class="">
                        <button class="btn btn-primary btn-xs"><i class="fa fa-edit"></i> Edit</button>
                        <button class="btn btn-danger btn-xs" @click="showdelete('5')"><i class="fa fa-trash"></i> Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    components: {
    },
    methods: {
    },
    mounted() {
        $('[data-toggle="tooltip"]').tooltip();
    },
}
</script>