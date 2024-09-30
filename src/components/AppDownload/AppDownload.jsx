import { assets } from "@/Assets/assets";
import React from "react";

const AppDownload = () => {
  return (
    <div
      className="mt-20 flex items-center w-full justify-center"
      id="mobile_app"
    >
      <div className="">
        <h1 className="md:text-4xl text-2xl text-black text-center font-bold">
          For Better Experience Download <br /> Tomato App{" "}
        </h1>
        <div className="flex flex-col md:flex-row gap-8 mt-10 justify-center items-center">
          <div>
            <img
              className="max-w-[180px] transition-all cursor-pointer hover:scale-105 "
              src={assets.play_store}
              alt=""
            />
          </div>
          <div>
            <img
              className="max-w-[180px] transition-all cursor-pointer hover:scale-105 "
              src={assets.app_store}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
