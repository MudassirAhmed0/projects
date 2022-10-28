import React from "react";
import Image from "next/image";
import member4 from "../../assets/images/team/member4.jpg";
import quotes from "../../assets/images/icons/qoutes.svg";

const TestimonialCard = ({data}) => {
  return (
    <div className="flex flex-co l  transition-all duration-300 items-center max-w-[900px] mx-auto relative">
      <div className="w-[100px] absolute left-[-100px] top-0">
        <Image src={quotes} alt="Quotes" />
      </div>
      <div className="flex flex-col justify-center items-center max-w-[240px]">
        <div className="lazy w-[100%] h-[100%] max-w-[160px] max-h-[160px] md:h-[220p x] max-h-[203p x] md:max-w-[213p x] sm:max-w-[150p x] max-w-[65 px] rounded-[50%] overflow-hidden">
          <Image
            data-aos-once="true"
            data-aos="fade-right"
            data-aos-duration="700"
            src={data.image}
            loading="lazy"
            alt="Compelling"
          />
        </div>

        <span
          data-aos-once="true"
          data-aos="fade-right"
          data-aos-duration="700"
          className="text-[#fff] sm:text-[28px] sm:leading-[38px] text-[16px] leading-[12px] mt-[-20px] px-[20px] py-[5px] rounded-[100px] carouselcircleBlue z-[2]"
        >
          {data.name}
        </span>
      </div>
      <span
        data-aos-once="true"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="700"
        className="text-[#fff] text-left pl-[40px] text-[26px]"
      >
      {data.comment}
        
      <span className="brown-light md:text-[16px] md:leading-[34px] z-[5] mb-4 sm:text-[12px] text-[8px] leading-[0] block text-gray-500 mt-4">
            {data.date}
          </span>
      </span>
    </div>
  );
};

export default TestimonialCard;
