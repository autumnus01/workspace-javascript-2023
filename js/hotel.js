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