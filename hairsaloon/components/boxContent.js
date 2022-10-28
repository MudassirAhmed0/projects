import Image from "next/image";
import missionBrandIcon from "../assets/images/bg/missionbrandicon.png";
import scissorAndComb from "../assets/images/bg/scissor-comb.jpg";

function BoxContent({ data }) {
  return (
    <>
      <section className="bg-light">
        <section id="secondSection" className="">
          <div className="rightEdge bg-offWhite md:mt-[-40px] ml-auto z-[3] relative mt-[-95px]">
            <div className="md:py-[130px] z-[3] md:pl-[30px] overflow-hidden md:pr-[60px] max-w-[1360px] md:flex-row flex flex-col justify-between relative pt-[40px] pl-[17px] pr-[30px]">
              <h2
                data-aos-once="true"
                data-aos="fade"
                data-aos-duration="700"
                className="2xl:text-[40px] xl:text-[32px] md:text-[32px] mt-[-10px] md:text-right 2xl:tracking-[8px] xl:tracking-[7px] md:tracking-[7px] 2xl:leading-[56px] xl:leading-[46px] md:leading-[46px] uppercase md:w-[38.5%] text-black text-[34px] leading-[48px] tracking-[7px] text-left w-[100%]"
              >
                {data.title[0]}
                <span className="tracking-[7px] xl:tracking-[8px] 2xl:tracking-[9px]">
                  <br /> <span className="text-gold"> {data.title[1]}</span>
                </span>
              </h2>
              <div className="brown-light md:w-[58%] leading-[30px] md:mt-[0] md:text-xl text-[20px] text-black mt-[25px] w-[100%]">
                {data.paragraphs.map((v, i) => {
                  return (
                    <>
                      <p
                        data-aos-once="true"
                        data-aos="fade-up"
                        data-aos-delay={`${i !== 0 ? "700" : "500"}`}
                        data-aos-duration="700"
                        className={`"brown-light" ${
                          i !== 0 ? "mt-10 md:pb-[0] pb-[45px]" : ""
                        }`}
                      >
                        {v}
                      </p>
                    </>
                  );
                })}
                <span id="quote_text" className="absolute bottom-[30px]"></span>
              </div>

              <span className="absolute bottom-0 left-0 z-[-1] md:block hidden">
                <Image src={missionBrandIcon} alt="background image" />
                {/* <Image src={scissorAndComb} width="300px" height="200px" alt="background image" /> */}
              </span>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default BoxContent;
