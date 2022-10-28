import React from "react";
import Slider from "react-slick";
import styles from "./TestimonialSlider.module.css";
import Image from "next/image";
import googleBig from "../../assets/images/blogs/google-big.png";
import laptop from "../../assets/images/blogs/laptop.png";
import github from "../../assets/images/blogs/github.png";
import twoLaptop from "../../assets/images/blogs/two-laptop.jpg";
import slider1 from "../../assets/images/blogs/slider1.jpg";
import slider2 from "../../assets/images/blogs/slider2.jpg";
import slider3 from "../../assets/images/blogs/slider3.jpg";
import slider4 from "../../assets/images/blogs/slider4.jpg";
import member1 from "../../assets/images/team/member1.jpg";
import member2 from "../../assets/images/team/member2.jpg";
import member3 from "../../assets/images/team/member3.jpg";
import member4 from "../../assets/images/team/member4.jpg";
import chevronRight from "../../assets/images/icons/chevron-right.svg";
import arrowLeftHand from "../../assets/images/icons/arrow-left-hand.svg";
import arrowRightHand from "../../assets/images/icons/arrow-right-hand.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import TestimonialCard from "../testimonial-card/TestimonialCard";

function TestimonialSlider() {
  const sliderRef = useRef(null);
  console.log("sliderRef", sliderRef.current);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 8000,
    arrows: false,
  };

  const sliderData = [
    {
      name: "Kamran Ali",
      date: "April 16, 2022",
      comment:
        "  Though Cutler’s been a longtime staple of New York Fashion Week, the clients of the Australian-born stylist (and former rugby player and current marathoner) tend to be 'less influenced by trends,'",
      image: member4,
    },
    {
      name: "Salman",
      date: "April 15, 2022",
      comment:
        "  The clients of the Australian-born stylist (and former rugby player and current marathoner) tend to be 'less influenced by trends,'",
      image: member3,
    },
    {
      name: "Asif Hussain",
      date: "April 15, 2022",
      comment:
        "Cutler’s been a longtime staple of New York Fashion Week, the clients of the Australian-born stylist (and former rugby player and current marathoner) tend to be 'less influenced by trends,'",
      image: member2,
    },
    {
      name: "Sajjad Asim",
      date: "April 16, 2022",
      comment:
        "  Though Cutler’s been a longtime staple of New York Fashion Week, Our stylist (and former rugby player and current marathoner) tend to be 'less influenced by trends,'",
      image: member1,
    },
  ];

  return (
    <Slider ref={sliderRef} {...settings}>
      {sliderData.map((v, i) => {
        return <TestimonialCard key={i} data={v} />;
      })}
    </Slider>
  );
}

export default TestimonialSlider;
