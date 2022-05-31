let api_url = "http://localhost/ProjetGSB/Web/app/api/";

function Login() {
	let api = "all_open_session";
	let username = document.getElementById("username").value;
	let password = document.getElementById("password").value;
	let redirectPage = "board.php";

	let data = JSON.stringify({ "api": api, "username": username, "password": password });
	let url = api_url;

	RequestAPI(url, data, redirectPage);
}

function Logout() {
	let api = "all_logout_session";
	let redirectPage = "index.php";

	let data = JSON.stringify({ "api": api });
	let url = api_url;

	RequestAPI(url, data, redirectPage);
}

function GetFeesheets() {
	let api = "multi_view_all_feesheets";

	let data = JSON.stringify({ "api": api });
	let url = api_url;

	RequestAPI(url, data);
}

function GetStandarFees() {
	let api = "all_get_standard_fees";

	let data = JSON.stringify({ "api": api });
	let url = api_url;

	RequestAPI(url, data);
}

function ToogleNewFeeSheet() {
	Feesheets_Table = document.getElementById("table-container");
	NewFeesheets_Card = document.getElementById("feesheet-form");

	if (NewFeesheets_Card.classList.contains("hide")) {
		Feesheets_Table.classList.add("hide");
		NewFeesheets_Card.classList.remove("hide");
	} else {
		Feesheets_Table.classList.remove("hide");
		NewFeesheets_Card.classList.add("hide");
		GetFeesheets();
	}
}

function AddFeesheets(state) {
	let api = "multi_add_feesheets";
	let description = document.getElementById("Description").value;
	let fee = document.getElementById("Fee").value;
	let use_date = document.getElementById("use_date").value;
	let standard_fee = document.getElementById("inputFees").value;

	let data = JSON.stringify({ "api": api, "description": description, "fee": fee, "use_date": use_date, "standard_fee": standard_fee, "state": state });
	let url = api_url;

	RequestAPI(url, data);
}

function SendNewFeeSheet(draft = 0) {
	if (draft) {
		AddFeesheets(2);
	} else {
		AddFeesheets(1);
	}
}