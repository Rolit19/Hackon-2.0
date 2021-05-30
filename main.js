var owl = $('.owl-one').owlCarousel({
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
            items:2
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

// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:5
//         }
//     }
// })
var owl2 = $('.owl-two').owlCarousel({
    items:1,
    merge:true,
    loop:true,
    margin: 10,
    video:true,
    center: true,
    lazyLoad:false,
    videoHeight: 400,
    videoWidth: '100%',
    dots: false,
    responsive:{
        480:{
            items:1
        },
        600:{
            items:2
        },
        1000: {
            items: 6
        }
    }
})

$('.videoPrev').click(function() {
    owl2.trigger('prev.owl.carousel');
})

$('.videoNext').click(function() {
    owl2.trigger('next.owl.carousel');
})
