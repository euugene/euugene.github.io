// anchors
// $(".main-nav").click(function(e) {
//     e.preventDefault();
//     var aid = $(this).attr("href");
//     $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
// });
// $(".lineup-nav").click(function(e) {
//     e.preventDefault();
//     var aid = $(this).attr("href");
//     $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
// });
// $(".advantage-nav").click(function(e) {
//     e.preventDefault();
//     var aid = $(this).attr("href");
//     $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
// });
// $(".contacts-nav").click(function(e) {
//     e.preventDefault();
//     var aid = $(this).attr("href");
//     $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
// });

$(function () {
    $('.main-nav').click(function () {


        // if(!$('.menu-1').hasClass('active')){
        //     $('.menu-1').addClass('active')
        //     $('.menu-2').removeClass('active')
        //     $('.menu-3').removeClass('active')
        //     $('.menu-4').removeClass('active')
        // }
        $('html,body').animate({scrollTop: $('#firstScreen').offset().top}, 1000);
        $('.menu-1').toggleClass('active')
    });
    $('.lineup-nav').click(function () {
        $('html,body').animate({scrollTop: $('#secondScreen').offset().top}, 1000);
        $('.menu-2').toggleClass('active')
    });
    $('.advantage-nav').click(function () {
        $('html,body').animate({scrollTop: $('#thirdScreen').offset().top}, 1000);
        $('.menu-3').toggleClass('active')
    });
    $('.contacts-nav').click(function () {
        $('html,body').animate({scrollTop: $('#fourthScreen').offset().top}, 1000);
        $('.menu-4').toggleClass('active')
    });
    // $(".sliding-link").click(function(e) {
    //     e.preventDefault();
    //     var aid = $(this).attr("href");
    //     $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
    // });
//
//
//
//     // $('.about-us').click(function () {
//     //     $('html,body').animate({scrollTop: $('.team').offset().top}, 1000);
//     // });
//     // $('.contact-us-mobile').click(function () {
//     //     $(".mobile-menu").toggleClass("mobile-menu__active");
//     //     $(".menu-icon").toggleClass("clicked");
//     //     $('html,body').animate({scrollTop: $('.contact').offset().top}, 1000);
//     // });
//     // $('.contact-us').click(function () {
//     //     $('html,body').animate({scrollTop: $('.contact').offset().top}, 1000);
//     // });
//     //
//     // $('.sign-in').click(function () {
//     //     $('html,body').animate({scrollTop: $('.header').offset().top}, 1000);
//     // });
//
});
