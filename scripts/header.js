var header = $('.header'),
    headerPosition = -80;


$('.button').click(function(){
    if (headerPosition == -80) {
        headerPosition = 0;
        header.css("top", headerPosition + "px")
    } else {
        headerPosition = -80;
        header.css("top", headerPosition + "px")
    }
})

$('.js-scroll-trigger').click(function() {
    var scrollName = $(this).attr('data-scroll'),
        scrollElem = $(scrollName),
        scrollTop = scrollElem.offset().top-169;
 
    $('html, body').animate({
       scrollTop: scrollTop
    }, 500);
 });

 $('.js-scroll-trigger-header').click(function() {
    var scrollName = $(this).attr('data-scroll'),
        scrollElem = $(scrollName),
        scrollTop = scrollElem.offset().top-169-80;
    
        headerPosition = 0;
        header.css("top", headerPosition + "px")

    $('html, body').animate({
       scrollTop: scrollTop
    }, 500);
 });