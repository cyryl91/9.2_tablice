var nameMen = ['Adam','Marcin','Damian','Tomek'],
    nameWomen = ['Ola','Basia','Monika','Kasia'];
var allName = nameMen.concat(nameWomen);
console.log(allName);
var newName = prompt('podaj imię:');
if (allName.indexOf(newName) === -1) {
	var dodaj = allName.push(newName);
	console.log(allName);
}
else {
	console.log('To imie już istnieje');
}