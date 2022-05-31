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