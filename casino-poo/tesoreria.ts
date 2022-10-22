export class Tesoreria {
    private perdida: number;
    private ganancia: number;
    private capitalGeneral: number;

    constructor(paramCapital: number) {
        this.perdida = 0;
        this.ganancia = 0;
        this.capitalGeneral = paramCapital;
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

    public getCapitalGeneral(): number {
        return this.capitalGeneral;
    }

    public setCapitalGeneral(paramCapital: number): void {
        this.capitalGeneral = paramCapital;
    }

}