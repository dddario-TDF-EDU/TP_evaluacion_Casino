import { Ticket } from "./interfazTicket";


export class Juego implements Ticket {
    protected id : number;
    protected cantCreditosEnMaquina: number;
    protected balance: number;
    protected cantApuestasTotales : number;
    protected cantApuestasGanadas : number;
    protected cantApuestasPerdidas : number;
    protected cantApuestaMinima: number;

    constructor(paramID: number, paramCreditos: number, paramCantApuestaMinima?: number) {
        this.id = paramID;
        this.cantCreditosEnMaquina = paramCreditos;
        this.balance = 0;
        this.cantApuestasTotales = 0;
        this.cantApuestasGanadas = 0;
        this.cantApuestasPerdidas = 0;
        if(paramCantApuestaMinima === undefined) {
            this.cantApuestaMinima = 1;
        } else {
            this.cantApuestaMinima = paramCantApuestaMinima;
        }
    }

    public  getCreditos(): number {
        return this.cantCreditosEnMaquina;
    }
    //reemplaza a Perdida y ganancia
    public getBalance(): number {
        return this.balance;
    }

    public getCantidadApuestasTotales(): number {
        return this.cantApuestasTotales;
    }
    
    public getCantidadApuestasGanadas(): number {
        return this.cantApuestasGanadas;
    }

    public getCantidadApuestasPerdidas(): number {
        return this.cantApuestasPerdidas;
    }

    public getApuestaMinima(): number {
        return this.cantApuestaMinima;
    }

}