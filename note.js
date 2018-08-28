console.log('Successfully loaded the note.js file!!');

var addNote = (title,body) =>{
    console.log('Adding note', title, body);
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