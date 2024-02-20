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

//Elements from HTML
const userInfo = document.querySelector('.userinfo_input')
const userKm = document.querySelector('.km_input');
const userAge = document.querySelector('.age_input');
let passengerName = document.getElementById('name');
let offerElement = document.getElementById('offer_random');
let seatElement = document.getElementById('seat_random')
let codeElement = document.getElementById('code_random')
let ticket_cost = document.getElementById('ticket_cost')



// BONUS
document.getElementById('remove').addEventListener('click', function () {
    document.location.reload()
})
// /BONUS

document.getElementById('submit').addEventListener('click', function () {

    //Variabili / Chilometri / Età
    let km = Number(userKm.value);
    console.log(km + ' km');
    let age = Number(userAge.value);
    console.log(age + 'enne')

    //Variabile Costo Biglietto
    var ticketPrice = (km * 0.21);
    ticketPrice = Number(ticketPrice)
    //Sconto minorenni e anziani
    if (age < 18) { //SE meno di 18 anni
        const minorDiscount = ((ticketPrice / 100) * 20);
        ticketPrice = (ticketPrice - minorDiscount);
        offerElement.innerHTML = 'Ticket Minor';

    } else if (age > 65) { //SE piu di 65 anni
        const oldDiscount = ((ticketPrice / 100) * 40);
        ticketPrice = (ticketPrice - oldDiscount); offerElement.innerHTML = 'Ticket Senior';
    }


    console.log(ticketPrice.toFixed(2) + ' € è il prezzo del biglietto');
    ticket_cost.innerHTML = ticketPrice.toFixed(2) + '€';
    passengerName.innerHTML = userInfo.value;
    seatElement.innerHTML = Math.floor(Math.random() * 30 + 1)
    codeElement.innerHTML = 'CP000' + Math.floor(Math.random() * 99 + 1)





});