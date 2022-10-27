import { Ticket } from "./interfazTicket";


export class Juego implements Ticket {
    protected id : number;
    //cambio a nombre mAs descriptivo(?)
    protected cantCreditosEnMaquina: number;
    protected balance : number;
    protected cantApuestasTotales : number;
    protected cantApuestasGanadas : number;
    protected cantApuestasPerdidas : number;

    constructor(paramID: number, paramCreditos: number) {
        this.id = paramID;
        this.cantCreditosEnMaquina = paramCreditos;
        this.balance = 0;
        this.cantApuestasTotales = 0;
        this.cantApuestasGanadas = 0;
        this.cantApuestasPerdidas = 0;
    }

    public ticketTotal(): string[] {
        /*cambio la Logica pero puede quedarse(?), revisar*/
        return [];
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

}