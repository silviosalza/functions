//funzioni

// console.log(ciao);
// console.log(ciao);
// console.log(ciao);
// console.log(ciao);

//dichiaro la funzione (è hoisted, si può dichiarare ovunque)

//Invoco la funzione

function greeting(name){
    console.log("Ciao " + name);
}
greeting("Silvio");
greeting("Giulia");
greeting("Moka");
greeting("Fiona");


function divideTwoNumber (dividendo, divisore){
    const result = dividendo / divisore;
    //per poterlo utilizzare dalla funzione fuori si usa return
    return result;
}
const myResult = divideTwoNumber(8,4);


//!-------------------------Esercizio------------------------------------

//generare 10 numeri random attraverso una funzione

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  const rndNumberArray = [];

  for (let i= 0; i<10 ; i++){
    const rndNumber = getRndInteger(1, 100);
    rndNumberArray.push(rndNumber)

  }
console.log(rndNumberArray );

//!-------------------------Esercizio-----------------------

//chiedere numero all'utente e verificare se è pari o dispari

function isOddOrEven(numberToCheck){
    if (numberToCheck % 2 ===0){
        return "pari";
    } else {
        return "dispari"
    }
}
console.log(isOddOrEven(4)); //test


const userNumb = parseInt(prompt("Dimmi un numero"))

const userResult = isOddOrEven(userNumb)

if (userResult === "pari"){
    console.log("Hai scelto un numero pari");
} else {
    console.log("Hai scelto un numero dispari");
}

//!-------------------------Esercizio---------------------------------

//Dato un array vuoto, chiedere all'utente di inseriro un numero fino ad un array di 3 elementi, senza doppioni


const numberArray = []

while(numberArray.length < 3){
    let element = parseInt(prompt("Dimmi un numero"));

    if (numberArray.includes(element)){
        alert("Il numero è già nella lista")

    } else{
        numberArray.push(element)
    }
    
    
}
console.log(numberArray);





