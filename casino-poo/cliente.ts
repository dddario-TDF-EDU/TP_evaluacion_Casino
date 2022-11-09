export class Cliente {
    private dinero: number;
    private creditos: number;

    constructor(paramDinero: number) {
        this.dinero = paramDinero;
        this.creditos = 0;
    }

    public getDinero(): number {
        return this.dinero;
    }

    public setDinero(paramDinero: number) {
        this.dinero = paramDinero;
    }

    public getCredito(): number {
        return this.creditos;
    }

    public setCredito(paramCreditos: number): void {
        this.creditos = paramCreditos;
    }
} 