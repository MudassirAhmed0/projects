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
  $(".slider-for").on('afterChange',()=>{
    let container = document.querySelector('.key-activities-tabing-for-mob')
   if(
    container.classList.contains('h-1050')
   ){
     container.classList.remove('h-1050') 
      container.classList.add('h-820')

   }else{
     container.classList.remove('h-820') 
     container.classList.add('h-1050')
   }
  })