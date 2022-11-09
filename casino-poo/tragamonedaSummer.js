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
exports.TragamonedaSummer = void 0;
var tragamoneda_1 = require("./tragamoneda");
var TragamonedaSummer = /** @class */ (function (_super) {
    __extends(TragamonedaSummer, _super);
    //rango heredable?
    function TragamonedaSummer(paramID, paramNombre, paramCreditos, paramCantApuestaMinima) {
        var _this = _super.call(this, paramID, paramNombre, paramCreditos, paramCantApuestaMinima) || this;
        _this.slot1 = new Array(3);
        _this.slot2 = new Array(3);
        _this.slot3 = new Array(3);
        _this.tiroDeMaquina();
        _this.arraySimbolos = "$ƒ§#+@7";
        return _this;
    }
    //TIRO DE MAQUINA, genera los numeros al azar de los slots.
    TragamonedaSummer.prototype.tiroDeMaquina = function () {
        this.slot1[1] = this.numRandom();
        this.slot1[0] = this.variantes(this.slot1[1], -2);
        this.slot1[2] = this.variantes(this.slot1[1], 2);
        this.slot2[1] = this.numRandom();
        this.slot2[0] = this.variantes(this.slot2[1], -1);
        this.slot2[2] = this.variantes(this.slot2[1], 1);
        this.slot3[1] = this.numRandom();
        this.slot3[0] = this.variantes(this.slot3[1], -2);
        this.slot3[2] = this.variantes(this.slot3[1], 2);
    };
    //variantes corrige el valor 1.1 y 3.1 en caso de ser mayores o menores al limite
    TragamonedaSummer.prototype.variantes = function (paramSlot, paramSuma) {
        var resultado = paramSlot + paramSuma;
        var diferencia;
        if (resultado < 1) {
            if (resultado === 0) {
                resultado += 1;
            }
            diferencia = 7 - Math.abs(resultado);
            return diferencia;
        }
        if (resultado > 7) {
            diferencia = resultado - 7;
            return diferencia;
        }
        return resultado;
    };
    //entra la cantidad apuesta, verifica si gano y devuelde el resultado. 
    TragamonedaSummer.prototype.apuesta = function (paramCreditos) {
        this.tiroDeMaquina();
        var multiplicador = this.verifica() + this.verificaEscalera();
        var cantCreditos = paramCreditos * multiplicador;
        return cantCreditos;
    };
    //Muestra el resultado, (cambiado para ver simbolos)
    TragamonedaSummer.prototype.mostrarResultado = function () {
        for (var i = 0; i < this.slot1.length; i++) {
            console.log(this.arraySimbolos[this.slot1[i] - 1] + " " + this.arraySimbolos[this.slot2[i] - 1] + " " + this.arraySimbolos[this.slot3[i] - 1] + " ");
        }
    };
    //Verifica lineas horizontales
    TragamonedaSummer.prototype.verifica = function () {
        var multiplicador = 0;
        for (var i = 0; i < this.slot1.length; i++) {
            if (this.slot1[i] === this.slot2[i] && this.slot3[i] === this.slot1[i]) {
                multiplicador = this.slot3[i] + 3;
                return multiplicador;
            }
        }
        return multiplicador;
    };
    //Verifica lineas diagonales
    TragamonedaSummer.prototype.verificaEscalera = function () {
        var multiplicador = 0;
        if (this.slot1[0] === this.slot2[1] && this.slot3[2] === this.slot1[0]) {
            multiplicador = this.slot3[2] + 3;
            return multiplicador;
        }
        if (this.slot1[2] === this.slot2[1] && this.slot3[0] === this.slot1[2]) {
            multiplicador = this.slot3[0] + 3;
            return multiplicador;
        }
        return multiplicador;
    };
    //genera el valor Random de 1 a 7
    TragamonedaSummer.prototype.numRandom = function () {
        return Math.floor(Math.random() * (6 - 0) + 1);
    };
    TragamonedaSummer.prototype.mensajesMenuSummer = function () {
        console.log("Bienvenido al tragamonedas Summer");
        console.log("opciones: ");
        console.log("1 _ Apuesta minima" + " (" + this.getApuestaMinima() + ")");
        console.log("2 _ Apuesta un valor a elegir");
        console.log("3 _ Salir");
    };
    TragamonedaSummer.prototype.jugar = function (paramCreditos) {
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
    TragamonedaSummer.prototype.ejecucionApuestas = function (paramOpcion, paramCreditos) {
        var resultadoApuesta = 0;
        var creditosApostados = 0;
        var totalCreditos = paramCreditos;
        switch (paramOpcion) {
            case 1:
                creditosApostados = this.getApuestaMinima();
                totalCreditos -= creditosApostados;
                resultadoApuesta = this.apuesta(creditosApostados);
                this.mostrarResultado();
                console.log(this.mensajeResultado(resultadoApuesta, creditosApostados));
                totalCreditos += resultadoApuesta;
                this.pausaParaLeer();
                return totalCreditos;
            case 2:
                creditosApostados = this.cantApostada(paramCreditos);
                totalCreditos -= creditosApostados;
                resultadoApuesta = this.apuesta(creditosApostados);
                this.mostrarResultado();
                console.log(this.mensajeResultado(resultadoApuesta, creditosApostados));
                totalCreditos += resultadoApuesta;
                this.pausaParaLeer();
                return totalCreditos;
            default:
                return paramCreditos;
        }
    };
    return TragamonedaSummer;
}(tragamoneda_1.Tragamoneda));
exports.TragamonedaSummer = TragamonedaSummer;
