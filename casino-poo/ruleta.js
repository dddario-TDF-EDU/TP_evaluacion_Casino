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
exports.Ruleta = void 0;
var juego_1 = require("./juego");
var Ruleta = /** @class */ (function (_super) {
    __extends(Ruleta, _super);
    function Ruleta(paramID, paramNombre, paramCreditos, paramCantApuestaMinima) {
        var _this = _super.call(this, paramID, paramNombre, paramCreditos, paramCantApuestaMinima) || this;
        _this.resultadoRuleta = 0;
        return _this;
    }
    Ruleta.prototype.apuestaPrimeraDocena = function (paramCreditos) {
        this.girarRuleta();
        var multiplicador = 0;
        if (this.resultadoRuleta < 13 && this.resultadoRuleta != 0) {
            multiplicador = 1.3;
            return multiplicador * paramCreditos;
        }
        return multiplicador;
    };
    Ruleta.prototype.apuestaSegundaDocena = function (paramCreditos) {
        this.girarRuleta();
        var multiplicador = 0;
        if (this.resultadoRuleta < 25 && this.resultadoRuleta > 12) {
            multiplicador = 1.3;
            return multiplicador * paramCreditos;
        }
        return multiplicador;
    };
    Ruleta.prototype.apuestaTerceraDocena = function (paramCreditos) {
        this.girarRuleta();
        var multiplicador = 0;
        if (this.resultadoRuleta > 24) {
            multiplicador = 1.3;
            return multiplicador * paramCreditos;
        }
        return multiplicador;
    };
    Ruleta.prototype.apuestaPrimeraColumna = function (paramCreditos) {
        this.girarRuleta();
        var multiplicador = 0;
        var primeraColumna = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34];
        for (var i = 0; i < primeraColumna.length; i++) {
            if (primeraColumna[i] === this.resultadoRuleta) {
                multiplicador = 1.3;
                return multiplicador * paramCreditos;
            }
        }
        return multiplicador;
    };
    Ruleta.prototype.apuestaSegundaColumna = function (paramCreditos) {
        this.girarRuleta();
        var multiplicador = 0;
        var segundaColumna = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35];
        for (var i = 0; i < segundaColumna.length; i++) {
            if (segundaColumna[i] === this.resultadoRuleta) {
                multiplicador = 1.3;
                return multiplicador * paramCreditos;
            }
        }
        return multiplicador;
    };
    Ruleta.prototype.apuestaTerceraColumna = function (paramCreditos) {
        this.girarRuleta();
        var multiplicador = 0;
        var terceraColumna = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36];
        for (var i = 0; i < terceraColumna.length; i++) {
            if (terceraColumna[i] === this.resultadoRuleta) {
                multiplicador = 1.3;
                return multiplicador * paramCreditos;
            }
        }
        return multiplicador;
    };
    Ruleta.prototype.apuestaPrimeraMitad = function (paramCreditos) {
        this.girarRuleta();
        var multiplicador = 0;
        if (this.resultadoRuleta < 19 && this.resultadoRuleta != 0) {
            multiplicador = 1.2;
            return multiplicador * paramCreditos;
        }
        return multiplicador;
    };
    Ruleta.prototype.apuestaSegundaMitad = function (paramCreditos) {
        this.girarRuleta();
        var multiplicador = 0;
        if (this.resultadoRuleta > 18) {
            multiplicador = 1.2;
            return multiplicador * paramCreditos;
        }
        return multiplicador;
    };
    Ruleta.prototype.apuestaRojas = function (paramCreditos) {
        this.girarRuleta();
        var multiplicador = 0;
        var rojas = [32, 19, 21, 25, 34, 27, 36, 30, 23, 5, 16, 1, 14, 9, 18, 7, 12, 3];
        for (var i = 0; i < rojas.length; i++) {
            if (rojas[i] === this.resultadoRuleta) {
                multiplicador = 1.2;
                return multiplicador * paramCreditos;
            }
        }
        return multiplicador;
    };
    Ruleta.prototype.apuestaNegras = function (paramCreditos) {
        this.girarRuleta();
        var multiplicador = 0;
        var negras = [15, 4, 2, 17, 6, 13, 11, 8, 10, 24, 33, 20, 31, 22, 29, 28, 35, 26];
        for (var i = 0; i < negras.length; i++) {
            if (negras[i] === this.resultadoRuleta) {
                multiplicador = 1.2;
                return multiplicador * paramCreditos;
            }
        }
        return multiplicador;
    };
    Ruleta.prototype.apuestaPares = function (paramCreditos) {
        this.girarRuleta();
        var multiplicador = 0;
        if ((this.resultadoRuleta % 2) === 0) {
            multiplicador = 1.2;
            return multiplicador * paramCreditos;
        }
        return multiplicador;
    };
    Ruleta.prototype.apuestaImpares = function (paramCreditos) {
        this.girarRuleta();
        var multiplicador = 0;
        if ((this.resultadoRuleta % 2) === 1) {
            multiplicador = 1.2;
            return multiplicador * paramCreditos;
        }
        return multiplicador;
    };
    Ruleta.prototype.apuestaNroUnico = function (paramCreditos, numElegido) {
        this.girarRuleta();
        var multiplicador = 0;
        if (Number(this.resultadoRuleta) == Number(numElegido)) {
            multiplicador = 5;
            return multiplicador * paramCreditos;
        }
        return multiplicador;
    };
    Ruleta.prototype.girarRuleta = function () {
        var numeroSalida = Math.floor(Math.random() * (36));
        this.resultadoRuleta = numeroSalida;
    };
    Ruleta.prototype.getResultadoRuleta = function () {
        return this.resultadoRuleta;
    };
    Ruleta.prototype.mensajesMenuRuleta = function () {
        console.log("Bienvenido a la ruleta");
        console.log("opciones: ");
        console.log("1 _ Apuesta a Un numero");
        console.log("2 _ Apuesta a Primera Docena");
        console.log("3 _ Apuesta a Segunda Docena");
        console.log("4 _ Apuesta a Tercera Docena");
        console.log("5 _ Apuesta a Primer Columna");
        console.log("6 _ Apuesta a Segunda Columna");
        console.log("7 _ Apuesta a Tercer Columna");
        console.log("8 _ Apuesta a Primera Mitad");
        console.log("9 _ Apuesta a Segunda Mitad");
        console.log("10 _ Apuesta a Rojas");
        console.log("11 _ Apuesta a Negras");
        console.log("12 _ Apuesta a Numeros Pares");
        console.log("13 _ Apuesta a Numeros Impares");
        console.log("14 _ Salir");
    };
    Ruleta.prototype.jugar = function (paramCreditos) {
        var readlineSync = require('readline-sync');
        if (paramCreditos > this.getApuestaMinima()) {
            console.log("Usted posee " + paramCreditos + " creditos.");
            this.mensajesMenuRuleta();
            var opcionDeseada = readlineSync.questionInt('Ingrese la opcion deseada ');
            if (opcionDeseada < 1 || opcionDeseada > 14) {
                //REGRESO AL MENU PORQ METISTE LA OPCION INCORRECTA
                console.log("numero erroneo Intente nuevamente");
                console.clear(); //para limpiar la pantalla
                return this.jugar(paramCreditos);
            }
            else if (opcionDeseada === 14) {
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
            console.log("Usted ya no posee creditos");
            console.log("Gracias por jugar, esperamos su regreso.");
            return paramCreditos;
        }
    };
    Ruleta.prototype.ejecucionApuestas = function (paramOpcion, paramCreditos) {
        //sumamos una jugada a los atributos de la maquina.
        var resultadoApuesta = 0;
        var creditosApostados = this.cantApostada(paramCreditos);
        var totalCreditos = paramCreditos - creditosApostados;
        switch (paramOpcion) {
            case 1:
                resultadoApuesta = this.apuestaNroUnico(creditosApostados, this.numeroDeRuletaElegido());
                console.log("El resultado fue: " + this.getResultadoRuleta());
                console.log(this.mensajeResultado(resultadoApuesta, creditosApostados));
                totalCreditos += resultadoApuesta;
                this.pausaParaLeer();
                return totalCreditos;
            case 2:
                resultadoApuesta = this.apuestaPrimeraDocena(creditosApostados);
                console.log("El resultado fue: " + this.getResultadoRuleta());
                console.log(this.mensajeResultado(resultadoApuesta, creditosApostados));
                totalCreditos += resultadoApuesta;
                this.pausaParaLeer();
                return totalCreditos;
            case 3:
                resultadoApuesta = this.apuestaSegundaDocena(creditosApostados);
                console.log("El resultado fue: " + this.getResultadoRuleta());
                console.log(this.mensajeResultado(resultadoApuesta, creditosApostados));
                totalCreditos += resultadoApuesta;
                this.pausaParaLeer();
                return totalCreditos;
            case 4:
                resultadoApuesta = this.apuestaTerceraDocena(creditosApostados);
                console.log("El resultado fue: " + this.getResultadoRuleta());
                console.log(this.mensajeResultado(resultadoApuesta, creditosApostados));
                totalCreditos += resultadoApuesta;
                this.pausaParaLeer();
                return totalCreditos;
            case 5:
                resultadoApuesta = this.apuestaPrimeraColumna(creditosApostados);
                console.log("El resultado fue: " + this.getResultadoRuleta());
                console.log(this.mensajeResultado(resultadoApuesta, creditosApostados));
                totalCreditos += resultadoApuesta;
                this.pausaParaLeer();
                return totalCreditos;
            case 6:
                resultadoApuesta = this.apuestaSegundaColumna(creditosApostados);
                console.log("El resultado fue: " + this.getResultadoRuleta());
                console.log(this.mensajeResultado(resultadoApuesta, creditosApostados));
                totalCreditos += resultadoApuesta;
                this.pausaParaLeer();
                return totalCreditos;
            case 7:
                resultadoApuesta = this.apuestaTerceraColumna(creditosApostados);
                console.log("El resultado fue: " + this.getResultadoRuleta());
                console.log(this.mensajeResultado(resultadoApuesta, creditosApostados));
                totalCreditos += resultadoApuesta;
                this.pausaParaLeer();
                return totalCreditos;
            case 8:
                resultadoApuesta = this.apuestaPrimeraMitad(creditosApostados);
                console.log("El resultado fue: " + this.getResultadoRuleta());
                console.log(this.mensajeResultado(resultadoApuesta, creditosApostados));
                totalCreditos += resultadoApuesta;
                this.pausaParaLeer();
                return totalCreditos;
            case 9:
                resultadoApuesta = this.apuestaSegundaMitad(creditosApostados);
                console.log("El resultado fue: " + this.getResultadoRuleta());
                console.log(this.mensajeResultado(resultadoApuesta, creditosApostados));
                totalCreditos += resultadoApuesta;
                this.pausaParaLeer();
                return totalCreditos;
            case 10:
                resultadoApuesta = this.apuestaRojas(creditosApostados);
                console.log("El resultado fue: " + this.getResultadoRuleta());
                console.log(this.mensajeResultado(resultadoApuesta, creditosApostados));
                totalCreditos += resultadoApuesta;
                this.pausaParaLeer();
                return totalCreditos;
            case 11:
                resultadoApuesta = this.apuestaNegras(creditosApostados);
                console.log("El resultado fue: " + this.getResultadoRuleta());
                console.log(this.mensajeResultado(resultadoApuesta, creditosApostados));
                totalCreditos += resultadoApuesta;
                this.pausaParaLeer();
                return totalCreditos;
            case 12:
                resultadoApuesta = this.apuestaPares(creditosApostados);
                console.log("El resultado fue: " + this.getResultadoRuleta());
                console.log(this.mensajeResultado(resultadoApuesta, creditosApostados));
                totalCreditos += resultadoApuesta;
                this.pausaParaLeer();
                return totalCreditos;
            case 13:
                resultadoApuesta = this.apuestaImpares(creditosApostados);
                console.log("El resultado fue: " + this.getResultadoRuleta());
                console.log(this.mensajeResultado(resultadoApuesta, creditosApostados));
                totalCreditos += resultadoApuesta;
                this.pausaParaLeer();
                return totalCreditos;
            default:
                return paramCreditos;
        }
    };
    Ruleta.prototype.numeroDeRuletaElegido = function () {
        var readlineSync = require('readline-sync');
        var numeroDeseado = readlineSync.questionInt('Ingrese el numero al que desea apostar ');
        if (numeroDeseado < 0 || numeroDeseado > 36) {
            console.log("Numero incorrecto, intente nuevamente");
            return this.numeroDeRuletaElegido();
        }
        return numeroDeseado;
    };
    return Ruleta;
}(juego_1.Juego));
exports.Ruleta = Ruleta;
