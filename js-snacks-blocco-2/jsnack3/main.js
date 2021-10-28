/**
 * Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
 */

let sum = 0;
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
for (let i = 0; i < array.length; i++) {
	if (!(i % 2 === 0)) sum += array[i];
}

document.querySelector('.output').innerHTML = `La somma dei numeri dispari da 1 a 20 è : ${sum}`;
