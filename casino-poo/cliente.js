"use strict";
exports.__esModule = true;
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(paramDinero) {
        this.dinero = paramDinero;
        this.creditos = 0;
    }
    Cliente.prototype.getDinero = function () {
        return this.dinero;
    };
    Cliente.prototype.setDinero = function (paramDinero) {
        this.dinero = paramDinero;
    };
    Cliente.prototype.getCreditos = function () {
        return this.creditos;
    };
    Cliente.prototype.setCreditos = function (paramCreditos) {
        this.creditos = paramCreditos;
    };
    return Cliente;
}());
exports.Cliente = Cliente;
