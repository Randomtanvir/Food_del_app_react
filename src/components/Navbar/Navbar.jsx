import React, { useState } from "react";
import { assets } from "@/Assets/assets";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { useFoodItem } from "@/Contex/StoreContex";
import { food_list } from "./../../Assets/assets";
import forEach from "./../../../node_modules/lodash-es/forEach";

const Navbar = ({ setIsLoginPupupShow }) => {
  const [menu, setMenu] = useState("Home");
  const { cartItem, food_list } = useFoodItem();

  return (
    <div className="flex justify-between items-center py-5 ">
      <Link to="/">
        <img
          src={assets.logo}
          alt="Logo_img"
          className="w-[100px] lg:w-[150px] "
        />
      </Link>

      <ul className="lg:flex gap-4 text-textColor hidden">
        <Link
          to="/"
          className={`cursor-pointer text-[18px] ${
            menu === "Home" ? "border-b-2 border-textColor" : ""
          }`}
          onClick={() => setMenu("Home")}
        >
          Home
        </Link>
        <a
          href="#menu"
          className={`cursor-pointer text-[18px] ${
            menu === "Menu" ? "border-b-2 border-textColor" : ""
          }`}
          onClick={() => setMenu("Menu")}
        >
          Menu
        </a>
        <a
          href="#mobile_app"
          className={`cursor-pointer text-[18px] ${
            menu === "Mobile app" ? "border-b-2 border-textColor" : ""
          }`}
          onClick={() => setMenu("Mobile app")}
        >
          Mobile app
        </a>
        <a
          href="#footer"
          className={`cursor-pointer text-[18px] ${
            menu === "Contact Us" ? "border-b-2 border-textColor" : ""
          }`}
          onClick={() => setMenu("Contact Us")}
        >
          Contact Us
        </a>
      </ul>
      <div className="flex items-center lg:gap-10 md:gap-6 sm:gap-4 gap-2">
        <div>
          <img src={assets.search_icon} className="cursor-pointer" alt="" />
        </div>
        <div className="relative">
          <Link to="/cart">
            {" "}
            <img src={assets.basket_icon} className="cursor-pointer" alt="" />
          </Link>
          <div
            className={`absolute -top-2 -right-1 w-[10px] h-[10px] bg-tomato rounded-full`}
          ></div>
        </div>
        <Button
          onClick={() => setIsLoginPupupShow(true)}
          variant="outline"
          size="sm"
        >
          Sign-in
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
