export interface Ticket {
    getCreditos(): number;
    //getGanancias(): number;
    //getPerdidas(): number;
    //reemplaza a Perdida y ganancia
    getBalance(): number;
    getCantidadApuestasTotales(): number;
    getCantidadApuestasGanadas(): number;
    getCantidadApuestasPerdidas(): number;
}

//a implementar en cada maquina