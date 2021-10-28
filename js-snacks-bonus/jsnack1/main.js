/**
 * Ogni volta che si clicca un bottone, il nostro programma chiederà un numero di 4 cifre all’utente.
 * Se l’utente ha inserito un numero corretto, allora il programma calcolerà la somma e le media di tutte le cifre che lo
 * compongono stampandola nel DOM, altrimenti ripeterà la richiesta di inserimento finché non avrà inserito un numero corretto.
 */
let sum = null;
let average = null;

document.querySelector('.button').addEventListener('click', () => {
	document.querySelector('.sum').innerHTML = '';
	document.querySelector('.average').innerHTML = '';
	const value = parseInt(prompt('Inserisci un numero di 4 cifre'));
	if (value.toString().length >= 4) {
		const array = value.toString().split('');
		for (let i = 0; i < array.length; i++) {
			sum += parseInt(array[i]);
			average = sum / value.toString().length;
		}
		document.querySelector('.sum').innerHTML = `La tua somma è ${sum}`;
		document.querySelector('.average').innerHTML = `La media dei numeri è ${average}`;
	}
});
