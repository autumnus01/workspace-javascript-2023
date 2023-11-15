//hotel registration ------ store in an object
var test = {
    hotelname: "Marriot",
    room: 450,
    booked: 123,
    display: function(){
        return this.hotelname;
    }

};

//Access the properties / change the properties
console.log(test.hotelname);
console.log(test.booked);
test.booked = 144;
console.log(test.booked);

//Start the hotel reservation
var guestgroup = [];
function reservation() {
    //Get the values from the form, and put it in an object

    // Practice -- complete object
    var guest = {
        name: $('#name').val(),
        numberofGuest: $('#num').val(),
        checkIn: $('#checkin').val(),
        checkOut: $('#checkout').val(),
        roomType: $('#room').val()

    };

    guestgroup.push(guest);
    console.log(guest);
    alert("Thank you for your reservation");
}
function displayList(){
    $('#guestlist').html("");
    $('#guestlist').append("<table>");
    for(var i in guestgroup){
        $('#guestlist').append("<tr><td>" + guestgroup[i].name + "</td>");
        $('#guestlist').append("<td>" + guestgroup[i].numberofGuest + "</td>");
        $('#guestlist').append("<td>" + guestgroup[i].checkIn + "</td>");
        $('#guestlist').append("<td>" + guestgroup[i].checkOut + "</td>");
        $('#guestlist').append("<td>" + guestgroup[i].roomType + "</td></tr>");
        
    }
    $('#guestlist').append("</table>");
}


// Register the event handler
$('#submit').click(reservation);
$('#lists').click(displayList);