import { BiPhoneCall } from "react-icons/bi";
import { IoMdClock } from "react-icons/io";
import { HiMail } from "react-icons/hi";

const ContactSection = () => {
  return (
    <section className="pt-[100px] pb-[50px]">
      <div className="flex justify-center gap-x-[2%]">
        
        <div className="w-[31%] py-[5%] px-[5px] text-center bg-[#31302f] rounded-[10px]">
          <BiPhoneCall style={{ color: '#b89535', fontSize: "60px", cursor: "pointer", margin: '0 auto' }} />
          <h2 className="text-[30px] uppercase py-[25px]">Contact Us</h2>
          <h6 className="">Mobile No.</h6>
          <h6 className="text-[20px] text-[#b89535]">03321234567</h6>
        </div>

        <div className="w-[31%] py-[5%] px-[2%] text-center bg-[#31302f] rounded-[10px]">
          <IoMdClock style={{ color: '#b89535', fontSize: "60px", cursor: "pointer", margin: '0 auto' }} />
          <h2 className="text-[30px] uppercase py-[25px]">Working Hours</h2>
          <h6 className="">Time</h6>
          <h6 className="text-[20px] text-[#b89535]">09AM - 08PM</h6>
        </div>

        <div className="w-[31%] py-[5%] px-[2%] text-center bg-[#31302f] rounded-[10px]">
          <HiMail style={{ color: '#b89535', fontSize: "60px", cursor: "pointer", margin: '0 auto' }} />
          <h2 className="text-[30px] uppercase py-[25px]">Email</h2>
          <h6 className="">Email</h6>
          <h6 className="text-[20px] text-[#b89535]">hairsaloon@gmail.com</h6>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
