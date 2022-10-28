import React from "react";
import Image from "next/image";
import logoSquare from "../../assets/images/logo/logo-square.png";
import vat from "../../assets/images/logo/vat.png";
import styles from "./colorFilter.module.css";
import heroImage from "../../assets/images/hero-image.jpg";

function ColorFilter({data}) {
  return (
    <>
      <div
        className={`w-[100%] border-[#fbf1e8] border-[1px] absolute z-[2] bg-[#fff] f-out max-h-[350px] overflow-auto`}
      >
        <div className="w-[100%] px-[20px] py-[20px]">
          <div className="mt-[10px]">
            {data.map((value,index)=> {
              return (
                <div key={index} className={`${value.colorCode} w-[100%] h-[48px] p-[10px]`}>
                  <p className="fwl text-[#fff] text-[11px] capitalize">{value.name}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ColorFilter;
