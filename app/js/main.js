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

  $(".article-slider__box").slick({
    dots: true,
    prevArrow:
      '<button><img class="blog-arrow arrow-back" src="images/arrow-back.svg"></img></button>',
    nextArrow:
      '<button><img class="blog-arrow arrow-next" src="images/arrow-next.svg"></img></button>',
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
