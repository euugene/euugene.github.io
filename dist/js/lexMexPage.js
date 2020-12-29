(function ($) {
    $('.description__items-type-size').mouseover(
        function () {
            $(".description__describe-text").text("ОСНОВНЫЕ ТИПОРАЗМЕРЫ")
            $(".description__items-type-size").css('background-color', '#C02448')
        }
    )
    $('.description__items-type-size').mouseleave(
        function () {
            $(".description__describe-text").text("")
            $(".description__items-type-size").css('background-color', 'rgba(130,136,142,0.5)')
        }
    )
    $('.description__items-description').mouseover(
        function () {
            $(".description__describe-text").text("ОПИСАНИЕ")

            $(".description__items-description").css('background-color', '#C02448')
        }
    )
    $('.description__items-description').mouseleave(
        function () {
            $(".description__describe-text").text("")
            $(".description__items-description").css('background-color', 'rgba(130,136,142,0.5)')
        }
    )
    $('.description__items-expl').mouseover(
        function () {
            $(".description__describe-text").text("ЭКСПЛУАТАЦИЯ")
            $(".description__items-expl").css('background-color', '#C02448')

        }
    )
    $('.description__items-expl').mouseleave(
        function () {
            $(".description__describe-text").text("")
            $(".description__items-expl").css('background-color', 'rgba(130,136,142,0.5)')
        }
    )
    $('.description__items-construction').mouseover(
        function () {
            $(".description__describe-text").text("КОНСТРУКЦИЯ")
            $(".description__items-construction").css('background-color', '#C02448')
        }
    )
    $('.description__items-construction').mouseleave(
        function () {
            $(".description__describe-text").text("")
            $(".description__items-construction").css('background-color', 'rgba(130,136,142,0.5)')
        }
    )


    // for bottom menu


    $('.global__items-type-size').mouseover(
        function () {
            $(".global__items-type-size").css('background-color', '#C02448')
        }
    )
    $('.global__items-type-size').mouseleave(
        function () {
            $(".global__items-type-size").css('background-color', 'rgba(130,136,142,0.5)')
        }
    )
    $('.global__items-description').mouseover(
        function () {

            $(".global__items-description").css('background-color', '#C02448')
        }
    )
    $('.global__items-description').mouseleave(
        function () {
            $(".global__items-description").css('background-color', 'rgba(130,136,142,0.5)')
        }
    )
    $('.global__items-expl').mouseover(
        function () {
            $(".global__items-expl").css('background-color', '#C02448')

        }
    )
    $('.global__items-expl').mouseleave(
        function () {
            $(".global__items-expl").css('background-color', 'rgba(130,136,142,0.5)')
        }
    )
    $('.global__items-construction').mouseover(
        function () {
            $(".global__items-construction").css('background-color', '#C02448')
        }
    )
    $('.global__items-construction').mouseleave(
        function () {
            $(".global__items-construction").css('background-color', 'rgba(130,136,142,0.5)')
        }
    )
// set bg color for bottom menu after click on description menu
    $('.description__items-construction').click(function () {
        $(".global__items-construction").css('background-color', '#C02448')
    })
    $('.description__items-expl').click(function () {
        $(".global__items-expl").css('background-color', '#C02448')
    })
    $('.description__items-description').click(function () {
        $(".global__items-description").css('background-color', '#C02448')
    })
    $('.description__items-type-size').click(function () {
        $(".global__items-type-size").css('background-color', '#C02448')
    })
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
        $('#fullPageLexMex').fullpage({
            //Navigation
            scrollOverflow: true,
            autoScrolling: true,
            navigationPosition: 'left',
            // Design
            verticalCentered: false,
            //Menu
            anchors: ['firstPageLexMex', 'secondPageLexMex', 'thirdPageLexMex'],
            menu: '#lexMexMenu',

            //animations

            afterLoad: function (index, nextIndex, direction) {
                $isAnimatedFirst.addClass('animate__animated animate__fadeInDown');
                $isAnimatedFirst.eq(0).css('animation-delay', '.1s');
                $isAnimatedFirst.eq(1).css('animation-delay', '.1s');
                $isAnimatedFirst.eq(2).css('animation-delay', '.1s');
                // $isAnimatedFirstSingle.addClass('animate__animated animate__zoomIn').css('animation-delay', '1.1s');
                if(index === 'thirdPageLexMex'){
                    $('.description').css('display', 'none')
                } else if(index === 'firstPageLexMex'){
                    $('.description').css('display', 'none')
                }
                // $('.description__describe').click(function () {
                //     index === 1 ? nextIndex = 2 : nextIndex = 'thirdPageLexMex'
                //     console.log(nextIndex)
                // })
            },
            onLeave: function (index, nextIndex, direction) {
                if (index == 1 && nextIndex == 2){
                    $('.description').css('display', 'block')
                } else if (index == 2 && nextIndex == 3) {
                    $(".description").css("display", 'none')
                } else if (index == 3 && nextIndex == 2) {
                    $(".description").css("display", 'flex')
                    $('.global__items-description').css('background-color', 'rgba(130,136,142,0.5)')
                    $('.global__items-expl').css('background-color', 'rgba(130,136,142,0.5)')
                    $('.global__items-type-size').css('background-color', 'rgba(130,136,142,0.5)')

                }

            }


            //
        })
    });
})(jQuery);
// для скролла
$('#fullPageLexMex').bind('mousewheel', function(e){
    if(e.originalEvent.wheelDelta < 0 || e.originalEvent.wheelDelta > 0){
        return false
    }
    // if(e.originalEvent.wheelDelta < 0 || e.originalEvent.wheelDelta > 0) {
    //     e.stopPropagation()
    //     console.log('Down');
    //     return false;
    // }else {
    //
    //     return false;
    // }

    //prevent page fom scrolling

});


$(window).scroll(function(){
    if($('#thirdPageLexMex').scrollTop()>0)
        $('body').scrollTop(0);
});
$(document).ready(function () {
    $(".description__items-type-size").click(function () {
        $(".content-1").css("display", 'block')

        $(".content-2").css("display", 'none')
        $(".content-3").css("display", 'none')
        $(".content-4").css("display", 'none')
        $(".description").css("display", 'none')
        $(".description__items-type-size").css('background-color', '#C02448')

    })
    $(".description__items-description").click(function () {
        $(".content-2").css("display", 'block')

        $(".content-1").css("display", 'none')
        $(".content-3").css("display", 'none')
        $(".content-4").css("display", 'none')


        $(".description").css("display", 'none')

    })
    $(".description__items-expl").click(function () {
        $(".content-3").css("display", 'block')

        $(".content-1").css("display", 'none')
        $(".content-2").css("display", 'none')
        $(".content-4").css("display", 'none')


        $(".description").css("display", 'none')

    })
    $(".description__items-construction").click(function () {
        $(".content-4").css("display", 'block')

        $(".content-1").css("display", 'none')
        $(".content-3").css("display", 'none')
        $(".content-2").css("display", 'none')


        $(".description").css("display", 'none')

    })
    $(".global__items-type-size").click(function () {
        $('.global__items-description').css('background-color', 'rgba(130,136,142,0.5)')
        $('.global__items-expl').css('background-color', 'rgba(130,136,142,0.5)')
        $('.global__items-construction').css('background-color', 'rgba(130,136,142,0.5)')
        $(".content-1").css("display", 'block')

        $(".content-2").css("display", 'none')
        $(".content-3").css("display", 'none')
        $(".content-4").css("display", 'none')

    })

    $(".global__items-description").click(function () {

        $('.global__items-type-size').css('background-color', 'rgba(130,136,142,0.5)')
        $('.global__items-expl').css('background-color', 'rgba(130,136,142,0.5)')
        $('.global__items-construction').css('background-color', 'rgba(130,136,142,0.5)')
        $(".content-2").css("display", 'block')

        $(".content-1").css("display", 'none')
        $(".content-3").css("display", 'none')
        $(".content-4").css("display", 'none')


    })
    $(".global__items-expl").click(function () {
        $('.global__items-description').css('background-color', 'rgba(130,136,142,0.5)')
        $('.global__items-type-size').css('background-color', 'rgba(130,136,142,0.5)')
        $('.global__items-construction').css('background-color', 'rgba(130,136,142,0.5)')

        $(".content-3").css("display", 'block')

        $(".content-1").css("display", 'none')
        $(".content-2").css("display", 'none')
        $(".content-4").css("display", 'none')

    })
    $(".global__items-construction").click(function () {

        $('.global__items-description').css('background-color', 'rgba(130,136,142,0.5)')
        $('.global__items-expl').css('background-color', 'rgba(130,136,142,0.5)')
        $('.global__items-type-size').css('background-color', 'rgba(130,136,142,0.5)')

        $(".content-4").css("display", 'block')
        $(".content-1").css("display", 'none')
        $(".content-3").css("display", 'none')
        $(".content-2").css("display", 'none')

    })

});
