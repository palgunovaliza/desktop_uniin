$('.img_menu').on('click', function(e) {

  e.preventDefault();
  $('#menuburger').toggleClass("active");
  $('.header').toggleClass("active");
});

const staticHeightSquareLeft = () => {
    const contentHeight = document.getElementsByTagName('html')[0].scrollHeight;
    const footerHeight = document.querySelector('.footer').clientHeight;
    const squareLeft = document.querySelector('.square_left');

    squareLeft.style.minHeight = `${ contentHeight - footerHeight }px`;
}

staticHeightSquareLeft()

const like = document.querySelectorAll('.like-js')

for (let i = 0; i !== like.length; i++) {
    let statusLike = true;

    like[i].onclick = () => {
        if (statusLike) {
            like[i].setAttribute('src', 'img/heart_active.svg');
            statusLike = false
        } else {
            like[i].setAttribute('src', 'img/heart.svg');
            statusLike = true
        }
    }
}

$(document).ready(function () {
    $('.product-card-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        autoplaySpeed: 3000,
        asNavFor: '.product-card-navigation-slider',
        cssEase: 'linear'
    });
    $('.product-card-navigation-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.product-card-slider',
        arrows: false,
        dots: false,
        focusOnSelect: true
    });
});
