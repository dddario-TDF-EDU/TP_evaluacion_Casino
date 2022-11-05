"use strict";
exports.__esModule = true;
exports.Casino = void 0;
var Casino = /** @class */ (function () {
    function Casino(paramCapitalGeneral, paramValorCredito, paramCliente, pJuegos) {
        this.valorCreditos = paramValorCredito;
        this.capitalGeneral = paramCapitalGeneral;
        this.balance = 0;
        this.cliente = paramCliente;
        this.juegos = pJuegos;
    }
    Casino.prototype.getBalance = function () {
        return this.balance;
    };
    Casino.prototype.setBalance = function (paramBalance) {
        this.balance = paramBalance;
    };
    Casino.prototype.getCapitalGeneral = function () {
        return this.capitalGeneral;
    };
    Casino.prototype.setCapitalGeneral = function (paramCapitalGeneral) {
        this.capitalGeneral = paramCapitalGeneral;
    };
    Casino.prototype.getValorConvertir = function () {
        return this.valorCreditos;
    };
    Casino.prototype.setValorConvertir = function (paramValorCredito) {
        this.valorCreditos = paramValorCredito;
    };
    //ahora es cliente compra creditos y debe relacionarse con el cliente.
    Casino.prototype.convertirDineroCliente = function () {
        var creditosSalida = this.cliente.getDinero() / this.valorCreditos;
        this.cliente.setCreditos(creditosSalida);
    };
    //cliente convierte creditos y debe relacionarse con el cliente.
    Casino.prototype.devolverDineroCliente = function () {
        var dineroSalida = this.cliente.getCreditos() * this.valorCreditos;
        this.cliente.setDinero(dineroSalida);
    };
    //¿ES correcto usar esos parametros?  total estoy usando valores q ya poseo.
    // public menuCentral(paramCreditos: number, pJuegos: Juego[]): number {
    //     console.log("Bienvenido al casino RXXXX");
    //     console.log("Usted posee " + paramCreditos + " creditos.");
    //     if(paramCreditos > 0) {
    //         this.mensajesMenuCentral();
    //         let readlineSync = require('readline-sync');
    //         let opcionDeseada: number = readlineSync.questionInt('Ingrese la opcion deseada: ');
    //         if(opcionDeseada < 1 || opcionDeseada > 5) {
    //             //REGRESO AL MENU PORQ METISTE LA OPCION INCORRECTA
    //             console.log("numero erroneo Intente nuevamente");
    //             console.clear();//para limpiar la pantalla
    //             //debe ser un return??
    //             return this.menuCentral(paramCreditos, pJuegos);
    //         } else if(opcionDeseada === 5) {
    //             //SALIR DEL PROGRAMA CON LA CANTIDAD DE CREDITOS 
    //             console.log("Usted se retira con " + paramCreditos + " creditos.");
    //             console.log("Gracias por jugar, esperamos su regreso.");
    //             return paramCreditos;
    //         } else {
    //             //EJECUTAR LA OPCION Y REGRESAR AL PROGRAMA CON LA NUEVA CANTIDAD DE CREDITOS
    //             //debe ser un return??
    //             return this.menuCentral(this.ejecucionMaquinas(opcionDeseada, paramCreditos, pJuegos), pJuegos);
    //         }
    //     } else {
    //         console.log("Usted ya no posee creditos suficientes, gracias por jugar vuelva pronto.");
    //         return paramCreditos;
    //     }
    // }
    Casino.prototype.menuCentral = function () {
        console.log("Bienvenido al casino RXXXX");
        console.log("Usted posee " + this.cliente.getCreditos() + " creditos.");
        if (this.cliente.getCreditos() > 0) {
            this.mensajesMenuCentral();
            var readlineSync = require('readline-sync');
            var opcionDeseada = readlineSync.questionInt('Ingrese la opcion deseada: ');
            if (opcionDeseada < 1 || opcionDeseada > this.juegos.length + 1) {
                //REGRESO AL MENU PORQ METISTE LA OPCION INCORRECTA
                console.log("numero erroneo Intente nuevamente");
                console.clear(); //para limpiar la pantalla
                //debe ser un return??
                this.menuCentral();
            }
            else if (opcionDeseada === this.juegos.length + 1) {
                //SALIR DEL PROGRAMA CON LA CANTIDAD DE CREDITOS 
                console.log("Usted se retira con " + this.cliente.getCreditos() + " creditos.");
                console.log("Gracias por jugar, esperamos su regreso.");
                this.devolverDineroCliente();
            }
            else {
                //EJECUTAR LA OPCION Y REGRESAR AL PROGRAMA CON LA NUEVA CANTIDAD DE CREDITOS
                //debe ser un return??
                this.ejecucionMaquinas(opcionDeseada);
                this.menuCentral();
            }
        }
        else {
            console.log("Usted ya no posee creditos suficientes, gracias por jugar vuelva pronto.");
            this.devolverDineroCliente();
        }
    };
    //SE PUEDE CREAR UN MENU SEGUN EL ARRAY JUEGOS ROBANDOLE LOS NOMBRES A CADA ELEMENTO.
    //nombres hardcodeados.
    Casino.prototype.mensajesMenuCentral = function () {
        console.log("Menu principal");
        for (var i = 0; i < this.juegos.length; i++) {
            console.log((i + 1) + " _ Jugar con " + this.juegos[i].getNombre());
            if (i + 2 > this.juegos.length) {
                console.log((i + 2) + " _ Salir.");
            }
        }
        console.log("");
    };
    Casino.prototype.ejecucionMaquinas = function (paramOpcion) {
        var creditosCliente = this.cliente.getCreditos();
        var resultado = this.juegos[paramOpcion - 1].jugar(creditosCliente, this.juegos[paramOpcion - 1]);
        this.cliente.setCreditos(resultado);
        //es necesario el switch?
        // switch(paramOpcion){
        //     case 1:
        //         this.juegos[paramOpcion - 1].jugar(, );
        //         break;
        //     case 3:
        //         this.juegos[paramOpcion - 1].jugar(this.cliente.getCreditos(), this.juegos[paramOpcion - 1 ]);
        //         break;
        //     default:
        //         console.log("No deberia llegarse a este punto.")
        //         break;
        // }
    };
    return Casino;
}());
exports.Casino = Casino;
