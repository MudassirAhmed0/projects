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
import styles from "./featuresCard.module.css";

function FeaturesCard({ data }) {
  return (
    <>
      <div className={`${styles.features_car_div} text-center px-[30px] w-[100%]      md:w-[auto]`}>
        <div className="max-w-[80px] mx-auto">
          <span className="image_container">
            <Image src={data.img} alt="image" />
          </span>
        </div>
        <h6 className="work-regular text-[#111111] text-[15px] leading-[1.5] tracking-[0.5px] font-[600] mt-[10px]">
          {data.title}
        </h6>
        <p className="work-regular text-[#656565] mx-auto text-[12px] leading-[1.333] tracking-[0.5px] max-w-[300px] mt-[8px]">
          {data.text}
        </p>
      </div>
    </>
  );
}

export default FeaturesCard;
