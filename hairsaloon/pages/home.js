import React from "react";
import Layout from "../components/layout/layout";
import Hero from "../components/hero";
import BoxContent from "../components/boxContent";
import Quote from "../components/home/quote";
import RedStrip from "../components/redStrip";
import ServicesBlue from "../components/home/servicesBlue/servicesBlue";
import BlueBubbleSlider from "../components/home/blue-bubble-slider/blueBubbleSlider";
import SlickSlder from "../components/home/slickSlder";

export default function HomePage() {
  const heroData = {
    title: ["More", "Than", "Just A Barber Shop"],
    text: "With 845+ 5-Star Reviews, Isn't It Time You Enhanced Your Appearance With Jacksonville's Best Stylists at Luxury Hair Studio For Men.",
  };

  const boxContentData = {
    title: ["Hair & Photo", "About Us"],
    paragraphs: [
      "Barba that has absorbed the unique atmosphere of Kingsland, Auckland to create an environment that reflects the epitome of the modern yet traditional urban male and dynamic city living. A talented & passionate team of Master Barbers that are homegrown, we are dedicated professionals with unsurpassed industry experience. We are the professionals you want in your corner for all your barbering & shaving needs. We have you covered.",
      "Based just a minute from Kingsland Station, we provide a full range of male grooming services including; haircuts, traditional wet shaves, face cleansing and bespoke men’s skincare as well as gift vouchers and male grooming products.",
    ],
  };

  const quoteData = {
    text: [
      "Got a hair cut and perm by",
      "Hair & Photo. ",
      "Very professional and enjoyable experience. I got coffee and dates while getting my hair done and a massage in the chair while waiting for the perm to set. Will be back and will recommend to others !",
    ],
    name: "Mesfer Almesfer",
    designation: "Hair & Photo (Manager)",
  };

  const redStripData = {
    text: "HAIR SALOON IS BUILT ON THE BELIEF MEN DESERVE BETTER®",
  };

  const servicesBlueData = {};

  return (
    <Layout>
      <Hero data={heroData} />
      <BoxContent data={boxContentData} />
      <Quote data={quoteData} />
      <RedStrip data={redStripData} />
      <section className="bg-light">
        <section>
          <div className="myContainer text-black fuelled-div pb-[77px] pt-[100px]">
            <h3
              data-aos-once="true"
              data-aos="fade-up"
              data-aos-duration="700"
              className="text-center mx-auto md:text-[40px] uppercase md:tracking-[8px] md:leading-[56px] md:pt-[0] text-[20px] leading-[32px] tracking-[3.8px] pt-[53px]"
            >
              Fuelled by a secure by <br />
              design <span className="text-gold">approach</span>
            </h3>
            <p
              data-aos-once="true"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="700"
              className="mt-8 max-w-[100%] text-center mx-auto brown-light md:text-xl md:leading-[30px]g md:w-[840px] sm:text-[18px] sm:w-[455px] text-[13px] leading-[23px] w-full sm:w-[336px]"
            >
              Cybersecurity at NEOM will be enabled by an invisible
              infrastructure that maintains resilience{" "}
              <br className="md:block hidden" />
              and empowers a digital lifestyle. The cybersecurity program will
              be fuelled <br className="md:block hidden" />a secure by design
              approach
            </p>
          </div>
          <div className="">
            <div id="includedContent"></div>
          </div>
        </section>
      </section>
      <ServicesBlue data={servicesBlueData} />
      <BlueBubbleSlider />
      <SlickSlder />
    </Layout>
  );
}
