export class Cliente {
    private money: number;
    private creditos: number;

    constructor(paramMoney: number) {
        this.money = paramMoney;
        this.creditos = 0;
    }

    public getMoney(): number {
        return this.money;
    }

    public setMoney(paramMoney: number) {
        this.money = paramMoney;
    }

    public getCreditos(): number {
        return this.creditos;
    }

    public setCreditos(paramCreditos): void {
        this.creditos = paramCreditos;
    }
} 