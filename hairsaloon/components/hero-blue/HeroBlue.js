import Image from "next/image";
import HeroBl from "../../assets/images/brandicons/heroBI.png";
import styles from "./heroImgDiv.module.css";

function HeroBlue({ data }) {
  // console.log("data44",data);
  return (
    <section id="firstSection" className="relative min-h-[621px]">
      <div className="w-full h-full absolute top-0 left-0">
        <span className="absolute top-0 left-0 w-full h-full z-[3] homeHeroOverlay1"></span>
        <span className="absolute top-0 left-0 w-full h-full z-[2] homeHeroOverlay2"></span>
        <span
          className={`absolute top-0 right-0 w-full h-full z-[4] img_container ${styles.heroImgDiv}`}
        >
          <Image src={HeroBl} className="bgimg" alt="brandIcon" />
        </span>
      </div>
      <div className="myContainer relative flex flex-col z-[4] justify-center items-center min-h-[621px] text-white">
        <h1
          id="heroHeading"
          data-aos-once="true"
          data-aos="fade-up"
          data-aos-duration="700"
          className="sm:text-[48px] uppercase sm:w-1/ 2 max-w-[760px] sm:leading-[64px] sm:tracking-[9.6px] sm:text-center text-[32px] leading-[43px] text-center tracking-[6.4px] w-[100%] md:mt-[0] mt-[-60px]"
        >
          {data?.title ? data.title : "Let You Know Us"}
        </h1>
        <span
          id="heroText"
          data-aos-once="true"
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="700"
          className="delay-5s text-base w-[100%] mt-6 justify-center brown-light flex gap-x-4 items-center"
        >
          <a href="./" className="brown-light text-[#868786]">
            Home
          </a>
          <span className="brown-light text-gold bookmarkDivider"></span>
          <span className="brown-light text-gold">
            {data?.pageName ? data.pageName : "About us"}
          </span>
        </span>
      </div>
    </section>
  );
}

export default HeroBlue;
