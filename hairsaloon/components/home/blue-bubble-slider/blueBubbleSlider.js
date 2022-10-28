import { useEffect } from "react";
import Image from "next/image";
import audacious from "../../../assets/images/audacious.svg";
import compelling from "../../../assets/images/compelling.svg";
import inspirational from "../../../assets/images/inspirational.png";
import actionable from "../../../assets/images/actionable.svg";
import member1 from "../../../assets/images/team/member1.jpg";
import member2 from "../../../assets/images/team/member2.jpg";
import member3 from "../../../assets/images/team/member3.jpg";
import member4 from "../../../assets/images/team/member4.jpg";

function BlueBubbleSlider() {
  let start = false;

  let bool = false;
  var slideNumber = 1;

  // const myInterval = () => {
  //   if (bool == false) {
  //     slideNumber = slideNumber !== 4 ? slideNumber + 1 : 1;
  //     slide();
  //   }
  // };
  useEffect(() => {
    const startCarousel = () => {
      let el = document.querySelector(".myCarousel");
      var rect = el.getBoundingClientRect();
      if (bool !== true) {
        if (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <=
            (window.innerHeight ||
              document.documentElement
                .clientHeight) /* or $(window).height() */ &&
          rect.right <=
            (window.innerWidth ||
              document.documentElement.clientWidth) /* or $(window).width() */
        ) {
          start = true;
        }
      }
      // if (start) {
      //   setInterval(myInterval, 6000);
      //   window.removeEventListener("scroll", startCarousel);
      // }
    };
    window.addEventListener("scroll", startCarousel);

    return () => {
      window.removeEventListener("scroll", startCarousel);
    };
  }, []);

  // const slide = (slideNum) => {
  //   slideNumber = slideNum ? slideNum : slideNumber;
  //   const nav = document.querySelector(".slideNav");
  //   const balls = document.querySelectorAll(".nav-ball");
  //   const slides = document.querySelectorAll(".slide");
  //   clearInterval(myInterval);
  //   slides.forEach((slide) => {
  //     slide.classList.add("hidden");
  //     slide.classList.remove("slide-active");
  //   });
  //   switch (slideNum ? slideNum : slideNumber) {
  //     case 1:
  //       nav.classList.add("gradient1");
  //       nav.classList.remove("gradient2");
  //       nav.classList.remove("gradient3");
  //       nav.classList.remove("gradient4");

  //       slides[0].classList.remove("hidden");
  //       slides[0].classList.add("slide-active");

  //       balls[1].classList.remove("carouselcircleBlue");
  //       balls[2].classList.remove("carouselcircleBlue");
  //       balls[3].classList.remove("carouselcircleBlue");
  //       balls[1].classList.add("bg-[#bfbdb9]");
  //       balls[2].classList.add("bg-[#bfbdb9]");
  //       balls[3].classList.add("bg-[#bfbdb9]");
  //       break;
  //     case 2:
  //       nav.classList.remove("gradient1");
  //       nav.classList.add("gradient2");
  //       nav.classList.remove("gradient3");
  //       nav.classList.remove("gradient4");

  //       slides[1].classList.remove("hidden");
  //       slides[1].classList.add("slide-active");

  //       balls[1].classList.add("carouselcircleBlue");
  //       balls[1].classList.remove("bg-[#bfbdb9]");
  //       balls[2].classList.remove("carouselcircleBlue");
  //       balls[2].classList.add("bg-[#bfbdb9]");
  //       balls[3].classList.remove("carouselcircleBlue");
  //       balls[3].classList.add("bg-[#bfbdb9]");
  //       break;
  //     case 3:
  //       nav.classList.remove("gradient1");
  //       nav.classList.remove("gradient2");
  //       nav.classList.add("gradient3");
  //       nav.classList.remove("gradient4");

  //       slides[2].classList.remove("hidden");
  //       slides[2].classList.add("slide-active");

  //       balls[1].classList.add("carouselcircleBlue");
  //       balls[1].classList.remove("bg-[#bfbdb9]");
  //       balls[2].classList.add("carouselcircleBlue");
  //       balls[2].classList.remove("bg-[#bfbdb9]");
  //       balls[3].classList.remove("carouselcircleBlue");
  //       balls[3].classList.add("bg-[#bfbdb9]");
  //       break;
  //     case 4:
  //       nav.classList.remove("gradient1");
  //       nav.classList.remove("gradient2");
  //       nav.classList.remove("gradient3");
  //       nav.classList.add("gradient4");

  //       slides[3].classList.remove("hidden");
  //       slides[3].classList.add("slide-active");

  //       balls[1].classList.add("carouselcircleBlue");
  //       balls[1].classList.remove("bg-[#bfbdb9]");
  //       balls[2].classList.add("carouselcircleBlue");
  //       balls[2].classList.remove("bg-[#bfbdb9]");
  //       balls[3].classList.add("carouselcircleBlue");
  //       balls[3].classList.remove("bg-[#bfbdb9]");

  //       break;
  //   }
  // };

  const stopCarousel = () => {
    console.log("stopCarousel called");
    bool = true;
  };
  const startTheCarousel = () => {
    console.log("startTheCarousel called");
    setTimeout(() => {
      bool = false;
    }, 30000);
  };


  useEffect(()=> {
    
var slideNumber = 0
// const slide = (slideNum) => {
//     console.log("called");
//     slideNumber = slideNum ? slideNum : slideNumber
//     const nav = document.querySelector('.slideNav')
//     const balls = document.querySelectorAll('.ssl > span')
//     console.log("ablls",balls);
//     const slides = document.querySelectorAll('.slide')
//     clearInterval(myInterval)
//     slides.forEach(slide => {
//         slide.classList.add('hidden')
//         slide.classList.remove('slide-active')
//     })
//     switch (slideNum ? slideNum : slideNumber) {
//         case 1:
//             nav.classList.add('gradient1')
//             nav.classList.remove('gradient2')
//             nav.classList.remove('gradient3')
//             nav.classList.remove('gradient4')

//             slides[0].classList.remove('hidden')
//             slides[0].classList.add('slide-active')

//             balls[1].classList.remove('carouselcircleBlue')
//             balls[2].classList.remove('carouselcircleBlue')
//             balls[3].classList.remove('carouselcircleBlue')
//             balls[1].classList.add('bg-[#bfbdb9]')
//             balls[2].classList.add('bg-[#bfbdb9]')
//             balls[3].classList.add('bg-[#bfbdb9]')
//             break;
//         case 2:
//             nav.classList.remove('gradient1')
//             nav.classList.add('gradient2')
//             nav.classList.remove('gradient3')
//             nav.classList.remove('gradient4')

//             slides[1].classList.remove('hidden')
//             slides[1].classList.add('slide-active')

//             balls[1].classList.add('carouselcircleBlue')
//             balls[1].classList.remove('bg-[#bfbdb9]')
//             balls[2].classList.remove('carouselcircleBlue')
//             balls[2].classList.add('bg-[#bfbdb9]')
//             balls[3].classList.remove('carouselcircleBlue')
//             balls[3].classList.add('bg-[#bfbdb9]')
//             break;
//         case 3:
//             nav.classList.remove('gradient1')
//             nav.classList.remove('gradient2')
//             nav.classList.add('gradient3')
//             nav.classList.remove('gradient4')

//             slides[2].classList.remove('hidden')
//             slides[2].classList.add('slide-active')

//             balls[1].classList.add('carouselcircleBlue')
//             balls[1].classList.remove('bg-[#bfbdb9]')
//             balls[2].classList.add('carouselcircleBlue')
//             balls[2].classList.remove('bg-[#bfbdb9]')
//             balls[3].classList.remove('carouselcircleBlue')
//             balls[3].classList.add('bg-[#bfbdb9]')
//             break;
//         case 4:
//             nav.classList.remove('gradient1')
//             nav.classList.remove('gradient2')
//             nav.classList.remove('gradient3')
//             nav.classList.add('gradient4')

//             slides[3].classList.remove('hidden')
//             slides[3].classList.add('slide-active')

//             balls[1].classList.add('carouselcircleBlue')
//             balls[1].classList.remove('bg-[#bfbdb9]')
//             balls[2].classList.add('carouselcircleBlue')
//             balls[2].classList.remove('bg-[#bfbdb9]')
//             balls[3].classList.add('carouselcircleBlue')
//             balls[3].classList.remove('bg-[#bfbdb9]')

//             break;

//     }
// }

// let start = false

// let bool = false;

// const myInterval = () => {
//     if (bool == false) {
//         slideNumber = slideNumber !== 4 ? slideNumber + 1 : 1
//         slide()
//     }
// }

// const startCarousel = () => {
//     let el = document.querySelector('.myCarousel')
//     var rect = el.getBoundingClientRect();
//     if (bool !== true) {
//         if (
//             rect.top >= 0 &&
//             rect.left >= 0 &&
//             rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
//             rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
//         ) {
//             start = true
//         }
//     }
//     if (start) {

//         setInterval(myInterval, 6000)
//         window.removeEventListener('scroll', startCarousel)
//     }
// }

// window.addEventListener('scroll', startCarousel)

// const stopCarousel = () => {
//     bool = true;
// }
// const startTheCarousel = () => {
//     setTimeout(
//         () => {
//             bool = false;
//         }
//         , 30000)
// }


let container = document.getElementById('carouselContainer')

let btnLeft = document.getElementById('carouselBtnLeft')
let btnRight = document.getElementById('carouselBtnRight') 

let circles = document.querySelectorAll('.ssl > span')

let firstCircleInView = 0
let lastCircleInView = 8
let totalCircles = circles.length
let circleClassesForShowingRightEdge = [
    [ 
      "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute","z-10", "sm:text-[22px]" ,"text-[14px]","sm:w-[57px]", "sm:h-[57px]" ,"w-[40px]", "h-[40px]", "sm:top-[93px]" ,"top-[50px]" ,"xl:left-[103px]", "beech:left-[40px]", "2xl:left-[166px]" ,"md:left-[10px]", "sm:left-[-5px]",
    ] ,
    [
      "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute","z-10","sm:text-[22px]" ,"text-[14px]","sm:w-[57px]", "sm:h-[57px]" ,"w-[40px]", "h-[40px]", "sm:top-[203px]", "top-[95px]", "beech:left-[135px]", "xl:left-[219px]", "2xl:left-[300px]", "md:left-[80px]",  "left-[35px]"
    ],
    [
      "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute","z-10","sm:text-[22px]" ,"text-[14px]","sm:w-[57px]", "sm:h-[57px]" ,"w-[40px]", "h-[40px]", "sm:top-[270px]", "top-[126px]", "beech:left-[240px]", "xl:left-[345px]", "2xl:left-[440px]", "md:left-[168px]", "sm:left-[115px]", "left-[79px]"
    ],
    [
      "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute","z-10","sm:text-[22px]" ,"text-[14px]","sm:w-[57px]", "sm:h-[57px]" ,"w-[40px]", "h-[40px]", "sm:top-[312px]", "top-[142px]" ,"beech:left-[375px]", "xl:left-[495px]" ,"2xl:left-[608px]", "md:left-[290px]", "sm:left-[230px]", "left-[130px]"
    ],
    [
      "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute","z-10","sm:text-[22px]" ,"text-[14px]","sm:w-[57px]", "sm:h-[57px]" ,"w-[40px]", "h-[40px]", "sm:top-[312px]", "top-[142px]" ,"beech:right-[375px]", "xl:right-[495px]" ,"2xl:right-[608px]", "md:right-[290px]", "sm:right-[230px]", "right-[130px]"
    ],
    [
      "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute","z-10","sm:text-[22px]" ,"text-[14px]","sm:w-[57px]", "sm:h-[57px]" ,"w-[40px]", "h-[40px]", "sm:top-[270px]", "top-[126px]", "beech:right-[240px]", "xl:right-[345px]", "2xl:right-[440px]", "md:right-[168px]", "sm:right-[115px]", "right-[79px]"
    ],
    [
      "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute","z-10","sm:text-[22px]" ,"text-[14px]","sm:w-[57px]", "sm:h-[57px]" ,"w-[40px]", "h-[40px]", "sm:top-[203px]", "top-[95px]", "beech:right-[135px]", "xl:right-[219px]", "2xl:right-[300px]", "md:right-[80px]",  "right-[35px]"
    ],
    [ 
     "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute","z-10","sm:text-[22px]" ,"text-[14px]","sm:w-[57px]", "sm:h-[57px]" ,"w-[40px]", "h-[40px]", "sm:top-[93px]" ,"top-[50px]" ,"xl:right-[103px]", "beech:right-[40px]", "2xl:right-[166px]" ,"md:right-[10px]", "sm:right-[-5px]", "right-0"
  ] ,
    [ 
     "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute","z-10","sm:text-[22px]" ,"text-[14px]","sm:w-[57px]", "sm:h-[57px]" ,"w-[40px]", "h-[40px]", "sm:top-[-28.5px]" ,"top-[-20px]" ,"xl:right-[36px]", "beech:right-[-1px]", "2xl:right-[85px]" ,"md:right-[-13px]", "sm:right-[-20px]", "right-[-13px]",  
  ] ,
 ]
let circleClassesForShowingLeftEdge = [
    [ 
        "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute", "z-10","sm:text-[22px]" ,"text-[14px]","sm:w-[57px]", "sm:h-[57px]" ,"w-[40px]", "h-[40px]", "sm:top-[-28.5px]" ,"top-[-20px]" ,"xl:left-[36px]", "beech:left-[-1px]", "2xl:left-[85px]" ,"md:left-[-13px]", "sm:left-[-20px]", "left-[-13px]",  
     ] ,
    [ 
      "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute","z-10", "sm:text-[22px]" ,"text-[14px]","sm:w-[57px]", "sm:h-[57px]" ,"w-[40px]", "h-[40px]", "sm:top-[93px]" ,"top-[50px]" ,"xl:left-[103px]", "beech:left-[40px]", "2xl:left-[166px]" ,"md:left-[10px]", "sm:left-[-5px]",
    ] ,
    [
      "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute","z-10","sm:text-[22px]" ,"text-[14px]","sm:w-[57px]", "sm:h-[57px]" ,"w-[40px]", "h-[40px]", "sm:top-[203px]", "top-[95px]", "beech:left-[135px]", "xl:left-[219px]", "2xl:left-[300px]", "md:left-[80px]",  "left-[35px]"
    ],
    [
      "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute","z-10","sm:text-[22px]" ,"text-[14px]","sm:w-[57px]", "sm:h-[57px]" ,"w-[40px]", "h-[40px]", "sm:top-[270px]", "top-[126px]", "beech:left-[240px]", "xl:left-[345px]", "2xl:left-[440px]", "md:left-[168px]", "sm:left-[115px]", "left-[79px]"
    ],
    [
      "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute","z-10","sm:text-[22px]" ,"text-[14px]","sm:w-[57px]", "sm:h-[57px]" ,"w-[40px]", "h-[40px]", "sm:top-[312px]", "top-[142px]" ,"beech:left-[375px]", "xl:left-[495px]" ,"2xl:left-[608px]", "md:left-[290px]", "sm:left-[230px]", "left-[130px]"
    ],
    [
      "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute","z-10","sm:text-[22px]" ,"text-[14px]","sm:w-[57px]", "sm:h-[57px]" ,"w-[40px]", "h-[40px]", "sm:top-[312px]", "top-[142px]" ,"beech:right-[375px]", "xl:right-[495px]" ,"2xl:right-[608px]", "md:right-[290px]", "sm:right-[230px]", "right-[130px]"
    ],
    [
      "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute","z-10","sm:text-[22px]" ,"text-[14px]","sm:w-[57px]", "sm:h-[57px]" ,"w-[40px]", "h-[40px]", "sm:top-[270px]", "top-[126px]", "beech:right-[240px]", "xl:right-[345px]", "2xl:right-[440px]", "md:right-[168px]", "sm:right-[115px]", "right-[79px]"
    ],
    [
      "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute","z-10","sm:text-[22px]" ,"text-[14px]","sm:w-[57px]", "sm:h-[57px]" ,"w-[40px]", "h-[40px]", "sm:top-[203px]", "top-[95px]", "beech:right-[135px]", "xl:right-[219px]", "2xl:right-[300px]", "md:right-[80px]",  "right-[35px]"
    ],
    [ 
     "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute","z-10","sm:text-[22px]" ,"text-[14px]","sm:w-[57px]", "sm:h-[57px]" ,"w-[40px]", "h-[40px]", "sm:top-[93px]" ,"top-[50px]" ,"xl:right-[103px]", "beech:right-[40px]", "2xl:right-[166px]" ,"md:right-[10px]", "sm:right-[-5px]", "right-0"
  ] ,
    
 ]
let circleClassesForShowingBothEdges = [
    [ 
        "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute", "z-10","sm:text-[22px]" ,"text-[14px]","sm:w-[57px]", "sm:h-[57px]" ,"w-[40px]", "h-[40px]", "sm:top-[-28.5px]" ,"top-[-20px]" ,"xl:left-[36px]", "beech:left-[-1px]", "2xl:left-[85px]" ,"md:left-[-13px]", "sm:left-[-20px]", "left-[-13px]",  
     ] ,
     [ 
        "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute", "z-10", "sm:text-[22px]" ,"text-[14px]","sm:w-[57px]", "sm:h-[57px]" ,"w-[40px]", "h-[40px]", "sm:top-[93px]" ,"top-[50px]" ,"xl:left-[103px]", "beech:left-[40px]", "2xl:left-[166px]" ,"md:left-[10px]", "sm:left-[-5px]",
      ] ,
      [
        "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute","z-10","sm:text-[22px]" ,"text-[14px]","sm:w-[57px]", "sm:h-[57px]" ,"w-[40px]", "h-[40px]", "sm:top-[203px]", "top-[95px]", "beech:left-[135px]", "xl:left-[219px]", "2xl:left-[300px]", "md:left-[80px]",  "left-[35px]"
      ],
      [
        "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute","z-10","sm:text-[22px]" ,"text-[14px]","sm:w-[57px]", "sm:h-[57px]" ,"w-[40px]", "h-[40px]", "sm:top-[270px]", "top-[126px]", "beech:left-[240px]", "xl:left-[345px]", "2xl:left-[440px]", "md:left-[168px]", "sm:left-[115px]", "left-[79px]"
      ],
      [
        "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute","z-10","sm:text-[22px]" ,"text-[14px]","sm:w-[57px]", "sm:h-[57px]" ,"w-[40px]", "h-[40px]", "sm:top-[312px]", "top-[142px]" ,"beech:left-[375px]", "xl:left-[495px]" ,"2xl:left-[608px]", "md:left-[290px]", "sm:left-[230px]", "left-[130px]"
      ],
      [
        "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute","z-10","sm:text-[22px]" ,"text-[14px]","sm:w-[57px]", "sm:h-[57px]" ,"w-[40px]", "h-[40px]", "sm:top-[312px]", "top-[142px]" ,"beech:right-[375px]", "xl:right-[495px]" ,"2xl:right-[608px]", "md:right-[290px]", "sm:right-[230px]", "right-[130px]"
      ],
      [
        "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute","z-10","sm:text-[22px]" ,"text-[14px]","sm:w-[57px]", "sm:h-[57px]" ,"w-[40px]", "h-[40px]", "sm:top-[270px]", "top-[126px]", "beech:right-[240px]", "xl:right-[345px]", "2xl:right-[440px]", "md:right-[168px]", "sm:right-[115px]", "right-[79px]"
      ],
      [
        "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute","z-10","sm:text-[22px]" ,"text-[14px]","sm:w-[57px]", "sm:h-[57px]" ,"w-[40px]", "h-[40px]", "sm:top-[203px]", "top-[95px]", "beech:right-[135px]", "xl:right-[219px]", "2xl:right-[300px]", "md:right-[80px]",  "right-[35px]"
      ],
      [ 
       "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute","z-10","sm:text-[22px]" ,"text-[14px]","sm:w-[57px]", "sm:h-[57px]" ,"w-[40px]", "h-[40px]", "sm:top-[93px]" ,"top-[50px]" ,"xl:right-[103px]", "beech:right-[40px]", "2xl:right-[166px]" ,"md:right-[10px]", "sm:right-[-5px]", "right-0"
    ] ,
      [ 
       "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute","z-10","sm:text-[22px]" ,"text-[14px]","sm:w-[57px]", "sm:h-[57px]" ,"w-[40px]", "h-[40px]", "sm:top-[-28.5px]" ,"top-[-20px]" ,"xl:right-[36px]", "beech:right-[-1px]", "2xl:right-[85px]" ,"md:right-[-13px]", "sm:right-[-20px]", "right-[-13px]",  
    ] ,
 ]

 
if(circles.length >= 8 ){
    let circleClasses = [
       [ 
        "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute", "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute", "z-10", "sm:text-[22px]" ,"text-[14px]","sm:w-[57px]", "sm:h-[57px]" ,"w-[40px]", "h-[40px]", "sm:top-[93px]" ,"top-[50px]" ,"xl:left-[103px]", "beech:left-[40px]", "2xl:left-[166px]" ,"md:left-[10px]", "sm:left-[-5px]",
       ] ,
       [
        "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute", "z-10","sm:text-[22px]" ,"text-[14px]","sm:w-[57px]", "sm:h-[57px]" ,"w-[40px]", "h-[40px]", "sm:top-[203px]", "top-[95px]", "beech:left-[135px]", "xl:left-[219px]", "2xl:left-[300px]", "md:left-[80px]",  "left-[35px]"
       ],
       [
        "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute", "z-10","sm:text-[22px]" ,"text-[14px]","sm:w-[57px]", "sm:h-[57px]" ,"w-[40px]", "h-[40px]", "sm:top-[270px]", "top-[126px]", "beech:left-[240px]", "xl:left-[345px]", "2xl:left-[440px]", "md:left-[168px]", "sm:left-[115px]", "left-[79px]"
       ],
       [
        "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute", "z-10","sm:text-[22px]" ,"text-[14px]","sm:w-[57px]", "sm:h-[57px]" ,"w-[40px]", "h-[40px]", "sm:top-[312px]", "top-[142px]" ,"beech:left-[375px]", "xl:left-[495px]" ,"2xl:left-[608px]", "md:left-[290px]", "sm:left-[230px]", "left-[130px]"
       ],
       [
        "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute", "z-10","sm:text-[22px]" ,"text-[14px]","sm:w-[57px]", "sm:h-[57px]" ,"w-[40px]", "h-[40px]", "sm:top-[312px]", "top-[142px]" ,"beech:right-[375px]", "xl:right-[495px]" ,"2xl:right-[608px]", "md:right-[290px]", "sm:right-[230px]", "right-[130px]"
       ],
       [
        "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute", "z-10","sm:text-[22px]" ,"text-[14px]","sm:w-[57px]", "sm:h-[57px]" ,"w-[40px]", "h-[40px]", "sm:top-[270px]", "top-[126px]", "beech:right-[240px]", "xl:right-[345px]", "2xl:right-[440px]", "md:right-[168px]", "sm:right-[115px]", "right-[79px]"
       ],
       [
        "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute", "z-10","sm:text-[22px]" ,"text-[14px]","sm:w-[57px]", "sm:h-[57px]" ,"w-[40px]", "h-[40px]", "sm:top-[203px]", "top-[95px]", "beech:right-[135px]", "xl:right-[219px]", "2xl:right-[300px]", "md:right-[80px]",  "right-[35px]"
       ],
       [ 
        "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute", "z-10","sm:text-[22px]" ,"text-[14px]","sm:w-[57px]", "sm:h-[57px]" ,"w-[40px]", "h-[40px]", "sm:top-[93px]" ,"top-[50px]" ,"xl:right-[103px]", "beech:right-[40px]", "2xl:right-[166px]" ,"md:right-[10px]", "sm:right-[-5px]", "right-0"
     ] ,
       [ 
        "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute", "z-10","sm:text-[22px]" ,"text-[14px]","sm:w-[57px]", "sm:h-[57px]" ,"w-[40px]", "h-[40px]", "sm:top-[-28.5px]" ,"top-[-20px]" ,"xl:right-[36px]", "beech:right-[-1px]", "2xl:right-[85px]" ,"md:right-[-13px]", "sm:right-[-20px]", "right-[-13px]",  
     ] ,
    ]
    circles.forEach((circle,circleIndex)=>{
        if(circleClasses[circleIndex]){ 
            circleClasses[circleIndex].forEach(circleClass=> circle.classList.add(circleClass))

        }else{
            circle.classList.add('hidden')
        }
    })
}else if(circles.length === 7 ){
    let circleClasses = [
       [ 
         "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute","z-10", "sm:text-[22px]" ,"text-[14px]","sm:w-[57px]", "sm:h-[57px]" ,"w-[40px]", "h-[40px]", "sm:top-[93px]" ,"top-[50px]" ,"xl:left-[103px]", "beech:left-[40px]", "2xl:left-[166px]" ,"md:left-[10px]", "sm:left-[-5px]",
       ] ,
       [
        "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute", "z-10","sm:text-[22px]" ,"text-[14px]","sm:w-[57px]", "sm:h-[57px]" ,"w-[40px]", "h-[40px]", "sm:top-[203px]", "top-[95px]", "beech:left-[135px]", "xl:left-[219px]", "2xl:left-[300px]", "md:left-[80px]",  "left-[35px]"
       ],
       [
        "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute", "z-10","sm:text-[22px]" ,"text-[14px]","sm:w-[57px]", "sm:h-[57px]" ,"w-[40px]", "h-[40px]", "sm:top-[270px]", "top-[126px]", "beech:left-[240px]", "xl:left-[345px]", "2xl:left-[440px]", "md:left-[168px]", "sm:left-[115px]", "left-[79px]"
       ],
       [
        "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute", "z-10","sm:text-[22px]" ,"text-[14px]","sm:w-[57px]", "sm:h-[57px]" ,"w-[40px]", "h-[40px]", "sm:top-[316px]", "top-[142px]",   "right-[50%]", "transform"   
       ], 
       [
        "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute", "z-10","sm:text-[22px]" ,"text-[14px]","sm:w-[57px]", "sm:h-[57px]" ,"w-[40px]", "h-[40px]", "sm:top-[270px]", "top-[126px]", "beech:right-[240px]", "xl:right-[345px]", "2xl:right-[440px]", "md:right-[168px]", "sm:right-[115px]", "right-[79px]"
       ],
       [
        "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute", "z-10","sm:text-[22px]" ,"text-[14px]","sm:w-[57px]", "sm:h-[57px]" ,"w-[40px]", "h-[40px]", "sm:top-[203px]", "top-[95px]", "beech:right-[135px]", "xl:right-[219px]", "2xl:right-[300px]", "md:right-[80px]",  "right-[35px]"
       ],
       [ 
        "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute", "sm:text-[22px]" ,"text-[14px]","sm:w-[57px]", "sm:h-[57px]" ,"w-[40px]", "h-[40px]", "sm:top-[93px]" ,"top-[50px]" ,"xl:right-[103px]", "beech:right-[40px]", "2xl:right-[166px]" ,"md:right-[10px]", "sm:right-[-5px]", "right-0",
     ] ,
       
    ]
    circles.forEach((circle,circleIndex)=>{
        if(circleIndex === 3){
            circle.style.transform = "translateX(50%)"
        }
        circleClasses[circleIndex].forEach(circleClass=> circle.classList.add(circleClass))
    })
}else if(circles.length === 6 ){
    let circleClasses = [
       [ 
         "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute","z-10", "sm:text-[22px]" ,"text-[14px]","sm:w-[77px]", "sm:h-[77px]" ,"w-[50px]", "h-[50px]", "sm:top-[93px]" ,"top-[50px]" ,"xl:left-[103px]", "beech:left-[40px]", "2xl:left-[166px]" ,"md:left-[10px]", "sm:left-[-5px]",
       ] ,
       [
        "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute", "z-10","sm:text-[22px]" ,"text-[14px]","sm:w-[77px]", "sm:h-[77px]" ,"w-[50px]", "h-[50px]", "sm:top-[203px]", "top-[95px]", "beech:left-[135px]", "xl:left-[219px]", "2xl:left-[300px]", "md:left-[80px]",  "left-[35px]"
       ],
        
       [
        "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute", "z-10","sm:text-[22px]" ,"text-[14px]","sm:w-[77px]", "sm:h-[77px]" ,"w-[50px]", "h-[50px]", "sm:top-[288px]", "top-[133px]" ,"beech:left-[315px]", "xl:left-[426px]" ,"2xl:left-[520px]", "md:left-[245px]", "sm:left-[168px]", "left-[100px]"
       ],
       [
        "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute", "z-10","sm:text-[22px]" ,"text-[14px]","sm:w-[77px]", "sm:h-[77px]" ,"w-[50px]", "h-[50px]", "sm:top-[288px]", "top-[133px]" ,"beech:right-[315px]", "xl:right-[426px]" ,"2xl:right-[520px]", "md:right-[245px]", "sm:right-[168px]", "right-[100px]"
       ],
        
       [
        "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute", "z-10","sm:text-[22px]" ,"text-[14px]","sm:w-[77px]", "sm:h-[77px]" ,"w-[50px]", "h-[50px]", "sm:top-[203px]", "top-[95px]", "beech:right-[135px]", "xl:right-[219px]", "2xl:right-[300px]", "md:right-[80px]",  "right-[35px]"
       ],
       [ 
        "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute", "z-10","sm:text-[22px]" ,"text-[14px]","sm:w-[77px]", "sm:h-[77px]" ,"w-[50px]", "h-[50px]", "sm:top-[93px]" ,"top-[50px]" ,"xl:right-[103px]", "beech:right-[40px]", "2xl:right-[166px]" ,"md:right-[10px]", "sm:right-[-5px]", "right-0"
     ] ,
    ]
    circles.forEach((circle,circleIndex)=>{
        circleClasses[circleIndex].forEach(circleClass=> circle.classList.add(circleClass))
    })
}else if(circles.length === 5 ){
    let circleClasses = [
        [
            "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute","z-10", "sm:text-[22px]" ,"text-[14px]","sm:w-[77px]", "sm:h-[77px]" ,"w-[50px]", "h-[50px]",  "sm:top-[203px]", "top-[95px]", "beech:left-[135px]", "xl:left-[219px]", "2xl:left-[300px]", "md:left-[80px]",  "left-[35px]"
           ],
        [
            "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute","z-10", "sm:text-[22px]" ,"text-[14px]","sm:w-[77px]", "sm:h-[77px]" ,"w-[50px]", "h-[50px]", "sm:top-[270px]", "top-[126px]", "beech:left-[240px]", "xl:left-[345px]", "2xl:left-[440px]", "md:left-[168px]", "sm:left-[115px]", "left-[79px]"
           ],
         
        [
            "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute","sm:text-[22px]" ,"text-[14px]","sm:w-[77px]", "sm:h-[77px]" ,"w-[50px]", "h-[50px]", "sm:top-[310px]", "top-[142px]",   "right-[50%]", "transform"   
        ], 
        
        [
            "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute","z-10", "sm:text-[22px]" ,"text-[14px]","sm:w-[77px]", "sm:h-[77px]" ,"w-[50px]", "h-[50px]", "sm:top-[270px]", "top-[126px]", "beech:right-[240px]", "xl:right-[345px]", "2xl:right-[440px]", "md:right-[168px]", "sm:right-[115px]", "right-[79px]"
           ],
           [
            "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute","z-10", "sm:text-[22px]" ,"text-[14px]","sm:w-[77px]", "sm:h-[77px]" ,"w-[50px]", "h-[50px]",  "sm:top-[203px]", "top-[95px]", "beech:right-[135px]", "xl:right-[219px]", "2xl:right-[300px]", "md:right-[80px]",  "right-[35px]"
           ],
        
     ]
    circles.forEach((circle,circleIndex)=>{
        if(circleIndex === 2){
            circle.style.transform = "translateX(50%)"
        }
        circleClasses[circleIndex].forEach(circleClass=> circle.classList.add(circleClass))
    })
}else if( circles.length === 4){
    let circleClasses = [
        [ 
         "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute","z-10",  "sm:text-[26px]" ,"text-[16px]","sm:w-[90px]", "sm:h-[90px]" ,"w-[60px]", "h-[60px]", "sm:top-[93px]" ,"top-[50px]" ,"xl:left-[103px]", "beech:left-[40px]", "2xl:left-[166px]" ,"md:left-[10px]", "sm:left-[-5px]",
        ] ,
        
        [
         "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute",   "z-10","sm:text-[26px]" ,"text-[16px]","sm:w-[90px]", "sm:h-[90px]" ,"w-[60px]", "h-[60px]", "sm:top-[270px]", "top-[126px]", "beech:left-[240px]", "xl:left-[345px]", "2xl:left-[440px]", "md:left-[168px]", "sm:left-[115px]", "left-[79px]"
        ],
       
         
        [
            "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute","z-10", "sm:text-[26px]" ,"text-[16px]","sm:w-[90px]", "sm:h-[90px]" ,"w-[60px]", "h-[60px]", "sm:top-[270px]", "top-[126px]", "beech:right-[240px]", "xl:right-[345px]", "2xl:right-[440px]", "md:right-[168px]", "sm:right-[115px]", "right-[79px]"
           ], 
        
        [ 
         "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute","z-10",   "sm:text-[26px]" ,"text-[16px]","sm:w-[90px]", "sm:h-[90px]" ,"w-[60px]", "h-[60px]", "sm:top-[93px]" ,"top-[50px]" ,"xl:right-[103px]", "beech:right-[40px]", "2xl:right-[166px]" ,"md:right-[10px]", "sm:right-[-5px]", "right-0",
         ] ,
     ]
     circles.forEach((circle,circleIndex)=>{
         circleClasses[circleIndex].forEach(circleClass=> circle.classList.add(circleClass))
     })
}else if( circles.length === 3){
    let circleClasses = [
        
        
        [
            "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute","z-10", "sm:text-[26px]" ,"text-[16px]","sm:w-[90px]", "sm:h-[90px]" ,"w-[60px]", "h-[60px]", "sm:top-[203px]", "top-[95px]", "beech:left-[135px]", "xl:left-[219px]", "2xl:left-[300px]", "md:left-[80px]",  "left-[35px]"
           ],
       
         
        [
            "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute","z-10", "sm:text-[26px]" ,"text-[16px]","sm:w-[90px]", "sm:h-[90px]" ,"w-[60px]", "h-[60px]", "sm:top-[300px]", "top-[126px]",   "right-[50%]", "transform"   
           ], 
           [
            "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute","z-10", "sm:text-[26px]" ,"text-[16px]","sm:w-[90px]", "sm:h-[90px]" ,"w-[60px]", "h-[60px]","sm:top-[203px]", "top-[95px]", "beech:right-[135px]", "xl:right-[219px]", "2xl:right-[300px]", "md:right-[80px]",  "right-[35px]"
           ],
        
         
     ]
     circles.forEach((circle,circleIndex)=>{
         if(circleIndex === 1){
             circle.style.transform = "translateX(50%)"
         }
         circleClasses[circleIndex].forEach(circleClass=> circle.classList.add(circleClass))
     })
}else if( circles.length === 2){
    let circleClasses = [
        
        
        [
         "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute",   "z-10","sm:text-[26px]" ,"text-[16px]","sm:w-[90px]", "sm:h-[90px]" ,"w-[60px]", "h-[60px]", "sm:top-[270px]", "top-[126px]", "beech:left-[240px]", "xl:left-[345px]", "2xl:left-[440px]", "md:left-[168px]", "sm:left-[115px]", "left-[79px]"
        ],
       
         
        [
            "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute","z-10", "sm:text-[26px]" ,"text-[16px]","sm:w-[90px]", "sm:h-[90px]" ,"w-[60px]", "h-[60px]", "sm:top-[270px]", "top-[126px]", "beech:right-[240px]", "xl:right-[345px]", "2xl:right-[440px]", "md:right-[168px]", "sm:right-[115px]", "right-[79px]"
           ], 
        
         
     ]
     circles.forEach((circle,circleIndex)=>{
         circleClasses[circleIndex].forEach(circleClass=> circle.classList.add(circleClass))
     })
}else if( circles.length === 1){
    let circleClasses = [
        
        
       
       
         
        [
            "transition-all", "cursor-pointer", "hover:bg-[#9c9b98]", "nav-ball", "duration-300", "flex", "justify-center", "tracking-[3px]", "text-white",  "brown-light", "items-center", "rounded-full", "bg-[#bfbdb9]", "absolute","z-10", "sm:text-[26px]" ,"text-[16px]","sm:w-[90px]", "sm:h-[90px]" ,"w-[60px]", "h-[60px]", "sm:top-[300px]", "top-[126px]",   "right-[50%]", "transform"   
           ], 
           
        
         
     ]
     circles.forEach((circle,circleIndex)=>{
          circle.style.transform = "translateX(50%)"
         
         circleClasses[circleIndex].forEach(circleClass=> circle.classList.add(circleClass))
     })
}
// console.log(firstCircleInView,lastCircleInView,slideNumber) 
const slide = (slideNum) => {
   
    slideNumber = slideNum ?  slideNum : slideNum ===0 ? 0: slideNumber
   if(totalCircles >=9) { if(slideNumber === lastCircleInView && lastCircleInView !== totalCircles-1){
       
       let newCircles =[]
        circles.forEach((circle,circleIndex)=>{
            circle.removeAttribute('class')
              circle.setAttribute('class',"l")
            circleIndex >= firstCircleInView ? newCircles.push(circle) : circle.classList.add('hidden')


       })
       
           newCircles.forEach((circle,circleIndex)=>{
    
              
                if(circleClassesForShowingBothEdges[circleIndex]){ 
                    circleClassesForShowingBothEdges[circleIndex].forEach(circleClass=> circle.classList.add(circleClass))
                    circle.classList.contains('hidden') &&circle.classList.remove('hidden')
                }else{
                    circle.classList.add('hidden')
                }
            })

       
        firstCircleInView++
        lastCircleInView++
// console.log(firstCircleInView,lastCircleInView,slideNumber) 

    }else if (slideNumber === lastCircleInView && lastCircleInView === totalCircles-1){
          
        let newCircles =[]
        circles.forEach((circle,circleIndex)=>{
            circle.removeAttribute('class')
              circle.setAttribute('class',"l")
            circleIndex >= firstCircleInView ? newCircles.push(circle) : circle.classList.add('hidden')


       })
        
        newCircles.forEach((circle,circleIndex)=>{

            
            if(circleClassesForShowingLeftEdge[circleIndex]){ 
                circleClassesForShowingLeftEdge[circleIndex].forEach(circleClass=> circle.classList.add(circleClass))
                circle.classList.contains('hidden') &&circle.classList.remove('hidden')
            }else{
                circle.classList.add('hidden')
            }
        })

       firstCircleInView++
       lastCircleInView++
// console.log(firstCircleInView,lastCircleInView,slideNumber) 
         
    }else if (slideNumber==0){
    //     circles.forEach((circle,circleIndex)=>{
    //         circleIndex >= firstCircleInView && newCircles.push(circle)
    //         circle.removeAttribute('class')
    //           circle.setAttribute('class',"l")


    //    })
        circles.forEach((circle,circleIndex)=>{
            circle.removeAttribute('class')
            circle.setAttribute('class',"l")
            
            if(circleClassesForShowingRightEdge[circleIndex]){ 
                circleClassesForShowingRightEdge[circleIndex].forEach(circleClass=> circle.classList.add(circleClass))
                circle.classList.contains('hidden') &&circle.classList.remove('hidden')
            }else{
                circle.classList.add('hidden')
            }
          
                   
        })
        firstCircleInView=0
        lastCircleInView=8
// console.log(firstCircleInView,lastCircleInView,slideNumber) 

    }else if(slideNumber === firstCircleInView - 1){
        firstCircleInView--
        lastCircleInView--
        let newCircles =[]
        circles.forEach((circle,circleIndex)=>{
            circle.removeAttribute('class')
              circle.setAttribute('class',"l")
            circleIndex >= firstCircleInView - 1 ? newCircles.push(circle) : circle.classList.add('hidden')


            }) 
            newCircles.forEach((circle,circleIndex)=>{
                

                        
                if(circleClassesForShowingBothEdges[circleIndex]){ 
                    circleClassesForShowingBothEdges[circleIndex].forEach(circleClass=> circle.classList.add(circleClass))
                    circle.classList.contains('hidden') &&circle.classList.remove('hidden')
                    }else{
                        circle.classList.add('hidden')
                    }
                })
// console.log(firstCircleInView,lastCircleInView,slideNumber) 

     
    }
   }
    if(slideNumber === 0){
        btnLeft.classList.add('hidden')
    }else{
        btnLeft.classList.remove('hidden')
    }
    if(slideNumber=== totalCircles -1){
        btnRight.classList.add('hidden')
    }else{
        btnRight.classList.remove('hidden')

    }
    
    const nav = document.querySelector('.slideNav')
    const balls = document.querySelectorAll('.ssl > span')
   
    // if(totalCircles > 8 ){
       
    //         if(slideNumber > firstCircleInView +5){
               
                
    //             circles.forEach((circle,circleIndex)=>{
                    
    //                 console.log(circle.classList)
    //                 circle.classList.forEach(item=>{
    //                      item.co('top') && circle.classList.remove(item)
    //                      item.co('left') && circle.classList.remove(item)
    //                      item.co('right') && circle.classList.remove(item)
                            
    //                     })
                        
    //                     console.log(circle.classList)
                      
    //                 // circleIndex >= firstCircleInView ?
    //                 //   circleClassesForShowingBothEdges[circleIndex].forEach(circleClass=> circle.classList.add(circleClass)) 
    //                 //         :
    //                 //     circleClassesForShowingBothEdges.unshift([]) && console.log(circleClassesForShowingBothEdges)
    //                 })
    //                 if(firstCircleInView +6 < totalCircles){
                      
                         
    //                          firstCircleInView += 1
                         
    //                  }
    //         }
        
        
       

        
    //       //right edge when slidenumber is equal to 0 
            
              
    //       //left edge when slidenumber is greater than 0 and slides are 8

    //       //both edges when when slidenumber is greater than 0 and slides are more than 8

    // }
    

    balls.forEach(ball=> {
    ball.classList.remove('carouselcircleBlue')
    ball.classList.add('bg-[#bfbdb9]')
})
balls[slideNumber].classList.remove('bg-[#bfbdb9]')
balls[slideNumber].classList.add('carouselcircleBlue')
    const slides = document.querySelectorAll('.slide')
      
    slides.forEach(slide => {
        slide.classList.add('hidden')
        slide.classList.remove('slide-active')
    })
    slides[slideNumber].classList.remove('hidden')
    slides[slideNumber].classList.add('slide-active')
}
 
circles.forEach((circle,index)=>{
    circle.addEventListener('click',()=>slide(index ))

})



const slideBack = ()=>{
    let number = slideNumber!== 0? slideNumber -1 : totalCircles-1
    slide(number)
}
btnLeft?.addEventListener('click',slideBack)

const slideNext = ()=>{
    let number = slideNumber!== totalCircles -1? slideNumber +1 : 0
    slide(number)
}
btnRight?.addEventListener('click',slideNext)

// btnLeft.addEventListener('click',slide(slideNumber!== 1? slideNumber -1 : totalCircles))
// btnRight.addEventListener('click',slide(slideNumber!== totalCircles? slideNumber +1 : 1))


let mobBalls = document.querySelectorAll('.dekhLo .nav-ball')
let mobSlides = document.querySelectorAll('.slide22') 
// console.log(mobSlides)
// console.log(mobBalls)
const slideMob =(slideTo) =>{
     
    mobBalls.forEach((ball)=> {ball.classList.remove("carouselcircleBlue") ;ball.classList.add("bg-[#bfbdb9]")})
    mobSlides.forEach(slide=>  {slide.classList.remove("slide-active"); slide.classList.add("hidden") } )
// console.log(slideTo)
    mobBalls[slideTo].classList.add('carouselcircleBlue')
    mobSlides[slideTo].classList.add('slide-active')
    mobSlides[slideTo].classList.remove('hidden')
}

mobBalls.forEach((ball,ballIndex)=> ball.addEventListener('click',()=>slideMob(ballIndex)))

  },[]) 

  return (
    <>
      
      <section id="carouselContainer" className="bg-light hidden sm:block">
        <div className="2xl:max-w-[1437px]  ssl  xl:max-w-[1200px] beech:max-w-[950px] md:max-w-[768px] sm:max-w-[640px] max-w-[350px] relative text-black   md:px-[60px] mx-auto overflow-hidden pb-[70px]">
          <div className=" 2xl:w-[1437px]  xl:w-[1200px] beech:w-[950px]  md:w-[768px] sm:w-[640px] w-[350px] h-[2000px] position absolute transition-all duration-500 gradient11 slideNav left-[50%] transform translate-x-[-50%] mx-auto sm:mt-[-1650px] mt-[-1834px] rounded-[1144px]">
            <div className="roundkrna left-[2px] top-[2px] rounded-[1144px] bg-light relative"></div>
          </div>

          <span className=" nav-ball carouselcircleBlue ">01</span>
          <span className="     nav-ball ">02</span>
          <span className="     nav-ball">03</span>
          <span className=" nav-ball ">04</span>

          <div className="myContainer   sm:pt-[93px] pt-[36px] relative">
            
            <h4
              data-aos-once="true"
              data-aos="fade-up"
              data-aos-delay="700"
              data-aos-duration="700"
              className="brown-regular max-w-[900px]    titleLast2  sm:text-[40px] text-[14px] uppercase sm:tracking-[8px] tracking-[4px]  sm:leading-[56px] leading-[18px] text-center mx-auto"
            >
             Meet Our Team
            </h4>
          </div>

          <div class="myCarousel min-h-[400px] lg:mt-[230px] md:mt-[150px] mt-[100px] relative xl:px-[100px] px-[16px]">
        
            <div className="absolute flex w-full left-0 top-[50%] justify-between transform translate-y-[-50%]">
              <span
                id="carouselBtnLeft"
                className="transform hidden z-10 cursor-pointer rotate-[90deg]"
              >
                {/* <lottie-player src="./assets/lf30_editor_ralegtco.json" background="transparent" speed="1" style="width: 70px; height: 70px;" loop autoplay></lottie-player> */}
              </span>
              <span
                id="carouselBtnRight"
                class="ml-auto z-10 cursor-pointer  transform rotate-[270deg]"
              >
             
                {/* <lottie-player src="./assets/lf30_editor_ralegtco.json" background="transparent" speed="1" style="width: 70px; height: 70px;" loop autoplay></lottie-player> */}
              </span>
            </div>
            <div className="slide slideOne flex flex-col slide-active transition-all duration-300 items-center text-center">
              <span
                data-aos-once="true"
                data-aos="fade-up"
                data-aos-duration="700"
                className="sm:text-[28px] sm:leading-[38px] text-[16px] leading-[12px]"
              >
                Takamichi Saeki
              </span>
              <span
                data-aos-once="true"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="700"
                className="h-[unset] md:h-[90px] mt-[22px] brown-light leading-[20px] sm:text-lg sm:leading-[28px] w-1/2 mb-12 text-[12px] leading-[20px]"
              >
                This airy, light-filled, 2,000-square-foot loft on Bowery is like an art gallery – on display are pieces by Santi Moix and others.
              </span>
                <div  className="lazy h-[80px] md:h-[220px] max-h-[203px] md:max-w-[213px] sm:max-w-[150px] max-w-[65px] rounded-[50%] overflow-hidden"
                >
                <Image
                  data-aos-once="true"
                  data-aos="fade-up"
                  data-aos-duration="700"
                  // src="./assets/images/home/audacious.svg"
                  src={member1}
                  loading="lazy"
                  alt="Compelling"
                />
                </div>
            </div>
            <div className="slide slideTwo flex flex-col hidden transition-all duration-300 items-center text-center">
              <span
                data-aos-once="true"
                data-aos="fade-up"
                data-aos-duration="700"
                className="sm:text-[28px] sm:leading-[38px] text-[16px] leading-[12px]"
              >
Garrett Bryant
              </span>
              <span
                data-aos-once="true"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="700"
                className="h-[unset] md:h-[90px] mt-[22px] brown-light leading-[20px] sm:text-lg sm:leading-[28px] w-1/2 mb-12 text-[12px] leading-[20px]"
              >
               Last year, after cutting his chops at the city’s top salons, Bryant struck out on his own and launched Hawthorne, a unique collaborative styling and coloring concept.
              </span>
              <div  className="lazy h-[80px] md:h-[220px] max-h-[203px] md:max-w-[213px] sm:max-w-[150px] max-w-[65px] rounded-[50%] overflow-hidden"
                >
              <Image
                data-aos-once="true"
                data-aos="fade-up"
                data-aos-duration="700"
                // src="./assets/images/home/compelling.svg"
                src={member2}
               
                loading="lazy"
                alt="Compelling"
              />
              </div>
            </div>
            <div className="slide slideThree flex flex-col hidden transition-all duration-300 items-center text-center">
              <span
                data-aos-once="true"
                data-aos="fade-up"
                data-aos-duration="700"
                className="sm:text-[28px] sm:leading-[38px] text-[16px] leading-[12px]"
              >
                Dhiran Mistry
              </span>
              <span
                data-aos-once="true"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="700"
                className="h-[unset] md:h-[90px] mt-[22px] brown-light leading-[20px] sm:text-lg sm:leading-[28px] w-1/2 mb-12 text-[12px] leading-[20px]"
              >
               For Mistry, developing a personal, honest rapport with his clients is just as important as creating bespoke haircuts.
              </span>
              <div  className="lazy h-[80px] md:h-[220px] max-h-[203px] md:max-w-[213px] sm:max-w-[150px] max-w-[65px] rounded-[50%] overflow-hidden"
                >
              <Image
                data-aos-once="true"
                data-aos="fade-right"
                data-aos-duration="700"
                // src="./assets/images/home/inspirational.png"
                src={member3}
               
                loading="lazy"
                alt="Compelling"
              />
              </div>
            </div>
            <div className="slide slideFour flex flex-col hidden transition-all duration-300 items-center text-center">
              <span
                data-aos-once="true"
                data-aos="fade-right"
                data-aos-duration="700"
                className="sm:text-[28px] sm:leading-[38px] text-[16px] leading-[12px]"
              >
                Rodney Cutler
              </span>
              <span
                data-aos-once="true"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="700"
                className="h-[unset] md:h-[90px] mt-[22px] brown-light leading-[20px] sm:text-lg sm:leading-[28px] w-1/2 mb-12 text-[12px] leading-[20px]"
              >
               Though Cutler’s been a longtime staple of New York Fashion Week, the clients of the Australian-born stylist (and former rugby player and current marathoner) tend to be “less influenced by trends,”
              </span>
               <div  className="lazy h-[80px] md:h-[220px] max-h-[203px] md:max-w-[213px] sm:max-w-[150px] max-w-[65px] rounded-[50%] overflow-hidden"
                >
              <Image
                data-aos-once="true"
                data-aos="fade-right"
                data-aos-duration="700"
                // src="./assets/images/home/actionable.svg"
                src={member4}
               
                loading="lazy"
                alt="Compelling"
              />
               </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlueBubbleSlider;
