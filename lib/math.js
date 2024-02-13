/*
*Title: Math Library
*Description: Utility Library for Math-related function
*Author: Rupsahana Ripa (Teach by Sumit)
*Date: 13/02/2024
*
*/

//Math Object - Module Scaffolding
const math = {};

//Get a random integer between two integers
// Inspired by: http://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
math.getRandomNumber = function getRandomNumber(min, max){
    let minimum = min;
    let maximum = max;
    minimum = typeof minimum === 'number' ? minimum : 0;
    maximum = typeof maximum === 'number' ? maximum : 0;
    return Math.floor(Math.random()*(maximum-minimum+1) + min);
};

//Exports the Library
module.exports = math;