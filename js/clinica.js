'use strict';

class Clinica
{
    constructor(nombre_clinica)
    {
        this.nombre_clinica=nombre_clinica;
        this.dietistas=[];
        this.cliente=[];
        this.dietas=[];
    }
    listarClientes() //Lista todos los clientes
    {

    }
    listaClienteEspecifico(oCliente) //Se pasa un valor String (DNI del Cliente)
    {

    }
    listarDietistas() //Listar todos los dietistas
    {

    }
    listarDietista(oDietista) //Se pasa un valor String (DNI del Dietista)
    {

    }
    listarDietas() //Listar todas las dietas
    {

    }
    listarDietaEspecifica(oDieta) //Se pasa un valor INT (Código de dieta)
    {

    }
    altaCliente(oCliente) //Se pasa un objeto cliente
    {
        let oClienteExistente = null;

        oClienteExistente = this._buscarCliente(oCliente.dni);

        if(oClienteExistente==null)
        {
            this.cliente.push(oCliente);
            alert("Alta de cliente realizada");
        }
        else
        {
            alert("Ya hay una persona con ese dni");
        }
    }
    bajaCliente(oCliente) //Se pasa un objeto cliente
    {

    }
    altaDietista(oDietista) //Se pasa un objeto dietista
    {

    }
    bajaDietista(oDietista) //Se pasa un objeto dietista
    {

    }
    altaDieta(oDieta) //Se pasa un objeto dieta
    {

    }
    bajaDieta(oDieta) //Se pasa un objeto dieta
    {


    }
    _buscarCliente(sDni)
    {
        let oClienteExistente= null;
        oClienteExistente=this.cliente.find(oC => oC.dni==sDni);
        return oClienteExistente;
    }
}
