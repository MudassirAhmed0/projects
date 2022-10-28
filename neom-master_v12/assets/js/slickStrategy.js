$(document).on('ready', function () {


    // $('.autoplay').slick({
    //     focusOnSelect: true,
    //     slidesToShow: 5,
    //     slidesToScroll: 1,
    //     autoplay: false,
    //     autoplaySpeed: 5000,
    // });
    $('.single-item').slick({ 
        // focusOnSelect: true,
        slidesToShow: 1.055,
        slidesToScroll: 1,
        autoplay: false,
        infinite: false,
        nav:false,
        prevArrow: $('.my-prev'),
        nextArrow: $('.my-next'),
        // prevArrow: '<svg class="slick-prev w-[70px]" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 65.4 17.2" style="enable-background:new 0 0 65.4 17.2;" xml:space="preserve"> <style type="text/css"> 	.st0{fill:none;stroke:#B89535;stroke-width:2;stroke-linecap:round;} </style> <path id="Path_98863" class="st0" d="M44.4,15.7l-7.5-6.8l7.5-7.5"/> </svg>',
        // nextArrow: '<svg class="slick-next w-[70px]" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 viewBox="0 0 65.4 17.2" style="enable-background:new 0 0 65.4 17.2;" xml:space="preserve"> <style type="text/css"> 	.st0{fill:none;stroke:#B89535;stroke-width:2;stroke-linecap:round;} </style> <path id="Path_98863" class="st0" d="M36.9,1.4l7.5,7.5l-7.5,6.8"/> </svg>',
      
        responsive: [
            {
                breakpoint: 3500,
                settings: {
                    slidesToShow: 1.7,
                    slidesToScroll: 1,
                    // infinite: true,
                }
            },
            {
                breakpoint: 2500,
                settings: {
                    slidesToShow: 1.3,
                    slidesToScroll: 1,
                    // infinite: true,
                }
            },
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 1.055,
                    slidesToScroll: 1,
                    // infinite: true,
                }
            },
            {
                breakpoint: 200,
                settings: {
                    slidesToShow: 1.07,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 1.045,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
        // autoplaySpeed: 5000,
    });

    $('.responsive').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<svg class="slick-prev w-[70px]" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 65.4 17.2" style="enable-background:new 0 0 65.4 17.2;" xml:space="preserve"> <style type="text/css"> 	.st0{fill:none;stroke:#B89535;stroke-width:2;stroke-linecap:round;} </style> <path id="Path_98863" class="st0" d="M44.4,15.7l-7.5-6.8l7.5-7.5"/> </svg>',
        nextArrow: '<svg class="slick-next w-[70px]" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 viewBox="0 0 65.4 17.2" style="enable-background:new 0 0 65.4 17.2;" xml:space="preserve"> <style type="text/css"> 	.st0{fill:none;stroke:#B89535;stroke-width:2;stroke-linecap:round;} </style> <path id="Path_98863" class="st0" d="M36.9,1.4l7.5,7.5l-7.5,6.8"/> </svg>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    // infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});


var items = document.querySelectorAll(".slot_a");
var descriptions = document.querySelectorAll(".strategic-objectives");

function showDesc(index) {
    items.forEach(function (node) {
        node.classList.remove("active");
    });
    items[index].classList.add("active");

    descriptions.forEach(function (node) {
        node.style.display = "none";
    });
    descriptions[index].style.display = "block";
}
showDesc(0);

var tabButtons = document.querySelectorAll(".key-risks .slot_b");
var tabPanels = document.querySelectorAll(".key-risks-item");

function showPanel(panelIndex) {
    tabButtons.forEach(function (node) {
        node.classList.remove("active");
    });
    tabButtons[panelIndex].classList.add("active");

    tabPanels.forEach(function (node) {
        node.style.display = "none";
    });
    tabPanels[panelIndex].style.display = "block";
}
showPanel(0);