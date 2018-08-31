console.log('Successfully loaded the note.js file!!');

const fs = require('fs');

var addNote = (title,body) =>{
    var notes = [];
    var note = {
        title,
        body
    };

    try {
        var noteString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(noteString);
    } catch(e) {

    }

    var duplicateNote = notes.filter((note) => note.title === title);

    if (duplicateNote.length === 0){
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    };
};

var getNote = (title) => {
    console.log('Reading the note', title);
};

var delNote = (title) => {
    console.log('Deleteing the note', title);
};

var getAll = () => {
    console.log('Listing the note');
};

module.exports = {
    addNote,
    getNote,
    delNote,
    getAll
};
// module.exports.addNote = () => {
//     console.log('addNote');
//     return 'NewNote';
// };