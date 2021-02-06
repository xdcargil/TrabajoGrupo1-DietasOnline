'use strict';

var botonAceptarAlta = document.getElementById('botonAceptarAlta');
botonAceptarAlta.addEventListener("click", verificarAlta);


function verificarAlta() 
{

    let sErrores = "";
    let bValido = true;
    let sNombre = formularioAlta.inputNombre.value.trim();
    let oExpReg = /^[\s\S]{1,25}$/;

    if(!oExpReg.test(sNombre))
    {
        bValido = false;
        sErrores="\n El nombre no tiene la longitud permitida (1 - 25 caracteres)";
        formularioAlta.inputNombre.classList.add("error");
        formularioAlta.inputNombre.focus();
    }
    else
    {
        formularioAlta.inputNombre.classList.remove("error");
    }



    if(bValido)
    {
        formularioAlta.submit();
    }
    else
    {
        alert(sErrores);
    }

}
