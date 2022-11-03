import { Cliente } from "./cliente";
import { Juego } from "./juego";
import { TragamonedaSummer } from "./tragamonedaSummer"
import { TragamonedaWinter } from "./TragamonedaWinter"
import { Ruleta } from "./ruleta"

class Casino {
    //private juegoCrap: Crap;
    private juegoSummer: TragamonedaSummer;
    private juegoWinter: TragamonedaWinter;
    private juegoRuleta: Ruleta;
    private cliente: Cliente;
    private balance: number;
    private capitalGeneral: number;
    private valorCreditos: number;

    public constructor(paramCapitalGeneral: number, paramValorCredito: number, paramJuegos: Juego[], paramCliente: Cliente, pSummer: TragamonedaSummer, pWinter: TragamonedaWinter, pRuleta: Ruleta) {
        this.valorCreditos = paramValorCredito;
        this.capitalGeneral = paramCapitalGeneral;
        this.balance = 0;
        this.cliente = paramCliente;
        this.juegoSummer = pSummer;
        this.juegoWinter = pWinter;
        this.juegoRuleta = pRuleta;
    }

    public getBalance(): number {
        return this.balance;
    }

    public setBalance(paramBalance: number): void {
        this.balance = paramBalance;
    }

    public getCapitalGeneral(): number {
        return this.capitalGeneral;
    }

    public setCapitalGeneral(paramCapitalGeneral: number): void {
        this.capitalGeneral = paramCapitalGeneral
    }
    
    public getValorConvertir(): number {
        return this.valorCreditos;
    }

    public setValorConvertir(paramValorCredito: number): void {
        this.valorCreditos = paramValorCredito;
    }

    public comprarCreditos(paramDinero: number): number {
        let creditosSalida: number = paramDinero / this.valorCreditos;
        this.capitalGeneral += paramDinero;
        return creditosSalida; 
    }

    public intercambiarCreditos(paramCreditos: number): number {
        let dineroSalida: number = paramCreditos * this.valorCreditos;
        this.capitalGeneral -= dineroSalida;
        return dineroSalida;
    }

}