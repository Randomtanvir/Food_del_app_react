import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// eslint-disable-next-line react/prop-types
const FoodItems = ({ id, name, image, price, description, category }) => {
  return (
    <div className="max-w-[300px]">
      <Card>
        <CardHeader>
          <img src={image} className="rounded-md mb-2 w-full" alt="" />
          <CardTitle>{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>$ {price}</p>
        </CardContent>
        <CardFooter>
          <p>{category}</p>
        </CardFooter>
      </Card>
    </div>
  );
};
export default FoodItems;
