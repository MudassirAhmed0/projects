import React from "react";
import { MdOutlineClose } from "react-icons/md";
import Image from "next/image";

const ImgGallery = ({image,closeGallery}) => {
  console.log("image",image)
  return (
    <div className="showGallery hidden w-[100%] h-[100vh] bg-[#000000c9] fixed left-0 top-0 right-0 bottom-0 z-[31] flex justify-center items-center">
      <div className="relative  w-[80%] max-w-[630px] max-h-[630px] mt-[50px]">
        <MdOutlineClose
          color="#ccc"
          className="text-[30px] absolute right-[0px] top-[-35px] cursor-pointer"
          onClick={()=>closeGallery()}
        />
        <Image src={image} layout="responsive" width={1000} height={900} />
      </div>
    </div>
  );
};

export default ImgGallery;
