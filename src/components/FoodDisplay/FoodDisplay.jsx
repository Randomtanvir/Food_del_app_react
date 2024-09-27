import React from "react";
import { useFoodItem } from "@/Contex/StoreContex";
import FoodItems from "../FoodItems/FoodItems";

const FoodDisplay = () => {
  const { food_list } = useFoodItem();
  console.log(food_list);

  return (
    <div>
      <h1 className="mt-4 text-[max(2vw,24px)] font-semibold">
        Top dishes near you
      </h1>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(270px,_1fr))] mt-8 gap-7 gap-y-12 items-center content-center">
        {food_list.map((item, index) => (
          <FoodItems
            key={index}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
            description={item.description}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
