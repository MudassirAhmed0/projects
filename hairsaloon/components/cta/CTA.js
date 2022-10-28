import styles from "./CTA.module.css";
import logo from "../../assets/images/logo/logo.svg";
import Image from "next/image";

function CTA({ data }) {
  return (
    <>
      <section className="bg-gold py-[50px]">
        <div className="myContainer">
          <div className="w-[100%] px-[20px] py-[60px] text-center flex justify-between">
            <h2 className="text-black text-[40px] italic capitalize text-[#fff]">
              {data.text}
            </h2>
            <a
              href="./news.html"
              className="md:w-[320px] md:h-[53px] bg-[#ffffff] text-center hover:bg-[#000000] rounded-[100px] uppercase text-[#B89535] md:text-[15px] md:leading-[24px] md:tracking-[3px] flex justify-center items-center md:ml-[0] w-[118px] h-[35px] ml-[-18px] text-[9px] leading-[14px] tracking-[1.8px]"
            >
              checkout our deals
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default CTA;
