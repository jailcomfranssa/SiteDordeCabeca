
jQuery(document).ready(function ($) {

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#volta').fadeIn();
    } else {
      $('#volta').fadeOut();
    }
  });

  $('#volta').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;

  });


  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#inicio').css("background-color", "white");
      $('header h1').css("color", "black");
    } else {
      $('#inicio').css("background-color", "#5ea4bf9e");
      $('header h1').css("color", "white");

    }

  });
});

