var slideNumber = 1
const slide = (slideNum) => {
    console.log("called");
    slideNumber = slideNum ? slideNum : slideNumber
    const nav = document.querySelector('.slideNav')
    const balls = document.querySelectorAll('.nav-ball')
    console.log("ablls",balls);
    const slides = document.querySelectorAll('.slide')
    clearInterval(myInterval)
    slides.forEach(slide => {
        slide.classList.add('hidden')
        slide.classList.remove('slide-active')
    })
    switch (slideNum ? slideNum : slideNumber) {
        case 1:
            nav.classList.add('gradient1')
            nav.classList.remove('gradient2')
            nav.classList.remove('gradient3')
            nav.classList.remove('gradient4')

            slides[0].classList.remove('hidden')
            slides[0].classList.add('slide-active')

            balls[1].classList.remove('carouselcircleBlue')
            balls[2].classList.remove('carouselcircleBlue')
            balls[3].classList.remove('carouselcircleBlue')
            balls[1].classList.add('bg-[#bfbdb9]')
            balls[2].classList.add('bg-[#bfbdb9]')
            balls[3].classList.add('bg-[#bfbdb9]')
            break;
        case 2:
            nav.classList.remove('gradient1')
            nav.classList.add('gradient2')
            nav.classList.remove('gradient3')
            nav.classList.remove('gradient4')

            slides[1].classList.remove('hidden')
            slides[1].classList.add('slide-active')

            balls[1].classList.add('carouselcircleBlue')
            balls[1].classList.remove('bg-[#bfbdb9]')
            balls[2].classList.remove('carouselcircleBlue')
            balls[2].classList.add('bg-[#bfbdb9]')
            balls[3].classList.remove('carouselcircleBlue')
            balls[3].classList.add('bg-[#bfbdb9]')
            break;
        case 3:
            nav.classList.remove('gradient1')
            nav.classList.remove('gradient2')
            nav.classList.add('gradient3')
            nav.classList.remove('gradient4')

            slides[2].classList.remove('hidden')
            slides[2].classList.add('slide-active')

            balls[1].classList.add('carouselcircleBlue')
            balls[1].classList.remove('bg-[#bfbdb9]')
            balls[2].classList.add('carouselcircleBlue')
            balls[2].classList.remove('bg-[#bfbdb9]')
            balls[3].classList.remove('carouselcircleBlue')
            balls[3].classList.add('bg-[#bfbdb9]')
            break;
        case 4:
            nav.classList.remove('gradient1')
            nav.classList.remove('gradient2')
            nav.classList.remove('gradient3')
            nav.classList.add('gradient4')

            slides[3].classList.remove('hidden')
            slides[3].classList.add('slide-active')

            balls[1].classList.add('carouselcircleBlue')
            balls[1].classList.remove('bg-[#bfbdb9]')
            balls[2].classList.add('carouselcircleBlue')
            balls[2].classList.remove('bg-[#bfbdb9]')
            balls[3].classList.add('carouselcircleBlue')
            balls[3].classList.remove('bg-[#bfbdb9]')

            break;

    }
}

let start = false

let bool = false;

const myInterval = () => {
    if (bool == false) {
        slideNumber = slideNumber !== 4 ? slideNumber + 1 : 1
        slide()
    }
}

const startCarousel = () => {
    let el = document.querySelector('.myCarousel')
    var rect = el.getBoundingClientRect();
    if (bool !== true) {
        if (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
            rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
        ) {
            start = true
        }
    }
    if (start) {

        setInterval(myInterval, 6000)
        window.removeEventListener('scroll', startCarousel)
    }
}

window.addEventListener('scroll', startCarousel)

const stopCarousel = () => {
    bool = true;
}
const startTheCarousel = () => {
    setTimeout(
        () => {
            bool = false;
        }
        , 30000)
}


let container = document.getElementById('carouselContainer')

// container.addEventListener('scro')

// var lastScrollTop = 0;
// console.log(container)
// // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
// container.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
//    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
//    if (st > lastScrollTop){
//       // downscroll code
//       alert('down')
//    } else {
//       // upscroll code
//       alert('up')
//    }
//    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
// }, false);
// var lastScrollTop = 0;
// window.addEventListener('scroll',()=> {
//     var bodyRect = document.body.getBoundingClientRect(),
//     elemRect = container.getBoundingClientRect(),
//     offset   = elemRect.top - bodyRect.top; 
//     if(window.pageYOffset > offset)
//     {
//         var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
//    if (st > lastScrollTop){
//     slideNumber++  
//     slide(slideNumber)
//    } else {
//        slide(slide)
//        console.log('up')
//       // upscroll code
//    }
//    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
//     }
// })