import ExploreMenu from "@/components/ExploreMenu/ExploreMenu";
import Hader from "@/components/Header/Hader";
import { useState } from "react";

const Home = () => {
  const [category, setCategory] = useState("");
  console.log(category);

  return (
    <div>
      <Hader />
      <ExploreMenu category={category} setCategory={setCategory} />
    </div>
  );
};

export default Home;
