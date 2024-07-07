$(document).ready(function(){
    $('.carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>'
    });

    $('.produtos_slides').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="direitobotao.png" width="30" height="30" alt="Previous"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="esquerdabotao.png" width="30" height="30" alt="Next"></button>'
    });

    function adjustSlidesToShow() {
        var windowWidth = $(window).width();
        if (windowWidth < 768) {
            $('.produtos_slides').slick('slickSetOption', 'slidesToShow', 1, true);
        } else {
            $('.produtos_slides').slick('slickSetOption', 'slidesToShow', 3, true);
        }
    }

    adjustSlidesToShow();

    $(window).resize(function() {
        adjustSlidesToShow();
    });
});

function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('show');
}
// Verificar se o jQuery está carregado
if (typeof jQuery !== 'undefined') {
    console.log('jQuery está carregado');
} else {
    console.log('jQuery não está carregado');
}

// Verificar se Slick Carousel está funcionando
if ($('.carousel').hasClass('slick-initialized')) {
    console.log('Slick Carousel está funcionando');
} else {
    console.log('Slick Carousel não está funcionando');
}

