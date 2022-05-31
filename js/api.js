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

function convertDate(inputFormat) {
	function pad(s) { return (s < 10) ? '0' + s : s; }
	var d = new Date(inputFormat)
	return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/')
}

function SwitchAPI(api, content) {
	switch (api) {
		case "multi_view_all_feesheets":
			content.forEach(element => {
				delete element['id_user'];
				delete element['url_pict'];
				delete element['standard_fee'];
				delete element['role_label'];
				delete element['first_name'];
				delete element['last_name'];
				delete element['username'];
				delete element['add_date'];
				delete element['fee_sheet_id'];
				element['use_date'] = convertDate(new Date(Date.parse(element['use_date'])));
				element["edit"] = `<button class="btn" onclick=""><i class="fa-solid fa-pen"></i></button>`;
			});
			document.getElementById("table_feesheets").innerHTML = ConvertJsonToTable(content, 'table_feesheets', null, null);
			break;
		default:
			AlertMessage("view", "Function doesn't exist.")
	}
}

AccessPage();