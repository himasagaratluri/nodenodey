console.log('Successfully loaded the note.js file!!');

var addNote = (title,body) =>{
    console.log('Adding note', title, body);
};

module.exports = {
    addNote
};
// module.exports.addNote = () => {
//     console.log('addNote');
//     return 'NewNote';
// };