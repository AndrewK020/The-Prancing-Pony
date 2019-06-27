// =========================================================================================================================
// API: 
// CREATE TABLE OF RESULTS
// requires a string guest
// returns an array of 10 objects of the results
// object contains: lastName, FirstName, Room
// =========================================================================================================================

function sreservation(reservation) {
    $.ajax({
        data: {

            Guest: reservation,
            page_size: 10,
            format: "jsonp",
            callback: "jsonp_callback"
        },
        url: "https://",
        method: "GET",
        dataType: "jsonp",
        jsonpCallback: 'jsonp_callback',
        contentType: 'application/json',

    }).then(function (response) {
        let result = [];
        let listArray = reservation.Guest
        listArray.forEach(element => {
            let track = {
                lastName: reservation.first_name,
                fiirstName: reservation.last_name,
                Room: reservation.Guest.Room
            }
            result.push(reservation);
        });
        console.log(result);
        createTableSong(result, reservation);
        //  reservation(result);
    });
}


}

$(this).parent('td').parent('tr').parent().children('tr.expanded').each(
    function (i) {
        $(this).remove();
    }
);