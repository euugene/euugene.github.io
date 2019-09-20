$('.first__btnNav').on('click', function () {
    $('.first__header-right').toggleClass('first__menu-active');
})

$(document).ready(function () {
    var margin = 0;
    $("a").click(function () {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + margin + "px"
        }, {
            duration: 1000,
            easing: "swing"
        });
        return false;
    });
});