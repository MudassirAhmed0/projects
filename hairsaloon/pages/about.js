// import video1 from "../assets/videos/big-city-of-big-data-animation-of-the-city.mp4";
import React from "react";
import Image from "next/image";
import Layout from "../components/layout/layout";
import BlueBubbleSlider from "../components/home/blue-bubble-slider/blueBubbleSlider";
import HeroBlue from "../components/hero-blue/HeroBlue";
import CTA from "../components/cta/CTA";
import HeadingAndText from "../components/heading-and-text/HeadingAndText";
import Testimonial from "../components/testimonial/Testimonial";
import MakeAnAppointment from "../components/make-an-appointment/MakeAnAppointment";

const redStripData = {
  text: "GET READY TO GET HANDSOME AGAIN!",
};

const textContent = [
  {
    title_part1: "the",
    title_part2: "beginning",
    description: [
      "After picking up the best stylists in town, we opened the doors to our elegant and posh men’s salon in April of 2015. Located in DHA, Gulshan-E-Iqbal, and Gulistan-E-Johar, Levish Men’s Salon strives to deliver these areas glamour flared with an all-around city sensation.",
      "The Lavish Men’s Salon staff’s classic vision is held chief to Karachi standards and is made up of an eclectic company of trend-setting artists from around Pakistan who all contribute to a passion for timeless and contemporary beauty and grace.",
    ],
  },
  {
    title_part1: "TEAM",
    title_part2: "OF EXPERT STYLISTS",
    description: [
      "Lavish Men’ Salon team is inspired by a specific vision and they love what they do because of the customer who trust them. At Lavish Men’ Salon we take our time to groom the best look that attracts their appeal and keep them always willing to groom by Lavish Men’ Salon.",
    ],
  },
];

export default function About() {
  return (
    <Layout>
      <HeroBlue />
      <CTA data={redStripData} />
      <HeadingAndText data={textContent} />
      <BlueBubbleSlider />
      <Testimonial />
      <MakeAnAppointment />
    </Layout>
  );
}
