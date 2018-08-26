console.log('Starting our Application');
//ThirdPartyModules
const fs = require('fs');
const _  = require('lodash');
//OwnModules
var note = require('./note.js');

var command = process.argv[2];

if (command === 'read') {
    console.log('Reading the notes from the DataBase: ');
} else if (command === 'remove'){
    console.log('Removing the notes from the DataBase: ');
} else{
    console.log('Command is not recognized ')
}