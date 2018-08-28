console.log('Starting our Application');
//ThirdPartyModules
const fs = require('fs');
const _  = require('lodash');
const yargs = require('yargs');
//OwnModules
var note = require('./note.js');

const argv = yargs.argv;
var command = argv._[0];
console.log('Command',command);
console.log('Process',process.argv);
console.log('Yargs', argv);

if (command === 'read') {
    note.getNote(argv.title);
} else if (command === 'remove'){
    note.delNote(argv.title);
} else if (command === 'list'){
    note.getAll();
} else if (command === 'add'){
    note.addNote(argv.title, argv.body);
} else{
    console.log('Command is not recognized ');
};