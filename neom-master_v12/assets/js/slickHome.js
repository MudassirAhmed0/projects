// var owl = $('.owl-carousel');
// owl.owlCarousel({
//     loop:false, 
//     rewind:false,
//     margin:40, 
//     dots:false,
//     nav:true,
//     // autoplay:true,
//     lazyLoad:true,
//     responsive:{
//         0:{
//             items:1,
//             slideBy:1,
//         },
//         600:{
//             items:1.275,
//             slideBy:1,
//         },
//         1000:{
//             items:1.35, 
//             slideBy:1, 
//         },
//         1500:{
//             items:1.5, 
//             slideBy:1, 
//         },
//         1800:{
//             items:1.7, 
//             slideBy:1, 
//         },
//         2000:{
//             items:1.9, 
//             slideBy:1, 
//         },
//         2200:{
//             items:2, 
//             slideBy:1, 
//         },
//         2800:{
//             items:2.5, 
//             slideBy:1, 
//         },
//     }, 
// });



// $(".owl-carousel").owlCarousel({
//     // you can use jQuery selector
//     navText: [$('.am-next'),$('.am-prev')]
 
// });

// $('.am-next').click(function() {
//     owl.trigger('next.owl.carousel');
// })
// // Go to the previous item
// $('.am-prev').click(function() {
//     // With optional speed parameter
//     // Parameters has to be in square bracket '[]'
//     owl.trigger('prev.owl.carousel', [300]);
// })


// // owl.on('changed.owl.carousel', function(event) {
// //     setTimeout(()=>{
// //         let lastItem  = $('.owl-carousel .owl-item')[$('.owl-carousel .owl-item').length -1]
// //         let firstItem  = $('.owl-carousel .owl-item')[0]
// //         let  next =document.querySelector('.am-next')
// //         let  prev =document.querySelector('.am-prev')
// //         if(lastItem.classList.contains('active')){
// //             next.classList.remove('opacity-1')
// //             next.classList.add('opacity-[0.3]')
// //         }else{

// //             next.classList.remove('opacity-[0.3]')
// //             next.classList.add('opacity-1')
// //         }
// //         if(firstItem.classList.contains('active')){
// //             prev.classList.remove('opacity-1')
// //             prev.classList.add('opacity-[0.3]')
// //         }else{
// //             prev.classList.remove('opacity-[0.3]')
// //             prev.classList.add('opacity-1')
// //         }

// //     },500)
// // })
 

$('.slick-carousel').slick({
    dots: false,
    infinite: false,
    nav:true,
    speed: 300,
    slidesToShow: 1.275,
    slidesToScroll: 1,
    prevArrow: $('.am-prev'),
    nextArrow: $('.am-next'),
    responsive: [
      {
        breakpoint: 2500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
        breakpoint: 2000,
        settings: {
          slidesToShow: 1.7,
          slidesToScroll: 1,
        },
        breakpoint: 1600,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.175,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.09,
          slidesToScroll:1
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1.08,
          slidesToScroll:1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.055,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  const handleMouseOver= (selected)=>{
    
    if(!selected.classList.contains('slick-disabled')){
   
      const img =  selected.querySelector('img')
    
      if(img.src.includes('/assets/images/svg/arrow-left-hand.svg')){
       
        img.src='./assets/images/svg/arrow-left-hand-white.svg' 

      }
      if(img.src.includes('/assets/images/svg/arrow-right-hand.svg')){
        img.src='./assets/images/svg/arrow-right-hand-white.svg'

      }
    } 
  }
  const handleMouseLeave= (selected)=>{
    const img =  selected.querySelector('img')
    if(img.src.includes('/assets/images/svg/arrow-left-hand-white.svg')){
      img.src='./assets/images/svg/arrow-left-hand.svg'

    }
    if(img.src.includes('/assets/images/svg/arrow-right-hand-white.svg')){
      img.src='./assets/images/svg/arrow-right-hand.svg'

    }
  }