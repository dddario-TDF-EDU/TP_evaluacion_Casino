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
exports.Crap = void 0;
var juego_1 = require("./juego");
var Crap = /** @class */ (function (_super) {
    __extends(Crap, _super);
    function Crap(paramID, paramNombre, paramCreditos, paramCantApuestaMinima) {
        var _this = _super.call(this, paramID, paramNombre, paramCreditos, paramCantApuestaMinima) || this;
        _this.tirarDados();
        return _this;
    }
    Crap.prototype.getDados = function () {
        return this.dados;
    };
    Crap.prototype.tirarDados = function () {
        var numeroSalida = Math.floor(Math.random() * (12 - 2 + 1) + 2);
        this.dados = numeroSalida;
    };
    Crap.prototype.mostrarResultado = function () {
        console.log(this.dados);
    };
    Crap.prototype.apostarSalida = function (paramCreditos) {
        this.tirarDados();
        if (this.dados == 7 || this.dados == 11) {
            console.log("el numero es ".concat(this.dados, ", avanza a la proxima ronda"));
            this.pausaParaLeer();
            return this.elegirApuesta(paramCreditos);
        }
        else if (this.dados == 2 || this.dados == 3 || this.dados == 12) {
            console.log("el numero es ".concat(this.dados, ", crapping out"));
            //LE RESTAMOS EL COSTE DE APUESTA.
            var resultadoApuesta = 0;
            var creditosApostados = this.getApuestaMinima();
            var totalCreditos = paramCreditos - creditosApostados;
            console.log(this.mensajeResultado(resultadoApuesta, creditosApostados));
            this.pausaParaLeer();
            return totalCreditos;
        }
        else {
            console.log("el numero es ".concat(this.dados, ", tirar nuevamente los dados, y repetir el numero ").concat(this.dados, " para continuar"));
            this.pausaParaLeer();
            return this.apostarSalidaSegundoIntento(paramCreditos, this.dados);
        }
    };
    Crap.prototype.apostarSalidaSegundoIntento = function (paramCreditos, resultadoAnterior) {
        this.tirarDados();
        if (this.dados == resultadoAnterior) {
            console.log("el nuevo numero es ".concat(this.dados, ", avanza a la proxima ronda"));
            this.pausaParaLeer();
            return this.elegirApuesta(paramCreditos);
        }
        else if (this.dados == 7) {
            console.log("el nuevo numero es ".concat(this.dados, ", crapping out"));
            //LE RESTAMOS EL COSTE DE APUESTA.
            //LE RESTAMOS EL COSTE DE APUESTA.
            var resultadoApuesta = 0;
            var creditosApostados = this.getApuestaMinima();
            var totalCreditos = paramCreditos - creditosApostados;
            console.log(this.mensajeResultado(resultadoApuesta, creditosApostados));
            this.pausaParaLeer();
            return totalCreditos;
        }
        else {
            console.log("el nuevo numero es ".concat(this.dados, ", vuelve a tirar"));
            this.pausaParaLeer();
            return this.apostarSalidaSegundoIntento(paramCreditos, this.dados);
        }
    };
    Crap.prototype.apostarPassLine = function (paramCreditos) {
        this.tirarDados();
        var multiplicador = 0;
        var resultadoApuesta = 0;
        if (this.dados == 7 || this.dados == 11) {
            console.log("el numero es ".concat(this.dados, ", la apuesta gana"));
            console.log("el premio se devuelve al ganador");
            //retorna x 2???
            multiplicador = 2;
            resultadoApuesta = paramCreditos * multiplicador;
            return resultadoApuesta;
        }
        else if (this.dados == 2 || this.dados == 3 || this.dados == 12) {
            console.log("el numero es ".concat(this.dados, ", crapping out, la apuesta pierde"));
            multiplicador = 0;
            resultadoApuesta = paramCreditos * multiplicador;
            return resultadoApuesta;
        }
        else {
            console.log("el numero es ".concat(this.dados, ", tirar nuevamente los dados, y repetir el numero ").concat(this.dados, " para continuar"));
            return this.apostarSegundoIntento(paramCreditos, this.dados);
        }
    };
    Crap.prototype.apostarDontPassBar = function (paramCreditos) {
        this.tirarDados();
        var multiplicador = 0;
        var resultadoApuesta = 0;
        if (this.dados == 7 || this.dados == 11) {
            console.log("el numero es ".concat(this.dados, ", la apuesta pierde"));
            //retorna x0
            multiplicador = 0;
            resultadoApuesta = paramCreditos * multiplicador;
            return resultadoApuesta;
        }
        else if (this.dados == 2 || this.dados == 3) {
            console.log("el numero es ".concat(this.dados, ", la apuesta gana"));
            console.log("el premio se devuelve al ganador");
            //retorna x2
            resultadoApuesta = paramCreditos * multiplicador;
            return resultadoApuesta;
        }
        else if (this.dados == 12) {
            console.log("el numero es ".concat(this.dados, ", es un empate"));
            //retorna paramCreditos
            resultadoApuesta = paramCreditos * multiplicador;
            return resultadoApuesta;
        }
        else {
            console.log("el numero es ".concat(this.dados, ", tirar nuevamente los dados, y repetir el numero ").concat(this.dados, " para continuar"));
            return this.apostarSegundoIntento(paramCreditos, this.dados);
        }
    };
    Crap.prototype.apostarSegundoIntento = function (paramCreditos, paramDados) {
        this.tirarDados();
        var multiplicador = 0;
        var resultadoApuesta = 0;
        console.log("El resultado anterior fue: " + paramDados);
        if (this.dados == paramDados) {
            console.log("el numero es igual");
            console.log("la apuesta gana");
            //retorna x2
            multiplicador = 2;
            resultadoApuesta = paramCreditos * multiplicador;
            return resultadoApuesta;
        }
        else {
            console.log("la apuesta pierde");
            //retorna x0
            multiplicador = 0;
            resultadoApuesta = paramCreditos * multiplicador;
            return resultadoApuesta;
        }
    };
    Crap.prototype.apostarEnField = function (paramCreditos) {
        this.tirarDados();
        var multiplicador = 0;
        var resultadoApuesta = 0;
        if (this.dados == 3 || this.dados == 4 || this.dados == 9 || this.dados == 10 || this.dados == 11) {
            console.log("el numero es ".concat(this.dados, ", la apuesta gana"));
            console.log("la apuesta se devuelve al ganador");
            multiplicador = 2;
            resultadoApuesta = paramCreditos * multiplicador;
            return resultadoApuesta;
        }
        else if (this.dados == 2 || this.dados == 12) {
            console.log("el numero es ".concat(this.dados, ", la apuesta gana"));
            console.log("el premio se duplica para el ganador");
            multiplicador = 3;
            resultadoApuesta = paramCreditos * multiplicador;
            return resultadoApuesta;
        }
        else {
            console.log("el numero es ".concat(this.dados, ", la apuesta pierde"));
            multiplicador = 0;
            resultadoApuesta = paramCreditos * multiplicador;
            return resultadoApuesta;
        }
    };
    Crap.prototype.mensajeApuesta = function () {
        console.log("Elija que tipo de Apuesta prefiere:");
        console.log("1. Apuesta en Field");
        console.log("2. Apuesta Don't Pass Bar");
        console.log("3. Apuesta Pass Line");
    };
    Crap.prototype.elegirApuesta = function (paramCreditos) {
        this.mensajeApuesta();
        var readlineSync = require("readline-sync");
        var opcionApuesta = readlineSync.questionInt("Ingrese la opcion deseada: ");
        if (opcionApuesta < 1 || opcionApuesta > 3) {
            console.log("error, intente nuevamente");
            return this.elegirApuesta(paramCreditos);
        }
        else {
            return this.ejecucionApuestas(paramCreditos, opcionApuesta);
        }
    };
    Crap.prototype.ejecucionApuestas = function (paramCreditos, paramOpcion) {
        //plata a elegir
        var resultadoApuesta = 0;
        var creditosApostados = this.cantApostada(paramCreditos);
        var totalCreditos = paramCreditos;
        switch (paramOpcion) {
            case 1:
                totalCreditos -= creditosApostados;
                resultadoApuesta = this.apostarEnField(creditosApostados);
                //REVISAR COMO SE MUESTRA EL RESULTADO.
                console.log(this.mensajeResultado(resultadoApuesta, creditosApostados));
                totalCreditos += resultadoApuesta;
                this.pausaParaLeer();
                return totalCreditos;
            case 2:
                totalCreditos -= creditosApostados;
                resultadoApuesta = this.apostarDontPassBar(creditosApostados);
                //REVISAR COMO SE MUESTRA EL RESULTADO.
                console.log(this.mensajeResultado(resultadoApuesta, creditosApostados));
                totalCreditos += resultadoApuesta;
                this.pausaParaLeer();
                return totalCreditos;
            case 3:
                totalCreditos -= creditosApostados;
                resultadoApuesta = this.apostarPassLine(creditosApostados);
                //REVISAR COMO SE MUESTRA EL RESULTADO.
                console.log(this.mensajeResultado(resultadoApuesta, creditosApostados));
                totalCreditos += resultadoApuesta;
                this.pausaParaLeer();
                return totalCreditos;
            default:
                return paramCreditos;
        }
    };
    Crap.prototype.jugar = function (paramCreditos) {
        var readlineSync = require('readline-sync');
        //chequeamos si la persona tiene creditos suficientes para apostar.
        if (paramCreditos > this.getApuestaMinima()) {
            console.log("Usted posee " + paramCreditos + " creditos.");
            this.mensajesMenuCrap();
            var opcionDeseada = readlineSync.questionInt('Ingrese la opcion deseada ');
            if (opcionDeseada < 1 || opcionDeseada > 2) {
                //REGRESO AL MENU PORQ METISTE LA OPCION INCORRECTA
                console.log("numero erroneo Intente nuevamente");
                console.clear(); //para limpiar la pantalla
                return this.jugar(paramCreditos);
            }
            if (opcionDeseada === 1) {
                //ESTO ES AHORA LA BARRERA DE ENTRADA.
                console.log("Usted eligio Tiro inicial para ingresar a sala.");
                return this.jugar(this.apostarSalida(paramCreditos));
            }
            else {
                //SALIR DEL PROGRAMA CON LA CANTIDAD DE CREDITOS 
                console.log("Usted se retira con " + paramCreditos + " creditos.");
                console.log("Gracias por jugar, esperamos su regreso.");
                return paramCreditos;
            }
        }
        else {
            console.log("Usted ya no posee creditos suficientes para usar esta maquina");
            console.log("Gracias por jugar, esperamos su regreso.");
            return paramCreditos;
        }
    };
    Crap.prototype.mensajesMenuCrap = function () {
        console.log("Bienvenido a Craps");
        console.log("opciones: ");
        console.log("1 _ Ingresar a sala con apuesta minima" + " (" + this.getApuestaMinima() + ")");
        console.log("2 _ Salir");
    };
    return Crap;
}(juego_1.Juego));
exports.Crap = Crap;
