console.log('Starting notes app...');

const fs = require('fs');

var fetchNotes = () => {
    try {
        var allNotes = fs.readFileSync('notes-data.json');
        return JSON.parse(allNotes);
    }
    catch (e){
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };


    var checkDuplicate = notes.filter((note) => note.title == title);
    if(checkDuplicate === 0){
        notes.push(note);
        saveNotes(notes);
        console.log("Note successfully created");
    }
    else
    {
        console.log("Title should be unique");
    }
};

var getAll = () => {
    // console.log('Getting all notes..');
    return fetchNotes();
};

var getNote = (title) => {
    // console.log('Getting note', title);
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title === title);

    return filteredNotes[0];
};

var removeNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    // console.log(filteredNotes);
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};