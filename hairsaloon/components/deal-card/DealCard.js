import React from "react";
import Image from "next/image";
import member4 from "../../assets/images/team/member4.jpg";
import quotes from "../../assets/images/icons/qoutes.svg";

const DealCard = ({data}) => {
  console.log("image",data)
  return (
    <div className="flex flex-co l  transition-all duration-300 items-center max-w-[900px] mx-auto relative">
    <div className="w-[100 %] h-[ 300px ] ">
        {/* <div className="img_container"> */}
        <Image src={data.image.src} alt="Image" width={data.image.width} height={data.image.height} layout='responsive' />
        {/* </div> */}
      </div> 
    </div>
  );
};

export default DealCard;
