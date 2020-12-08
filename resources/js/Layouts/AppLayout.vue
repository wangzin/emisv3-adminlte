<template>
    <div>
        <body class="hold-transition sidebar-mini layout-fixed">
            <div class="wrapper">
                <headnav />
                <sidenav />
                <div class="content-wrapper">
                    <section class="content">
                        <div class="container-fluid">
                            <main><slot></slot></main> 
                        </div>
                    </section>
                </div>
                <footer class="main-footer">
                    <strong>Copyright &copy; 2020-2021 <a href="#">Ministry of Education</a>.</strong>
                    All rights reserved.
                    <div class="float-right d-none d-sm-inline-block">
                    <b>Version</b> 3.0
                    </div>
                </footer>
                <aside class="control-sidebar control-sidebar-dark">
                    <!-- Control sidebar content goes here -->
                </aside>
            </div>
        </body>
    </div>
</template>

<script>
    import JetApplicationMark from '@/Jetstream/ApplicationMark'
    import JetDropdown from '@/Jetstream/Dropdown'
    import JetDropdownLink from '@/Jetstream/DropdownLink'
    import JetNavLink from '@/Jetstream/NavLink'
    import JetResponsiveNavLink from '@/Jetstream/ResponsiveNavLink'
    export default {
        components: {
            JetApplicationMark,
            JetDropdown,
            JetDropdownLink,
            JetNavLink,
            JetResponsiveNavLink,
        },

        data() {
            return {
                showingNavigationDropdown: false,
            }
        },

        methods: {
            switchToTeam(team) {
                this.$inertia.put(route('current-team.update'), {
                    'team_id': team.id
                }, {
                    preserveState: false
                })
            },

            logout() {
                axios.post(route('logout').url()).then(response => {
                    window.location = '/';
                })
            },
        },
        mounted() {

           
        },
    }
</script>
