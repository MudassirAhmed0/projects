import { useState } from "react";
import slider1 from "../../../assets/images/blogs/slider1.jpg";
import slider2 from "../../../assets/images/blogs/slider2.jpg";
import slider3 from "../../../assets/images/blogs/slider3.jpg";
import slider4 from "../../../assets/images/blogs/slider4.jpg";
import profile1 from "../../../assets/images/team/member1.jpg";
import profile2 from "../../../assets/images/team/member2.jpg";
import profile3 from "../../../assets/images/team/member3.jpg";
import profile4 from "../../../assets/images/team/member4.jpg";
import { BlogCard } from "../blog-card/BlogCard";

export const BlogsCardSection = () => {
  const [blogs, set_blogs] = useState([
    {
      id: 1,
      blogImg: slider1,
      name: "Kamran Ali",
      profileImg: profile1,
      description:
        "Men are concerned about their hair. Well, lavish Mens beauty salon service in Karachi it's definitely something to worry about as it's one of the most striking parts of a person's appearance. Wherever you go, hair will definitely",
      date: "12 April 2022",
      likes: 405,
      comments: 203,
      share: 93,
      views: 209,
    },
    {
      id: 2,
      blogImg: slider2,
      name: "Salman",
      profileImg: profile2,
      description:
        "We all like to be pampered from time to time. Modern life can Lavish Salon Service in Karachi bring unspeakable levels of stress, so sometimes we deserve money and time for ourselves. Now with hair salon services for",
      date: "23 Mach 2020",
      likes: 50,
      comments: 43,
      share: 84,
      views: 76,
    },
    {
      id: 3,
      blogImg: slider3,
      name: "Asif Hussain",
      profileImg: profile3,
      description:
        "People are becoming more and more fashion Men Hair Salon Service in Karachi conscious these days and are actively looking for good beauty salons that can enhance their overall beauty. Hairstyle is an integral part of any individual's",
      date: "12 August 2021",
      likes: 95,
      comments: 48,
      share: 62,
      views: 21909,
    },
    {
      id: 4,
      blogImg: slider4,
      name: "Kamran Ali",
      profileImg: profile4,
      description:
        " Over the last few decades, the age of men has definitely changed. This is Men Saloon Service In Karachi because more and more men are paying much more attention to grooming habits than their fathers. One of the",
      date: "12 April 2022",
      likes: 405,
      comments: 203,
      share: 93,
      views: 209,
    },
    {
      id: 5,
      blogImg: slider1,
      name: "Salman",
      profileImg: profile1,
      description:
        "If we are talking about ten to twenty years ago, Men Hair Salon in Karachi were mainly used by ladies and girls. But as time went on, it has now become an attraction for men. Men have also",
      date: "23 Mach 2020",
      likes: 50,
      comments: 43,
      share: 3,
      views: 76,
    },
    {
      id: 6,
      blogImg: slider2,
      name: "Asif Hussain",
      profileImg: profile2,
      description:
        " Over the last few decades, the age of men has definitely changed. This is Men Saloon Service In Karachi because more and more men are paying much more attention to grooming habits than their fathers. One of the",
      date: "12 August 2021",
      likes: 66,
      comments: 48,
      share: 46,
      views: 21909,
    },
  ]);
  return (
    <section className="relative bg-[#fff7e5 ] md:mt-[0px] mt-[-12px]">
      <div className="myContainer text-white flex flex-col md:py-[100px] z-[3] items-center relative pt-[50px] pb-[75px]">
        <div className="w-full flex justify-start flex-wrap gap-x-[1.5%] gap-y-[20px]">
          {blogs.map((value) => (
            <BlogCard key={value.blogImg} blog={value} />
          ))}
        </div>
      </div>
    </section>
  );
};
