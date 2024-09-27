import ExploreMenu from "@/components/ExploreMenu/ExploreMenu";
import FoodDisplay from "@/components/FoodDisplay/FoodDisplay";
import Hader from "@/components/Header/Hader";
import { useState } from "react";

const Home = () => {
  const [category, setCategory] = useState("");
  console.log(category);

  return (
    <div>
      <Hader />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay />
    </div>
  );
};

export default Home;
