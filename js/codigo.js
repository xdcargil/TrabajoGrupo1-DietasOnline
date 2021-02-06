"use strict";
//Creamos el objeto tienda para añadirle datos posteriormente
let clinica = new Clinica();

clinica.llenarCliente();


listarClientes();
/*-------------------------EVENTSLISTENERS----------------------------------------------*/

document.getElementById("prueba").addEventListener("click", prueba);

function prueba() {
    document.getElementById("prueba").style.display = "block";
    alert('hola');
}
//Mostrar lista Cliente
function listaClienteEspecifico(DNI) {

    let cliente = clinica.listaClienteEspecifico(DNI);

    if (typeof cliente === "object") {
        var insertar = document.getElementById("test"); //


        var tabla = document.createElement("table");
        var tblBody = document.createElement("tbody");


        let tr = document.createElement("tr");

        var celda1 = document.createElement("td"); //TD para Nombre
        var celda2 = document.createElement("td"); //TD para Apellidos
        var celda3 = document.createElement("td"); //TD para DNI

        var textoCeldaNombre = document.createTextNode(cliente.getNombre()); //Texto para Nombre
        var textoCeldaApellidos = document.createTextNode(cliente.getApellidos()); //Texto para Apellidos
        var textoCeldaDNI = document.createTextNode(cliente.getDNI()); //Texto para DNI


        celda1.appendChild(textoCeldaNombre);
        celda2.appendChild(textoCeldaApellidos);
        celda3.appendChild(textoCeldaDNI);

        tr.appendChild(celda1);
        tr.appendChild(celda2);
        tr.appendChild(celda3);

        tblBody.appendChild(tr);

        tabla.appendChild(tblBody);
        insertar.appendChild(tabla);
        tabla.setAttribute("border", "2");

    } else {
        alert("Cliente no encontrado");
    }


}

//Mostrar Listado Clientes
function listarClientes() {
    let aDatosClientes = clinica.listarClientes();
    var insertar = document.getElementById("test"); //

    if (aDatosClientes.length > 0) {
        var tabla = document.createElement("table");
        var tblBody = document.createElement("tbody");

        aDatosClientes.forEach(element => {

            let tr = document.createElement("tr");

            var celda1 = document.createElement("td"); //TD para Nombre
            var celda2 = document.createElement("td"); //TD para Apellidos
            var celda3 = document.createElement("td"); //TD para DNI

            var textoCeldaNombre = document.createTextNode(element.getNombre()); //Texto para Nombre
            var textoCeldaApellidos = document.createTextNode(element.getApellidos()); //Texto para Apellidos
            var textoCeldaDNI = document.createTextNode(element.getDNI()); //Texto para DNI


            celda1.appendChild(textoCeldaNombre);
            celda2.appendChild(textoCeldaApellidos);
            celda3.appendChild(textoCeldaDNI);

            tr.appendChild(celda1);
            tr.appendChild(celda2);
            tr.appendChild(celda3);

            tblBody.appendChild(tr);

        });

        tabla.appendChild(tblBody);
        insertar.appendChild(tabla);
        tabla.setAttribute("border", "2");

    } else {
        alert("No hay clientes");
    }
}


//Mostrar listado dietas

function listarDietas() {
    let dietas = clinica.listarDietas();
    let contenedor = document.getElementById('');
}

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

    if (tienda.registrarCliente(usuario)) {
        alert("Cliente dado de alta correctamente");
        ocultarFormularios();
    } else {
        alert("Ya existe un cliente con ese NI");
    }

    limpiarInputs(inputs);
}

