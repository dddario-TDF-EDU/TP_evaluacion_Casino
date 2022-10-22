class Tragamoneda{
    private slot1: number;
    private slot2: number;
    private slot3: number;

    constructor(){
        this.slot1 = this.NumRandom();
        this.slot2 = this.NumRandom();
        this.slot3 = this.NumRandom();
    }
 protected NumRandom():number{
    return Math.floor(Math.random() * (8 - 0) + 1);
 }

}