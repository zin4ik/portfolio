jQuery(document).ready(function() {
  // ф-ция печатной машинки
  $(function() {
    $(".home__txt_p").typeIt({
      strings: ["I`m web development`s."] // строки выводимые в печать
    });
  });
  //ініціалізація WOW
  $(function() {
    new WOW().init();
  });

  //плавный скрол от меню
  $("#menu").on("click", "a", function(event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id = $(this).attr("href"),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $("body,html").animate({ scrollTop: top }, 1500);
  });

  //scroll
  $(window).scroll(function() {
    if ($(window).scrollTop() > 75) {
      console.log("hello");
      $(".header__nav").css("background-color", "rgba(36, 88, 122, 0.9)");
      $(".header__link").css("color", "#ffffff");
    } else {
      $(".header__nav").css("background-color", "rgba(36, 88, 122, 0.2)");
      $(".header__link").css("color", "#333333");
    }
  });
});
