<template>
    <div>
        <nav class="main-header navbar navbar-expand navbar-white navbar-light">
			<ul class="navbar-nav">
				<li class="nav-item">
					<a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
				</li>
				<li class="nav-item d-none d-sm-inline-block">
					<a v-bind:href="url" class="nav-link"><span class="nav-icon fas fa-tachometer-alt"></span> Dashboard</a>
				</li> 
			</ul>
			<form class="form-inline ml-3">
				<div class="input-group input-group-sm">
					<input class="form-control form-control-navbar" type="search" placeholder="Track Application" aria-label="Search">
					<div class="input-group-append">
					<button class="btn btn-navbar" type="button">
						<router-link to="/searchapplication">
							<i class="fas fa-search"></i>
						</router-link>
					</button>
					</div>
				</div>
			</form>
			<ul class="navbar-nav ml-auto">
				<li class="nav-item dropdown">
					<a class="nav-link" data-toggle="dropdown" href="#">
						<i class="far fa-bell"></i>
						<span class="badge badge-warning navbar-badge">7</span>
					</a>
					<div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
						<span class="dropdown-item dropdown-header">7 Notifications</span>
						<div class="dropdown-divider"></div>
						<a href="#" class="dropdown-item">
							<i class="fas fa-envelope mr-2"></i> 4 new messages
						</a>
						<div class="dropdown-divider"></div>
						<a href="#" class="dropdown-item">
							<i class="fas fa-file mr-2"></i> 3 new reports
						</a>
						<div class="dropdown-divider"></div>
						<a href="#" class="dropdown-item dropdown-footer">See All Notifications</a>
					</div>
				</li>
				<li class="nav-item dropdown">
					<a class="nav-link" data-toggle="dropdown" href="#">
						<div class="user-panel d-flex">
							<div class="image">
								<img src="admin3/dist/img/avatar5.png" class="img-circle elevation-2" alt="User Image">
							</div>
							<div class="info">
								<a href="#" class="d-block">Tshewang Tenzin
								</a>
							</div>
						</div>
					</a>
					<div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
						<div class="dropdown-divider"></div>
						<router-link to="/profile"   class="dropdown-item">
							<p id="">
								<i class="fas fa-user mr-2"></i>
								Profile
							</p>
						</router-link>
						<div class="dropdown-divider"></div>
						<router-link to="/settings"   class="dropdown-item">
							<p>
								<i class="fas fa-random mr-2"></i>
								Setting
							</p>
						</router-link>
						<div class="dropdown-divider"></div>
						<a href="#" @click="logout()" class="dropdown-item">
							<i class="fa fa-sign-out-alt"></i>Sign out
						</a>
					</div>
				</li>
			</ul>
		</nav>
    </div>
</template>
<script>
    export default {
		data() {
			return {
				url:"userlogin",
			}
		},
        methods: {
            logout(){
				Swal.fire({
					title: 'Are you sure you wish to signout?',
					icon: 'warning',
					showCancelButton: true,
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
					confirmButtonText: 'Yes!',
					}).then((result) => {
					if (result.isConfirmed) {
						window.location = "http://localhost:83/emisv3-adminlte/public";
					}
				})
            },
        },
        mounted() {
        },
    }
</script>

