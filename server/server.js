// Adding express to the document
const express = require('express');

// Creating express app and establishing what port
const app = express();
const PORT = 5000;

// Defining songs array and their artist.
// Now, importing in:
let songListArray = require( `./modules/songs.js` );

// Defining an array of artists including their
// year of birth and death.
// Now, importing in:
let artistListArray = require( `./modules/artist.js` );

// Adding third array:
let titlesAndYears = require( `./modules/thirdArrayTitlesAndYears.js` );

// Setting up static (html)
app.use(express.static('server/public'));

// Get at localhost:5000/artist
app.get('/artist', (req, res) => {
    // sending the array of artists
    res.send(artistListArray);
});

// TODO(TODONE) - Add GET for songs
app.get( `/song`, function( req, res ){
    console.log( 'in GET for /song, should display song array', songListArray );
    res.send( songListArray );
} )

// Third Array GET
app.get( `/thirdArrayTitlesAndYears`, function( req, res ){
    console.log( 'in GET for /thirdArrayTitlesAndYears!', titlesAndYears );
    res.send( titlesAndYears );
} )

// Listening for requests
app.listen(PORT, () => {
    console.log('listening on port', PORT)
});