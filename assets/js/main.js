function drag(event) {
	event.dataTransfer.setData("text", event.target.id);
}

function finalDrop(event) {
	event.preventDefault();
}

function drop(event) {
	event.preventDefault();

	var dato = event.dataTransfer.getData("text");
	event.target.appendChild(document.getElementById(dato));
}