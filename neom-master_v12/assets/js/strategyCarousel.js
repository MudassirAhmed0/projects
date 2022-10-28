var slideNumber = 1


const slide = (slideNum) => {
    slideNumber = slideNum ? slideNum : slideNumber
    const nav = document.querySelector('.slideNav')
    const balls = window.innerWidth > 768 ?  document.querySelectorAll('.nav-ball') : document.querySelectorAll('.nav-ball-mob')
    const slides = document.querySelectorAll('.slide')
    
    clearInterval(myInterval)
    slides.forEach(slide => {
        slide.classList.add('hidden')
        slide.classList.remove('slideActive')
    })
    switch (slideNum ? slideNum : slideNumber) {
        case 1:
            nav.classList.add('gradientTwo1')
            nav.classList.remove('gradientTwo2')
            nav.classList.remove('gradientTwo3')
            nav.classList.remove('gradientTwo4')
            nav.classList.remove('gradientTwo5')
            nav.classList.remove('gradientTwo6')

            slides[0].classList.remove('hidden')
            slides[0].classList.add('slideActive')

            balls[1].classList.remove('carouselcircleBlue')
            balls[2].classList.remove('carouselcircleBlue')
            balls[3].classList.remove('carouselcircleBlue')
            balls[4].classList.remove('carouselcircleBlue')
            balls[5].classList.remove('carouselcircleBlue')
            balls[1].classList.add('bg-[#bfbdb9]')
            balls[2].classList.add('bg-[#bfbdb9]')
            balls[3].classList.add('bg-[#bfbdb9]')
            balls[4].classList.add('bg-[#bfbdb9]')
            balls[5].classList.add('bg-[#bfbdb9]')
            break;
        case 2:
            nav.classList.remove('gradientTwo1')
            nav.classList.add('gradientTwo2')
            nav.classList.remove('gradientTwo3')
            nav.classList.remove('gradientTwo4')
            nav.classList.remove('gradientTwo5')
            nav.classList.remove('gradientTwo6')

            slides[1].classList.remove('hidden')
            slides[1].classList.add('slideActive')

            balls[1].classList.add('carouselcircleBlue')
            balls[1].classList.remove('bg-[#bfbdb9]')
            balls[2].classList.remove('carouselcircleBlue')
            balls[2].classList.add('bg-[#bfbdb9]')
            balls[3].classList.remove('carouselcircleBlue')
            balls[3].classList.add('bg-[#bfbdb9]')
            balls[4].classList.remove('carouselcircleBlue')
            balls[4].classList.add('bg-[#bfbdb9]')
            balls[5].classList.remove('carouselcircleBlue')
            balls[5].classList.add('bg-[#bfbdb9]')
            break;
        case 3:
            nav.classList.remove('gradientTwo1')
            nav.classList.remove('gradientTwo2')
            nav.classList.add('gradientTwo3')
            nav.classList.remove('gradientTwo4')
            nav.classList.remove('gradientTwo5')
            nav.classList.remove('gradientTwo6')

            slides[2].classList.remove('hidden')
            slides[2].classList.add('slideActive')

            balls[1].classList.add('carouselcircleBlue')
            balls[1].classList.remove('bg-[#bfbdb9]')
            balls[2].classList.add('carouselcircleBlue')
            balls[2].classList.remove('bg-[#bfbdb9]')
            balls[3].classList.remove('carouselcircleBlue')
            balls[3].classList.add('bg-[#bfbdb9]')
            balls[4].classList.remove('carouselcircleBlue')
            balls[4].classList.add('bg-[#bfbdb9]')
            balls[5].classList.remove('carouselcircleBlue')
            balls[5].classList.add('bg-[#bfbdb9]')
            break;
        case 4:
            nav.classList.remove('gradientTwo1')
            nav.classList.remove('gradientTwo2')
            nav.classList.remove('gradientTwo3')
            nav.classList.add('gradientTwo4')
            nav.classList.remove('gradientTwo5')
            nav.classList.remove('gradientTwo6')

            slides[3].classList.remove('hidden')
            slides[3].classList.add('slideActive')

            balls[1].classList.add('carouselcircleBlue')
            balls[1].classList.remove('bg-[#bfbdb9]')
            balls[2].classList.add('carouselcircleBlue')
            balls[2].classList.remove('bg-[#bfbdb9]')
            balls[3].classList.add('carouselcircleBlue')
            balls[3].classList.remove('bg-[#bfbdb9]')
            balls[4].classList.remove('carouselcircleBlue')
            balls[4].classList.add('bg-[#bfbdb9]')
            balls[5].classList.remove('carouselcircleBlue')
            balls[5].classList.add('bg-[#bfbdb9]')

            break;
        case 5:
            nav.classList.remove('gradientTwo1')
            nav.classList.remove('gradientTwo2')
            nav.classList.remove('gradientTwo3')
            nav.classList.remove('gradientTwo4')
            nav.classList.add('gradientTwo5')
            nav.classList.remove('gradientTwo6')

            slides[4].classList.remove('hidden')
            slides[4].classList.add('slideActive')

            balls[1].classList.add('carouselcircleBlue')
            balls[1].classList.remove('bg-[#bfbdb9]')
            balls[2].classList.add('carouselcircleBlue')
            balls[2].classList.remove('bg-[#bfbdb9]')
            balls[3].classList.add('carouselcircleBlue')
            balls[3].classList.remove('bg-[#bfbdb9]')
            balls[4].classList.add('carouselcircleBlue')
            balls[4].classList.remove('bg-[#bfbdb9]')
            balls[5].classList.remove('carouselcircleBlue')
            balls[5].classList.add('bg-[#bfbdb9]')

            break;


        case 6:
            nav.classList.remove('gradientTwo1')
            nav.classList.remove('gradientTwo2')
            nav.classList.remove('gradientTwo3')
            nav.classList.remove('gradientTwo4')
            nav.classList.remove('gradientTwo5')
            nav.classList.add('gradientTwo6')

            slides[5].classList.remove('hidden')
            slides[5].classList.add('slideActive')

            balls[1].classList.add('carouselcircleBlue')
            balls[1].classList.remove('bg-[#bfbdb9]')
            balls[2].classList.add('carouselcircleBlue')
            balls[2].classList.remove('bg-[#bfbdb9]')
            balls[3].classList.add('carouselcircleBlue')
            balls[3].classList.remove('bg-[#bfbdb9]')
            balls[4].classList.add('carouselcircleBlue')
            balls[4].classList.remove('bg-[#bfbdb9]')
            balls[5].classList.add('carouselcircleBlue')
            balls[5].classList.remove('bg-[#bfbdb9]')

            break;

    }
}

let start = false
let bool = false;

const myInterval = () => {
    if (bool == false) {
        slideNumber = slideNumber !== 6 ? slideNumber + 1 : 1
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