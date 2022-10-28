// import video1 from "/big-city-of-big-data-animation-of-the-city.mp4";

function Hero({ data }) {
  return (
    <section id="firstSection" className={"relative h-[613px]"}>
      <div className="w-full h-full absolute top-0 left-0">
        <span className="absolute top-0 left-0 w-full h-full z-[2] homeHeroOverlay1"></span>

        <video
          muted
          // autoplay
          autoplay="true"
          loop
          className="w-full h-full object-cover relative"
          src="/videos/Barber Shop - 39763.mp4"
        ></video>
      </div>

      {/* <ReactPlayer url='https://www.youtube.com/watch?v=wWgIAphfn2U' /> */}

      {/* <ReactPlayer url='big-city-of-big-data-animation-of-the-city.mp4' /> */}

      <div className="myContainer relative flex flex-col z-[2] justify-center h-[613px] text-white">
        <h1
          id="heroHeading"
          data-aos-once="true"
          data-aos="fade"
          data-aos-duration="700"
          className="md:text-5xl uppercase md:leading-[64px] hidden lg:block md:tracking-[9.6px] md:mt-[0] sm:text-[34px] sm:leading-[45px] text-[26px] leading-[35px] tracking-[5.2px] mt-[-5px]"
        >
          <span className="text-gold">{data.title[0]} </span> {data.title[1]}{" "}
          <br />
          {data.title[2]}
        </h1>
        <h1
          id="heroHeading"
          data-aos-once="true"
          data-aos="fade"
          data-aos-duration="700"
          className="md:text-5xl uppercase lg:hidden md:leading-[64px] md:tracking-[9.6px] md:mt-[0] sm:text-[34px] sm:leading-[45px] text-[26px] leading-[35px] tracking-[5.2px] mt-[-5px]"
        >
          <span className="text-gold">{data.title[0]} </span> {data.title[1]}{" "}
          <br />
          {data.title[2]}
        </h1>
        <p
          id="heroText"
          data-aos-once="true"
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="700"
          className="delay-5s md:text-[20px] md:leading-[30px] md:mt-4 brown-light md:w-[90%] max-w-[837px] sm:text-[18px] text-[16px] leading-[28px] w-[100%] mt-[2rem]"
        >
          {data.text}
        </p>
      </div>
    </section>
  );
}

export default Hero;
