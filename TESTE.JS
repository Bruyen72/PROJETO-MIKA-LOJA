$(document).ready(function(){
    $('.produtos_slides').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="prev.png" alt="Previous"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="next.png" alt="Next"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});

function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('show');
}
