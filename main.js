// Scrivi un programma che stampi i numeri da 1 a 100

// • Per i multipli di 3 stampi “Fizz” al posto del numero
// • Per i multipli di 5 stampi Buzz
// • Per i multipli sia di 3 sia di 5 stampi FizzBuzz

// - creo il ciclo
// - creo i vari IF
//      - SE il giro di ciclo è divisibile per 3 -> stampo "Fizz" AL POSTO DEL NUMERO
//      - SE il giro di ciclo è divisibile per 5 -> stampo "Buzz" AL POSTO DEL NUMERO
//      - SE il giro di ciclo è divisibile per 3 && 5 -> stampo "FizzBuzz" AL POSTO DEL NUMERO
//      - ALTRIMENTI stampo semplicemente i (credo?)



for (let i = 1; i <= 100; i++){
    
    if(i % 3 == 0 && i % 5 == 0){

        console.log("FizzBuzz");

    } else if(i % 5 == 0) {

        console.log("Buzz");

    } else if(i % 3 == 0){

        console.log("Fizz");

    } else {

        console.log(i);
        
    }

}

