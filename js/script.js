// 1- permettere di inserire il numero di km
let chilometri = parseInt(prompt(`Quanti km devi percorrere?`));
// 2- permettere di inserire l'età
let eta = parseInt(prompt(`Quanti anni hai?`));
// 3- definire il prezzo per km
const prezzo_unitario = 0.21;
// 4- calcolare il prezzo totale
    //4.1- calcolo il prezzo in base ai km
    let prezzo = chilometri * prezzo_unitario
    console.log(prezzo)
    //4.2- applico il relativo sconto in base all'età:
        //SE minorenne sconto del 20%
        //SE over65 sconto del 40%
        //ALTRIMENTI nessuno sconto
// 5- arrotondo il risultato ai centesimi
// 6- visualizzo nella pagina il risultato arrotondato