import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FiAirplay } from "react-icons/fi";
import { searchtext } from "../store";
import { useRecoilState } from "recoil";
function Header() {
  const [search,setSearch]=useRecoilState(searchtext);
  return (
    <div>
      <nav className="p-4 px-16 bg-black text-white flex justify-between">
        <p className="flex items-center">
        <FiAirplay className=" text-white text-2xl rounded-lg  mr-1"></FiAirplay>
          <span className="font-bold">  Abstract </span>{" "}
          <span className="font-light">| Help Center</span>
        </p>
        <button className="border-2 mr-28 bg-gray-900 font-light rounded-md  px-2 border-gray-500">
          Submit request
        </button>
      </nav>
      <div className="h-64 bg-orange-50 flex items-center justify-center">
        <div className="">
          <h1 className="text-5xl px-10 font-normal  mb-5">How we Can help?</h1>
          <div className=" flex items-center relative">
            <input
              type="text"
              placeholder="Search"
              onChange={(e)=>{setSearch(e.target.value)}}
              className="p-2 rounded-md  border border-gray-400 shadow hover:shadow-lg w-full"
            />
            <FaArrowRight className="absolute right-3 "></FaArrowRight>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
