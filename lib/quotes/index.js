/*
*Title: Quote Libray
*Description: Utility Library for getting a list of quotes
*Author: Rupsahana Ripa (Teach by Sumit)
*Date: 13/02/2024
*
*/

//Dependencies
const fs = require ('fs');

//Quote object - Module Scaffolding
const quotes = {};

//Get all the quotes and return them to the user
quotes.allQuotes = function allQuotes(){
    
    //Read the text file containing the quotes
    const fileContents = fs.readFileSync(`${__dirname}/quotes.txt`, 'utf-8');

    //Turn the string into an array
    const arrayOfQuotes = fileContents.split(/\r?\n/);

    //Return the array
    return arrayOfQuotes;

};

//Export the library
module.exports = quotes;