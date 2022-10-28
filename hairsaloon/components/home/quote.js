import Image from "next/image";
import quotes from "../../assets/images/icons/qoutes.svg";

function Quote({data}) {
  return (
    <>
      <section className="bg-light">
        <section
          id="thirdSection"
          className="max-w-[1100px] mx-auto pb-[100px] flex justify-between md:flex-row md:pt-[130px] md:pl-[0] md:pr-[0] flex-col pt-[40px] pl-[30px] pr-[15px]"
        >
          <div className="w-[22%]">
            <Image src={quotes} alt="Quotes" />
          </div>
          <div className="max-w-[960px] md:mt-[0] mt-[25px]">
            <p
              data-aos-once="true"
              data-aos="fade"
              data-aos-delay="500"
              data-aos-duration="700"
              className="text-black text-[28px] leading-[42px]"
            >
              {data.text[0]}
              <span className="text-gold"> {data.text[1]}</span>{data.text[2]}
            </p>
            <div className="md:mt-[88px] flex flex-col mt-[25px]">
              <span
                data-aos-once="true"
                data-aos="fade-up"
                data-aos-duration="700"
                className="text-black text-[22px] leading-[30px]"
              >
               {data.name}
              </span>
              <span
                data-aos-once="true"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="700"
                className="text-black brown-light text-lg leading-[30px]"
              >
               {data.designation}
              </span>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Quote;
