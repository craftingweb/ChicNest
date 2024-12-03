$(function () {
  $(".header__btn").on("click", function () {
    $(".rightside-menu").addClass("rightside-menu__active");
  });
  $(".rightside-menu__close").on("click", function () {
    $(".rightside-menu").removeClass("rightside-menu__active");
  });

  $(".top__slider").slick({
    dots: true,
    arrows: false,
    fade: true,
  });

  $(".contact-slider").slick({
    slidesToShow: 10,
    slidesToScroll: 10,
    dots: true,
    arrows: false,
  });

  var mixer = mixitup(".gallery__inner", {
    load: {
      filter: ".living",
    },
  });
});
