export class Tesoreria {
    private totalCaja: number; 
    private capitalGeneral: number;
    private valorCreditos: number;

    constructor(paramCapital: number, paramValorCreditos: number) {
        this.totalCaja = 0;
        this.capitalGeneral = paramCapital;
        this.valorCreditos = paramValorCreditos;
    }
    
    //se reemplaza a las otras 4 de arriba(?), puede q incluso setBalance tmb desaparezca, porq la resta y suma se hace dentro de otra funcion o dejarla?

    public setBalance(paramBalance: number): void {
        this.totalCaja = paramBalance;
    }

    public getBalance(): number {
        return this.totalCaja;
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
        this.totalCaja += paramDinero;
        return creditosSalida; 

    }

    public venderCreditos(paramCreditos: number): number {
        let dineroSalida: number = paramCreditos * this.valorCreditos;
        this.capitalGeneral -= dineroSalida;
        this.totalCaja -= dineroSalida;
        return dineroSalida;
    }

}