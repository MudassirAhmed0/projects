import Image from "next/image";
import logo from "../../../assets/images/logo/logo.svg";
import styles from "./footer.module.css";
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <footer className={`${styles.footer}`}>
        <div className="bg-[#121314]">
          <div className="max-w-[1100px] mx-auto px-[10px] pt-[90px] pb-[100px] flex justify-between">
            <div className="">
              <h6 className="text-[#B89535] text-[25px] capitalize">
                Saloon Hours
              </h6>
              <p className="text-[#8c8989]">
                Monday - Friday: 9:00am to 8:00pm
                <br />
                Saturday: 8:00am to 3:30pm
              </p>
            </div>
            <div className="">
              <h6 className="text-[#B89535] text-[25px] capitalize">
                follow us
              </h6>
              <div className="text-[#8c8989] flex">
                <BsFacebook style={{ fontSize: "30px", paddingTop: "5px", cursor: "pointer", marginRight: '10px' }} />
                <BsTwitter style={{ fontSize: "30px", paddingTop: "5px", cursor: "pointer", marginRight: '10px' }} />
                <BsLinkedin style={{ fontSize: "30px", paddingTop: "5px", cursor: "pointer", }} />
              </div>
            </div>
            <div className="">
              <button
                className={`${styles.button_with_img} rounded-[7px] text-[#B89535] border-[#B89535] border-[3px] px-[10px] py-[10px]`}
              >
                <Image src={logo} width="100px" height="40px" alt="image" />
                <br />
                Shedule an Appoinment
              </button>
            </div>
          </div>
        </div>
        <div className="bg-[#1f2122]">
          <div className="px-[10px] py-[20px]">
            <p className="text-[#8c8989] text-[14px] text-center">
              © Copyright 2022 Hari&Photo | 2504 19th Street NW, Rochester, MN |
              507.288.1836 Privacy Policy | Terms and Conditions | Powered By
              NexGen Marketing
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
