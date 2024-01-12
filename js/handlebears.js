// Datos que serán utilizados para llenar la plantilla
var datos = {
    titulo: "GRACIAS POR VISITARNOS",
    descripcion: "esperamos verte pronto!"
};

// Obtener la plantilla desde el DOM
var fuentePlantilla = document.getElementById("mi-plantilla").innerHTML;

// Compilar la plantilla con Handlebars
var plantillaCompilada = Handlebars.compile(fuentePlantilla);

// Llenar la plantilla con los datos
var resultadoHTML = plantillaCompilada(datos);

// Mostrar el resultado en el DOM
document.getElementById("resultado").innerHTML = resultadoHTML;
