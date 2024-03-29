function guardarDatos() {
    var datos = [];
    var comprCampos = false;
    var alertaMostrada = false; 

    for (var i = 1; i <= 5; i++) {        
        var nombre = document.getElementById("nombre" + i).value;
        var porcentaje = document.getElementById("Porcentaje" + i).value;
        if(nombre !== "" && porcentaje !== "") {
            datos.push({ nombre: nombre, porcentaje: porcentaje });
            comprCampos = true;
        } else if (!alertaMostrada) { 
            alertaMostrada = true; 
            alert("Faltan campos por llenar!");
        }
    }

    if(comprCampos && !alertaMostrada){
        var parametrosUrl = '';
        for (var j = 0; j < datos.length; j++) {
            if (datos[j].nombre && datos[j].porcentaje) {
                parametrosUrl += '&nomb' + (j + 1) + '=' + encodeURIComponent(datos[j].nombre);
                parametrosUrl += '&Porc' + (j + 1) + '=' + encodeURIComponent(datos[j].porcentaje);
            }
        }
        window.location.href = 'boton.html?' + parametrosUrl.slice(1);
    }
}


function obtenerDatos() {
    var parametrosUrl = new URLSearchParams(window.location.search);
    for (var i = 1; i <= 5; i++) {
        var nombre = parametrosUrl.get('nomb' + i);
        var porcentaje = parametrosUrl.get('Porc' + i);
        document.getElementById('nombre' + i).textContent = nombre || '';
        document.getElementById('Porcentaje' + i).textContent = (porcentaje || '') + '%';
    }
}

function volver() {
    window.location.href = 'index.html'
}

document.addEventListener('DOMContentLoaded', obtenerDatos);

// Funcion del boton guardar
document.addEventListener("DOMContentLoaded", function() {
    const boton1 = document.getElementById("guardar");
    boton1.addEventListener("click", guardarDatos);
});

// Funcion del boton volver
document.addEventListener("DOMContentLoaded", function() {
    const boton2 = document.getElementById("volver");
    boton2.addEventListener("click", volver);
});
