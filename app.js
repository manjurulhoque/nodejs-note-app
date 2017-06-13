// console.log('Starting app...');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

// const argv = yargs.argv;
const argv = yargs
    .command('add', 'Add a new note', {
        title: {
            describe: 'Title of note',
            demand: true,
            alias: 't'
        },
        body: {
            describe: 'Body of note',
            demand: true,
            alias: 'b'
        }
    })
    .command('list', 'List of all notes')
    .command('read', 'Read a note', {
        title: {
            describe: 'Title of note',
            demand: true,
            alias: 't'
        }
    })
    .command('remove', 'Remove a note', {
        title: {
            describe: 'Title of note',
            demand: true,
            alias: 't'
        }
    })
    .help()
    .argv;
// var command = process.argv[2];
var command = argv._[0];

// console.log(command);
// console.log(argv);

if(command == 'add')
{
    // console.log(argv.title, argv.body);
    notes.addNote(argv.title, argv.body);
}
else if(command == 'list')
{
    // console.log('Listing all notes');
    var allNotes  = notes.getAll();
    console.log(`There are ${allNotes.length} notes.`);
    allNotes.forEach((value, i) => {
        console.log(value);
    })
}
else if(command == 'read')
{
    // console.log('Reading note');
    var note = notes.getNote(argv.title);
    if(note)
    {
        console.log('Note removed');
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
    }
    else{
        console.log('Note not found');
    }
}
else if(command == 'remove')
{
    // console.log('Removing note');
    var noteRemoved = notes.removeNote(argv.title);
    console.log(noteRemoved ? 'Note removed' : 'Note not found');
}
else{
    console.log('Command is not recognized');
}
