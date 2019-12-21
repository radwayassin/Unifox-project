$(document).ready(function(){
    'use strict';

//sticky nav 

    $(window).scroll(function(){
        var sc =$(this).scrollTop();
        if(sc > 50){  // Show Sticky Navbar
            $('.navbar').addClass('green');
        }
        else {
            $('.navbar').removeClass('green');
        }
        if( sc > 1600) {
            $('.time').countTo(); // Run Count To Plugin
            $(window).off('scroll');
        }
        if ( sc > 500) { // Fade The Scroll Top Btn
            
            $('.scrollTop').fadeIn();
            
        } else {
            
            $('.scrollTop').fadeOut();
            
        }
        
    });
// portfolio filter

    $('.buttons ul li').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('filter')==='all'){
            $('.images .col-md-6').fadeIn();
        } else{
            $('.images .col-md-6').fadeOut();
            $($(this).data('filter')).parent().fadeIn();
        }
    });

// progress

$(function(){
    $('.circlechart').circlechart();
});

//owl carousel

    $(".owl-carousel").owlCarousel({
            autoplay: true,
            autoplayHoverPause: true,
            lazyLoad:true,
            margin:5,
            stagePadding:5,
            responsiveClass:true,
            responsive:{
                0:{
                  items:1,
                  nav:true,
                  loop:true
              },
              445:{
                items:2,
                nav:true,
                loop:true
            },
              768:{
                  items:3,
                  nav:false,
                  loop:true
              },
              992:{
                  items:4,
                  nav:true,
                  loop:true
              }}
        });
// youtube popup

    $('.play-video').magnificPopup({
            type: 'iframe'
    });

// Scroll to Top
$('.scrollTop').click(function(){
    $('body,html').animate({
        scrollTop : 0
    },500);
});

//smooth scroll

    $('.nav-item a').click(function(){
        
        $('body,html').animate({
            scrollTop : $($(this).attr('href')).offset().top - 80
        });
    });

});