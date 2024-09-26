import React from "react";
import { Button } from "../ui/button";

const Hader = () => {
  return (
    <div className="bg-[url('./public/header_img.png')] h-[34vw] my-auto mx-7 bg-no-repeat relative mt-4 animate-fade">
      <div className="absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw] text-white ">
        <h1 className="font-medium text-[max(3.5vw,22px)] ">
          Order Your Favorite Food Here
        </h1>
        <p className="text-[1vw] ">
          Choose from a diverse menu featuring a delecatable arry of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>
        <Button variant="white" size="lg">
          View Menu
        </Button>
      </div>
    </div>
  );
};

export default Hader;
