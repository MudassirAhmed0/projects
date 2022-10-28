import React from "react";
import Image from "next/image";

const MakeAnAppointment = () => {
  return (
    <section id="make_an_appointment" className="p-[100px]">
      <div className="myContainer text-black fuelled-div">
        <h3
          data-aos-once="true"
          data-aos="fade-up"
          data-aos-duration="700"
          className="text-center mx-auto md:text-[40px] uppercase md:tracking-[8px] md:leading-[56px] md:pt-[0] text-[20px] leading-[32px] tracking-[3.8px]"
        >
          Make an<span className="text-gold">Appointment</span>
        </h3>
        <form class="relative lg:mt-[74px] mt-[151px] flex justify-between gap-y-[55px] flex-wrap w-full lg:w-[100%]">
          {/* Full Name  */}
          <div class="flex flex-col gap-y-[22px] w-full lg:w-[100%] relative">
            <label
              for="fullName"
              class="uppercase text-lg leading-[20px] tracking-[3.6px] brown-light"
            >
              Name
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              class="text-[18px] brown-light ourline-0 text-[#00000088] leading-[20px] bg-transparent border-b border-[#b89535] pb-2 focus:border-[#000]"
              placeholder="Ahmad Ali"
            />
            <p
              class="text-[13px] text-[#bf3c3c] bottom-[-19px] absolute hidden"
              id="emptyName"
            >
              This Field is required
            </p>
          </div>
          {/* Email */}
          <div class="flex flex-col gap-y-[22px] w-full lg:w-[47%] relative">
            <label
              for="email"
              class="uppercase text-lg leading-[20px] tracking-[3.6px] brown-light"
            >
              Email

            </label>
            <input
              type="text"
              name="email"
              id="email"
              class="text-[18px] brown-light ourline-0 text-[#00000088] leading-[20px] bg-transparent border-b border-[#b89535] pb-2 focus:border-[#000]"
              placeholder="Ahmad@email.com"
            />
            <p
              class="text-[13px] text-[#bf3c3c] bottom-[-19px] absolute hidden"
              id="emptyEmail"
            >
              This Field is required
            </p>
          </div>

          {/* Deals */}
          <div class="flex flex-col gap-y-[22px] w-full lg:w-[47%] relative">
            <label
              for="deapartmentName"
              class="uppercase text-lg leading-[20px] tracking-[3.6px] brown-light"
            >
              Deals

            </label>

            <select className="text-[18px] brown-light ourline-0 text-[#00000088] leading-[20px] bg-transparent border-b border-[#b89535] pb-2 focus:border-[#000] cursor-pointer">
              <option>Select Deals</option>
              <option>Deal - 1</option>
              <option>Deal - 2</option>
              <option>Deal - 3</option>
              <option>Deal - 4</option>
              <option>Deal - 5</option>
              <option>Deal - 6</option>
              <option>Deal - 7</option>
            </select>
          </div>

          {/* Branch */}
          <div class="flex flex-col gap-y-[22px] w-full lg:w-[47%] relative">
            <label
              for="deapartmentName"
              class="uppercase text-lg leading-[20px] tracking-[3.6px] brown-light"
            >
              Branch

            </label>

            <select className="text-[18px] brown-light ourline-0 text-[#00000088] leading-[20px] bg-transparent border-b border-[#b89535] pb-2 focus:border-[#000] cursor-pointer">
              <option>Select Branch</option>
              <option>gulshan</option>
              <option>johar</option>
              <option>bahadurabad</option>
              <option>board office</option>
              <option>korangi</option>
            </select>
          </div>

          {/* Phone */}
          <div class="flex flex-col gap-y-[22px] w-full lg:w-[47%] relative">
            <label
              for="deapartmentName"
              class="uppercase text-lg leading-[20px] tracking-[3.6px] brown-light"
            >
              Phone

            </label>
            <input
              type="text"
              name="deapartmentName"
              id="deapartmentName"
              onclick="openQuesDropdown()"
              className="text-[18px] brown-light ourline-0 text-[#00000088] leading-[20px] bg-transparent border-b border-[#b89535] pb-2 focus:border-[#000] cursor-pointer"
              placeholder="0300-0000000"
              autocomplete="off"
            />
            <p
              class="text-[13px] text-[#bf3c3c] bottom-[-19px] absolute hidden"
              id="emptyName"
            >
              This Field is required
            </p>
          </div>
          {/* Date   */}
          <div class="flex flex-col gap-y-[22px] w-full lg:w-[47%] relative">
            <label
              for="fullName"
              class="uppercase text-lg leading-[20px] tracking-[3.6px] brown-light"
            >
              Date
            </label>
            <input
              type="date"
              name="organizationName"
              id="organizationName"
              class="text-[18px] brown-light ourline-0 text-[#00000088] leading-[20px] bg-transparent border-b border-[#b89535] pb-2 focus:border-[#000]"
              placeholder="00/00/000"
            />
            <p
              class="text-[13px] text-[#bf3c3c] bottom-[-19px] absolute hidden"
              id="emptyName"
            >
              This Field is required
            </p>
          </div>
          {/*  Time  */}
          <div class="flex flex-col gap-y-[22px] w-full lg:w-[47%] relative">
            <label
              for="fullName"
              class="uppercase text-lg leading-[20px] tracking-[3.6px] brown-light"
            >
              Time
            </label>
            <input
              type="time"
              name="organizationName"
              id="organizationName"
              class="text-[18px] brown-light ourline-0 text-[#00000088] leading-[20px] bg-transparent border-b border-[#b89535] pb-2 focus:border-[#000]"
              placeholder="00;00"
            />
            <p
              class="text-[13px] text-[#bf3c3c] bottom-[-19px] absolute hidden"
              id="emptyName"
            >
              This Field is required
            </p>
          </div>
          {/* MESSAGE */}
          <div class="flex flex-col gap-y-[22px] w-[100%] relative">
            <label
              for="Summary"
              class="uppercase text-lg leading-[20px] tracking-[3.6px] brown-light"
            >
              MESSAGE
            </label>
            <textarea
              type="text"
              name="Summary"
              id="Summary"
              class="text-[18px] brown-light ourline-0 text-[#00000088] leading-[20px] bg-transparent border-b border-[#b89535] focus:border-[#000] py-[5px] px-[10px ]"
              placeholder="Message"
              rows={7}
            ></textarea>
            <p
              class="text-[13px] text-[#bf3c3c] bottom-[-19px] absolute hidden"
              id="emptyMessage"
            >
              This Field is required
            </p>
          </div>
          <button
            class="w-[184px] bg-[#b89535] hover:bg-[#ebc03f] text-[15px] uppercase tracking-[3px] mx-auto lg:mx-0 transition-all duration-300 h-[53px] rounded-[28px] text-[#fff]"
            onclick="submitForm(event)"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default MakeAnAppointment;
