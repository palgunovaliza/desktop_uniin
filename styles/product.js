$('.img_menu').on('click', function(e) {

  e.preventDefault();
  $('#menuburger').toggleClass("active");
  $('.header').toggleClass("active");
});
