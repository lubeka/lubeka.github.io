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
        slidesToShow: 3
    });
});