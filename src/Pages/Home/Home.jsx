import ExploreMenu from "@/components/ExploreMenu/ExploreMenu";
import FoodDisplay from "@/components/FoodDisplay/FoodDisplay";
import Hader from "@/components/Header/Hader";
import { useState } from "react";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Hader />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  );
};

export default Home;
