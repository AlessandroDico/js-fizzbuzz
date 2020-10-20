/*
Scrivere un programma che stampi tutti i numeri da 1 a 100 con queste regole:
al posto dei multipli di 3, deve stampare "Fizz"
al posto dei multipli di 5, deve stampare "Buzz"
al posto dei multipli sia di 3 che di 5, deve stampare "FizzBuzz"
*/

// SOLUZIONE PER CSS E HTML

var final_container = [];


for (var i = 1; i <= 100; i++) {
    // console.log(i);
    if (((i % 3) == 0) && ((i % 5) == 0)) {
        console.log('FizzBuzz');
        final_container.push('FizzBuzz');
    } else if ((i % 3) == 0) {
        console.log('Fizz');
        final_container.push('Fizz');
    } else if ((i % 5) == 0) {
        console.log('Buzz');
        final_container.push('Buzz');
    } else {
        console.log(i);
        final_container.push(i);
    }
}

for (var i = 0; i < final_container.length; i++) {
    document.write("<p>" + final_container[i] + "</p>");
    /*
    IL PROBLEMA DI QUESTA SOLUZIONE è CHE RIESCO A METTERE IN COLONNA E A STILIZZARE I SINGOLI ELEMENTI MA SOLO ATTRAVERSO UN TAG GENERICO <p> QUINDI DOVREI FAR SI CHE NEL CSS IL TAG GENERICO <p> FOSSE DEDICATO A QUESTO ARRAY
    */


    // document.getElementById('all_numbers').innerHTML = final_container[i];


    /*
    IL PROBLEMA DI QUESTA SOLUZIONE INVECE è CHE NON RIESCO A GESTIRE I SINGOLI ELEMENTI DELL'ARRAY MA LI TRATTA COME BLOCCO UNICO
    */
}
