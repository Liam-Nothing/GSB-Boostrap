
let alert = document.getElementById("alert-gsb");

function RequestAPI(url, data) {
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