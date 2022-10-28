import Image from "next/image";
import Link from "next/link";

export const BlogCard = ({ blog }) => {
  return (
    <Link href={`blog-details/${blog.id}`}>
    <div className="w-[32%] rounded-[5px] shadow-lg overflow-hidden cursor-pointer">
      <div className="w-full">
        <Image src={blog.blogImg} layout="responsive" />
        <div className="bg-[#fff] text-[#000]">
          <div>
            <header className=" flex justify-between items-center border-b-[1px] border-gray-300 px-4 py-2">
              <div className="   flex justify-start items-center">
                <div className="w-[40px] h-[40px] rounded-[50px] overflow-hidden">
                  <Image src={blog.profileImg} />
                </div>
                <div>
                  <h6 className="ml-3 text-[18px] text-gold">{blog.name}</h6>
                </div>
              </div>
              <p className="bg-[#c19333] rounded-[50px] px-2 text-[#fff] text-[11px] flex justify-end m-0 p-0">
                {blog.date}
              </p>
            </header>
            <div className="px-4 pt-4 pb-1">
              <p className="h-[140px] overflow-hidden">
                {blog.description}
              </p>
              <a><button className="text-gold my-3 hover:underline hover:decoration-1">Read More</button></a>
            </div>
          </div>

          <footer className="border-t-[1px] border-gray-300 px-4 py-2 flex flex-wrap justify-start gap-x-[5%] gap-y-[3px]">
            <span className="text-[14px]">
              Likes <span className="text-blue-400">({blog.likes})</span>
            </span>
            <span className="text-[14px]">
              Comments <span className="text-blue-400">({blog.comments})</span>
            </span>
            <span className="text-[14px]">
              Share <span className="text-blue-400">({blog.share})</span>
            </span>
            <span className="text-[14px]">
              Views <span className="text-blue-400">({blog.views})</span>
            </span>
          </footer>
        </div>
      </div>
    </div>
    </Link>
  );
};
