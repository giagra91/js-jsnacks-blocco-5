const people = [
{
    nome: `Luca`,
    cognome: `Rossi`,
    età: 26,
},
{
    nome: `Paola`,
    cognome: `Biondi`,
    età: 16,
},
{
    nome: `Marta`,
    cognome: `Bianchi`,
    età: 45,
},
{
    nome: `Marco`,
    cognome: `Monaco`,
    età: 36,
},
{
    nome: `Giovanni`,
    cognome: `Rossi`,
    età: 15,
},
{
    nome: `Francesca`,
    cognome: `De Rossi`,
    età: 50,
},
{
    nome: `Lucia`,
    cognome: `Rossi`,
    età: 30,
},
];

const driveCheck = people.map((element) => {
    let driveAge = (element.età >= 18) ?  `può guidare poiché ha ${element.età} anni`: `non può guidare poiché ha ${element.età} anni`;
    return `${element.nome} ${element.cognome} ` + driveAge;
    
});
console.log(driveCheck)