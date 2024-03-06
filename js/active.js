$(document) .ready(function (){

    $('.slider-active').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        navTexxt:['<i class=fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:1
            }
        }
    })


    
    $('.project-active').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        navTexxt:['<i class=fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })

       
    $('.brand-active').owlCarousel({
        loop:true,
        margin:50,
        nav:false,
        navTexxt:['<i class=fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:6
            }
        }
    })


    $('.video-popup').magnificPopup({
        type: 'iframe'
        // other options
      });

    
    })