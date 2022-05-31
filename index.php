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
</head>

<body>
	<header>

	</header>
	<main>
		<section class="vh-100" style="background-color: #508bfc;">
			<div class="container py-5 h-100">
				<div class="row d-flex justify-content-center align-items-center h-100">
					<div class="col-12 col-md-8 col-lg-6 col-xl-5">
						<div class="card shadow-2-strong" style="border-radius: 1rem;">
							<div class="card-body p-5 text-center">

								<img src="img/logo_top_black.png" class="img-fluid mb-5" alt="Responsive image">

								<div class="form-outline mb-4">
									<input type="text" id="username" class="form-control form-control-lg" placeholder="Username" value="user" />
								</div>

								<div class="form-outline mb-4">
									<input type="password" id="password" class="form-control form-control-lg" placeholder="Password" value="user" />
								</div>

								<button class="btn btn-primary btn-lg btn-block" type="button" onclick="Login()">Login</button>

								<div id="alert-gsb" class="alert alert-danger mt-4 hide" role="alert"></div>

							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>
	<footer>

	</footer>
	<script src="js/scripts.js"></script>
	<script src="js/api.js"></script>
	<script src="js/bootstrap.bundle.js"></script>
</body>

</html>