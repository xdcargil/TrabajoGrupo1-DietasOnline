"use strict";
//Creamos el objeto tienda para añadirle datos posteriormente
let clinica = new Clinica();

/*-------------------------EVENTSLISTENERS----------------------------------------------*/


//Llamada a la Función de Ocultar Formularios.
ocultarFormularios();


//Mostrar los formularios


//Función para Ocultar los Formularios
function ocultarFormularios() {
}


function limpiarInputs(inputs) {

    for (let index = 0; index < inputs.length; index++) {
        if (inputs[index].type != "button") {
            inputs[index].value = "";
        }
    }
}




//Registrar Cliente

function altaCliente() {

    /*let formulario = document.getElementById("formAdministracionUsuario");
    let inputs = form.getElementsByTagName("input");

    let sNombre = inputs[0].value;
    let sApellidos = inputs[1].value;
    let dFecha = inputs[2].value;
    let sEmail = inputs[3].value;
    iContadorCliente++;
*/
    let cliente = new Cliente(iContadorCliente, sNombre, sApellidos, dFecha, sEmail);

    if(tienda.registrarCliente(usuario)){
        alert("Cliente dado de alta correctamente");
        ocultarFormularios();
    }else{
        alert("Ya existe un cliente con ese NI");
    }

    limpiarInputs(inputs);


}


