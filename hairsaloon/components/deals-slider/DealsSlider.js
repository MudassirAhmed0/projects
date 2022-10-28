import React from "react";
import Slider from "react-slick";
import styles from "./DealsSlider.module.css";
import Image from "next/image";
import deal1 from "../../assets/images/deals/deal1.jpg";
import deal2 from "../../assets/images/deals/deal2.jpg";
import deal3 from "../../assets/images/deals/deal3.jpg";
import chevronRight from "../../assets/images/icons/chevron-right.svg";
import arrowLeftHand from "../../assets/images/icons/arrow-left-hand.svg";
import arrowRightHand from "../../assets/images/icons/arrow-right-hand.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import DealCard from "../deal-card/DealCard";

function DealsSlider() {
  const sliderRef = useRef(null);
  // console.log("sliderRef", sliderRef.current);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplaySpeed: 8000,
    arrows: true,
  };

  const sliderData = [
    {
      image: deal1,
    },
    {
      image: deal2,
    },
    {
      image: deal3,
    },
    {
      image: deal1,
    },
  ];

  return (
    <Slider ref={sliderRef} {...settings}>
      {sliderData.map((v, i) => {
        return <DealCard key={i} data={v} />;
      })}
    </Slider>
  );
}

export default DealsSlider;
