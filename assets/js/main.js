// Validación
var inputnombre = document.getElementById("name").value,
    inputcontra = document.getElementById("contrasena").value,
    inicioSesion = document.getElementById("boton");

validacion = true;

inicioSesion.addEventListener("click", validar);

function validar(){
	if(inputnombre === ""){
		alert("Favor, ingrese nombre.");
		// var pAlert= document.getElementById("alertname");
		// pAlert.appendChild(document.createTextNode("Favor, ingrese nombre."));
		// validacion = validacion && false;
	}else if(inputcontra == 123456){
		alert("Su contraseña no debe ser 123456.");
		//var pAlert2 = document.getElementById("alertcontra");
		//pAlert2.appendChild(document.createTextNode("Su contraseña no debe ser 123456."));
	}if(inputcontra.length < 6){
		alert("Su contraseña debe contener a lo menos de 6 dígitos.")
		//var pAlert3 = document.getElementById("alertcontra");
		//pAlert3.appendChild(document.createTextNode("Su contraseña debe contener a lo menos de 6 dígitos."));
	}else{
		//return ("validaciones ok")
	}
};

//me funciona con el dom pero no me reconoce el ok de las validaciones.












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

