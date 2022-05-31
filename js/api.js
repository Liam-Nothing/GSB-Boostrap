let love = "❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️";
let alert = document.getElementById("alert-gsb");

function AccessPage() {
	PHPSessionID = document.cookie.match(/PHPSESSID=[^;]+/);
	PageName = window.location.pathname.split("/").pop();
	if (PHPSessionID) {
		if (PageName == "" || PageName == "index.php") {
			window.location.replace("board.php");
		}
	} else {
		if (PageName != "" && PageName != "index.php") {
			window.location.replace("index.php");
		}
	}
}

function RequestAPI(url, data, redirectPage = "none") {
	let xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			let json = JSON.parse(xhr.responseText);
			AlertMessage("hide");
			console.log(json);
			if (json.id == 2) {
				AlertMessage("view", json.message)
			} else if (json.id == 1) {
				if (redirectPage != "none") {
					window.location.replace(redirectPage);
				} else {
					SwitchAPI(JSON.parse(data)["api"], json.content);
				}
			} else {
				AlertMessage("view", "Error")
			}
		}
	};
	xhr.send(data);
}

function AlertMessage(event, message = "") {
	if (event == "view") {
		alert.innerHTML = message;
		alert.classList.remove("hide");
	} else {
		alert.classList.add("hide");
	}
}

function SwitchAPI(api, content) {
	switch (api) {
		case "multi_view_all_feesheets":
			document.getElementById("table_feesheets").innerHTML = ConvertJsonToTable(content, 'table_feesheets', null, null);
			break;
		default:
			AlertMessage("view", "Function doesn't exist.")
	}
}

AccessPage();