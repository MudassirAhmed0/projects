import React from "react";

function ColorBox({ data }) {
  return (
    <>
      <div className="w-[83px] color-selecte d">
        <div className={`w-[75px] h-[75px] ${data.colorCode} m-[3px]`}></div>
        <p className="work-regular text-[12px] leading-[1.2] pt-[3px] pr-[3px] pb-[5px] pl-[5px] ">
          {data.name}
        </p>
      </div>
    </>
  );
}

export default ColorBox;
