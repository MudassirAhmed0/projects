$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  infinite: false,
  fade: true,
  asNavFor: ".slider-nav",
});
$(".slider-nav").slick({
  slidesToShow: 1.4,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  dots: false,
  arrows: false,
  infinite: false,
  centerMode: true,
  focusOnSelect: true,
});

$(".slider-for.objectives").on('afterChange',(event, slick, currentSlide, nextSlide)=>{
     
  let container = document.querySelector('.containerAPna')
 if(
 currentSlide < 4 || currentSlide >5 
 ){
   container.classList.remove('h-1065') 
   container.classList.remove('h-720')
    container.classList.add('h-885')

 }
 else if(currentSlide ===4){
   container.classList.remove('h-885') 
   container.classList.remove('h-720')
   container.classList.add('h-1065')
 }
 else if(currentSlide ===5){
   container.classList.remove('h-885') 
   container.classList.remove('h-1065')
   container.classList.add('h-720')
 }
})
$(".slider-for.risks").on('afterChange',(event, slick, currentSlide, nextSlide)=>{
     
  let container = document.querySelector('.container2')
 if(
 currentSlide !==1
 ){
   container.classList.remove('h-940')  
    container.classList.add('h-820')

 }
 else{
  container.classList.remove('h-820')  
  container.classList.add('h-940')
 }
})