(function ($) {

    'use strict';
    var $isAnimatedFirst = $('.header-sec .is-animated'),
        $isAnimatedFirstSingle = $('.header-sec .is-animated__single'),
        $isAnimatedSecond = $('.pumps-section .is-animated'),
        $isAnimatedSecondSingle = $('.pumps-section .is-animated__single'),
        $isAnimatedThird = $('.advantages-section .is-animated'),
        $isAnimatedThirdSingle = $('.advantages-section .is-animated__single'),
        $isAnimatedFourth = $('.contacts-section .is-animated'),
        $isAnimatedFourthSingle = $('.contacts-section .is-animated__single'),



        $isAnimatedThirdOut = $('.advantages-section .is-animated-out'),
        $isAnimatedThirdOutSingle = $('.advantages-section .is-animated__single-out'),
        $isAnimatedFourthOut = $('.contacts-section .is-animated-out'),
        $isAnimatedFourthOutSingle = $('.contacts-section .is-animated__single-out');

        $(document).ready(function () {
        $('#fullPage').fullpage({
            scrollOverflow: 'true',
            //Navigation
            autoScrolling: true,
            // navigation: true,
            navigationPosition: 'left',
            // Design
            verticalCentered: false,
            //Menu
            anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
            menu: '#menu',

            //animations

            afterLoad: function (index, nextIndex, direction) {
                $isAnimatedFirst.addClass('animate__animated animate__fadeInDown');
                $isAnimatedFirst.eq(0).css('animation-delay', '.1s');
                $isAnimatedFirst.eq(1).css('animation-delay', '.1s');
                $isAnimatedFirst.eq(2).css('animation-delay', '.1s');

            },
            onLeave: function (index, nextIndex, direction) {

                // first animation
                if (index == 1 && nextIndex == 2) {
                    $isAnimatedSecond.addClass('animate__animated animate__fadeInUp');
                    $isAnimatedSecond.eq(0).css('animation-delay', '.1s');
                    $isAnimatedSecond.eq(1).css('animation-delay', '.1s');
                    $isAnimatedSecond.eq(2).css('animation-delay', '.1s');
                    $isAnimatedSecondSingle.addClass('animated rollIn').css('animation-delay', '.1s');


                }
                // second animation
                else if ((index == 1 || index == 2) && nextIndex == 3) {
                    $isAnimatedThird.eq(0).addClass('animate__animated animate__fadeIn').css('animation-delay', '.6s');
                    $isAnimatedThird.eq(1).addClass('animate__animated animate__fadeIn').css('animation-delay', '.6s');
                    $isAnimatedThird.eq(2).addClass('animate__animated animate__fadeIn').css('animation-delay', '1.2s');
                    $isAnimatedThird.eq(3).addClass('animate__animated animate__fadeIn').css('animation-delay', '.6s');
                    $isAnimatedThird.eq(4).addClass('animate__animated animate__fadeIn').css('animation-delay', '1.2s');
                    $isAnimatedThird.eq(5).addClass('animate__animated animate__fadeIn').css('animation-delay', '1.8s');
                    $isAnimatedThirdSingle.addClass('animate__animated bounceInDown').css('animation-delay', '1.2s');
                } else if ((index == 1 || index == 2 || index == 3) && nextIndex == 4) {
                    $isAnimatedFourth.addClass('animated zoomIn').css('animation-delay', '.6s');
                    $isAnimatedFourthSingle.addClass('animated lightSpeedIn').css('animation-delay', '1.2s');
                    $isAnimatedFourthSingle.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                        $(this).removeClass('lightSpeedIn').addClass('zoomOutDown');
                    });
                } else if (index == 3  && nextIndex == 2)  {
                    $isAnimatedThirdOut.addClass('animate__animated animate__fadeOutDown');
                    $isAnimatedThirdOut.eq(0).css('animation-delay', '1.1s');
                    $isAnimatedThirdOut.eq(1).css('animation-delay', '.1s');
                    $isAnimatedThirdOut.eq(2).css('animation-delay', '.1s');
                    $isAnimatedThirdOutSingle.addClass('animated rollIn').css('animation-delay', '.1s');
                }
            }
        })
    });
})(jQuery);
