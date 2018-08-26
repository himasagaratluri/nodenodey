console.log('Successfully loaded the note.js file!!');

var addNote = (title,body) =>{
    console.log('Adding note', title, body);
};

var readNote = (title,body) => {
    console.log('Reading the note', title, body);
};

var delNote = (title,body) => {
    console.log('Deleteing the note', title, body);
};

var listNote = (title,body) => {
    console.log('Listing the note', title, body);
};

module.exports = {
    addNote,
    readNote,
    delNote,
    listNote
};
// module.exports.addNote = () => {
//     console.log('addNote');
//     return 'NewNote';
// };