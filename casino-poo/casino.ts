import { Cliente } from "./cliente";
import { Juego } from "./juego";
import { TragamonedaSummer } from "./tragamonedaSummer"
import { TragamonedaWinter } from "./TragamonedaWinter"
import { Ruleta } from "./ruleta"
import { Crap } from "./crap";

export class Casino {
    private juegos: Juego[]
    private cliente: Cliente;
    private balance: number;
    private capitalGeneral: number;
    private valorCreditos: number;

    public constructor(paramCapitalGeneral: number, paramValorCredito: number, paramCliente: Cliente, pJuegos: Juego[]) {
        this.valorCreditos = paramValorCredito;
        this.capitalGeneral = paramCapitalGeneral;
        this.balance = 0;
        this.cliente = paramCliente;
        this.juegos = pJuegos;
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

    //ahora es cliente compra creditos y debe relacionarse con el cliente.
    public comprarCreditos(paramDinero: number): number {
        let creditosSalida: number = paramDinero / this.valorCreditos;
        this.capitalGeneral += paramDinero;
        return creditosSalida; 
    }

    //cliente convierte creditos y debe relacionarse con el cliente.
    public intercambiarCreditos(paramCreditos: number): number {
        let dineroSalida: number = paramCreditos * this.valorCreditos;
        this.capitalGeneral -= dineroSalida;
        return dineroSalida;
    }

    public menuCentral(paramCreditos: number, pJuegos: Juego[]): number {
        console.log("Bienvenido al casino RXXXX");
        console.log("Usted posee " + paramCreditos + " creditos.");
        if(paramCreditos > 0) {
            this.mensajesMenuCentral();
            let readlineSync = require('readline-sync');
            let opcionDeseada: number = readlineSync.questionInt('Ingrese la opcion deseada: ');
            if(opcionDeseada < 1 || opcionDeseada > 5) {
                //REGRESO AL MENU PORQ METISTE LA OPCION INCORRECTA
                console.log("numero erroneo Intente nuevamente");
                console.clear();//para limpiar la pantalla
                //debe ser un return??
                return this.menuCentral(paramCreditos, pJuegos);
            } else if(opcionDeseada === 5) {
                //SALIR DEL PROGRAMA CON LA CANTIDAD DE CREDITOS 
                console.log("Usted se retira con " + paramCreditos + " creditos.");
                console.log("Gracias por jugar, esperamos su regreso.");
                return paramCreditos;
            } else {
                //EJECUTAR LA OPCION Y REGRESAR AL PROGRAMA CON LA NUEVA CANTIDAD DE CREDITOS
                //debe ser un return??
                return this.menuCentral(this.ejecucionMaquinas(opcionDeseada, paramCreditos, pJuegos), pJuegos);
            }
        } else {
            console.log("Usted ya no posee creditos suficientes, gracias por jugar vuelva pronto.");
            return paramCreditos;
        }
        
    }
    
    //SE PUEDE CREAR UN MENU SEGUN EL ARRAY JUEGOS ROBANDOLE LOS NOMBRES A CADA ELEMENTO.
        //nombres hardcodeados.
    private mensajesMenuCentral(): void {
        console.log("Menu principal");
        for(let i = 0; i < this.juegos.length; i++) {
            console.log((i+1) + " _ Jugar con " + this.juegos[i].getNombre());
            if(i+2 > this.juegos.length) {
                console.log( (i+2) + " _ Salir.");
            }
        }
        console.log("");
    }
    
    private ejecucionMaquinas(paramOpcion: number, paramCreditos: number, pJuegos: Juego[]): number {
        switch(paramOpcion){
            case 1:
                return this.juegos[paramOpcion - 1].jugar(paramCreditos, pJuegos[paramOpcion - 1 ]);
            case 3:
                return this.juegos[paramOpcion - 1].jugar(paramCreditos, pJuegos[paramOpcion - 1 ]);
            default:
                return paramCreditos;
        }
    }

}