jQuery(document).ready(function($) {

    // Splash Screen Animation 
    setTimeout(function(){
        jQuery('.splash-screen-wrapper').addClass('scrolled');
    }, 1000)

    // Page design after 2 sec 
    setTimeout(function(){
        jQuery('.page-slides').addClass('visible');
    }, 2000)

    // page slide 
    var swiper = new Swiper('.swiper-container', {
        on: {
            init: function () {
                    $('.highlighter').removeClass('isActive');
                    setTimeout(function(){
                        $('.swiper-slide-active .highlighter').addClass('isActive');

                    }, 3000)
                },
                slideChange: function () {
                        $('.highlighter').removeClass('isActive');
                        setTimeout(function(){
                            $('.swiper-slide-active .highlighter').addClass('isActive');
    
                        }, 1000)
                    },
        },
    });
});
