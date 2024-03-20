function encriptar() {
    var entrada = document.getElementById("entrada").value.toLowerCase();
    var encriptacion = {"e": "enter", "i": "imes", "a": "ai", "o": "ober", "u": "ufat"};
    var salida = "";
    for (var i = 0; i < entrada.length; i++) {
        var letra = entrada[i];
        if (letra in encriptacion) {
            salida += encriptacion[letra];
        } else {
            salida += letra;
        }
    }
    document.getElementById("salida").value = salida;
}

function desencriptar() {
    var entrada = document.getElementById("entrada").value.toLowerCase();
    var desencriptacion = {"enter": "e", "imes": "i", "ai": "a", "ober": "o", "ufat": "u"};
    var palabras = entrada.split(" ");
    var salida = "";
    for (var i = 0; i < palabras.length; i++) {
        var palabra = palabras[i];
        if (palabra in desencriptacion) {
            salida += desencriptacion[palabra];
        } else {
            salida += palabra;
        }
        if (i < palabras.length - 1) {
            salida += " ";
        }
    }
    document.getElementById("salida").value = salida;
}
function copiarTexto() {
    var salida = document.getElementById("salida");
    salida.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles!");
}
