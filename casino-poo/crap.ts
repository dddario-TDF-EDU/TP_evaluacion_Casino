import { Juego } from "./juego";

export class Crap extends Juego {
     private dados: number;

     constructor(paramID: number, paramNombre: string,paramCreditos: number, paramCantApuestaMinima: number) {
        super(paramID, paramNombre, paramCreditos, paramCantApuestaMinima);
        this.tirarDados();
    }

    public getDados() : number {
        return this.dados;
    }

    private tirarDados(): void {
        let numeroSalida: number = Math.floor(Math.random() * (12 - 2 + 1) + 2);
        this.dados = numeroSalida;
    }

    public mostrarResultado(): void {
        console.log(this.dados);
    }

    public apostarSalida(paramCreditos: number): number {
        this.tirarDados();   
        if(this.dados == 7 || this.dados == 11) {
            console.log(`el numero es ${this.dados}, avanza a la proxima ronda`);
            this.pausaParaLeer();
            return this.elegirApuesta(paramCreditos);
        } else if (this.dados == 2 ||this.dados == 3 || this.dados == 12){
            console.log(`el numero es ${this.dados}, crapping out`);
            //LE RESTAMOS EL COSTE DE APUESTA.
            let resultadoApuesta: number = 0;
            let creditosApostados: number = this.getApuestaMinima();
            let totalCreditos: number = paramCreditos - creditosApostados;
            console.log(this.mensajeResultado(resultadoApuesta, creditosApostados));
            this.pausaParaLeer();
            return totalCreditos;
        } else {
             console.log(`el numero es ${this.dados}, tirar nuevamente los dados, y repetir el numero ${this.dados} para continuar`);
             this.pausaParaLeer();
            return this.apostarSalidaSegundoIntento(paramCreditos,this.dados);
        }
    }

    public apostarSalidaSegundoIntento(paramCreditos: number,resultadoAnterior:number): number {
        this.tirarDados();
        if(this.dados == resultadoAnterior) {
            console.log(`el nuevo numero es ${this.dados}, avanza a la proxima ronda`);
            this.pausaParaLeer();
            return this.elegirApuesta(paramCreditos);
        } else if(this.dados == 7) {
             console.log(`el nuevo numero es ${this.dados}, crapping out`);
             //LE RESTAMOS EL COSTE DE APUESTA.
             //LE RESTAMOS EL COSTE DE APUESTA.
            let resultadoApuesta: number = 0;
            let creditosApostados: number = this.getApuestaMinima();
            let totalCreditos: number = paramCreditos - creditosApostados;
            console.log(this.mensajeResultado(resultadoApuesta, creditosApostados));
            this.pausaParaLeer();
            return totalCreditos;
        } else {
            console.log(`el nuevo numero es ${this.dados}, vuelve a tirar`);
            this.pausaParaLeer();
            return this.apostarSalidaSegundoIntento(paramCreditos,this.dados);
        }
    }
     public apostarPassLine(paramCreditos: number): number {
        this.tirarDados();
        let multiplicador: number = 0;
        let resultadoApuesta: number = 0;       
        if(this.dados == 7 || this.dados == 11) {
            console.log(`el numero es ${this.dados}, la apuesta gana`);
            console.log(`el premio se devuelve al ganador`);
            //retorna x 2???
            multiplicador = 2;
            resultadoApuesta = paramCreditos * multiplicador;
            return resultadoApuesta;
        } else if(this.dados == 2 ||this.dados == 3 || this.dados == 12) {
            console.log(`el numero es ${this.dados}, crapping out, la apuesta pierde`);
            multiplicador = 0;
            resultadoApuesta = paramCreditos * multiplicador;
            return resultadoApuesta;
        } else {
            console.log(`el numero es ${this.dados}, tirar nuevamente los dados, y repetir el numero ${this.dados} para continuar`);
            return this.apostarSegundoIntento(paramCreditos,this.dados);
        }
    }
    public apostarDontPassBar(paramCreditos:number): number {
        this.tirarDados();
        let multiplicador: number = 0;
        let resultadoApuesta: number = 0;
        if(this.dados == 7 || this.dados == 11) {
            console.log(`el numero es ${this.dados}, la apuesta pierde`);
            //retorna x0
            multiplicador = 0;
            resultadoApuesta = paramCreditos * multiplicador;
            return resultadoApuesta;
        } else if(this.dados == 2 ||this.dados == 3) {
            console.log(`el numero es ${this.dados}, la apuesta gana`);
            console.log(`el premio se devuelve al ganador`);
            //retorna x2
            resultadoApuesta = paramCreditos * multiplicador;
            return resultadoApuesta;
        } else if(this.dados == 12) {
            console.log(`el numero es ${this.dados}, es un empate`);
            //retorna paramCreditos
            resultadoApuesta = paramCreditos * multiplicador;
            return resultadoApuesta;
        } else {
            console.log(`el numero es ${this.dados}, tirar nuevamente los dados, y repetir el numero ${this.dados} para continuar`);
            return this.apostarSegundoIntento(paramCreditos,this.dados);
        }

    }

    private apostarSegundoIntento(paramCreditos:number,paramDados:number): number {
        this.tirarDados();
        let multiplicador: number = 0;
        let resultadoApuesta: number = 0;
        console.log("El resultado anterior fue: " + paramDados);
        if(this.dados == paramDados) {
            console.log("el numero es igual");
            console.log("la apuesta gana");
            //retorna x2
            multiplicador = 2;
            resultadoApuesta = paramCreditos * multiplicador;
            return resultadoApuesta;
        } else {
            console.log("la apuesta pierde");
            //retorna x0
            multiplicador = 0;
            resultadoApuesta = paramCreditos * multiplicador;
            return resultadoApuesta;
        }
    }

    public apostarEnField(paramCreditos: number): number {
        this.tirarDados();
        let multiplicador: number = 0;
        let resultadoApuesta: number = 0;
        if(this.dados == 3 ||this.dados == 4 ||this.dados == 9 ||this.dados == 10 ||this.dados == 11){
            console.log(`el numero es ${this.dados}, la apuesta gana`);
            console.log(`la apuesta se devuelve al ganador`);
            multiplicador = 2;
            resultadoApuesta = paramCreditos * multiplicador;
            return resultadoApuesta;
        }else if(this.dados == 2 ||this.dados == 12){
            console.log(`el numero es ${this.dados}, la apuesta gana`);
            console.log(`el premio se duplica para el ganador`);
            multiplicador = 3;
            resultadoApuesta = paramCreditos * multiplicador;
            return resultadoApuesta;
        }else{
            console.log(`el numero es ${this.dados}, la apuesta pierde`);
            multiplicador = 0;
            resultadoApuesta = paramCreditos * multiplicador;
            return resultadoApuesta;
        }
    }

    private mensajeApuesta(): void {
        console.log("Elija que tipo de Apuesta prefiere:");
        console.log("1. Apuesta en Field");
        console.log("2. Apuesta Don't Pass Bar");
        console.log("3. Apuesta Pass Line");
    }

    private elegirApuesta(paramCreditos: number): number {
        this.mensajeApuesta();
        let readlineSync = require("readline-sync");
        let opcionApuesta:number = readlineSync.questionInt("Ingrese la opcion deseada: ");
        if(opcionApuesta < 1  || opcionApuesta > 3){
            console.log("error, intente nuevamente");        
            return this.elegirApuesta(paramCreditos);
        }else{
            return this.ejecucionApuestas(paramCreditos,opcionApuesta);
        }
    
    }
    private ejecucionApuestas(paramCreditos: number, paramOpcion: number): number {
        //plata a elegir
        let resultadoApuesta: number = 0;
        let creditosApostados: number = this.cantApostada(paramCreditos)
        let totalCreditos: number = paramCreditos;
        switch(paramOpcion){
            case 1:
                totalCreditos -= creditosApostados;
                resultadoApuesta = this.apostarEnField(creditosApostados);
                //REVISAR COMO SE MUESTRA EL RESULTADO.
                console.log(this.mensajeResultado(resultadoApuesta, creditosApostados));
                totalCreditos += resultadoApuesta;
                this.pausaParaLeer();
                return totalCreditos;
            case 2:
                totalCreditos -= creditosApostados;
                resultadoApuesta = this.apostarDontPassBar(creditosApostados);
                //REVISAR COMO SE MUESTRA EL RESULTADO.
                console.log(this.mensajeResultado(resultadoApuesta, creditosApostados));
                totalCreditos += resultadoApuesta;
                this.pausaParaLeer();
                return totalCreditos;
            case 3: 
                totalCreditos -= creditosApostados;
                resultadoApuesta = this.apostarPassLine(creditosApostados);
                //REVISAR COMO SE MUESTRA EL RESULTADO.
                console.log(this.mensajeResultado(resultadoApuesta, creditosApostados));
                totalCreditos += resultadoApuesta;
                this.pausaParaLeer();
                return totalCreditos;
                
            default: 
                return paramCreditos;
        }
    }
    
    public jugar(paramCreditos: number): number {
        let readlineSync = require('readline-sync');
        //chequeamos si la persona tiene creditos suficientes para apostar.
        if(paramCreditos > this.getApuestaMinima()) {
            console.log("Usted posee "+ paramCreditos + " creditos.");
            this.mensajesMenuCrap();
            let opcionDeseada: number = readlineSync.questionInt('Ingrese la opcion deseada ');
            if(opcionDeseada < 1 || opcionDeseada > 2) {
                //REGRESO AL MENU PORQ METISTE LA OPCION INCORRECTA
                console.log("numero erroneo Intente nuevamente");
                console.clear();//para limpiar la pantalla
                return this.jugar(paramCreditos);
            } if(opcionDeseada === 1) {
                //ESTO ES AHORA LA BARRERA DE ENTRADA.
                console.log("Usted eligio Tiro inicial para ingresar a sala.");
                return this.jugar(this.apostarSalida(paramCreditos));
            } else {
                //SALIR DEL PROGRAMA CON LA CANTIDAD DE CREDITOS 
                console.log("Usted se retira con " + paramCreditos + " creditos.");
                console.log("Gracias por jugar, esperamos su regreso.");
                return paramCreditos;
            }
        } else {
            console.log("Usted ya no posee creditos suficientes para usar esta maquina");
            console.log("Gracias por jugar, esperamos su regreso.")
            return paramCreditos;
        }
    }

    private mensajesMenuCrap(): void {
        console.log("Bienvenido a Craps");
        console.log("opciones: ");
        console.log("1 _ Ingresar a sala con apuesta minima" + " (" + this.getApuestaMinima() + ")");
        console.log("2 _ Salir");
    }

    

    
    
    
}