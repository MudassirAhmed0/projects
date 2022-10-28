import Image from "next/image";
import logo from "../../assets/images/logo/logo.svg";
import navBrand from "../../assets/images/bg/navBrand.png";
import { BsChevronDown } from "react-icons/bs";
import { useRef, useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const divisionDropDown = useRef(null);
  var isMenuHide = true;
  var isRotate = false;
  var isOpenDropdown = false;
  //   const toggle = document.getElementById("toggle");

  function toggleFunction() {
    // console.log("called");
    toggle.classList.toggle("active");
    if (isMenuHide == true) {
      document.getElementById("menu_options").classList.add("show-menu");
      document.querySelector(".mobile-nav").classList.add("fixed");
      document.querySelector(".mobile-nav").classList.remove("absolute");
      document.querySelector(".mobile-nav").classList.contains("bg-black") &&
        document.querySelector(".mobile-nav").classList.remove("bg-black");

      isMenuHide = false;
    } else if (isMenuHide == false) {
      document.getElementById("menu_options").classList.remove("show-menu");
      document.querySelector(".mobile-nav").classList.add("absolute");
      document.querySelector(".mobile-nav").classList.remove("fixed");
      division.current.class;
      isMenuHide = true;
    }
  }
  function openDropdownMenu() {
    divisionDropDown.classList.toggle("show-dropdown");
  }
  return (
    <div>
      <nav className="desktop-nav left-[50%] z-30 transform brown-light text-[15px] translate-x-[-50%] myContainer flex justify-between absolute top-10 items-center">
        <div className="w-[237px] h-[78px]">
          <a href="./">
            <Image src={logo} alt="Logo" width={1500} height={500} />
          </a>
        </div>
        <ul className="desktop-nav-menu text-white uppercase flex gap-x-12 hidde n">
          <li className="text-[#fff] transition-all duration-300 tracking-[3px]">
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </li>

          <li className="text-[#fff] relative dropdownBtn">
            <span className="cursor-pointer tracking-[3px] flex gap-x-[5px] transition-all duration-300">
              <Link href="/services">
                <a>Services</a>
              </Link>
              <BsChevronDown color="#ccc" className="mt-[4px]" />
            </span>
            <div className="dropdown bachalay text-[#fff]">
              <div className="px-[28px] pt-[28px] dropdown w-[318px] overflow-hidden h-[170px] top-10 normal-case transition-all duration-300 tracking-0 absolute left-[50%] transform translate-x-[-50%] rounded-[15px] flex justify-between">
                <div className="absolute top-0 right-[-40px] img_container w-[175px]">
                  <Image src={navBrand} alt="image" />
                </div>
                <ul className="flex flex-col gap-y-[24px] relative">
                  <li className="transition-all duration-300">
                    <a href="#" className="brown-light">
                      Trim &#39; Cut
                    </a>
                  </li>
                  <li className="transition-all duration-300">
                    <a href="#" className="brown-light">
                      Wash &#39; Dry
                    </a>
                  </li>
                  <li className="transition-all duration-300">
                    <a href="#" className="brown-light">
                      Beard &#39; Shave
                    </a>
                  </li>
                 
                </ul>
              </div>
            </div>
          </li>
          {/* <li className="text-[#fff] transition-all duration-300 tracking-[3px]">
            <Link href="/about">
              <a>Strategy</a>
            </Link>
          </li> */}
          <li className="text-[#fff] transition-all duration-300 tracking-[3px]">
            <Link href="/deals">
              <a>Deals</a>
            </Link>
          </li>
          <li className="text-[#fff] transition-all duration-300 tracking-[3px]">
            <Link href="/blogs">
              <a>blogs</a>
            </Link>
          </li>
          <li className="text-[#fff] transition-all duration-300 tracking-[3px]">
            <Link href="/contact-us">
              <a>Contact Us</a>
            </Link>
          </li>
        </ul>
      </nav>
      {/* mobile navigation bar start   */}
      <nav className="mobile-nav mobile-navv h-[100 vh] left-[50%] z-[31] transform brown-light text-[15px] translate-x-[-50%] myContainer flex justify-start absolute items-center flex-col top-[0]">
        <div className="w-full h-full absolute top-0 left-0">
          <span className="absolute top-0 left-0 w-full h-full z-[3] homeHeroOverlay1 back-transparent"></span>
          <span className="absolute top-0 left-0 w-full h-full z-[2] homeHeroOverlay2 back-transparent"></span>
        </div>
        <div className="w-[100%] h-[78px] flex justify-between items-center z-[5]">
          <a href="./">
            <span className="image_container max-w-[170px] max-h-[70px] inline-block">
              <Image src={logo} alt="Logo" />
            </span>
          </a>
          <div id="toggle" onClick={() => toggleFunction()}></div>
        </div>
      </nav>
      <div
        id="menu_options"
        className="mobile-nav myContainer opacity-0 fixed stati c z-[30] translate-y-[-100vh]"
      >
        <div className="w-full h-full absolute top-0 left-0 z-[-1]">
          <span className="absolute top-0 left-0 w-full h-full z-[3] homeHeroOverlay1"></span>
          <span className="absolute top-0 left-0 w-full h-full z-[2] homeHeroOverlay2"></span>
        </div>
        <ul className="h-[100vh] text-white uppercase flex gap-x-12 flex-col z-[5] pt-[108px] w-[100%]">
          <li className="text-[25px] transition-all duration-300 leading-[70px] tracking-[5px]">
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </li>
          <li
            onClick={() => openDropdownMenu()}
            className="relative dropdownB tn"
          >
            <span className="text-[25px] cursor-pointer leading-[70px] tracking-[5px] flex gap-x-[5px] transition-all duration-300 justify-between">
              Services
              <span className={`rotate-18 0`}>
                <BsChevronDown color="#ccc" className="mt-[20px]" />
              </span>
            </span>
            <div
              id="divisionDropDown"
              ref={divisionDropDown}
              className={`${
                isOpenDropdown ? "show-dropdown" : ""
              } dropdown2 bachalay opacity-1 max-h-[0]`}
            >
              <div className="pb-[18px] dropdown2 w-[100%] overflow-hidden h-[auto] normal-case transition-all duration-300 tracking-0 rounded-[15px] flex justify-between opacity-100 flex-col">
                <div className="absolute top-0 right-0 img_container w-[175px]"></div>
                <ul className="flex flex-col">
                  <li className="transition-all duration-300 py-[5px]">
                    <a
                      href="./governance.html"
                      className="brown-light text-[12px] tracking-[2.4px] uppercase"
                    >
                      Governance, Risk and Compliance
                    </a>
                  </li>
                  <li className="transition-all duration-300 py-[5px]">
                    <a
                      href="./engineering.html"
                      className="brown-light text-[12px] tracking-[2.4px] uppercase"
                    >
                      Engineering and Architecture
                    </a>
                  </li>
                  <li className="transition-all duration-300 py-[5px]">
                    <a
                      href="./response.html"
                      className="brown-light text-[12px] tracking-[2.4px] uppercase"
                    >
                      Response and Resilience
                    </a>
                  </li>
                  <li className="transition-all duration-300 py-[5px]">
                    <a
                      href="./operational.html"
                      className="brown-light text-[12px] tracking-[2.4px] uppercase"
                    >
                      Industrial Operational Technology
                    </a>
                  </li>
                  <li className="transition-all duration-300 py-[5px]">
                    <a
                      href="./service-delivery.html"
                      className="brown-light text-[12px] tracking-[2.4px] uppercase"
                    >
                      Cybersecurity service delivery
                    </a>
                  </li>
                  <li className="transition-all duration-300 py-[5px]">
                    <a
                      href="./management-office.html"
                      className="brown-light text-[12px] tracking-[2.4px] uppercase"
                    >
                      Strategy Management office (SMO)
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="text-[25px] transition-all duration-300 leading-[70px] tracking-[5px]">
            <Link href="/about">
              <a>Strategy</a>
            </Link>
          </li>
          <li className="text-[25px] transition-all duration-300 leading-[70px] tracking-[5px]">
            <Link href="/about">
              <a>Standards</a>
            </Link>
          </li>
          <li className="text-[25px] transition-all duration-300 leading-[70px] tracking-[5px]">
            <Link href="/about">
              <a>News</a>
            </Link>
          </li>
          <li className="text-[25px] transition-all duration-300 leading-[70px] tracking-[5px]">
            <a>
              <Link href="/contact-us">
                <a>Contact Us</a>
              </Link>
            </a>
          </li>
        </ul>
      </div>
      {/* mobile navigation bar end  */}
    </div>
  );
}
