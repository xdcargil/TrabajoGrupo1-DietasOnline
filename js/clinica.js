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
        let oClienteExistente = null;

        oClienteExistente = this._buscarCliente(oCliente.dni);

        if (oClienteExistente == null) {
            return 0; // 0 si no encuentra el objeto
        }
        else 
        {
                    console.log(oClienteExistente.dni);
                    let posicion = this.posicionArrayCliente(oClienteExistente.dni);
                    this.cliente.splice(posicion, 1);
                    console.log(this.cliente);
        }

    }
    altaDietista(oDietista) //Se pasa un objeto dietista
    {

        let oDietistaExistente = null;

        oDietistaExistente = this._buscarDietista(oDietista.dni);

        if(oDietistaExistente==null)
        {
            this.dietas.push(oDietista);
            alert("Alta de dietista realizada");
        }
        else
        {
            alert("Ya hay una persona con ese dni");
        }

    }
    bajaDietista(oDietista) //Se pasa un objeto dietista
    {

        let oDietistaExistente = null;

        oDietistaExistente = this._buscarDietista(oDietista.dni);

        if (oDietistaExistente == null) {
            return 0; // 0 si no encuentra el objeto
        }
        else 
        {
                    console.log(oDietistaExistente.dni);
                    let posicion = this.posicionArrayDietista(oDietistaExistente.dni);
                    this.dietistas.splice(posicion, 1);
                    console.log(this.dietistas);
        }


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

    _buscarDietista(sDni)
    {
        let oDietistaExistente= null;
        oDietistaExistente=this.dietistas.find(oC => oC.dni==sDni);
        return oDietistaExistente;
    }

    posicionArrayCliente(sDni) {
        console.log("as");
        for (let i = 0; i < this.cliente.length; i++) {
            if (this.cliente[i].dni == sDni) {
                return i;
                console.log(i);
            }
        }

    }

    posicionArrayDietista(sDni) {
        console.log("as");
        for (let i = 0; i < this.dietistas.length; i++) {
            if (this.dietistas[i].dni == sDni) {
                return i;
                console.log(i);
            }
        }

    }

}
