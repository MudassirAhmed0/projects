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
  $(".slider-for").on('afterChange',(event, slick, currentSlide, nextSlide)=>{
     
    let container = document.querySelector('.key-activities-tabing-for-mob')
   if(
   currentSlide !== 0
   ){
     container.classList.remove('h-715') 
      container.classList.add('h-582')

   }else{
     container.classList.remove('h-582') 
     container.classList.add('h-715')
   }
  })