function fadeToSolidNavbar(){
    const navEl = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if(window.scrollY > 56) {
            navEl.classList.add('navbar-scrolled');
        } else if(window.scrollY < 56) {
            navEl.classList.remove('navbar-scrolled');
        }
    });
}

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        autoplayHoverPause: true,
        loop:true,
        autoplay: true,
        autoplaySpeed: 1000,
        autoplayTimeout: 3000,
        margin:10,
        dots: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:false,
            }
        }
    })
  });