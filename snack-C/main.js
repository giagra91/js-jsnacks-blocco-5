const words = [
    `parola`,
    `prova`,
    `BOOLEAN`,
    `classe`,
    `ESERCIZIO`,
    `pranzo`,
];


const newArray = words.map((element) => {
    return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();
});

console.log(newArray)