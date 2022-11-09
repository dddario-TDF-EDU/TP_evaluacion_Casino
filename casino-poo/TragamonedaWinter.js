"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.TragamonedaWinter = void 0;
var tragamoneda_1 = require("./tragamoneda");
var TragamonedaWinter = /** @class */ (function (_super) {
    __extends(TragamonedaWinter, _super);
    function TragamonedaWinter(paramID, paramNombre, paramCreditos, paramCantApuestaMinima) {
        var _this = _super.call(this, paramID, paramNombre, paramCreditos, paramCantApuestaMinima) || this;
        //ver como es el tema de probabilidad
        _this.rango = 3;
        return _this;
    }
    TragamonedaWinter.prototype.numRandom = function () {
        return Math.floor(Math.random() * this.rango + 1);
    };
    TragamonedaWinter.prototype.apuestaEspecial = function (paramCreditos) {
        var acumulado = 0;
        var rangoEspecial = this.rango + 3;
        for (var i = 0; i < 5; i++) {
            this.tiroEspecial(rangoEspecial - i);
            this.mostrarResultado();
            this.pausaParaLeer();
            //REVISAR ACUMULADO (funciona bien pero pagamos demasiado?);
            acumulado += this.verifica();
        }
        var cantCreditos = paramCreditos * acumulado;
        return cantCreditos;
    };
    //TIRO ESPECIAL POR RACHA....
    TragamonedaWinter.prototype.apuestaLibre = function (paramCreditos) {
        this.tiro();
        var multiplicador = this.verifica();
        this.mostrarResultado();
        if (multiplicador > 0) {
            console.log("Gano nuevamente!");
            console.log("Su ganancia es doble");
            this.pausaParaLeer();
            multiplicador = 2;
            var cantCreditos = paramCreditos * multiplicador;
            return cantCreditos;
        }
        console.log("Buena suerte en la proxima.");
        this.pausaParaLeer();
        return paramCreditos;
    };
    //TIRO NORMAL....
    TragamonedaWinter.prototype.apuesta = function (paramCreditos) {
        this.tiro();
        this.mostrarResultado();
        //es muy dificil ganar, aumentamos la recompensa(?)
        var multiplicador = (this.verifica() * 3);
        var cantCreditos = paramCreditos * multiplicador;
        if (cantCreditos > 0) {
            console.log("Usted gano y tiene una tirada extra");
            this.pausaParaLeer();
            cantCreditos = this.apuestaLibre(cantCreditos);
        }
        return cantCreditos;
    };
    TragamonedaWinter.prototype.tiroEspecial = function (paramRango) {
        this.slot1[0] = this.numRandomEspecial(paramRango);
        this.slot2[0] = this.numRandomEspecial(paramRango);
        this.slot3[0] = this.numRandomEspecial(paramRango);
    };
    TragamonedaWinter.prototype.numRandomEspecial = function (paramRango) {
        return Math.floor(Math.random() * (paramRango) + 1);
    };
    TragamonedaWinter.prototype.mensajesMenuSummer = function () {
        console.log("Bienvenido al tragamonedas Summer");
        console.log("opciones: ");
        console.log("1 _ Apuesta normal");
        console.log("2 _ Apuesta especial");
        console.log("3 _ Salir");
    };
    TragamonedaWinter.prototype.jugar = function (paramCreditos) {
        var readlineSync = require('readline-sync');
        //chequeamos si la persona tiene creditos suficientes para usar la maquina.
        if (paramCreditos >= this.getApuestaMinima()) {
            console.log("Usted posee " + paramCreditos + " creditos.");
            this.mensajesMenuSummer();
            var opcionDeseada = readlineSync.questionInt('Ingrese la opcion deseada ');
            if (opcionDeseada < 1 || opcionDeseada > 3) {
                //REGRESO AL MENU PORQ METISTE LA OPCION INCORRECTA
                console.log("numero erroneo Intente nuevamente");
                console.clear(); //para limpiar la pantalla
                return this.jugar(paramCreditos);
            }
            else if (opcionDeseada === 3) {
                //SALIR DEL PROGRAMA CON LA CANTIDAD DE CREDITOS 
                console.log("Usted se retira con " + paramCreditos + " creditos.");
                console.log("Gracias por jugar, esperamos su regreso.");
                return paramCreditos;
            }
            else {
                //EJECUTAR LA OPCION Y REGRESAR AL PROGRAMA CON LA NUEVA CANTIDAD DE CREDITOS
                return this.jugar(this.ejecucionApuestas(opcionDeseada, paramCreditos));
            }
        }
        else {
            console.log("Usted ya no posee creditos suficientes");
            console.log("Gracias por jugar, esperamos su regreso.");
            return paramCreditos;
        }
    };
    TragamonedaWinter.prototype.ejecucionApuestas = function (paramOpcion, paramCreditos) {
        var resultadoApuesta = 0;
        var creditosApostados = 0;
        var totalCreditos = paramCreditos;
        switch (paramOpcion) {
            case 1:
                creditosApostados = this.cantApostada(paramCreditos);
                totalCreditos -= creditosApostados;
                resultadoApuesta = this.apuesta(creditosApostados);
                console.log(this.mensajeResultado(resultadoApuesta, creditosApostados));
                totalCreditos += resultadoApuesta;
                this.pausaParaLeer();
                return totalCreditos;
            case 2:
                creditosApostados = this.cantApostada(paramCreditos);
                totalCreditos -= creditosApostados;
                resultadoApuesta = this.apuestaEspecial(creditosApostados);
                console.log(this.mensajeResultado(resultadoApuesta, creditosApostados));
                totalCreditos += resultadoApuesta;
                this.pausaParaLeer();
                return totalCreditos;
            default:
                return paramCreditos;
        }
    };
    return TragamonedaWinter;
}(tragamoneda_1.Tragamoneda));
exports.TragamonedaWinter = TragamonedaWinter;
