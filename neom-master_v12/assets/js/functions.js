$(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    adaptiveHeight: true,
    asNavFor: ".slider-nav",
  });
  $(".slider-nav").slick({
    slidesToShow: 1.4,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    infinite: false,
    centerMode: true,
    adaptiveHeight: true,
    focusOnSelect: true,
     
  });
 