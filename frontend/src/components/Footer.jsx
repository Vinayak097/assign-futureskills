import React from "react";
import FooterList from "./FooterList";
import { FiAirplay } from "react-icons/fi";
import { FaRegCopyright } from "react-icons/fa6";
function Footer() {
  return (
    <div className="min-h-56 bg-black  text-white p-10">
      <div className="grid grid-cols-5 mx-10">
        <FooterList header={"Abstract"} list={["Branches"]}></FooterList>
        <FooterList
          header={"Resources"}
          list={["Blog ", "Help", " Center", "Release Notes", "Status"]}
        ></FooterList>
        <FooterList
          header={"Community"}
          list={["Twitter", "Linkedln", "Facebook", "Dribble", "Podcast"]}
        ></FooterList>

        <FooterList
          header={"Company"}
          list={["About Us", "Careers", "Legal"]}
        ></FooterList>
        <div></div>
        <div className="mt-6 col-start-4 ">
          <h1 className="text-sm font-bold">Contact Us</h1>
          <p className="font-light text-sm">info@abstract.com</p>
        </div>

        
        <div className="col-start-5">
          <FiAirplay className=" text-white text-2xl rounded-lg mb-2  mr-1"></FiAirplay>
          <div className=" ">
            <p className="flex items-center"><FaRegCopyright className="text-sm mr-1"></FaRegCopyright>Copyright 2022</p>
            <p>Abstract Studio Design, Inc.</p>
            <p>All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
