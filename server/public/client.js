// Initializing jQuery
$(document).ready(onReady);

// Running a function with ajax (GET)
function onReady() {
    $.ajax({
        type: 'GET',
        url: '/artist'
    }).then(function (response) {
        // Looping through the response
        for (let i = 0; i < response.length; i++) {
            let artist = response[i];
            // Rendering artist array
            $('#artistTableBody').append(`
                <tr>
                    <td>${artist.name}</td>
                    <td>${artist.born}</td>
                    <td>${artist.died}</td>
                </tr>
            `);
        }
    });

    // TODO Add ajax request for /songs and display on DOM
    $.ajax( {
        type: 'GET',
        url: '/song'
    } ).then( function( response ){
        for( let i = 0; i < response.length; i++ ){
            let song = response[ i ];
            $( '#songTableBody' ).append( `
                <tr>
                    <td>${song.title}</td>
                    <td>${song.artist}</td>
                </tr>
            ` ) // end append
        } // end for
    } ) // end ajax and function
} // end onReady