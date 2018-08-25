console.log('Successfully loaded the note.js file!!');

module.exports.add = function () {
    const a = 9;
    const b = 2;
    const c = a + b;
    return (c);
}

module.exports.newAdd = (d,e) => {
    return d + e;
}