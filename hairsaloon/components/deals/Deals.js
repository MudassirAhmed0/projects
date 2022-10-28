import React, { Component } from "react";
import styles from "./Deals.module.css";
import Image from "next/image";
import googleBig from "../../assets/images/blogs/google-big.png";
import laptop from "../../assets/images/blogs/laptop.png";
import github from "../../assets/images/blogs/github.png";
import twoLaptop from "../../assets/images/blogs/github.png";
import chevronRight from "../../assets/images/icons/chevron-right.svg";
import arrowLeftHand from "../../assets/images/icons/arrow-left-hand.svg";
import arrowRightHand from "../../assets/images/icons/arrow-right-hand.svg";
import { useRef } from "react";
import DealsSlider from "../deals-slider/DealsSlider";

function Deals() {
  const sliderRef = useRef(null);
  //   console.log('sliderRef',sliderRef);
  return (
    <>
      <section className={`${styles.abc} bg-black`}>
        <div className="rightEdge mx-auto rightEdgeCarousel md:px[60px] md:pt-[130px] relative md:pb-[130px] text-black pt-[85px] px-[35px] pb-[34px]">
          <div className="flex justify-between pr-[60px]">
            <h4
              className="md:text-[40px] uppercase md:leading-[56px] md:tracking-[8px] text-[23px] leading-[32px] tracking-[4.6px] text-[#fff]"
              data-aos-once="true"
              data-aos="fade"
              data-aos-duration="700"
            >
              <span className="text-gold"> WHAT</span> CLIENTS SAY
            </h4>
          </div>

          <div className={`"md:mt-[65px] mt-[16px]" ${styles.slider_main_div}`}>
            <DealsSlider />
          </div>
        </div>
      </section>
    </>
  );
}

export default Deals;
