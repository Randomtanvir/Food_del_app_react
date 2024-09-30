import { Button } from "../ui/button";

const Hader = () => {
  return (
    <div className="bg-[url('./public/header_img.png')] h-[34vw]  bg-contain my-auto mx-5 sm:mx-7 bg-no-repeat relative md:mt-4 mt-2 ">
      <div className="absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] md:bottom-[15%] bottom-[10%] left-[6vw] text-white ">
        <h1 className="font-medium sm:text-[max(3.5vw,24px)] text-[18px] ">
          Order Your Favorite Food Here
        </h1>
        <p className="text-[1vw] hidden md:block ">
          Choose from a diverse menu featuring a delecatable arry of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>
        <Button className="hidden sm:block " variant="white" size="lg">
          View Menu
        </Button>
      </div>
    </div>
  );
};

export default Hader;
