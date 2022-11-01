import { Crap } from "./casino-poo/crap";
import { Juego } from "./casino-poo/juego";

//let apuesta1: Juego = new Juego(123,200,undefined);

let juego1: Crap = new Crap(2,124,100);
let juego2: Crap = new Crap(3,125,300);

juego1.apostarSalida(200);
juego2.apostarSalida(100);


