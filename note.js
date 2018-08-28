console.log('Successfully loaded the note.js file!!');

var addNote = (title,body) =>{
    console.log('Adding note', title, body);
};

var getNote = (title) => {
    console.log('Reading the note', title, body);
};

var delNote = (title) => {
    console.log('Deleteing the note', title, body);
};

var getAll = (title) => {
    console.log('Listing the note', title, body);
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