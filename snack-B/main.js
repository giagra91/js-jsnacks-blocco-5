const cars = [
    {
    marca: `Honda`,
    modello: `Civic`,
    alimentazione: `Benzina`,
},
{
    marca: `Honda`,
    modello: `Civic`,
    alimentazione: `Gpl`,
},
{
    marca: `Bmw`,
    modello: `320`,
    alimentazione: `Benzina`,
},
{
    marca: `Bmw`,
    modello: `320`,
    alimentazione: `Diesel`,
},
{
    marca: `Fiat`,
    modello: `Tipo`,
    alimentazione: `Benzina`,
},
{
    marca: `Fiat`,
    modello: `Tipo`,
    alimentazione: `Metano`,
},
{
    marca: `Fiat`,
    modello: `Tipo`,
    alimentazione: `Metano`,
},
{
    marca: `Fiat`,
    modello: `Tipo`,
    alimentazione: `Diesel`,
},
{
    marca: `Mercedes`,
    modello: `Classe A`,
    alimentazione: `Diesel`,
},
{
    marca: `Mercedes`,
    modello: `Classe A`,
    alimentazione: `Benzina`,
},
{
    marca: `Mercedes`,
    modello: `Classe A`,
    alimentazione: `Metano`,
},
{
    marca: `Mercedes`,
    modello: `Classe A`,
    alimentazione: `Gpl`,
},
];

// Soluzione con filter

/* const autoBenzina = cars.filter (element => {
    if (element.alimentazione == "Benzina")
    return true;
} );
console.table(autoBenzina)

const autoDiesel = cars.filter (element => {
    if (element.alimentazione == "Diesel")
    return true;
} );
console.table(autoDiesel)

const othersAuto = cars.filter (element => {
    if (element.alimentazione !== "Diesel" && element.alimentazione !== "Benzina")
    return true;
} );
console.table(othersAuto) */

// Soluzione con forEach
const gasoline = [];

const diesel = [];

const others = [];

cars.forEach((element) => {
    if (element.alimentazione == `Benzina`) {
        gasoline.push(element);
    } else if (element.alimentazione == `Diesel`) {
        diesel.push(element);
    } else {
        others.push(element);
    }
})

console.table(gasoline)
console.table(diesel)
console.table(others)
