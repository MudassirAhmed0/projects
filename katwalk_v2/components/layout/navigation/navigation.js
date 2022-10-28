import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../assets/images/logo/logo.svg";
import {
  IoBagOutline,
  IoSearchOutline,
  IoHeartOutline,
  IoPersonOutline,
  IoChevronDown,
  IoCloseOutline,
} from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { BsList, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./navigation.module.css";
import logoSquare from "../../../assets/images/logo/logo-square.png";
import dress1 from "../../../assets/images/products/dress1.jpg";
import { useRef } from "react";
import Link from "next/link";

function Navigation() {
  const dropdown1 = useRef(null);
  const [togglerClasses, setTogglerClasses] = useState([]);
  const [cartToggleClasses, setCartToggleClasses] = useState([]);
  const [searchToggleClasses, setSearchToggleClasses] = useState([]);
  const [searchDesktopToggleClasses, setSearchDesktopToggleClasses] = useState(
    []
  );
  const navigationToggler = () => {
    if (!togglerClasses.includes("visibility-visible")) {
      setTogglerClasses(["visibility-visible"]);
    } else {
      setTogglerClasses([]);
    }
    console.log(togglerClasses);
  };
  const cartToggler = () => {
    if (!cartToggleClasses.includes("visibility-visible")) {
      setCartToggleClasses(["visibility-visible"]);
    } else {
      setCartToggleClasses([]);
    }
    console.log(cartToggleClasses);
  };
  const searchToggler = () => {
    if (!searchToggleClasses.includes("visibility-visible")) {
      setSearchToggleClasses(["visibility-visible"]);
    } else {
      setSearchToggleClasses([]);
    }
    console.log(searchToggleClasses);
  };

  const searchDesktopToggler = () => {
    if (!searchDesktopToggleClasses.includes("show-search-input")) {
      setSearchDesktopToggleClasses(["show-search-input"]);
    } else {
      setSearchDesktopToggleClasses([]);
    }
    console.log(searchDesktopToggleClasses);
  };

  // var isOpenDropdown1 = false;
  const [styleClasses, setStyleClasses] = useState(["orange_dropdown"]);
  const [occasionsClasses, setOccasionsClasses] = useState(["orange_dropdown"]);
  const [shopAllClasses, setShopAllClasses] = useState(["orange_dropdown"]);

  const stylesDropdown = () => {
    console.log("openDropdown called");
    if (!styleClasses.includes("show-dropdown")) {
      setStyleClasses([...styleClasses, "show-dropdown"]);
    } else {
      setStyleClasses(["orange_dropdown"]);
    }
  };

  const occasionsDropdown = () => {
    console.log("openDropdown called");
    if (!occasionsClasses.includes("show-dropdown")) {
      setOccasionsClasses([...occasionsClasses, "show-dropdown"]);
    } else {
      setOccasionsClasses(["orange_dropdown"]);
    }
  };
  const shopallDropdown = () => {
    if (!shopAllClasses.includes("show-dropdown")) {
      setShopAllClasses([...shopAllClasses, "show-dropdown"]);
    } else {
      setShopAllClasses(["orange_dropdown"]);
    }
  };
  return (
    <>
      <nav className="fixed top-0 w-[100%] h-[60px] bg-[#fff] px-[3%] flex justify-between items-center z-[3] shadow-md shadow-[#0000000a]     lg:h-[80px]">
        <div className="max-w-[115px] pt-[8px]     sm:max-w-[125px] sm:pt-[0]">
          <Link href="./">
            <span className="image_container">
              <Image src={logo} className="cursor-pointer" alt="logo image" />
            </span>
          </Link>
        </div>
        <ul
          className={`${styles.middle_menu} flex justify-center flex-wrap px-[20px] relative hidden        lg:px-[0] lg:flex`}
        >
          <li>
            <a
              href="#"
              className="work-regular text-[#000] text-[13px] leading-[15px] uppercase px-[10px]"
            >
              Ready for shipping
            </a>
          </li>
          <li className={`${styles.menu_with_dropdown}`}>
            <Link href="./shop">
              <a className="work-regular text-[#000] text-[13px] leading-[15px] uppercase px-[10px]">
                STYLES
              </a>
            </Link>
            <ul className="fadeDown w-[620px] bg-[#000000bf] px-[50px] py-[25px] absolute z-[1] top-[25px] flex flex-wrap left-0 hidden">
              <li className="w-[50%] my-[10px]">
                <a
                  href="#"
                  className="work-regular text-[13px] text-[#fff] uppercase"
                >
                  WHATS&#39;S NEW?
                </a>
              </li>
              <li className="w-[50%] my-[10px]">
                <a
                  href="#"
                  className="work-regular text-[13px] text-[#fff] uppercase"
                >
                  spring bloom
                </a>
              </li>
              <li className="w-[50%] my-[10px]">
                <a
                  href="#"
                  className="work-regular text-[13px] text-[#fff] uppercase"
                >
                  classic black
                </a>
              </li>
              <li className="w-[50%] my-[10px]">
                <a
                  href="#"
                  className="work-regular text-[13px] text-[#fff] uppercase"
                >
                  print
                </a>
              </li>
              <li className="w-[50%] my-[10px]">
                <a
                  href="#"
                  className="work-regular text-[13px] text-[#fff] uppercase"
                >
                  embroidery
                </a>
              </li>
              <li className="w-[50%] my-[10px]">
                <a
                  href="#"
                  className="work-regular text-[13px] text-[#fff] uppercase"
                >
                  sets
                </a>
              </li>
              <li className="w-[50%] my-[10px]">
                <a
                  href="#"
                  className="work-regular text-[13px] text-[#fff] uppercase"
                >
                  color block
                </a>
              </li>
            </ul>
          </li>
          <li className={`${styles.menu_with_dropdown}`}>
            <a
              href="#"
              className="work-regular text-[#000] text-[13px] leading-[15px] uppercase px-[10px]"
            >
              OCCASIONS
            </a>
            <ul className="fadeDown w-[620px] bg-[#000000bf] px-[50px] py-[25px] absolute z-[1] top-[25px] flex flex-wrap left-0 hidden">
              <li className="w-[50%] my-[10px]">
                <a
                  href="#"
                  className="work-regular text-[13px] text-[#fff] uppercase"
                >
                  casual
                </a>
              </li>
              <li className="w-[50%] my-[10px]">
                <a
                  href="#"
                  className="work-regular text-[13px] text-[#fff] uppercase"
                >
                  evening
                </a>
              </li>
              <li className="w-[50%] my-[10px]">
                <a
                  href="#"
                  className="work-regular text-[13px] text-[#fff] uppercase"
                >
                  formal
                </a>
              </li>
            </ul>
          </li>
          <li className={`${styles.menu_with_dropdown}`}>
            <Link href="./shop">
              <a className="work-regular text-[#000] text-[13px] leading-[15px] uppercase px-[10px]">
                SHOP ALL
              </a>
            </Link>
            <ul className="fadeDown w-[620px] bg-[#000000bf] px-[50px] py-[25px] absolute z-[1] top-[25px] flex flex-wrap left-0 hidden">
              <li className="w-[50%] my-[10px]">
                <a
                  href="#"
                  className="work-regular text-[13px] text-[#fff] uppercase"
                >
                  abayas
                </a>
              </li>
              <li className="w-[50%] my-[10px]">
                <a
                  href="#"
                  className="work-regular text-[13px] text-[#fff] uppercase"
                >
                  kaftans
                </a>
              </li>
              <li className="w-[50%] my-[10px]">
                <a
                  href="#"
                  className="work-regular text-[13px] text-[#fff] uppercase"
                >
                  dresses
                </a>
              </li>
              <li className="w-[50%] my-[10px]">
                <a
                  href="#"
                  className="work-regular text-[13px] text-[#fff] uppercase"
                >
                  kimonos
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#"
              className="work-regular text-[#000] text-[13px] leading-[15px] uppercase px-[10px]"
            >
              DESIGNERS
            </a>
          </li>
          <li>
            <a
              href="#"
              className="work-regular text-[#000] text-[13px] leading-[15px] uppercase px-[10px]"
            >
              JOIN KATWALK!
            </a>
          </li>
        </ul>
        <div
          className={`${styles.menu_right_div} flex items-center ml-[80px]     sm:ml-[0]`}
        >
          <div className="pr-[10px] order-2     sm:order-[unset]">
            {/* search for for desktop */}
            <div
              className="relative hidden      lg:block"
              onClick={() => searchDesktopToggler()}
            >
              <input
                type="email"
                name="email"
                className={`${searchDesktopToggleClasses.join(
                  " "
                )} work-regular px-[10px] bg-white focus:outline-none block w-f ull transition-all duration-300 w-[0] absolute right-0 top-0      sm:text-[13px] show-search-inpu t`}
              />
              <IoSearchOutline className="text-[20px] cursor-pointer relative z-4" />
            </div>
            {/* search for for mob */}
            <IoSearchOutline
              onClick={() => searchToggler()}
              className="text-[20px] cursor-pointer block      lg:hidden"
            />
          </div>
          <div className="px-[10px] flex items-center border-r-[0px] border-[#e2e5ec] order-3     sm:order-[unset] sm:border-r-[1px]">
            {/* cart icon for desktop */}
            <div className="cart-icon-div relative hidden     lg:block">
              <IoBagOutline
                onClick={() => cartToggler()}
                className="text-[20px] cursor-pointer"
              />

              <div
                className={`${styles.card_sm_box} card-sm-box min-w-[110px] bg-[#fff] w-[322px] p-[20px] pb-[30px] border-[#fbf1e8] border-[1px] absolute top-[30px] left-[50%] translate-x-[-50%] hidden`}
              >
                <div className="border-b-[1px] border-[#e2e5ec] w-[100%] text-center flex justify-end">
                  <p className="work-regular text-[#000000b8] text-[12px] mb-[10px] capitalize">
                    My Bag
                  </p>
                </div>
                <div>
                  <div className="text-center">
                    <p className="work-regular text-[#000000] text-[13px] mt-[10px]">
                      Your Bag is empty
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* cart icon for mob */}
            <IoBagOutline
              onClick={() => cartToggler()}
              className="text-[20px] cursor-pointer block     lg:hidden"
            />
            <span className="work-regular text-[12px] ml-[7px]">0</span>
          </div>
          <div className="px-[8px] flex items-center border-r-[1px] border-[#e2e5ec] hidden       lg:flex">
            <IoHeartOutline className="text-[20px] cursor-pointer" />
            <span className="work-regular text-[12px] ml-[7px]">0</span>
          </div>
          <div className="px-[7px] border-r-[1px] border-[#e2e5ec] hidden       lg:flex">
            <IoPersonOutline className="text-[20px] cursor-pointer" />
          </div>
          <div className="pl-[0px] pr-[18px] pb-[9px] order-1      sm:order-[unset] sm:pl-[5px] sm:pr-[30px] sm:pb-[0]">
            <a href="#" className="almarai-regular text-[13px] cursor-pointer">
              عربي
            </a>
          </div>
        </div>
        <div className="block       lg:hidden">
          <FaBars onClick={() => navigationToggler()} className="text-[20px]" />
        </div>

        {/* to show */}
        {/* black menu for mobile */}
        <div
          className={`${styles.mob_menu} ${togglerClasses.join(
            " "
          )} fixed top-0 left-0 w-[100%] h-[100%]`}
        >
          <div
            className={`menu_overlay absolute top-0 left-0 w-[100%] h-[100%] bg-[#00000080] opacity-0`}
          ></div>
          <AiOutlineClose
            onClick={() => navigationToggler()}
            className="text-[26px] text-[#fff] absolute top-[15px] right-[20px]"
          />
          <div
            className={`mob_menu_black_div h-[100%] bg-[#000000bf] px-[20px] py-[20px] absolute translate-x-[-100%]`}
          >
            <div className="flex justify-end border-b-[1px] border-[#fff]">
              <IoSearchOutline className="text-[22px] text-[#fff] mx-[10px] mb-[15px]" />
              <IoHeartOutline className="text-[22px] text-[#fff] mx-[10px] mb-[15px]" />
              <IoPersonOutline className="text-[22px] text-[#fff] mx-[10px] mb-[15px]" />
            </div>
            <div className="flex flex-col justify-between h-[85vh]">
              <ul>
                <li>
                  <a
                    href="#"
                    className="work-regular text-[#ffffff80] text-[13px] py-[13px] block border-b-[1px] border-[#505050] uppercase"
                  >
                    Ready for shipping
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => stylesDropdown()}
                    href="#"
                    className="work-regular flex justify-between text-[#ffffff80] text-[13px] py-[13px] block border-b-[1px] border-[#505050] uppercase"
                  >
                    STYLES
                    <IoChevronDown className="text-[#ffffff80] mr-[10px]  " />
                  </a>
                  <ul
                    className={`${styleClasses.join(
                      " "
                    )} overflow-hidden bg-[#c53a19a6] mx-[-20px] mt-[-1px] `}
                  >
                    <li>
                      <a
                        href="#"
                        className="work-regular text-[#ffffff] text-[13px] block pl-[20px] py-[13px] uppercase"
                      >
                        What&#39;s new?
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="work-regular text-[#ffffff] text-[13px] block pl-[20px] py-[13px] uppercase"
                      >
                        Spring Bloom
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="work-regular text-[#ffffff] text-[13px] block pl-[20px] py-[13px] uppercase"
                      >
                        classic black
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="work-regular text-[#ffffff] text-[13px] block pl-[20px] py-[13px] uppercase"
                      >
                        print
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="work-regular text-[#ffffff] text-[13px] block pl-[20px] py-[13px] uppercase"
                      >
                        embroidery
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="work-regular text-[#ffffff] text-[13px] block pl-[20px] py-[13px] uppercase"
                      >
                        sets
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="work-regular text-[#ffffff] text-[13px] block pl-[20px] py-[13px] uppercase"
                      >
                        color block
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => occasionsDropdown()}
                    className="work-regular flex justify-between text-[#ffffff80] text-[13px] py-[13px] block border-b-[1px] border-[#505050] uppercase"
                  >
                    OCCASIONS
                    <IoChevronDown className="text-[#ffffff80] mr-[10px]  " />
                  </a>
                  <ul
                    className={`${occasionsClasses.join(
                      " "
                    )} overflow-hidden bg-[#c53a19a6] mx-[-20px] mt-[-1px]`}
                  >
                    <li>
                      <a
                        href="#"
                        className="work-regular text-[#ffffff] text-[13px] block pl-[20px] py-[13px] uppercase"
                      >
                        casual
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="work-regular text-[#ffffff] text-[13px] block pl-[20px] py-[13px] uppercase"
                      >
                        evening
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="work-regular text-[#ffffff] text-[13px] block pl-[20px] py-[13px] uppercase"
                      >
                        formal
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => shopallDropdown()}
                    className="work-regular flex justify-between text-[#ffffff80] text-[13px] py-[13px] block border-b-[1px] border-[#505050] uppercase"
                  >
                    SHOP ALL
                    <IoChevronDown className="text-[#ffffff80] mr-[10px]  " />
                  </a>
                  <ul
                    className={`${shopAllClasses.join(
                      " "
                    )} overflow-hidden bg-[#c53a19a6] mx-[-20px] mt-[-1px]`}
                  >
                    <li>
                      <a
                        href="#"
                        className="work-regular text-[#ffffff] text-[13px] block pl-[20px] py-[13px] uppercase"
                      >
                        abayas
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="work-regular text-[#ffffff] text-[13px] block pl-[20px] py-[13px] uppercase"
                      >
                        kaftans
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="work-regular text-[#ffffff] text-[13px] block pl-[20px] py-[13px] uppercase"
                      >
                        dresses
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="work-regular text-[#ffffff] text-[13px] block pl-[20px] py-[13px] uppercase"
                      >
                        kimonos
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="#"
                    className="work-regular text-[#ffffff80] text-[13px] py-[13px] block border-b-[1px] border-[#505050] uppercase"
                  >
                    DESIGNERS
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="work-regular text-[#ffffff80] text-[13px] py-[13px] block border-b-[1px] border-[#505050] uppercase"
                  >
                    JOIN KATWALK!
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a
                    href="#"
                    className="work-regular text-[#ffffff80] text-[13px] py-[8px] block uppercase"
                  >
                    about katwalk
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="work-regular text-[#ffffff80] text-[13px] py-[8px] block uppercase"
                  >
                    faqs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="work-regular text-[#ffffff80] text-[13px] py-[8px] block uppercase"
                  >
                    privacy policy, terms & conditions
                  </a>
                </li>
              </ul>
              <div className="flex justify-start">
                <BsInstagram className="text-[#ffffff] mr-[20px]" />
                <BsWhatsapp className="text-[#ffffff]" />
              </div>
            </div>
            <div className="absolute bottom-[20px] right-[20px] max-w-[55px]">
              <Link href="./">
                <Image src={logoSquare} alt="logo image" />
              </Link>
            </div>
          </div>
        </div>

        {/* to show */}
        {/* cart div */}
        <div
          className={`${styles.mob_menu} ${cartToggleClasses.join(
            " "
          )} cart-box fixed top-0 left-0 w-[100%] h-[100%]`}
        >
          <div
            className={`menu-overlay absolute top-0 left-0 w-[100%] h-[100%] bg-[#00000080] opacity-0`}
          ></div>
          <AiOutlineClose className="text-[26px] text-[#fff] absolute top-[15px] right-[20px]" />
          <div
            className={`mob-menu-white-div h-[100%] bg-[#fff] px-[20px] py-[20px] absolute translate-x-[140%] border-l-[1px] border-[#fbf1e8]`}
          >
            <div className="flex justify-between border-b-[2px] border-[#ededed]">
              <h6 className="work-regular text-[13px] text-[#1b1b28] capitalize">
                {/* your bag */}
                your bag is empty
              </h6>
              <div className="flex justify-end">
                <IoCloseOutline
                  onClick={() => cartToggler()}
                  className="text-[28px] text-[#000] mx-[0px] mb-[15px] mt-[-5px] cursor-pointer"
                />
              </div>
            </div>

            <div className="flex flex-col justify-start h-[85vh]    hidden    ">
              <div className="flex justify-between pt-[20px] pb-[45px]">
                <div className="max-w-[30%] max-h-[70px] px-[5px]">
                  <span className="image_container">
                    <Image src={dress1} alt="product image" />
                  </span>
                </div>
                <div className="pt-[20px]">
                  <p className="work-regular text-[13px] leading-[1.5] tracking-[0.5px]">
                    Floral Embroidery Tulle Sleeve Abaya <br /> Clue
                  </p>
                  <p className="work-regular text-[13px] leading-[1.5] mt-[10px] pl-[10px]">
                    1x SAR 1,030
                  </p>
                </div>
                <div>
                  <IoCloseOutline className="text-[16px] text-[#000] mr-[10px]" />
                </div>
              </div>

              <div className="border-t-[1px] border-[#ededed] flex justify-between">
                <p
                  href="#"
                  className="work-regular text-[#000] text-[13px] py-[13px] block uppercase"
                >
                  Subtotal
                </p>
                <p
                  href="#"
                  className="work-regular text-[#000] text-[13px] py-[13px] block uppercase"
                >
                  SAR 1,030
                </p>
              </div>
              <button className="text-[14px] text-[#fff] uppercase bg-[#000] px-[10px] py-[10px]">
                checkout
              </button>
            </div>
          </div>
        </div>

        {/* to show */}
        {/* search div for mobile */}
        <div
          className={`${styles.mob_menu} ${searchToggleClasses.join(
            " "
          )} fixed top-0 left-0 w-[100%] h-[100%]`}
        >
          <div
            className={`menu_overlay absolute top-0 left-0 w-[100%] h-[100%] bg-[#fff] px-[20px] pt-[110px] opacity-0`}
          >
            {/* <h1>dsaf</h1> */}
            <label className="block">
              <input
                type="email"
                name="email"
                className="work-regular mt-1 px-[10px] py-[5px] bg-white border-b-[1px]  placeholder-slate-400 focus:outline-none block w-full sm:text-[13px]"
                placeholder="Search"
              />
            </label>
          </div>
          <AiOutlineClose
            onClick={() => searchToggler()}
            className="text-[26px] text-[#000] absolute top-[15px] right-[20px]"
          />
        </div>
      </nav>
    </>
  );
}

export default Navigation;
