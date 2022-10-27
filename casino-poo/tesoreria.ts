export class Tesoreria {
    private perdida: number;
    private ganancia: number;
    private balance: number; //reemplaza a las otras dos?
    private capitalGeneral: number;
    private valorCreditos: number;

    constructor(paramCapital: number, paramValorCreditos: number) {
        this.perdida = 0;
        this.ganancia = 0;
        this.balance = 0;
        this.capitalGeneral = paramCapital;
        this.valorCreditos = paramValorCreditos;
    }

    
    public getPerdida(): number {
        return this.perdida;
    }
    
    public setPerdida(paramPerdida: number): void {
        this.perdida = paramPerdida;
    }
    
    public getGanancia(): number {
        return this.ganancia;
    }
    
    public setGanancia(paramGanancia: number): void {
        this.ganancia = paramGanancia;
    }
    
    //se reemplaza a las otras 4 de arriba(?), puede q incluso setBalance tmb desaparezca, porq la resta y suma se hace dentro de otra funcion o dejarla?

    public setBalance(paramBalance: number): void {
        this.balance = paramBalance;
    }

    public getBalance(): number {
        return this.balance;
    }

    public getCapitalGeneral(): number {
        return this.capitalGeneral;
    }

    public setCapitalGeneral(paramCapital: number): void {
        this.capitalGeneral = paramCapital;
    }

    public setValorCreditos(paramValorCreditos: number): void {
        this.valorCreditos = paramValorCreditos;
    }

    public getValorCreditos(): number {
        return this.valorCreditos;
    }

    //chequear estos dos añadidos, REVISAR NOMBRES DE AMBAS creo q es al reves(?) o añadir la palabra cliente?

    public comprarCreditos(paramDinero: number): number {
        let creditosSalida: number = paramDinero / this.valorCreditos;
        this.capitalGeneral += paramDinero;
        return creditosSalida; 

    }

    public venderCreditos(paramCreditos: number): number {
        let dineroSalida: number = paramCreditos * this.valorCreditos;
        this.capitalGeneral -= dineroSalida;
        return dineroSalida;
    }

}