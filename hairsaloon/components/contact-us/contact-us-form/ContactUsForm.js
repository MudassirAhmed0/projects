import Image from "next/image";
import chevronDown from "../../../assets/images/icons/gray-arrow.svg";

const ContactUsForm = () => {
  return (
    <form class="relative lg:mt-[74px] mt-[151px] flex justify-between gap-y-[55px] flex-wrap w-full lg:w-[59.55%]">
    <div class="flex flex-col gap-y-[22px] w-full lg:w-[47%] relative">
      <label
        for="deapartmentName"
        class="uppercase text-lg leading-[20px] tracking-[3.6px] brown-light"
      >
        Subject <span class="text-gold brown-light">*</span>
      </label>
      <input
        type="text"
        name="deapartmentName"
        id="deapartmentName"
        onclick="openQuesDropdown()"
        class="text-[18px] brown-light ourline-0 text-[#ffffff80] leading-[20px] placeholder:text-[#ffffff80] bg-transparent border-b border-[#ffffff80] pb-2 focus:border-[#B89535] cursor-pointer"
        placeholder="Question"
        autocomplete="off"
      />
      <span
        id="question_chevron"
        className="absolute right-[0] top-[40px]"
      >
        <Image src={chevronDown} />
      </span>
      <p
        class="text-[13px] text-[#bf3c3c] bottom-[-19px] absolute hidden"
        id="emptySubject"
      >
        This Field is required
      </p>
      <div
        class="quesion-dropdown w-full absolute z-[20] top-[95px] cursor-pointer"
        id="quesionDropdown"
      >
        <div class="brown-light text-[18px] leading-[20px] w-full h-[62px] bg-[#FBF8E9] text-[#13100D] py-[20px] px-[24px] hover:bg-[#FBF8E9]">
          Question
        </div>
        <div
          class="brown-light text-[18px] leading-[20px] w-full h-[62px] bg-[#ffffff] text-[#13100D] py-[20px] px-[24px] hover:bg-[#FBF8E9]"
          onclick="selectedOption('Report Incident')"
        >
          Report Incident
        </div>
        <div
          class="brown-light text-[18px] leading-[20px] w-full h-[62px] bg-[#ffffff] text-[#13100D] py-[20px] px-[24px] hover:bg-[#FBF8E9]"
          onclick="selectedOption('Service Request')"
        >
          Service Request
        </div>
        <div
          class="brown-light text-[18px] leading-[20px] w-full h-[62px] bg-[#ffffff] text-[#13100D] py-[20px] px-[24px] hover:bg-[#FBF8E9]"
          onclick="selectedOption('Other')"
        >
          Other
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-y-[22px] w-full lg:w-[47%] relative">
      <label
        for="fullName"
        class="uppercase text-lg leading-[20px] tracking-[3.6px] brown-light"
      >
        Full Name <span class="text-gold brown-light">*</span>
      </label>
      <input
        type="text"
        name="fullName"
        id="fullName"
        class="text-[18px] brown-light ourline-0 text-[#ffffff80] leading-[20px] placeholder:text-[#ffffff80] bg-transparent border-b border-[#ffffff80] pb-2 focus:border-[#B89535]"
        placeholder="Ahmad Ali"
      />
      <p
        class="text-[13px] text-[#bf3c3c] bottom-[-19px] absolute hidden"
        id="emptyName"
      >
        This Field is required
      </p>
    </div>

    <div class="flex flex-col gap-y-[22px] w-full lg:w-[47%] relative">
      <label
        for="fullName"
        class="uppercase text-lg leading-[20px] tracking-[3.6px] brown-light"
      >
        ORGANIZATION NAME <span class="text-gold brown-light">*</span>
      </label>
      <input
        type="text"
        name="organizationName"
        id="organizationName"
        class="text-[18px] brown-light ourline-0 text-[#ffffff80] leading-[20px] placeholder:text-[#ffffff80] bg-transparent border-b border-[#ffffff80] pb-2 focus:border-[#B89535]"
        placeholder="Organization Name"
      />
      <p
        class="text-[13px] text-[#bf3c3c] bottom-[-19px] absolute hidden"
        id="emptyName"
      >
        This Field is required
      </p>
    </div>
    <div class="flex flex-col gap-y-[22px] w-full lg:w-[47%] relative">
      <label
        for="email"
        class="uppercase text-lg leading-[20px] tracking-[3.6px] brown-light"
      >
        Email <span class="text-gold brown-light">*</span>
      </label>
      <input
        type="text"
        name="email"
        id="email"
        class="text-[18px] brown-light ourline-0 text-[#ffffff80] leading-[20px] placeholder:text-[#ffffff80] bg-transparent border-b border-[#ffffff80] pb-2 focus:border-[#B89535]"
        placeholder="Ahmad@email.com"
      />
      <p
        class="text-[13px] text-[#bf3c3c] bottom-[-19px] absolute hidden"
        id="emptyEmail"
      >
        This Field is required
      </p>
    </div>
    <div class="flex flex-col gap-y-[22px] w-[100%] relative">
      <label
        for="Summary"
        class="uppercase text-lg leading-[20px] tracking-[3.6px] brown-light"
      >
        MESSAGE <span class="text-gold brown-light">*</span>
      </label>
      <input
        type="text"
        name="Summary"
        id="Summary"
        class="text-[18px] brown-light ourline-0 text-[#ffffff80] leading-[20px] placeholder:text-[#ffffff80] bg-transparent border-b border-[#ffffff80] pb-2 focus:border-[#B89535]"
        placeholder=""
      />
      <p
        class="text-[13px] text-[#bf3c3c] bottom-[-19px] absolute hidden"
        id="emptyMessage"
      >
        This Field is required
      </p>
    </div>
    <button
      class="w-[184px] bg-[#b89535] hover:bg-[#ebc03f] text-[15px] uppercase tracking-[3px] mx-auto lg:mx-0 transition-all duration-300 h-[53px] rounded-[28px]"
      onclick="submitForm(event)"
    >
      Submit
    </button>
  </form>
  );
};

export default ContactUsForm;
