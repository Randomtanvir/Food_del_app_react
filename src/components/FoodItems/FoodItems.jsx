import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { assets } from "@/Assets/assets";

// eslint-disable-next-line react/prop-types
const FoodItems = ({ id, name, image, price, description, category }) => {
  const [itemCount, setItemCount] = useState(0);

  return (
    <div className="max-w-[300px]">
      <Card>
        <div className="relative">
          <img
            src={image}
            className="rounded-t-md mb-2 w-full transition-all hover:scale-105"
            alt=""
          />
          <div className="absolute right-2 bottom-3">
            {!itemCount ? (
              <img
                src={assets.add_icon_white}
                onClick={() => setItemCount((prev) => prev + 1)}
                className="cursor-pointer"
              />
            ) : (
              <div className="flex items-center gap-3">
                <img
                  src={assets.remove_icon_red}
                  className="cursor-pointer"
                  onClick={() => setItemCount((prev) => prev - 1)}
                  alt=""
                />
                <p className="text-xl text-white">{itemCount}</p>
                <img
                  src={assets.add_icon_green}
                  className="cursor-pointer"
                  onClick={() => setItemCount((prev) => prev + 1)}
                  alt=""
                />
              </div>
            )}
          </div>
        </div>
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-between">
          <p className="text-xl">$ {price}</p>
          <div>
            <img src={assets.rating_starts} alt="" />
          </div>
        </CardContent>
        <CardFooter>
          <p>{category}</p>
        </CardFooter>
      </Card>
    </div>
  );
};
export default FoodItems;
