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

	delete_cookie("user");
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
	EditFeesheets_Card = document.getElementById("edit-feesheet-form");

	if (NewFeesheets_Card.classList.contains("hide")) {
		Feesheets_Table.classList.add("hide");
		NewFeesheets_Card.classList.remove("hide");
		EditFeesheets_Card.classList.add("hide");
	} else {
		Feesheets_Table.classList.remove("hide");
		NewFeesheets_Card.classList.add("hide");
		EditFeesheets_Card.classList.add("hide");
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

function selectElement(id, valueToSelect) {
	let element = document.getElementById(id);
	element.value = valueToSelect;
}

function EditFeeSheet(id) {
	ToogleEditFeeSheet();
	document.getElementById("Edit_Description").value = list_feesheet[id]["description"];
	document.getElementById("Edit_use_date").value = list_feesheet[id]["use_date"].split("/").reverse().join("-");
	document.getElementById("Edit_Fee").value = list_feesheet[id]["fee"];
	document.getElementById("EditDeleteHide").value = list_feesheet[id]["fee_sheet_id"];
	selectElement("Edit_inputFees", list_feesheet[id]["standard_fee"]);
}

function ViewFeeSheet(id) {
	ToogleViewFeeSheet();
	document.getElementById("View_Description").value = list_feesheet[id]["description"];
	document.getElementById("View_use_date").value = list_feesheet[id]["use_date"].split("/").reverse().join("-");
	document.getElementById("View_Fee").value = list_feesheet[id]["fee"];
	document.getElementById("ViewDeleteHide").value = list_feesheet[id]["fee_sheet_id"];
	selectElement("View_inputFees", list_feesheet[id]["standard_fee"]);
}

function EditDelete() {
	let api = "multi_delete_feesheets";
	let id_feesheet = document.getElementById("EditDeleteHide").value;

	let data = JSON.stringify({ "api": api, "id_feesheet": id_feesheet });
	let url = api_url;

	RequestAPI(url, data);
}

function ToogleEditFeeSheet() {
	Feesheets_Table = document.getElementById("table-container");
	NewFeesheets_Card = document.getElementById("feesheet-form");
	EditFeesheets_Card = document.getElementById("edit-feesheet-form");

	if (EditFeesheets_Card.classList.contains("hide")) {
		Feesheets_Table.classList.add("hide");
		NewFeesheets_Card.classList.add("hide");
		EditFeesheets_Card.classList.remove("hide");
	} else {
		Feesheets_Table.classList.remove("hide");
		NewFeesheets_Card.classList.add("hide");
		EditFeesheets_Card.classList.add("hide");
		GetFeesheets();
	}
}

function EditUpdate(draft) {
	if (draft) {
		UpdateFeesheets(2);
	} else {
		UpdateFeesheets(1);
	}
}

function UpdateFeesheets(state) {
	let api = "multi_update_feesheets";
	let description = document.getElementById("Edit_Description").value;
	let fee = document.getElementById("Edit_Fee").value;
	let use_date = document.getElementById("Edit_use_date").value;
	let standard_fee = document.getElementById("Edit_inputFees").value;
	let id_feesheet = document.getElementById("EditDeleteHide").value;

	let data = JSON.stringify({ "api": api, "description": description, "fee": fee, "use_date": use_date, "standard_fee": standard_fee, "state": state, "id_feesheet": id_feesheet });
	let url = api_url;

	RequestAPI(url, data);
}

function ToogleViewFeeSheet() {
	Feesheets_Table = document.getElementById("table-container");
	NewFeesheets_Card = document.getElementById("feesheet-form");
	ViewFeesheets_Card = document.getElementById("view-feesheet-form");

	if (ViewFeesheets_Card.classList.contains("hide")) {
		Feesheets_Table.classList.add("hide");
		NewFeesheets_Card.classList.add("hide");
		ViewFeesheets_Card.classList.remove("hide");
	} else {
		Feesheets_Table.classList.remove("hide");
		NewFeesheets_Card.classList.add("hide");
		ViewFeesheets_Card.classList.add("hide");
		GetFeesheets();
	}
}