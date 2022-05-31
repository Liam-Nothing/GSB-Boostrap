<!DOCTYPE html>
<html lang="fr">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta name="Content-Type" content="UTF-8">
	<link rel="stylesheet" type="text/css" href="css/styles.css">
	<link rel="stylesheet" type="text/css" href="css/print.css" media="print">
	<link rel="stylesheet" type="text/css" href="css/bootstrap.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
	<link rel="stylesheet" type="text/css" href="css/styles_sidebar.css">
	<link rel="stylesheet" type="text/css" href="css/board.css">
</head>

<body>
	<header>

	</header>
	<main>
		<div class="d-flex" id="wrapper">
			<!-- Sidebar-->
			<div class="border-end bg-color-0" id="sidebar-wrapper">
				<div class="sidebar-heading bg-color-0 text-white">
					<img src="img/logo_top_white.png" class="img-fluid" alt="Responsive image" style="max-width:100px;">
				</div>
				<div class="list-group list-group-flush">
					<a class="list-group-item list-group-item-action p-3 border-0 bg-transparent text-white" href="#!"><i class="fa-solid fa-pen-to-square"></i> New feesheet</a>
					<a class="list-group-item list-group-item-action p-3 border-0 bg-transparent text-white" href="#!"><i class="fa-solid fa-user"></i> Manage users</a>
					<a class="list-group-item list-group-item-action p-3 border-0 bg-transparent text-white" onclick="Logout()"><i class="fa-solid fa-arrow-right-from-bracket"></i> Logout</a>
				</div>
			</div>
			<!-- Page content wrapper-->
			<div id="page-content-wrapper">
				<!-- Top navigation-->
				<nav class="navbar navbar-expand-lg navbar-light bg-color-0 border-bottom">
					<div class="container-fluid">
						<button class="btn text-white" id="sidebarToggle"><i class="fa-solid fa-bars"></i> <span class="font-weight-bold">Feesheets Board</span></button>
					</div>
				</nav>
				<!-- Page content-->
				<div class="container-fluid">

					<div class="table-responsive">
						<table class="table table-hover" id="table_feesheets">
						</table>
					</div>

					<div id="alert-gsb" class="alert alert-danger mt-4 hide" role="alert"></div>

				</div>
			</div>
		</div>

	</main>
	<footer>

	</footer>
	<script src="js/scripts.js"></script>
	<script src="js/api.js"></script>
	<script src="js/bootstrap.bundle.js"></script>
	<script src="js/scripts_sidebar.js"></script>
	<script src="js/json-to-table.js"></script>
	<script>
		GetFeesheets();
	</script>
</body>

</html>