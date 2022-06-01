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
					<a class="list-group-item list-group-item-action p-3 border-0 bg-transparent text-white" onclick="ToogleNewFeeSheet()"><i class="fa-solid fa-pen-to-square"></i> New feesheet</a>
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

					<div class="table-responsive anim-hide" id="table-container">
						<table class="table table-hover" id="table_feesheets">
						</table>
					</div>

					<div class="anim-hide hide" id="feesheet-form">
						<div class="card m-lg-5 mt-3">
							<h5 class="card-header">New feesheet</h5>
							<div class="card-body">
								<form>
									<div class="form-row">
										<div class="form-group col-md-6">
											<label for="Description">Description</label>
											<input type="text" class="form-control" id="Description" placeholder="Description">
										</div>
									</div>
									<div class="form-row">
										<div class="form-group col-md-6">
											<label for="Fee">Fee</label>
											<input type="text" class="form-control" id="Fee" placeholder="30.00">
										</div>
									</div>
									<div class="form-row">
										<div class="form-group col-md-4">
											<label for="use_date">Use date</label>
											<input type="date" class="form-control" id="use_date">
										</div>
									</div>
									<div class="form-group col-md-4">
										<label for="inputFees">Standard fees</label>
										<div class="form-horizontal">
											<select id="inputFees" class="form-control"></select>
										</div>
									</div>
									<button type="button" class="btn btn-primary mt-3" onclick="SendNewFeeSheet(0)">Send</button>
									<button type="button" class="btn btn-warning mt-3" onclick="SendNewFeeSheet(1)">Draft</button>
								</form>
							</div>
							<button class="btn btn-danger mr-3" onclick="ToogleNewFeeSheet()"><i class="fa-solid fa-xmark"></i></button>
						</div>
					</div>

					<div class="anim-hide hide" id="edit-feesheet-form">
						<div class="card m-lg-5 mt-3">
							<h5 class="card-header">Edit feesheet</h5>
							<div class="card-body">
								<form>
									<input type="hidden" id="EditDeleteHide" value="" />
									<div class="form-row">
										<div class="form-group col-md-6">
											<label for="Edit_Description">Description</label>
											<input type="text" class="form-control" id="Edit_Description" placeholder="Description">
										</div>
									</div>
									<div class="form-row">
										<div class="form-group col-md-6">
											<label for="Edit_Fee">Fee</label>
											<input type="text" class="form-control" id="Edit_Fee" placeholder="30.00">
										</div>
									</div>
									<div class="form-row">
										<div class="form-group col-md-2">
											<label for="Edit_use_date">Use date</label>
											<input type="date" class="form-control" id="Edit_use_date">
										</div>
									</div>
									<div class="form-group col-md-4">
										<label for="Edit_inputFees">Standard fees</label>
										<div class="form-horizontal">
											<select id="Edit_inputFees" class="form-control"></select>
										</div>
									</div>
									<button type="button" class="btn btn-primary mt-3" onclick="EditUpdate(0)">Send</button>
									<button type="button" class="btn btn-warning mt-3" onclick="EditUpdate(1)">Draft</button>
									<button type="button" class="btn btn-success mt-3" onclick="">Valid payment</button>
									<button type="button" class="btn btn-info mt-3" onclick="">Payment progress</button>
									<button type="button" class="btn btn-danger mt-3" onclick="EditDelete()">Delete</button>
								</form>
							</div>
							<button class="btn btn-danger mr-3" onclick="ToogleEditFeeSheet()"><i class="fa-solid fa-xmark"></i></button>
						</div>
					</div>

					<div id="alert-gsb" class="alert alert-danger mt-4 anim-hide hide" role="alert"></div>

				</div>
			</div>
		</div>

	</main>
	<footer>

	</footer>
	<script src="js/scripts.js"></script>
	<script src="js/api_accountant.js"></script>
	<script src="js/bootstrap.bundle.js"></script>
	<script src="js/scripts_sidebar.js"></script>
	<script src="js/json-to-table.js"></script>
	<script>
		GetFeesheets();
		GetStandarFees();
	</script>
</body>

</html>