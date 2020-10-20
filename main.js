/*
Scrivere un programma che stampi tutti i numeri da 1 a 100 con queste regole:
al posto dei multipli di 3, deve stampare "Fizz"
al posto dei multipli di 5, deve stampare "Buzz"
al posto dei multipli sia di 3 che di 5, deve stampare "FizzBuzz"
*/


/*
// ___________PRIMA SOLUZIONE______________

// STAMPO I 100NUMERI
for (var i = 1; i <= 100; i++) {
    // console.log(i);
    if (((i % 3) == 0) && ((i % 5) == 0)) {
        console.log('FizzBuzz');
    } else if ((i % 3) == 0) {
        console.log('Fizz');
    } else if ((i % 5) == 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}

//_______________FINE PRIMA SOLUZIONE____________
*/


//__________________SECONDA SOLUZIONE____________
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
    // document.getElementById('all_numbers').innerHTML = final_container[i];
    // document.getElementById('all_numbers').innerHTML = ("<p>" + final_container[i] + "</p>");

}
// document.writeln(final_container);
// console.log(final_container);






































/**/
