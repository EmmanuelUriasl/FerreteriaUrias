let correo = document.getElementById("correo");
let contraseña = document.getElementById("contraseña");
let nombre = document.getElementById("nombre");

validarIngreso = () => {
  if (
    correo.value === null ||
    (correo.value === "" && contraseña.value === null) ||
    contraseña.value === ""
  ) {
    swal("Ingrese Datos", "Ingrese un correo y contraseña", "error");
  } else {
    window.location.href = "/bienvenida.html";
  }
};
validarRegistro = () => {
  if (
    nombre.value === null ||
    (nombre.value === "" && correo.value === null) ||
    (correo.value === "" && contraseña.value === null) ||
    contraseña.value === ""
  ) {
    swal(
      "Ingrese Datos",
      "Ingresa nombre correo y contraseña para su registro",
      "error"
    );
  } else {
    window.location.href = "/bienvenida.html";
  }
};
