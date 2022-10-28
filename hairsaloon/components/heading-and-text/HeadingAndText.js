import React, { Fragment } from "react";

const HeadingAndText = ({ data }) => {
  console.log("ddd", data);
  return (
    <section className="bg-light border-b-[2px] border-[#bfbdb9]">
      <section>
        <div className="myContainer text-black fuelled-div pb-[77px] pt-[100px]">
          {data.map((value) => {
            return (
              <Fragment key={value.title_part1}>
                <h3
                  data-aos-once="true"
                  data-aos="fade-up"
                  data-aos-duration="700"
                  className="mt-3 mb-4 mx-auto md:text-[40px] uppercase md:tracking-[8px] md:leading-[56px] md:pt-[0] text-[20px] leading-[32px] tracking-[3.8px] pt-[53px]"
                >
                  {value.title_part1}
                  <span className="text-gold"> {value.title_part2}</span>
                </h3>
                {value.description.map((valu) => {
                  return (
                    <p
                      key={valu}
                      data-aos-once="true"
                      data-aos="fade-up"
                      data-aos-delay="300"
                      data-aos-duration="700"
                      className="mb-8 max-w-[100%] mx-auto brown-light md:text-xl md:leading-[30px]g md:w-[100%] sm:text-[18px] sm:w-[455px] text-[13px] leading-[23px] w-full sm:w-[100%]"
                    >
                      {valu}
                    </p>
                  );
                })}
              </Fragment>
            );
          })}
        </div>
      </section>
    </section>
  );
};

export default HeadingAndText;
