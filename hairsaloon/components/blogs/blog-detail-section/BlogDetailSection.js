import Image from "next/image";
import React from "react";
import {
  AiFillLike,
  AiOutlineComment,
  AiOutlineShareAlt,
  AiFillEye,
} from "react-icons/ai";

const BlogDetailSection = ({ blogDetails }) => {
  const gg = "https://static.toiimg.com/photo/msid-84375560/84375560.jpg";
  const ff = "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg";
  console.log("blogImg", blogDetails.blogImg);
  console.log("gg", gg);
  return (
    <section className="relative bg-[#fff7e5 ] md:mt-[0px] mt-[-12px]">
      <div className="myContainer text-[#000] text-[14px] flex flex-col md:py-[100px] z-[3] items-center relative pt-[50px] pb-[75px]">
        <header className="w-full">
          <div className="w-full h-[500px] rounded-[15px] overflow-hidden">
            <span className="img_container">
              <Image src={gg} layout="responsive" width={1000} height={500} />
            </span>
          </div>

          <div>
            <div className="w-full flex justify-between text-[20px] py-5 border-[1px] rounded-[15px] bg-[#f1f7ff] my-4 px-4">
              <span>
                <AiFillLike className="mx-auto text-blue-400" size={40} />
                Likes <span className="text-gold">({blogDetails.likes})</span>
              </span>
              <span>
                <AiOutlineComment className="mx-auto text-blue-400" size={40} />
                Comments
                <span className="text-gold">({blogDetails.comments})</span>
              </span>
              <span>
                <AiOutlineShareAlt className="mx-auto text-blue-400" size={40} />
                Share <span className="text-gold">({blogDetails.share})</span>
              </span>
              <span>
                <AiFillEye className="mx-auto text-blue-400" size={40} />
                Views <span className="text-gold">({blogDetails.views})</span>
              </span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center">
                <div className="w-[60px] h-[60px] rounded-[50px] overflow-hidden">
                  <span className="img_container">
                    <Image src={ff} layout="responsive" width={100} height={100} />
                  </span>
                </div>
                <span className="ml-2 text-[20px]">{blogDetails.name}</span>
              </div>
              <div>
                <span className="text-[14px] text-gray-400">{blogDetails.date}</span>
              </div>
            </div>
          </div>
        </header>
        <div>
          <h3 className="text-[30px] capitalize mb-2">{blogDetails.title}</h3>
          <p className="mb-3">
            {blogDetails.description} {blogDetails.description}
            {blogDetails.description}
            {blogDetails.description}
            {blogDetails.description}
            {blogDetails.description}
            {blogDetails.description}
          </p>
          <p className="mb-3">
            {blogDetails.description} {blogDetails.description}
            {blogDetails.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailSection;
