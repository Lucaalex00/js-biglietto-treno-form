/*
# Tools
- let/const
- prompt
- if/else if
- mathematic calc
- toFixed on console.log 
- Addeventlistener
- querySelector
*/

//Variabili Chilometri / Età
let km = prompt(`Quanti km devi percorrere ?`);
km = Number(km);
let age = prompt(`Qual'è la tua età ?`);
age = Number(age);

//Variabile Costo Biglietto
var ticketPrice = (km * 0.21);
ticketPrice = Number(ticketPrice)
//Sconto minorenni e anziani
if (age < 18) { //SE meno di 18 anni
    const minorDiscount = ((ticketPrice / 100) * 20);
    ticketPrice = (ticketPrice - minorDiscount);
} else if (age > 65) { //SE piu di 65 anni
    const oldDiscount = ((ticketPrice / 100) * 40);
    ticketPrice = (ticketPrice - oldDiscount);
}

