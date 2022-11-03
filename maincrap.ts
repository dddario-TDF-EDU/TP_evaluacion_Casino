import { Crap } from "./casino-poo/crap";

//let apuesta1: Juego = new Juego(123,200,undefined);

let juego1: Crap = new Crap(2,124,100);
let juego2: Crap = new Crap(3,125,300);
let juego3: Crap = new Crap(12,123,400);
let juego4: Crap = new Crap(4,126,500);


juego1.apostarSalida(200);
juego2.apostarEnField(100);
juego3.apostardontPassBar(100);
juego4.apostarPassLine(100);


