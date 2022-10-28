import React from "react";
import Layout from "../components/layout/layout";
import HeroBlue from "../components/hero-blue/HeroBlue";
import DealsSection from "../components/deals-section/DealsSection";

export default function Deals() {
  const heroSectionData = {
    title: "Our Deals",
    pageName: "Deals",
  };

  return (
    <Layout>
      <HeroBlue data={heroSectionData} />
      <DealsSection />
    </Layout>
  );
}
