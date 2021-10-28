let arr = [];

for (let i = 0; i < 6; i++) {
	const num = parseInt(prompt(`Inserisci un numero`));
	if (!(num % 2 === 0)) arr.push(num);
}
document.querySelector('.output').innerHTML = `I tuoi numeri dispari ${arr.join('-')}`;
