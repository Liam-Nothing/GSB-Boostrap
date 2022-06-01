let love = "❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️";
let alert = document.getElementById("alert-gsb");
let list_standard_fees = [];
let list_feesheet = [];

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

function delete_cookie(name) {
	document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function AlertMessage(event, message = "") {
	if (event == "view") {
		alert.innerHTML = message;
		setTimeout(function () { alert.classList.remove("hide"); }, 100);
		if (message == "You are not logged") {
			delete_cookie("PHPSESSID");
			window.location.replace("index.php");
		}
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
			list_feesheet = content;
			i = 0;
			content.forEach(element => {
				delete element['id_user'];
				delete element['url_pict'];
				// delete element['standard_fee'];
				delete element['role_label'];
				delete element['first_name'];
				delete element['last_name'];
				delete element['email'];
				delete element['add_date'];
				// delete element['fee_sheet_id'];
				element['use_date'] = convertDate(new Date(Date.parse(element['use_date'])));
				element['state_label'] = element['state_label'].replaceAll("??", "é");
				// element['standard_fee_label'] = element['standard_fee_label'].replaceAll("??", "é");
				element['description'] = element['description'].replaceAll("??", "é");
				if (element['state'] == 1) {
					element["view"] = `<button class="btn" onclick="ViewFeeSheet(${i})"><i class="fa-solid fa-eye"></i></button>`;
				} else {
					element["view"] = `<button class="btn" onclick="EditFeeSheet(${i})"><i class="fa-solid fa-pen"></i></button>`;
				}
				delete element['state'];
				i++;
			});
			document.getElementById("table_feesheets").innerHTML = ConvertJsonToTable(content, 'table_feesheets', null, null);
			break;
		case "all_get_standard_fees":
			list_standard_fees = content;
			content.forEach(element => {
				document.getElementById("inputFees").innerHTML += `<option value="${element["id"]}">${element["label"]} | ${element["fee"]}</option>`;
				document.getElementById("Edit_inputFees").innerHTML += `<option value="${element["id"]}">${element["label"]} | ${element["fee"]}</option>`;
				document.getElementById("View_inputFees").innerHTML += `<option value="${element["id"]}">${element["label"]} | ${element["fee"]}</option>`;
			});
			break;
		case "multi_add_feesheets":
			ToogleNewFeeSheet();
			break;
		case "multi_delete_feesheets":
		case "multi_update_feesheets":
			ToogleEditFeeSheet();
			break;
		default:
			AlertMessage("view", "Function doesn't exist.")
	}
}

AccessPage();