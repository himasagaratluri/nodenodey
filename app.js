console.log('Starting our Application');

const fs = require('fs');
const os = require('os');

var user = os.userInfo();

fs.appendFileSync('messages.txt', '\n' + `Hello ${user.username}a` + '!');