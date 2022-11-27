// 1- permettere di inserire il numero di km
let chilometri = parseInt(prompt(`Quanti km devi percorrere?`));
console.log(`devi percorrere ${chilometri}km`)
// 2- permettere di inserire l'età
let eta = parseInt(prompt(`Quanti anni hai?`));
console.log(`hai ${eta} anni`)
// 3- definire il prezzo per km
const prezzo_unitario = 0.21;
// 4- calcolare il prezzo totale
    //4.1- calcolo il prezzo in base ai km
    let prezzo = chilometri * prezzo_unitario
    console.log(`Il prezzo del biglietto é ${prezzo} $`)
    //4.2- applico il relativo sconto in base all'età:
    if(eta < 18){
        let sconto = prezzo * 0.2
        prezzo = (prezzo - sconto).toFixed(2)
        console.log(`Il prezzo finale del biglietto é ${prezzo} $`)
    }

    else if(eta >= 65){
        let sconto = prezzo * 0.4
        prezzo = (prezzo - sconto).toFixed(2)
        console.log(`Il prezzo finale del biglietto é ${prezzo} $`)
    }

    else{
        prezzo = prezzo.toFixed(2)
        console.log(`Il prezzo finale del biglietto é ${prezzo} $`)
    }
// 5- arrotondo il risultato ai centesimi (.tofixed applicato)
// 6- visualizzo nella pagina il risultato arrotondato

document.getElementById('prezzo_finale').innerHTML =  `Il prezzo del biglietto é ${prezzo} $`