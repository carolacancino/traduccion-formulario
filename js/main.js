function traduccionForm(){
	var titulo=document.getElementById("form-signin-heading");

	titulo.innerHTML="Por favor inicia sesión";
	titulo.style="font-size:24px";

	var caja=document.getElementById("inputEmail").placeholder = "Correo Electronico";
	var cajaPass=document.getElementById("inputPassword").placeholder="Contraseña";

	var checkboxTex=document.getElementsByTagName("span")[0];
	checkboxTex.textContent="Recordar Datos";

	var botonTex=document.getElementsByTagName("button")[0];
	botonTex.textContent="Iniciar Sesión";
}

traduccionForm();