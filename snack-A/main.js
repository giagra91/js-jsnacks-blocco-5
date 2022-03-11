const player = {
    nome: `James`,
    cognome: `Le Bron`,
    età: 30,
    mediaPunti: ``,
    percSuccesso: ``,
    codGiocatore: ``,    
}

let playerCode = "";

const letters = `ABCDEFGHIJKLMNOPQRSTUVZ`;
const numbers = `0123456789`;
for (let i = 0; i < 3; i++){
    playerCode += letters.charAt(Math.floor(Math.random() * letters.length));
    playerCode += numbers.charAt(Math.floor(Math.random() * numbers.length));
    
}

player["codGiocatore"] = playerCode;
console.log(playerCode)

let mediaPoints = (Math.floor(Math.random() * 50));
player["mediaPunti"] = mediaPoints;
console.log(mediaPoints)

let successPercentage = (Math.floor(Math.random() * 100));
player["percSuccesso"] = successPercentage;
console.log(successPercentage)

console.log(player)