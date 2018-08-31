// var obj = {
//     name : 'hima'
// };

// var stringObj = JSON.stringify(obj);

// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"Name": "HimaSagarAtluri", "age" : "26"}';
// var person = JSON.parse(personString);
// console.log(typeof personString);
// console.log(typeof person);
// console.log(person);
// console.log(personString);

const fs = require('fs');

var originalNote = {
    title: 'title yo',
    body: 'this the body yo'
};

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');

var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);