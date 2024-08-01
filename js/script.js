const texto = document.getElementById("texto");
const nuevoTexto = document.getElementById("nuevoTexto");
const btnCopiar = document.querySelector("#copiar");

//Valida el campo texto
function validarTexto(info) {
    //Expresiones regulares
    let letrasMayusculas = new RegExp(/[A-Z]/g);
    let caracteresEspeciales = new RegExp(/(?=.*?[#?!@$%^&*-])/);
    let acentos = new RegExp(/[á-ú]|[Á-Ú]/g);
    let validacion = true;
    if (info === "") {
        //Validar campo vacío
        swal("Error", "Ingrese algún texto por favor", "error");
        return validacion = false;
    } else if (info.match(letrasMayusculas)) {
        //Validar letras mayúsculas
        swal("Error", "Debe ser texto en minúsculas", "error");
        return validacion = false;
    } else if (info.match(caracteresEspeciales)) {
        //Validar caracteres especiales
        swal("Error", "Debe ser texto sin caracteres especiales", "error");
        return validacion = false;
    } else if (info.match(acentos)) {
        //Validar acentos tanto en mayúsculas como en minúsculas
        swal("Error", "Debe ser texto sin acentos", "error");
        return validacion = false;
    } else {
        swal("Exitoso", "Texto correcto", "success");
        return validacion = true;
    }
}

function quitarImagenParrafos() {
    document.getElementById("imagenParrafos").style.display = "none";
    document.getElementById("apartado").style.height = "80%";
    nuevoTexto.style.height = "80%";
    nuevoTexto.removeAttribute("hidden");
    btnCopiar.removeAttribute("hidden");
    return;
}

function encriptar() {
    let valorTexto = texto.value;
    let mensaje, mensaje1, mensaje2, mensaje3, mensaje4 = "";
    if (validarTexto(valorTexto)) {
        mensaje = valorTexto.replace(/e/g, "enter");
        mensaje1 = mensaje.replace(/i/g, "imes");
        mensaje2 = mensaje1.replace(/a/g, "ai");
        mensaje3 = mensaje2.replace(/o/g, "ober");
        mensaje4 = mensaje3.replace(/u/g, "ufat");
        nuevoTexto.innerHTML = mensaje4;
        texto.value = "";
        quitarImagenParrafos()
    }
    return
}

function desencriptar() {
    let valorTexto = texto.value;
    let mensaje, mensaje1, mensaje2, mensaje3, mensaje4 = "";
    if (validarTexto(valorTexto)) {
        mensaje = valorTexto.replace(/enter/g, "e");
        mensaje1 = mensaje.replace(/imes/g, "i");
        mensaje2 = mensaje1.replace(/ai/g, "a");
        mensaje3 = mensaje2.replace(/ober/g, "o");
        mensaje4 = mensaje3.replace(/ufat/g, "u");
        nuevoTexto.innerHTML = mensaje4;
        texto.value = "";
        quitarImagenParrafos()
    }
    return;
}

function copiar() {
    navigator.clipboard.writeText(nuevoTexto.textContent);
    swal("Listo", "Texto copiado", "success");
    return;
}