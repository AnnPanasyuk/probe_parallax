$(document).scroll(function() {

    redrawDotNav();

});

$("body").on("click",".text-ct a",function(){var t=$($(this).attr("href")).offset().top;return $("html,body").animate({scrollTop:t},800),!1});

/* Set navigation dots to an active state as the user scrolls */
function redrawDotNav(){
    var section1Top =  0;
    // The top of each section is offset by half the distance to the previous section.
    var section2Top =  $('#the-frameless-parachute').offset().top -
        (
            (
                $('#over-the-english-channel').offset().top - $('#the-frameless-parachute').offset().top
            )
        / 2);
    var section3Top =  $('#over-the-english-channel').offset().top - (($('#about').offset().top - $('#over-the-english-channel').offset().top) / 2);
    var section4Top =  $('#about').offset().top - (($(document).height() - $('#about').offset().top) / 2);;
    $('.dots button').removeClass('btn-active');
    if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
        $('.dots .btn-1').addClass('btn-active');
    } else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
        console.log("scroll2Top < section3Top");
        $('.dots .btn-2').addClass('btn-active');
    } else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top){
        $('.dots .btn-3').addClass('btn-active');
    } else if ($(document).scrollTop() >= section4Top){
        $('.dots .btn-4').addClass('btn-active');
    }
}
