/**
 * Crea due array che hanno un numero di elementi diversi.
 * Aggiungi elementi casuali all’array che ha meno elementi, fino a quando ne avrà tanti quanti l’altro.
 */
const months = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio'];
const years = ['2000', '2001', '2002'];

console.log('Mesi: ', months);
console.log('Anni: ', years);

if (months.length < years.length) {
	let total = years.length - months.length;
	for (let i = 0; i < total; i++) {
		console.log('Aggiungero mesi');
	}
} else {
	let total = months.length - years.length;
	for (let i = 0; i < total; i++) {
		const randomYear = Math.floor(Math.random() * 10) + 2002;
		years.push(`${randomYear}`);
	}
}

console.log('Anni (dopo modifica): ', years);
