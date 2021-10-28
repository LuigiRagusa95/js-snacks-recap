/**
 * Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
 */
let result = [];
const names = ['Peter', 'Glenn', 'Joe', 'Cleveland', 'Carter', 'Tom'];
const surnames = ['Griffin', 'Quagmire', 'Swanson', 'Brown', 'Pewterschmidt', 'Tucker'];

for (let i = 0; i < 3; i++) {
	const randomName = Math.floor(Math.random() * names.length);
	const randomSurname = Math.floor(Math.random() * names.length);
	result.push(`${names[randomName] + ' ' + surnames[randomSurname]}`);
}

document.querySelector('.output').innerHTML = `Elenco invitati: ${result.join(' , ')}`;
