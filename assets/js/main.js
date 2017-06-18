// Validación
var inputnombre = document.getElementById("name").value,
    inputcontra = document.getElementById("contrasena").value,
    inicioSesion = document.getElementById("boton");

inicioSesion.addEventListener("click", validar);

function validar(){
	if(inputnombre == ""){
		alert("Favor, ingrese nombre.");
	}if(inputcontra == 123456){
		alert("Su contraseña no debe ser 123456.");
	}if(inputcontra.length < 6){
		alert("Su contraseña debe contener más de 6 dígitos.")
	}
};













// Drag & Drop
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

