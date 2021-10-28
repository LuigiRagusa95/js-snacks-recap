/**
 *  JSnack 3
 * Il software deve chiedere per 5 volte all’utente di inserire un numero.
 * Il programma stampa la somma di tutti i numeri inseriti con for e opzionalmente con while.
 */

let counter = 0;
let valueToTrack = null;
// for (let i = 0; i < 5; i++) {
// 	const v = parseInt(prompt(`Inserisci il ${i}° valore`));
// 	valueToTrack += v;
// }

while (counter < 5) {
	counter++;
	const v = parseInt(prompt(`Inserisci il ${i}° valore`));
	valueToTrack += v;
}
document.querySelector('.output').innerHTML = valueToTrack;
