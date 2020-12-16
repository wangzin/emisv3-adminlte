<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link rel="icon" href="admin3/dist/img/MoE_Logo.png" type="image/x-icon" />
        <title>EMIS V3</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">
        <!-- Styles -->
        <link rel="stylesheet" href="{{ url('css/app.css') }}">
        <link rel="stylesheet" href="admin3/plugins/fontawesome-free/css/all.min.css">
        <!-- Ionicons -->
        <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
        <!-- Tempusdominus Bbootstrap 4 -->
        <link rel="stylesheet" href="admin3/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css">
        <!-- iCheck -->
        <link rel="stylesheet" href="admin3/plugins/icheck-bootstrap/icheck-bootstrap.min.css">
        <!-- JQVMap -->
        <link rel="stylesheet" href="admin3/plugins/jqvmap/jqvmap.min.css">
        <!-- Theme style -->
        <link rel="stylesheet" href="admin3/dist/css/adminlte.min.css">
        <!-- overlayScrollbars -->
        <link rel="stylesheet" href="admin3/plugins/overlayScrollbars/css/OverlayScrollbars.min.css">
        <!-- Daterange picker -->
        <link rel="stylesheet" href="admin3/plugins/daterangepicker/daterangepicker.css">
        <!-- summernote -->
        <link rel="stylesheet" href="admin3/plugins/summernote/summernote-bs4.css">
        <!-- Google Font: Source Sans Pro -->
        <link rel="stylesheet" href="admin3/plugins/select2/css/select2.min.css">
        <link rel="stylesheet" href="admin3/plugins/select2-bootstrap4-theme/select2-bootstrap4.min.css">
        <link rel="stylesheet" href="admin3/plugins/bootstrap4-duallistbox/bootstrap-duallistbox.min.css">
        
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet">
        <!-- jQuery UI 1.11.4 -->
        <script src="admin3/plugins/jquery/jquery.min.js"></script>
        
        <!-- Scripts -->
        @routes
        <script src="{{ url('js/app.js') }}" defer></script>
        <script src="admin3/plugins/jquery-ui/jquery-ui.min.js"></script>
        <!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
        <script>
        $.widget.bridge('uibutton', $.ui.button)
        </script>
        
        <!-- Bootstrap 4 -->
        <script src="admin3/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="admin3/plugins/select2/js/select2.full.min.js"></script>
        <script src="admin3/plugins/bootstrap4-duallistbox/jquery.bootstrap-duallistbox.min.js"></script>
        <script src="admin3/plugins/inputmask/min/jquery.inputmask.bundle.min.js"></script>
        <!-- ChartJS -->
        <script src="admin3/plugins/chart.js/Chart.min.js"></script>
        <!-- Sparkline -->
        <script src="admin3/plugins/sparklines/sparkline.js"></script>
        <!-- JQVMap -->
        <script src="admin3/plugins/jqvmap/jquery.vmap.min.js"></script>
        <script src="admin3/plugins/jqvmap/maps/jquery.vmap.usa.js"></script>
        <!-- jQuery Knob Chart -->
        <script src="admin3/plugins/jquery-knob/jquery.knob.min.js"></script>
        <!-- daterangepicker -->
        <script src="admin3/plugins/moment/moment.min.js"></script>
        <script src="admin3/plugins/daterangepicker/daterangepicker.js"></script>
        <!-- Tempusdominus Bootstrap 4 -->
        <script src="admin3/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js"></script>
        <!-- Summernote -->
        <script src="admin3/plugins/summernote/summernote-bs4.min.js"></script>
        <script src="admin3/plugins/datatables/jquery.dataTables.min.js"></script>
        <script src="admin3/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"></script>
        <script src="admin3/plugins/datatables-responsive/js/dataTables.responsive.min.js"></script>
        <script src="admin3/plugins/datatables-responsive/js/responsive.bootstrap4.min.js"></script>
        <!-- overlayScrollbars -->
        <script src="admin3/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js"></script>
        <!-- AdminLTE App -->
        <script src="admin3/dist/js/adminlte.js"></script>
        <!-- AdminLTE dashboard demo (This is only for demo purposes) -->
        <script src="admin3/dist/js/pages/dashboard.js"></script>
        <!-- AdminLTE for demo purposes -->
        <script src="admin3/plugins/chart.js/Chart.min.js"></script>
        <script src="admin3/dist/js/demo.js"></script>
        <script src="admin3/plugins/jquery-validation/jquery.validate.min.js"></script>
        <script src="admin3/plugins/jquery-validation/additional-methods.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
        <!-- Bootstrap 4 -->

    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
