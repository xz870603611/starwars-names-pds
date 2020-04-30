// src/index.js
let uniqueRandomArray = require('unique-random-array');
let starWarsNames = require('./starwars-names.json');
module.exports = {
    all: starWarsNames,
    random: uniqueRandomArray(starWarsNames)
};