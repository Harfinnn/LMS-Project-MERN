import React from "react";
import Courses from "./courses";
import Students from "./students";
import Cards from "./cards";

export default function ManagerHome() {
  return (
    <>
      <header className="flex items-center justify-between gap-[30px]">
        <div>
          <h1 className="font-extrabold text-[28px] leading-[42px]">
            Overview
          </h1>
          <p className="text-[#838C9D] mt-[1]">Grow your company quickly</p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="w-fit rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap"
          >
            Customize
          </a>
          <a
            href=""
            className="w-fit rounded-full p-[14px_20px] font-semibold text-[#FFFFFF] bg-[#662FFF] text-nowrap"
          >
            Export Data
          </a>
        </div>
      </header>
      <Cards />
      <div className="grid grid-cols-2 gap-[30px]">
        <Courses />
        <Students />
      </div>
    </>
  );
}
