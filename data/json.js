// var obj = {
//     name: 'Rumi'
// };
//
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

const fs = require('fs');

var originalNote = {
    title: 'title',
    body: 'Body'
};

fs.writeFileSync('notes.json', JSON.stringify(originalNote));

