/**
 * JSnack 2
 * L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.
 */

const value1 = String(prompt('Inserisci la prima parola'));
const value2 = String(prompt('Inserisci la seconda parola'));
let message = String('');

/* if version */
if (value1.length > value2.length) message = `${value1} è più lunga rispetto a ${value2}`;
else if (value1.length < value2.length) message = `${value2} è più lunga rispetto a ${value1}`;
else message = `${value1} ha la stessa lunghezza di ${value2}`;

document.querySelector('.output').innerHTML = message;
