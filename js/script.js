const texto = document.getElementById("texto");
const nuevoTexto = document.getElementById("nuevoTexto");
const apartado = document.getElementById("apartado");
const imagenParrafos = document.getElementById("imagenParrafos");
const btnCopiar = document.querySelector("#copiar");
const btnEncriptar = document.querySelector("#encriptar");
const btnDesencriptar = document.querySelector("#desencriptar");
const btnBorrar = document.querySelector("#borrar");

//Valida el campo texto
function validarTexto(info) {
    //Expresiones regulares
    let letrasMayusculas = new RegExp(/[A-Z]/g);
    let caracteresEspeciales = new RegExp(/(?=.*?[#?!@$%^&*-])/);
    let acentos = new RegExp(/[á-ú]|[Á-Ú]/g);
    let validacion = true;
    if (info === "") {
        //Validar campo vacío
        swal("Cuidado", "Ingrese algún texto por favor", "warning");
        return validacion = false;
    } else if (info.match(letrasMayusculas)) {
        //Validar letras mayúsculas
        swal("Cuidado", "Debe ser texto en minúsculas", "warning");
        return validacion = false;
    } else if (info.match(caracteresEspeciales)) {
        //Validar caracteres especiales
        swal("Cuidado", "Debe ser texto sin caracteres especiales", "warning");
        return validacion = false;
    } else if (info.match(acentos)) {
        //Validar acentos tanto en mayúsculas como en minúsculas
        swal("Cuidado", "Debe ser texto sin acentos", "warning");
        return validacion = false;
    } else {
        swal("Exitoso", "Texto correcto", "success");
        return validacion = true;
    }
}

//Función para eliminar imagen y párrafos
function modificarDisenio() {
    //Elimina la imagen
    imagenParrafos.style.display = "none";
    //Da altura al elemento apartado
    apartado.style.height = "80%";
    //Da altura al elemento nuevoTexto
    nuevoTexto.style.height = "80%";
    //Eliminan atributo hidden de nuevoTexto y botón copiar
    nuevoTexto.removeAttribute("hidden");
    btnCopiar.removeAttribute("hidden");
    //Modifica el tamaño de los botones encriptar, desencriptar y borrar
    btnEncriptar.style.height = "180%";
    btnDesencriptar.style.height = "180%";
    btnBorrar.style.height = "180%";
    return;
}

//Función para encriptar el texto
function encriptar() {
    let valorTexto = texto.value;
    let mensaje, mensaje1, mensaje2, mensaje3, mensaje4 = "";
    if (validarTexto(valorTexto)) {
        //Se usa replace para quitar la vocal y poner la vocal encriptada
        mensaje = valorTexto.replace(/e/g, "enter");
        mensaje1 = mensaje.replace(/i/g, "imes");
        mensaje2 = mensaje1.replace(/a/g, "ai");
        mensaje3 = mensaje2.replace(/o/g, "ober");
        mensaje4 = mensaje3.replace(/u/g, "ufat");
        nuevoTexto.innerHTML = mensaje4;
        modificarDisenio();
    }
    return;
}

//Función para desencriptar el texto
function desencriptar() {
    let valorTexto = texto.value;
    let mensaje, mensaje1, mensaje2, mensaje3, mensaje4 = "";
    if (validarTexto(valorTexto)) {
        //Se usa replace para quitar la vocal encriptada y poner la vocal
        mensaje = valorTexto.replace(/enter/g, "e");
        mensaje1 = mensaje.replace(/imes/g, "i");
        mensaje2 = mensaje1.replace(/ai/g, "a");
        mensaje3 = mensaje2.replace(/ober/g, "o");
        mensaje4 = mensaje3.replace(/ufat/g, "u");
        nuevoTexto.innerHTML = mensaje4;
        modificarDisenio();
    }
    return;
}

//Función para el texto del elemento nuevoTexto
function copiar() { navigator.clipboard.writeText(nuevoTexto.textContent); swal("Listo", "Texto copiado", "success"); return;}

function borrar() {texto.value = "";}