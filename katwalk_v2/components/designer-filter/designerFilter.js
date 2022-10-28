import React from "react";
import { IoSearchOutline } from "react-icons/io5";

function DesignerFilter({data}) {
 

  return (
    <>
      <div
        className={`w-[300px] border-[#fbf1e8] border-[1px] absolute z-[2] bg-[#fff] f-out max-h-[350px] overflow-auto`}
      >
        <div className="w-[100%] px-[15px] pt-[25px]">
          <div className="border-[#e2e5ec] border-b-[1px] flex">
            <input className="fwr w-[100%] h-[32px] leading-[32px] text-[13px] text-[#898b92] pb-[3px] focus:outline-none rounded-none pr-[10px] input-with-search" />
            <IoSearchOutline className="text-[20px] mt-[8px] mr-[7px]" />
          </div>
        </div>
        <div class="flex px-[15px] w-[100%] ">
          <div className="w-[100%]">
            {data.map((value, index) => {
              return <DesignerFilterItem data={value} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default DesignerFilter;

function DesignerFilterItem({ data }) {
  return (
    <>
      <div className="flex flex-start">
        <p className="fwr text-[14px] uppercase w-[50px] pt-[10px]">
          {data.alphabet}
        </p>
        <div className="w-[100%]">
          {data.designers.map((valu, inde) => {
            return (
              <div class="form-check w-[100%] py-[7px] flex items-center border-[#e2e5ec] border-b-[1px] pb-[20px]">
                <input
                  class="min-w-[25px] relative form-check-input appearance-none h-4 w-4 border border-[#fbf1e8] bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer w-[25px] h-[25px] ml-[10px]"
                  type="checkbox"
                  value=""
                  id="designer1"
                />
                <label
                  class="block w-[100%] fwr text-[11px] leading-[25px] text-[#000] capitalize form-check-label inline-block text-gray-800 pt-[4px] pl-[5px]"
                  for="designer1"
                >
                  {valu}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
