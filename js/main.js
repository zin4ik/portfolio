jQuery(document).ready(function() {
  // ф-ция печатной машинки
  $(function() {
    $(".text-typing").typeIt({
      strings: [
        "Привіт. Я front end development. Створюю WEB сайти на замовлення, виправляю, змінюю та доповнюю існуючі сайти."
      ] // строки выводимые в печать
    });
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

  //slick slider
  $(".carusel_descr").slick({
    centerMode: true,
    centerPadding: "10px",
    speed: 100,
    slidesToShow: 1,
    adaptiveHeight: false,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          // centerPadding: "40px",
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1
        }
      }
    ]
  });
});
