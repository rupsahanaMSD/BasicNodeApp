/*
*Title: Basic Node App Example
*Description: Simple node appplication that print random quotes per second interval.
*Author: Rupsahana Ripa (Learn by Sumit)
*Date: 13/02/2024
*
*/

//Dependencies
const mathLibary = require('./lib/math');
const quotesLibary = require('./lib/quotes');

//App Object - Module Scaffolding
const app = {};

//Configratution
app.config = {
    timeBetweenQuotes: 1000,
};

//Function that prints a random quote
app.printAQuote = function printAQuote(){
    //Get all the quotes 
    const allQuotes = quotesLibary.allQuotes();

    //Get the lenth of the quotes
    const numberOfQuotes = allQuotes.length;

    //Pick a random numner between 1 and the number of quotes
    const randomNumber = mathLibary.getRandomNumber(1, numberOfQuotes);

    //Get the quotes at that position in the array (minus one)
    const SelectedQuote = allQuotes[randomNumber - 1];

    //Print the quotes to the console
    console.log(SelectedQuote);
};

//Function that loops indefinitely, calling the printAQuote function as it goes
app.indefiniteloop = function indefiniteloop(){
    //Create the interval, using the config variable defined above
    setInterval(app.printAQuote, app.config.timeBetweenQuotes);
};

//Invoke the loop
app.indefiniteloop();