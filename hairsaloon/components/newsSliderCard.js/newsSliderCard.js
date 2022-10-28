import React from "react";
import Image from "next/image";
import googleBig from "../../assets/images/blogs/google-big.png";
import chevronRight from "../../assets/images/icons/chevron-right.svg";
import styles from './newsSliderCard.module.css'

function NewsSliderCard({ data }) {
  return (
    <div className="pr-[10px]">
      <div className={`${styles.news_card} item relative cursor-pointer h-[600px] md:rounded-[25px] overflow-hidden flex flex-col text-white justify-end rounded-[12px]`}>
        <div className="img_container absolute top-0 left-0 w-full h-full">
          <span className="absolute z-[5] top-0 left-0 w-full h-full bg-[#13100d4f]"></span>
          <Image src={data.image} className={`${styles.prod_img}`} layout="fill" alt="News" />
        </div>
        <div className="flex flex-col justify-end h-[10 0%] md:pb-[40px] md:px-[40px] relative sm:pb-[15px] sm:px-[18px] pb-[10px] px-[12px]">
          <span className="brown-light md:text-[16px] md:leading-[34px] z-[5] mb-4 sm:text-[12px] text-[8px] leading-[0]">
            {data.date}
          </span>
          <span className="md:mb-10 brown-light z-[5] md:leading-[34px] md:w-[63%] max-w-[483px] md:text-[26px] md:py-[0] sm:text-[22px] sm:py-[5px] py-[0] md-[100%] text-[15px] leading-[20px] mb-[5px]">
            {data.title}
          </span>
          <a
            href="./single-news.html"
            className="md:text-[15px] md:leading-[21px] flex gap-x-3 items-center relative z-[6] hover:text-[#ebc03f] transition-all duration-300 text-gold md:tracking-[3px] uppercase sm:text-[12px] text-[6px] leading-[9px] tracking-[1.2px]"
          >
            Read More
            <span className={`${styles.chevron_wrapper} mt-[4px]`}>
            <Image src={chevronRight} alt="icon" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsSliderCard;
