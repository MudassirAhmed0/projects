import Image from "next/image";
import chevronRightWhiteIcon from "../../../assets/images/icons/chevron-right-white.svg";
// import savingMachine from "../../../assets/images/icons/shaving-machine.png";
import savingMachine from "../../../assets/images/icons/cut.png";
// import foamBottle from "../../../assets/images/icons/foam-bottle.png";
import foamBottle from "../../../assets/images/icons/dry.png";
// import razor from "../../../assets/images/icons/razor.png";
import razor from "../../../assets/images/icons/shave.png";

// cut.png
// shave.png
// dry.png

import styles from "./servicesBlue.module.css"

function ServicesBlue() {
  return (
    <>
      <section className="relative bg-[#48486d] md:mt-[0px] mt-[-12px]">
        <div className="absolute top-0 left-0 w-full h-full">
          <span className="absolute top-0 left-0 z-[2] w-full h-full homeOverlay3"></span>
          <video
            className="w-full h-full object-cover relative lazy"
            loading="lazy"
            src="/videos/final_6214fe1c75568300765a62ca_225206.mp4"
            muted
            loop
            autoplay="true"
          ></video>
        </div>
        <div className="myContainer text-white flex flex-col md:py-[205px] z-[3] items-center relative pt-[50px] pb-[75px]">
          <h4
            data-aos-once="true"
            data-aos="fade-up"
            data-aos-duration="700"
            className="uppercase md:text-[40px] md:leading-[56px] md:tracking-[8px] text-center text-[19px] leading-[27px] tracking-[3.8px]"
          >
            Hair &#38; Photo Services
          </h4>

          <div className="all-services-div md:mt-[182px] md:mb-[100px] flex md:flex-row md:px-10 w-full justify-between mt-[80px] md:mb-[80px] mb-[0] flex-col">
            {/* <img
                  src="./assets/images/home/sheild.svg"
                  className="sheild-svg absolute hidden xl:block left-[50%] translate-x-[-50%] translate-y-[-20%]"
              /> */}
            <ul className="flex flex-row justify-between w-[100%]">
              <li className={`${styles.services_card} flex flex-col relative px-[30px] gap-x-4 w-full pb-[20px] sm:w-[336px ] items-center group transition-all duration-300 cursor-pointer rounded-[20px] hover:bg-[#ffffff1f]`}>
                <a
                  href="./service.html"
                  className="w-full h-full absolute top-0 left-0"
                ></a>
                <span className={`${styles.icon_circle} rounded-full bg-[#ffffff66 ] w-[95px] h-[95px] flex justify-center items-center`}>
                  <Image
                    src={savingMachine}
                    width="70%"
                    height="60px"
                    alt="background image"
                  />
                </span>
                <span className="brown-regular tracking-[0.9px] pt-[15px] pb-[10px] text-[28px]">
                  Trim &#38; Cut
                </span>
                <p className="text-center text-[18px] leading-[24px]">
                  From little dude cuts to big dude cuts, fades to mullets – we
                  take pride in being able to specialize in all types of men’s
                  hair needs. To view a full list of services please click the
                  icon above.
                </p>
              </li>
              <li className={`${styles.services_card} flex flex-col relative px-[30px] gap-x-4 w-full pb-[20px] sm:w-[336px ] items-center group transition-all duration-300 cursor-pointer rounded-[20px] hover:bg-[#ffffff1f]`}>
                <a
                  href="./engineering.html"
                  className="w-full h-full absolute top-0 left-0"
                ></a>
                <span className={`${styles.icon_circle} rounded-full bg-[#ffffff66 ] w-[95px] h-[95px] flex justify-center items-center`}>
                  <Image
                    src={foamBottle}
                    width="70%"
                    height="60px"
                    alt="background image"
                  />
                </span>
                <span className="brown-regular tracking-[0.9px] pt-[15px] pb-[10px] text-[28px]">
                  Wash &#38; Dry
                </span>
                <p className="text-center text-[18px] leading-[24px]">
                  Take a seat in our fine barber chairs, lean back and rest
                  while we provide other services that just allow you to sit
                  back and relax.
                </p>
              </li>
              <li className={`${styles.services_card} flex flex-col relative px-[30px] gap-x-4 w-full pb-[20px] sm:w-[336px ] items-center group transition-all duration-300 cursor-pointer rounded-[20px] hover:bg-[#ffffff1f]`}>
                <a
                  href="./governance.html"
                  className="w-full h-full absolute top-0 left-0"
                ></a>
                <span className={`${styles.icon_circle} rounded-full bg-[#ffffff66 ] w-[95px] h-[95px] flex justify-center items-center`}>
                  <Image
                    src={razor}
                    width="70%"
                    height="60px"
                    alt="background image"
                  />
                </span>
                <span className="brown-regular tracking-[0.9px] pt-[15px] pb-[10px] text-[28px]">
                  Beard &#38; Shave
                </span>
                <p className="text-center text-[18px] leading-[24px]">
                  Tame the tangles and untidy facial hairs with one of our many
                  beard trimming and shaping services.
                </p>
              </li>
            </ul>
          </div>
          <div className="md:w-[320px] md:mx-[0] mx-auto w-[320px]">
            <a
              // href="./news.html"
              href="#make_an_appointment"
              className="md:w-[320px] md:h-[53px] bg-[#B89535] text-center hover:bg-[#EBC03F] rounded-[100px] uppercase text-[#ffffff] md:text-[15px] md:leading-[24px] md:tracking-[3px] flex justify-center items-center md:ml-[0] w-[118px] h-[35px] ml-[-18px] text-[9px] leading-[14px] tracking-[1.8px]"
            >
              Schedule an Appoinment
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesBlue;
