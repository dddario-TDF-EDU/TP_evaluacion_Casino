import { Ticket } from "./interfazTicket";


export class Juego implements Ticket {
    protected id : number;
    protected nombre: string;
    protected cantCreditosEnMaquina: number;
    protected balance: number;
    protected cantApuestasTotales : number;
    protected cantApuestasGanadas : number;
    protected cantApuestasPerdidas : number;
    protected cantApuestaMinima: number;

    constructor(paramID: number, paramNombre: string, paramCreditos: number, paramCantApuestaMinima?: number) {
        this.id = paramID;
        this.nombre = paramNombre;
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

    public getNombre(): string {
        return this.nombre;
    }

    public getID(): number {
        return this.id;
    }

    public jugar(paramCreditos: number): number {
        return paramCreditos;
    }
    
    protected cantApostada(paramCreditos: number): number {
        let readlineSync = require('readline-sync');
        let cantApuesta: number = readlineSync.questionInt('Ingrese la cantidad de credito que desea apostar ');
        if(cantApuesta < this.getApuestaMinima() || cantApuesta > paramCreditos) {
            console.log("Cantidad incorrecta, intente nuevamente");
            return this.cantApostada(paramCreditos);
        }
    
        return cantApuesta;
    }

    //POSIBLES NUEVOS METODOS.

    private conteoEstadisticas(paramCreditos: number, paramResultado: number): void {
        this.cantApuestasTotales++;
        if(paramCreditos > 0) {
            this.cantApuestasGanadas++;
            this.balance -= paramResultado;
        } else {
            this.cantApuestasPerdidas++;
            this.balance += paramResultado;
        }
    }

    private ajusteCreditoEnMaquina(): void {
        //se corrigen los creditos que posee la maquina en cada jugada.
        this.cantCreditosEnMaquina += this.balance;
    }
    
    protected mensajeResultado(paramCreditos: number, paramResultado: number): string {
        this.conteoEstadisticas(paramCreditos, paramResultado);
        this.ajusteCreditoEnMaquina();
        if(paramCreditos > 0) {
            return "Usted gano " + paramCreditos + " creditos."
        } else {
            return "Usted perdio."
        }
    }
    
    protected pausaParaLeer(): void {
        let readlineSync = require('readline-sync');
        let pausa = readlineSync.question('');
    }

}