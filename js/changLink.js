/* call back function example
$('body').hide().fadeIn(4000, function(){alert("done")}); 
how jquery event works*/

$('h1').click(function(){
    $(this).text("Hide the image");
    $('img').hide();
    $('body').children('p').slideToggle();
}); //similar function to addEventListener

// play with jQuery's .each function

//update image link
$('img').each(function(){
    var path = $(this).attr('src');
    var newpath = "img/" + path;
    $(this).attr('src', newpath);
});
$('a').each(function(){
    $(this).attr('href', "https://www.google.com/");
});