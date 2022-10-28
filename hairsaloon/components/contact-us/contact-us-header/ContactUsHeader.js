

const ContactUsHeader = () => {
  return (
    <>
    <h4 class="xl:text-[40px] uppercase xl:tracking-[8px] leading-[56px] text-[32px] text-center lg:text-left tracking-[6.4px] xl:leading-[56px] relative">
      CONTACT US
    </h4>
    {/* <p
        class="brown-light lg:text-[20px] my-[24px] text-center lg:text-left relative leading-[30px]   max-w-[830px]"
      >
      You may contact the Cybersecurity Team through WhatsApp at (+966####) or email us at (cybersecurity@neom.com) or submit your inquiry through below form.
    </p> */}
    <div className="mt-14">
      <p class="brown-light lg:text-[20px] text-center lg:text-left relative leading-[30px]  ">
        Email:&nbsp;
        <span class="text-gold">hairsaloon@gmail.com</span>
      </p>
      <p class="brown-light mt-[5px]  lg:text-[20px] text-center lg:text-left relative leading-[30px]">
        WhatsApp:&nbsp;<span class="text-gold">+92300 1234567</span>
      </p>
      <p class="brown-light mt-[5px] lg:text-[20px] text-center lg:text-left relative leading-[30px]">
        Location:&nbsp;
        <span class="text-gold">
        C-5, Near Celebration Marriage Hall, Gulistan-e-Johar, Karachi
        </span>
      </p>
    </div>
  </>
  )
}

export default ContactUsHeader