function Login() {
	let api = "all_open_session";
	let username = document.getElementById("username").value;
	let password = document.getElementById("password").value;

	let data = JSON.stringify({ "api": api, "username": username, "password": password });
	let url = "https://api.gsb.best/";

	RequestAPI(url, data);
}