import { Juego } from "./juego";

export class Crap extends Juego{
     private dados: number;

    constructor(paramID: number, paramCreditos: number, paramCantApuestaMinima?: number) {
        super(paramID, paramCreditos,paramCantApuestaMinima);
        this.dados = Math.floor(Math.random() * 12) + 1;
    }
    public getDados() : number {
        return this.dados;
    }
    private tirarDados(): void {
        let numeroSalida: number = Math.floor(Math.random() * 12) + 1;
        this.dados = numeroSalida;
    } 

    public mostrarResultado(): void {
        console.log(this.dados);
    }

    public apostarSalida(paramCreditos: number): void {
        this.tirarDados();     
        if(this.dados == 7 || this.dados == 11) {
            console.log(`el numero es ${this.dados}, avanza a la proxima ronda`);
            this.elegirApuesta(paramCreditos);
        }else if(this.dados == 2 ||this.dados == 3 || this.dados == 12){
            console.log(`el numero es ${this.dados}, crapping out`);
        }else{
             console.log(`el numero es ${this.dados}, tirar nuevamente los dados, y repetir el numero ${this.dados} para continuar`);
            this.apostarSalidaSegundoIntento(paramCreditos,this.dados);
            }
    }
    public apostarSalidaSegundoIntento(paramCreditos: number,resultadoAnterior:number): void {
        this.tirarDados();
        if(this.dados == resultadoAnterior) {
            console.log(`el numero es ${this.dados}, avanza a la proxima ronda`);
            this.elegirApuesta(paramCreditos);
        }else if(this.dados == 7){
             console.log(`el numero es ${this.dados}, crapping out`);
        }else{
            console.log(`el numero es ${this.dados}, vuelve a tirar`);
            this.apostarSalidaSegundoIntento(paramCreditos,this.dados);
        }
    }
     public apostarPassLine(paramCreditos: number): void{
        this.tirarDados();       
        if(this.dados == 7 || this.dados == 11) {
            console.log(`el numero es ${this.dados}, la apuesta gana`);
            console.log(`el premio se devuelve al ganador`);
        }else if(this.dados == 2 ||this.dados == 3 || this.dados == 12){
            console.log(`el numero es ${this.dados}, crapping out, la apuesta pierde`);
        }else{
             console.log(`el numero es ${this.dados}, tirar nuevamente los dados, y repetir el numero ${this.dados} para continuar`);
             this.apostarSegundoIntento(paramCreditos,this.dados);
            }
    }
    public apostardontPassBar(paramCreditos:number): void{
        this.tirarDados();
        if(this.dados == 7 || this.dados == 11) {
            console.log(`el numero es ${this.dados}, la apuesta pierde`);
            //retorna x0
        }else if(this.dados == 2 ||this.dados == 3){
            console.log(`el numero es ${this.dados}, la apuesta gana`);
            console.log(`el premio se devuelve al ganador`);
            //retorna x2
        }else if(this.dados == 12){
            console.log(`el numero es ${this.dados}, es un empate`);
            //retorna paramCreditos
        }else{
            console.log(`el numero es ${this.dados}, tirar nuevamente los dados, y repetir el numero ${this.dados} para continuar`);
            this.apostarSegundoIntento(paramCreditos,this.dados);
        }

    }
    private apostarSegundoIntento(paramCreditos:number,paramDados:number):void{
        this.tirarDados();
        if(this.dados == paramDados){
            //retorna x2
            console.log("el numero es igual");
            console.log("la apuesta gana");
        }else{
            //retorna x0
            console.log("la apuesta pierde");
        }
    }

    public apostarEnField(paramCreditos:number):void{
        this.tirarDados();
        if(this.dados == 3 ||this.dados == 4 ||this.dados == 9 ||this.dados == 10 ||this.dados == 11){
            console.log(`el numero es ${this.dados}, la apuesta gana`);
            console.log(`la apuesta se devuelve al ganador`);
            //retornar x2
        }else if(this.dados == 2 ||this.dados == 12){
            console.log(`el numero es ${this.dados}, la apuesta gana`);
            console.log(`el premio se duplica para el ganador`);
            //retornar x3
        }else{
            console.log(`el numero es ${this.dados}, la apuesta pierde`);
            //retorna x0
        }
    }
    private mensajeApuesta():void{
        console.log("Elija que tipo de Apuesta prefiere:");
        console.log("1. Apuesta en Field");
        console.log("2. Apuesta Don't Pass Bar");
        console.log("3. Apuesta Pass Line");
    }
    private elegirApuesta(paramCreditos:number):void{
        this.mensajeApuesta();
        let readlineSync = require("readline-sync");
        let opcionApuesta:number = readlineSync.questionInt("Ingrese la opcion deseada: ");
        if(opcionApuesta < 1  || opcionApuesta > 3){
            console.log("error, intente nuevamente");        
            return this.elegirApuesta(paramCreditos);
        }else{
            this.ejecucionApuesta(paramCreditos,opcionApuesta);
        }
    
    }
    private ejecucionApuesta(paramCreditos:number,paramOpcion:number):void{
        //plata a elegir
        switch(paramOpcion){
            case 1:
                this.apostarEnField(paramCreditos);
                break;
            case 2:
                this.apostardontPassBar(paramCreditos);
                break;
            case 3: 
                this.apostarPassLine(paramCreditos);
                break;
            default: 
            //return paramCreditos;
        }
    }
    
    
}