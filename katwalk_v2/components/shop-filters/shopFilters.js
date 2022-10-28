import React from "react";
import Image from "next/image";
import logoSquare from "../../assets/images/logo/logo-square.png";
import vat from "../../assets/images/logo/vat.png";
import styles from "./shopFilters.module.css";
import heroImage from "../../assets/images/hero-image.jpg";
import {
  IoBagOutline,
  IoSearchOutline,
  IoHeartOutline,
  IoPersonOutline,
  IoChevronDown,
  IoCloseOutline,
} from "react-icons/io5";
import DesignerFilter from "../designer-filter/designerFilter";
import SizeFilter from "../size-filter/sizeFilter";
import ColorFilter from "../color-filter/colorFilter";
import PriceFilter from "../price-filter/priceFilter";
import SortByFilter from "../sort-by-filter/sortByFilter";

function ShopFilters() {
  const allDesigners = [
    {
      alphabet: "C",
      designers: ["Clue"],
    },
    {
      alphabet: "E",
      designers: ["Estilo Designs"],
    },
    {
      alphabet: "F",
      designers: ["Fouz Couture", "Fourteen Ten"],
    },
    {
      alphabet: "G",
      designers: ["Gmash"],
    },

    {
      alphabet: "K",
      designers: ["Kaf By Kaf"],
    },

    {
      alphabet: "M",
      designers: ["Maliha", "Muna Mattar"],
    },

    {
      alphabet: "N",
      designers: ["Nada Line", "Nakhlah"],
    },

    {
      alphabet: "R",
      designers: ["Raw Mestika"],
    },

    {
      alphabet: "Z",
      designers: ["Zahra Line"],
    },

    {
      alphabet: "",
      designers: ["ثمانية", "ولاء كاظم"],
    },
  ];
  const allSizes = [
    "50",
    "52",
    "54",
    "56",
    "58",
    "60",
    "14 UK size",
    "Free size",
  ];
  const allPriceRanges = [
    "SAR 500 - 1000",
    "SAR 10000 - 1500",
    "SAR 1500 - 2000",
    "> SAR 2000"
  ]
  const allColors = [
    {
      name: "gray",
      colorCode: "bg-[#808080]"
    },
    {
      name: "black",
      colorCode: "bg-[#000000]"
    },
    {
      name: "pink",
      colorCode: "bg-[#FFC0CB]"
    }
  ];
  const sortByMethods = [
    "What's New",
    "Best Seller",
    "Price from high to low",
    "Price from low to hight"
  ]

  return (
    <>
      <div className="w-[100%] pt-[30px] px-[16px]">
        <div className="flex justify-end">
          <p className="fwr self-end text-[13px] tracking-[0.5px] pr-[20px]">
            Reset All filters
          </p>
        </div>
        <div className="filter-main-div flex border-[#b1b1b1] border-t-[1px] border-b-[1px]">
          <div className={`${styles.active} single-filter flex-1 relative`}>
            <div className={`flex justify-between items-center`}>
              <p className="fwr capitalize text-[#1b1b28] text-[11px] my-[13px] px-[16px] h-[22px] leading-[22px]">
                category
              </p>
              <IoChevronDown className="mr-[10px]" />
            </div>
            <div
              className={`  w-[300px] border-[#fbf1e8] border-[1px] absolute z-[2] bg-[#fff] f-out`}
            >
              <div class="flex px-[15px] w-[100%]">
                <div className="w-[100%]">
                  <div class="form-check py-[7px] flex items-center">
                    <input
                      class="w-[28px] form-check-input appearance-none h-4 w-4 border border-[#fbf1e8] bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer w-[25px] h-[25px]"
                      type="checkbox"
                      value=""
                      id="categ1"
                    />
                    <label
                      class="block w-[100%] fwr text-[11px] leading-[25px] text-[#000] capitalize form-check-label inline-block text-gray-800 pt-[4px] pl-[5px]"
                      for="categ1"
                    >
                      abaya
                    </label>
                  </div>
                  <div class="form-check py-[7px] flex items-center">
                    <input
                      class="w-[28px] form-check-input appearance-none h-4 w-4 border border-[#fbf1e8] bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer w-[25px] h-[25px]"
                      type="checkbox"
                      value=""
                      id="categ2"
                    />
                    <label
                      class="block w-[100%] fwr text-[11px] leading-[25px] text-[#000] capitalize form-check-label inline-block text-gray-800 pt-[4px] pl-[5px]"
                      for="categ2"
                    >
                      kaftan
                    </label>
                  </div>
                  <div class="form-check py-[7px] flex items-center">
                    <input
                      class="w-[28px] form-check-input appearance-none h-4 w-4 border border-[#fbf1e8] bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer w-[25px] h-[25px]"
                      type="checkbox"
                      value=""
                      id="categ3"
                    />
                    <label
                      class="block w-[100%] fwr text-[11px] leading-[25px] text-[#000] capitalize form-check-label inline-block text-gray-800 pt-[4px] pl-[5px]"
                      for="categ3"
                    >
                      dress
                    </label>
                  </div>
                  <div class="form-check py-[7px] flex items-center">
                    <input
                      class="w-[28px] form-check-input appearance-none h-4 w-4 border border-[#fbf1e8] bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer w-[25px] h-[25px]"
                      type="checkbox"
                      value=""
                      id="categ4"
                    />
                    <label
                      class="block w-[100%] fwr text-[11px] leading-[25px] text-[#000] capitalize form-check-label inline-block text-gray-800 pt-[4px] pl-[5px]"
                      for="categ4"
                    >
                      farwa
                    </label>
                  </div>
                  <div class="form-check py-[7px] flex items-center">
                    <input
                      class="w-[28px] form-check-input appearance-none h-4 w-4 border border-[#fbf1e8] bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer w-[25px] h-[25px]"
                      type="checkbox"
                      value=""
                      id="categ5"
                    />
                    <label
                      class="block w-[100%] fwr text-[11px] leading-[25px] text-[#000] capitalize form-check-label inline-block text-gray-800 pt-[4px] pl-[5px]"
                      for="categ5"
                    >
                      kimaono
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 single-filter relative">
            <div className={`flex justify-between items-center`}>
              <p className="fwr capitalize text-[#1b1b28] text-[11px] my-[13px] px-[16px] h-[22px] leading-[22px]">
                designers
              </p>
              <IoChevronDown className="mr-[10px]" />
            </div>
            <DesignerFilter data={allDesigners}/>
          </div>
          <div className="flex-1 single-filter relative">
            <div className={`flex justify-between items-center`}>
              <p className="fwr capitalize text-[#1b1b28] text-[11px] my-[13px] px-[16px] h-[22px] leading-[22px]">
                size
              </p>
              <IoChevronDown className="mr-[10px]" />
            </div>
            <SizeFilter data={allSizes} />
          </div>
          <div className="flex-1 single-filter relative">
            <div className={`flex justify-between items-center`}>
              <p className="fwr capitalize text-[#1b1b28] text-[11px] my-[13px] px-[16px] h-[22px] leading-[22px]">
                color
              </p>
              <IoChevronDown className="mr-[10px]" />
            </div>
            <ColorFilter data={allColors} />
          </div>
          <div className="flex-1 single-filter relative">
            <div className={`flex justify-between items-center`}>
              <p className="fwr capitalize text-[#1b1b28] text-[11px] my-[13px] px-[16px] h-[22px] leading-[22px]">
                price
              </p>
              <IoChevronDown className="mr-[10px]" />
            </div>
            <PriceFilter data={allPriceRanges}/>
          </div>
          <div className="flex-1 single-filter relative">
            <div className={`flex justify-between items-center`}>
              <p className="fwr capitalize text-[#1b1b28] text-[11px] my-[13px] px-[16px] h-[22px] leading-[22px]">
                sorty by
              </p>
              <IoChevronDown className="mr-[10px]" />
            </div>
            <SortByFilter data={sortByMethods} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopFilters;
