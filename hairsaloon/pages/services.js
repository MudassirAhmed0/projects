import React from "react";
import Layout from "../components/layout/layout";
import HeroBlue from "../components/hero-blue/HeroBlue";
import CTA from "../components/cta/CTA";
import MakeAnAppointment from "../components/make-an-appointment/MakeAnAppointment";
import ServicesBlue from "../components/home/servicesBlue/servicesBlue";
import Deals from "../components/deals/Deals";

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

const heroSectionData = {
  title: "Services we Provide",
  pageName: "Services",
};

export default function Services() {
  return (
    <Layout>
      <HeroBlue data={heroSectionData} />
      <CTA data={redStripData} />
      <ServicesBlue />
      <Deals />
      <MakeAnAppointment />
    </Layout>
  );
}
