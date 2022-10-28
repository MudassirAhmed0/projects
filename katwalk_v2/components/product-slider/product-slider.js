import React from "react";
import Image from "next/image";
import logoSquare from "../../assets/images/logo/logo-square.png";
import vat from "../../assets/images/logo/vat.png";
import heroImage from "../../assets/images/hero-image.jpg";
import bottle from "../../assets/images/icons/bottle.png";
import freeDelivery from "../../assets/images/icons/free-delivery.png";
import measurementTap from "../../assets/images/icons/measurement-tap.png";
import tags from "../../assets/images/icons/tags.png";
import { data } from "autoprefixer";
import styles from "./productSlider.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { useRef } from "react";





// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "red" }}
//       onClick={onClick}
//     ></div>
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "green" }}
//       onClick={onClick}
//     />
//   );
// }
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

function ProductSlider({ data }) {
  const prev = useRef()
  const next = useRef()
  const slider = useRef(null)
  const settings = {
    dots: false,
    // arrows: false,
    infinite: false,
    speed: 500,
    // prevArrow: <PrevArrow/>,
    // nextArrow: <NextArrow/>,
    // prevArrow: prev.current,
    // nextArrow: next.current,
     nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      // {
      //   breakpoint: 1024,
      //   settings: {
      //     slidesToShow: 4,
      //     slidesToScroll: 1,
      //   },
      // },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
    <div>
      <button onClick={()=> slider.current.slickPrev()} ref={prev}>Previous</button>
      <button onClick={()=> slider.current.slickPrev()} ref={next} >Next</button>
    </div>
      <Slider  ref={slider} {...settings}>
        {data.map((value, index) => {
          return (
            <div key={index}>
              <span className="image_container">
                <Image src={value.image} alt="image" />
              </span>
            </div>
          );
        })}
      </Slider>
    </>
  );
}

export default ProductSlider;
