"use strict";
exports.__esModule = true;
exports.Tragamoneda = void 0;
var Tragamoneda = /** @class */ (function () {
    function Tragamoneda() {
        this.slot1 = this.numRandom();
        this.slot2 = this.numRandom();
        this.slot3 = this.numRandom();
    }
    Tragamoneda.prototype.numRandom = function () {
        return Math.floor(Math.random() * (8 - 0) + 1);
    };
    Tragamoneda.prototype.apuesta = function (paramCreditos) {
        this.tiro();
        var multiplicador = this.verifica() + this.verificaEscalera();
        var cantCreditos = paramCreditos * multiplicador;
        return cantCreditos;
    };
    Tragamoneda.prototype.tiro = function () {
        this.slot1 = this.numRandom();
        this.slot2 = this.numRandom();
        this.slot3 = this.numRandom();
        console.log(this.slot1);
        console.log(this.slot2);
        console.log(this.slot3);
    };
    Tragamoneda.prototype.verifica = function () {
        var multiplicador = 0;
        if (this.slot1 === this.slot2) {
            if (this.slot3 === this.slot2) {
                multiplicador = this.slot3 + 1;
            }
        }
        return multiplicador;
    };
    Tragamoneda.prototype.verificaEscalera = function () {
        var mayor = this.buscarMayor();
        var menor = this.buscarMenor();
        if (mayor === 0 || menor === 0) {
            return 0;
        }
        else if (mayor === 3 && menor === 1) {
            return 5;
        }
        else {
            return 5;
        }
    };
    Tragamoneda.prototype.buscarMayor = function () {
        if (this.slot1 > this.slot2 && this.slot1 > this.slot3) {
            return 1;
        }
        if (this.slot2 > this.slot1 && this.slot2 > this.slot3) {
            return 0;
        }
        if (this.slot3 > this.slot1 && this.slot3 > this.slot2) {
            return 3;
        }
        return 0;
    };
    Tragamoneda.prototype.buscarMenor = function () {
        if (this.slot1 < this.slot2 && this.slot1 < this.slot3) {
            return 1;
        }
        if (this.slot2 < this.slot1 && this.slot2 < this.slot3) {
            return 0;
        }
        if (this.slot3 < this.slot1 && this.slot3 < this.slot2) {
            return 3;
        }
        return 0;
    };
    return Tragamoneda;
}());
exports.Tragamoneda = Tragamoneda;
