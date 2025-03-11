const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', ()=>{
    menu.classList.toggle('menu-active');
    hamburger.classList.toggle('hamburger-active');
});

$(document).ready(function () {
  $('.carousel__inner').slick({
    dots: false,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/chevron-left.png" alt="left"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/chevron-right.png" alt="right"></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          dots: true,
          arrows: false
        }
      }
    ]
  });
});
