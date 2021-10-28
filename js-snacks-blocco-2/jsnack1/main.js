/**
 * jsnack1:
 * Inserisci un numero, se è pari stampa il numero,se è dispari stampa il numero successivo
 */

const number = parseInt(prompt('Inserisci un numero (stamperò sempre uno pari)'));
if (!(number % 2 === 0)) document.querySelector('.output').innerHTML = `Il tuo numero è ${number}; Io invece stampo ${number + 1}`;
else document.querySelector('.output').innerHTML = `Il tuo numero è ${number}`;
