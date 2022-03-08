
$(document).ready(function(){

    // Mobile menu display
    $("nav>ul>li:nth-child(1)").click(() => {
        $(".nav-list").slideToggle();
    });

    if ($(window).width() < 761) {
        $(".nav-list").click(() => {
                $(".nav-list").slideToggle();
            });
    };



    // Slide Show
    var index = 1;
    showSlide(index);

    // Next/Previous Control
    $(".prev").click(() => {
        showSlide(index += -1);
    });

    $(".next").click(() => {
        showSlide(index += 1);
    });

    // Dots Control
    $(".dot").eq(0).click(() => {
        showSlide(index = 1);
    });

    $(".dot").eq(1).click(() => {
        showSlide(index = 2);
    });

    $(".dot").eq(2).click(() => {
        showSlide(index = 3);
    });

    // Show Slides function
    function showSlide (n) {
        let slide = $(".slide");
        let dot = $(".dot");

        if ( n >= slide.length) {index = 0;}
        if ( n < 0) {index = slide.length-1;}

        slide.eq(n-1).toggleClass("slideActive").siblings().removeClass("slideActive");
        dot.eq(n-1).addClass("dotActive").siblings().removeClass("dotActive");
    }



    // No function Notice
    noService = () => alert("No Service Now.");
});