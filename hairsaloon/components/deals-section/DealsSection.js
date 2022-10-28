import Image from "next/image";
import deal1 from "../../assets/images/deals/deal-offer1.jpeg";
import deal2 from "../../assets/images/deals/deal-offer2.jpeg";
import deal3 from "../../assets/images/deals/deal-offer3.jpeg";
import deal4 from "../../assets/images/deals/deal-offer4.jpeg";
import styles from "./DealsSection.module.css";
import DealOfferCard from "../deal-offer-card/DealOfferCard";
import ImgGallery from "../img-gallery/ImgGallery";
import { useState } from "react";

const allDeals = [
  deal1,
  deal2,
  deal3,
  deal4,
  deal1,
  deal2,
  deal3,
  deal4,
  deal1,
  deal2,
  deal3,
  deal4,
  deal1,
  deal2,
  deal3,
  deal4,
];

function ServicesBlue() {
  const [imageToOpen, set_imageToOpen] = useState("");

  const openImg = (dealOffer) => {
    console.log("openImg", dealOffer);
    set_imageToOpen(dealOffer);
    console.log("imageToOpen",imageToOpen)
  };
  const closeGallery = () => {
    set_imageToOpen('');
  };

  return (
    <>
      <section className="relative bg-[#fff7e5] md:mt-[0px] mt-[-12px]">
        <div className="myContainer text-white flex flex-col md:py-[100px] z-[3] items-center relative pt-[50px] pb-[75px]">
          <h3
            data-aos-once="true"
            data-aos="fade-up"
            data-aos-duration="700"
            className="text-center mx-auto md:text-[40px] uppercase md:tracking-[8px] md:leading-[56px] md:pt-[0] text-[20px] leading-[32px] tracking-[3.8px]"
          >
            <span className="text-gold"> Deals</span>
          </h3>
          <div className="all-services-div  flex md:flex-row md:px-10 w-full justify-between mt-[80px]  flex-col">
            <div className="flex flex-row justify-between w-[100%] flex-wrap gap-x-[1.5%] gap-y-[25px]">
              {allDeals.map((value) => (
                <DealOfferCard
                  dealOffer={value}
                  key={value}
                  openImg={openImg}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {imageToOpen !== "" ? <ImgGallery image={imageToOpen.src} closeGallery={closeGallery} /> : ""}
    </>
  );
}

export default ServicesBlue;
