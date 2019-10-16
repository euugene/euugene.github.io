$(function (){

	$('.scroll-down-btn').on('click', function(e) {
	  e.preventDefault(); // Запрещаем переход по ссылке
	  var target= $(this).attr('href'), // Берем значение из ссылки как цель id="second-screen"
	        destination= $(target).offset().top; // Ищем верхнюю координату у нашей цели

	  $('body,html').animate({scrollTop: destination}, 500); // Плавно проматываем до цели
	});

    $('#changer-language').on('click', function(e){
        e.preventDefault();
        $('.change-drop').toggleClass('active');
    })


    $('#menu-opener').on('click', function(e){
        e.preventDefault();
        $('.nav-mobile').addClass('active');
    })
    $('#menu-closer').on('click', function(e){
        e.preventDefault();
        $('.nav-mobile').removeClass('active');
    })


    $('#pabler-opener').on('click', function(e){
        e.preventDefault();
        $('.mob-show').toggleClass('active');
    })
    $('#our-service-opener').on('click', function(e){
        e.preventDefault();
        $('.our-show').toggleClass('active');
    })
    $('#advan-opener').on('click', function(e){
        e.preventDefault();
        $('.advan-show').toggleClass('active');
    })



	$('.other-slide').owlCarousel({
        loop: true,
        margin:0,
        nav:true,
        smartSpeed:500,
        dots:false,
        // navText: ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
        navText: ["<img src='images/right-arrow.svg'>","<img src='images/right-arrow.svg'>"],
        responsive:{
            0:{
                items:1
            },
            769:{
                items:1
            },
            992:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });

    $('.support-slide').owlCarousel({
        loop: false,
        margin:0,
        nav:true,
        smartSpeed:500,
        dots:false,
        // navText: ["<img src='images/slide-left.png'>","<img src='images/slide-right.png'>"],
        navText: ["<img src='images/right-arrow.svg'>","<img src='images/right-arrow.svg'>"],
        responsive:{
            0:{
                items:1
            },
            769:{
                items:1
            },
            992:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });

    $('.rate-cart-rov.for-mobile').owlCarousel({
        loop: false,
        margin:0,
        nav:true,
        smartSpeed:500,
        dots:false,
        // navText: ["<img src='images/slide-left.png'>","<img src='images/slide-right.png'>"],
        navText: ["<img src='images/right-arrow.svg'>","<img src='images/right-arrow.svg'>"],
        responsive:{
            0:{
                items:1
            },
            769:{
                items:1
            },
            992:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });

    $('.about-slide').owlCarousel({
        loop: false,
        margin:0,
        nav:true,
        smartSpeed:500,
        dots:false,
        // navText: ["<img src='images/slide-left.png'>","<img src='images/slide-right.png'>"],
        navText: ["<img src='images/right-arrow.svg'>","<img src='images/right-arrow.svg'>"],
        responsive:{
            0:{
                items:1
            },
            769:{
                items:1
            },
            992:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });

});