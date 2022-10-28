import React, { Component } from "react";
import styles from "./slickSlider.module.css";
import NewsSlider from "../newsSlider/newsSlider";
import { useRef } from 'react'

function SlickSlder() {
  const sliderRef = useRef(null);
  //   console.log('sliderRef',sliderRef);
  return (
    <>
      <section className={`${styles.abc} bg-light`}>
        <div className="rightEdge homeCarousel ml-auto rightEdgeCarousel md:pl-[60px] md:pt-[130px] relative md:pb-[130px] text-black pt-[85px] pl-[35px] pb-[34px]">
          <div className="flex justify-between pr-[60px]">
            <h4
              className="md:text-[40px] uppercase md:leading-[56px] md:tracking-[8px] text-[23px] leading-[32px] tracking-[4.6px]"
              data-aos-once="true"
              data-aos="fade"
              data-aos-duration="700"
            >
              Hair &#38; Photo Blogs
            </h4>
          </div>
          <div className={`"md:mt-[65px] mt-[16px]" ${styles.slider_main_div}`}>
            <NewsSlider />
          </div>
          <div className="md:w-[185px] md:mx-[0] mx-auto w-[118px]">
            <a
              href="./news.html"
              className="md:w-[185px] md:h-[53px] bg-[#B89535] hover:bg-[#EBC03F] rounded-[100px] uppercase text-[#ffffff] md:text-[15px] md:leading-[24px] md:tracking-[3px] flex justify-center items-center md:mt-[63px] md:ml-[0] w-[118px] h-[35px] mt-[33px] ml-[-18px] text-[9px] leading-[14px] tracking-[1.8px]"
            >
              Explore all
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default SlickSlder;
