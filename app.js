console.log('Starting our Application');
//ThirdPartyModules
const fs = require('fs');
const _  = require('lodash');
const yargs = require('yargs');
//OwnModules
var note = require('./note.js');

const argv = yargs.argv;
var command = process.argv[2];
console.log('Command',command);
console.log('Process',process.argv);
console.log('Yargs', argv);

if (command === 'read') {
    console.log('Reading the notes from the DataBase: ');
} else if (command === 'remove'){
    console.log('Removing the notes from the DataBase: ');
} else if (command === 'list'){
    console.log('Listing all the notes from the DataBase:');
}else if (command === 'add'){
    note.addNote(argv.title, argv.body);
}else{
    console.log('Command is not recognized ');
};