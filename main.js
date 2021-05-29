var owl = $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    // autoplay: true,
    // autoplayTimeout: 4000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

$('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');
})

$('.customPrevBtn').click(function() {
    owl.trigger('prev.owl.carousel');
})