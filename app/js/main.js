$(function () {
  $(".header__btn").on("click", function () {
    $(".rightside-menu").addClass("rightside-menu__active");
  });
  $(".rightside-menu__close").on("click", function () {
    $(".rightside-menu").removeClass("rightside-menu__active");
  });
});
