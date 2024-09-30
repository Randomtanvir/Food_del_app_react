import { assets } from "@/Assets/assets";
import React from "react";

const Footer = () => {
  return (
    <div
      id="footer"
      className="text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-5 pt-20 mt-20 px-[8vw] py-5 "
    >
      <div className="grid md:grid-cols-[2fr_1fr_1fr] md:gap-20 gap-8 ">
        <div className="flex flex-col gap-5">
          <div>
            <img src={assets.logo} alt="" />
          </div>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal.
          </p>
          <div className="flex gap-4">
            <img
              className="cursor-pointer transition-all hover:scale-105"
              src={assets.facebook_icon}
              alt=""
            />
            <img
              className="cursor-pointer transition-all hover:scale-105"
              src={assets.twitter_icon}
              alt=""
            />
            <img
              className="cursor-pointer transition-all hover:scale-105"
              src={assets.linkedin_icon}
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="md:text-3xl text-xl text-white font-medium">
            COMPANY
          </h2>
          <ul className="flex flex-col gap-3">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About us</li>
            <li className="cursor-pointer">Delivery</li>
            <li className="cursor-pointer">Privacy Police</li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="md:text-3xl text-xl text-white font-medium">
            GET IN TOUCH
          </h2>
          <div>
            <p className="mb-3 cursor-pointer">+880 1639-528846</p>
            <p className="cursor-pointer">tanvir.info07@gmail.com</p>
          </div>
        </div>
        <hr className="my-4" />
      </div>
      <p className="p-6 text-center ">
        Copyright 2024 @ Tomato.com - All Right Reserved.{" "}
      </p>
    </div>
  );
};

export default Footer;
