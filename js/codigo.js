"use strict";
//Creamos el objeto tienda para añadirle datos posteriormente
let clinica = new Clinica();

clinica.llenarCliente();

//limpiar toda la pantalla nada mas empezar
limpiaPantalla();

/*-------------------------EVENTSLISTENERS----------------------------------------------*/

var botonListado1 = document.getElementById('botonListado1');
botonListado1.addEventListener("click", mostrarListado1);


var botonListado2 = document.getElementById('botonListado2');
botonListado2.addEventListener("click", mostrarListado2);

var botonListado3 = document.getElementById('botonListado3');
botonListado3.addEventListener("click", mostrarListado3);

var botonAltaCliente = document.getElementById('altaCliente');
botonAltaCliente.addEventListener("click", mostrarFormularioAltaCliente);

var botonBajaCliente = document.getElementById('bajaCliente');
botonBajaCliente.addEventListener("click", mostrarFormularioBajaCliente);






//funcion para limpiar pantalla

function limpiaPantalla(){
    
    let listado1 = document.getElementById('listado1');
    let listado2 = document.getElementById('listado2');
    let listado3 = document.getElementById('listado3');
    let formularioAlta = document.getElementById('formularioAlta');
    let formularioBaja = document.getElementById('formularioBaja');
    
    listado1.style.display = "none";
    listado2.style.display = "none";
    listado3.style.display = "none";
    formularioAlta.style.display = "none";
    formularioBaja.style.display = "none";

}

//funciones para mostrar formularios

function mostrarFormularioAltaCliente(){

    let listado1 = document.getElementById('listado1');
    let listado2 = document.getElementById('listado2');
    let listado3 = document.getElementById('listado3');
    let formularioBaja = document.getElementById('formularioBaja');
    
    listado1.style.display = "none";
    listado2.style.display = "none";
    listado3.style.display = "none";
    formularioBaja.style.display = "none";

    let formularioAlta = document.getElementById('formularioAlta');

    if (formularioAlta.style.display == "block") {
        formularioAlta.style.display = "none";
    }
    else {
        formularioAlta.style.display = "block";
    }

}

function mostrarFormularioBajaCliente(){
    let listado1 = document.getElementById('listado1');
    let listado2 = document.getElementById('listado2');
    let listado3 = document.getElementById('listado3');
    let formularioAlta = document.getElementById('formularioAlta');
    
    listado1.style.display = "none";
    listado2.style.display = "none";
    listado3.style.display = "none";
    formularioAlta.style.display = "none";

    let formularioBaja = document.getElementById('formularioBaja');

    if (formularioBaja.style.display == "block") {
        formularioBaja.style.display = "none";
    }
    else {
        formularioBaja.style.display = "block";
    }
}


//funciones mostrar listado
function mostrarListado1() {

    let listado2 = document.getElementById('listado2');
    let listado3 = document.getElementById('listado3');
    let formularioAlta = document.getElementById('formularioAlta');
    let formularioBaja = document.getElementById('formularioBaja');
    
    listado2.style.display = "none";
    listado3.style.display = "none";
    formularioAlta.style.display = "none";
    formularioBaja.style.display = "none";

    let listado1 = document.getElementById('listado1');


    if (listado1.style.display == "block") {
        listado1.style.display = "none";
    }
    else {
        listado1.style.display = "block";
        listado1.removeChild(listado1.lastChild);
        listarClientes();
    }
}

function mostrarListado2() {

    let listado1 = document.getElementById('listado1');
    let listado3 = document.getElementById('listado3');
    let formularioAlta = document.getElementById('formularioAlta');
    let formularioBaja = document.getElementById('formularioBaja');
    
    listado1.style.display = "none";
    listado3.style.display = "none";
    formularioAlta.style.display = "none";
    formularioBaja.style.display = "none";

    let listado2 = document.getElementById('listado2');


    if (listado2.style.display == "block") {
        listado2.style.display = "none";
    }
    else {
        listado2.style.display = "block";
        //listado2.removeChild(listado2.lastChild);

    }
}


function mostrarListado3() {

    let listado1 = document.getElementById('listado1');
    let listado2 = document.getElementById('listado2');
    let formularioAlta = document.getElementById('formularioAlta');
    let formularioBaja = document.getElementById('formularioBaja');
    
    listado1.style.display = "none";
    listado2.style.display = "none";
    formularioAlta.style.display = "none";
    formularioBaja.style.display = "none";

    let listado3 = document.getElementById('listado3');


    if (listado3.style.display == "block") {
        listado3.style.display = "none";
    }
    else {
        listado3.style.display = "block";
        //listado2.removeChild(listado2.lastChild);

    }
}

//Mostrar lista Cliente
function listaClienteEspecifico(DNI) {

    let cliente = clinica.listaClienteEspecifico(DNI);

    if (typeof cliente === "object") {
        var insertar = document.getElementById("listado1"); //


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
    var insertar = document.getElementById("listado1"); //

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





















//------------------------------AÑADIDO DE DATOS CON XML----------------------------------------------//

function loadXMLDoc(filename) {
    if (window.XMLHttpRequest) {
        var xhttp = new XMLHttpRequest();
    }
    else // code for IE5 and IE6
    {
        var xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.open("GET", filename, false);

    xhttp.send();

    return xhttp.responseXML;
}
function cargarDatos() {


    var oXML = loadXMLDoc("clinica.xml");
    var oDietas = oXML.getElementsByTagName("dieta");
    var oClientes = oXML.getElementsByTagName("cliente");
    var oDietistas = oXML.getElementsByTagName("dietista");



    //Introduze las dietas
    for (var i = 0; i < oDietas.length; i++) {

        // console.log(oJuegos[i]);
        var nombre = oDietas[i].getElementsByTagName("nombre_dieta")[0].textContent;
        var duracion = oDietas[i].getElementsByTagName("duracion_dieta")[0].textContent;
        var tratamiento = oDietas[i].getElementsByTagName("tratamiento_dieta")[0].textContent;

        var dieta = new Dieta(nombre, duracion, tratamiento, i);

        clinica.altaDieta(dieta);

    }
    //Introduze los clientes

    for (var i = 0; i < oClientes.length; i++) {

        var nombre = oClientes[i].getElementsByTagName("nombre")[0].textContent;
        var apellidos = oClientes[i].getElementsByTagName("apellidos")[0].textContent;
        var dni = oClientes[i].getElementsByTagName("DNI")[0].textContent;

        var cliente = new Cliente(nombre, apellidos, dni);

        clinica.altaCliente(cliente);
    }

    //Introduzco las compras

    for (var i = 0; i < oDietistas.length; i++) {

        var nombre = oDietistas[i].getElementsByTagName("nombre")[0].textContent;
        var apellidos = oDietistas[i].getElementsByTagName("apellidos")[0].textContent;
        var dni = oDietistas[i].getElementsByTagName("dni")[0].textContent;

        var dietista = new Dietista(nombre, apellidos, dni);

        clinica.altaDietista(dietista);
    }

    alert("Se han cargado los datos correctamente.");
}