// Adding express to the document
const express = require('express');

// Creating express app and establishing what port
const app = express();
const PORT = 5000;

// Defining an array of artists including their
// year of birth and death
const artistListArray = [
    {
        name: 'Miles Davis',
        born: 1926,
        died: 1990,
    },
    {
        name: 'Duke Ellington',
        born: 1899,
        died: 1974,
    },
    {
        name: 'John Coltrane',
        born: 1926,
        died: 1987,
    },
    {
        name: 'Louis Daniel Armstrong',
        born: 1901,
        died: 1971,
    },
];

// Defining songs array and their artist
const songListArray = [
    {
        title: 'Take Five',
        artist: 'The Dave Brubeck Quartet',
    },
    {
        title: 'So What',
        artist: 'Miles Davis',
    },
    {
        title: 'Sing Sing Sing',
        artist: 'Benny Goodman',
    },
    {
        title: 'Take the "A" Train',
        artist: 'The Dave Brubeck Quartet',
    },
];

// Setting up static (html)
app.use(express.static('server/public'));

// Get at localhost:5000/artist
app.get('/artist', (req, res) => {
    // sending the array of artists
    res.send(artistListArray);
});

// TODO - Add GET for songs
app.get( `/song`, function( req, res ){
    console.log( 'in GET for /song, should display song array', songListArray );
    res.send( songListArray );
} )

// Listening for requests
app.listen(PORT, () => {
    console.log('listening on port', PORT)
});