// Initializing jQuery
$(document).ready(onReady);

// Running a function with ajax
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
}