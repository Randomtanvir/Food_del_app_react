import React, { useState } from "react";
import { assets } from "@/Assets/assets";
import { Button } from "../ui/button";

const Navbar = () => {
  const [menu, setMenu] = useState("Home");

  return (
    <div className="flex justify-between items-center py-5">
      <img src={assets.logo} alt="Logo_img" className="w-[150px] " />

      <ul className="flex gap-4 text-textColor">
        <li
          className={`cursor-pointer text-[18px] ${
            menu === "Home" ? "border-b-2 border-textColor" : ""
          }`}
          onClick={() => setMenu("Home")}
        >
          Home
        </li>
        <li
          className={`cursor-pointer text-[18px] ${
            menu === "Menu" ? "border-b-2 border-textColor" : ""
          }`}
          onClick={() => setMenu("Menu")}
        >
          Menu
        </li>
        <li
          className={`cursor-pointer text-[18px] ${
            menu === "Mobile app" ? "border-b-2 border-textColor" : ""
          }`}
          onClick={() => setMenu("Mobile app")}
        >
          Mobile app
        </li>
        <li
          className={`cursor-pointer text-[18px] ${
            menu === "Contact Us" ? "border-b-2 border-textColor" : ""
          }`}
          onClick={() => setMenu("Contact Us")}
        >
          Contact Us
        </li>
      </ul>
      <div className="flex gap-10">
        <img src={assets.search_icon} className="cursor-pointer" alt="" />
        <div className="relative">
          <img src={assets.basket_icon} className="cursor-pointer" alt="" />
          <div className=" absolute -top-2 -right-1 w-[10px] h-[10px] bg-tomato rounded-full"></div>
        </div>
        <Button variant="outline">Sign-in</Button>
      </div>
    </div>
  );
};

export default Navbar;
