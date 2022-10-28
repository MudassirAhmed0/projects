import React from "react";
import Slider from "react-slick";
import styles from "./newsSlider.module.css";
import Image from "next/image";
import slider1 from "../../assets/images/blogs/slider1.jpg";
import slider2 from "../../assets/images/blogs/slider2.jpg";
import slider3 from "../../assets/images/blogs/slider3.jpg";
import slider4 from "../../assets/images/blogs/slider4.jpg";
import arrowLeftHand from "../../assets/images/icons/arrow-left-hand.svg";
import arrowRightHand from "../../assets/images/icons/arrow-right-hand.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewsSliderCard from "../newsSliderCard.js/newsSliderCard";
import { useRef } from "react";

function NewsSlider() {
  const sliderRef = useRef(null);
  console.log("sliderRef", sliderRef.current);

  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1.275,
    slidesToScroll: 1,
    // arrows: false,
  };

  const sliderData = [
    {
      date: "April 16, 2022",
      title: "How to Choose the Best Hair Stylist",
      image: slider1,
    },
    {
      date: "April 15, 2022",
      title:
        "How Often Should You Wash Your Hair?",
      image: slider2,
    },
    {
      date: "April 15, 2022",
      title:
        "Tips for Changing Your Makeup to Match Your New Hairstyle",
      image: slider3,
    },
    {
      date: "April 16, 2022",
      title:
        "Should You Change Your Hair Color With the Seasons?",
      image: slider4,
    },
  ];

  return (
    <>
  
      {/* <div className="slider_nav flex gap-x-6 md:flex hidden">
        <div
          onClick={() => sliderRef.current.slickPrev()}
          className="bg-white border flex justify-center items-center rounded-full am-prev transition-all duration-300 hover:bg-gold w-[60px] h-[60px]"
        >
          <Image src={arrowLeftHand} alt="image" />
        </div>
        <div
          onClick={() => sliderRef.current.slickNext()}
          className="bg-white border flex justify-center items-center am-next rounded-full transition-all duration-300 hover:bg-gold w-[60px] h-[60px]"
        >
          <Image src={arrowRightHand} alt="image" />
        </div>
      </div> */}

      <Slider ref={sliderRef} {...settings}>
        {sliderData.map((v, i) => {
          return <NewsSliderCard key={i} data={v} />;
        })}
      </Slider>
    </>
  );
}

export default NewsSlider;
