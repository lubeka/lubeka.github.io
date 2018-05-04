$(document).ready(function() {
    $('#fullpage').fullpage({
        navigation: true,
        anchors:['one', 'two', 'three'],
        menu: '#menu',
        responsiveWidth: 670,
        responsiveHeight: 520,
        responsiveSlides: true,

        dragAndMove: true,
    });

    $('.work--slider').slick({
        slidesToShow: 3,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});