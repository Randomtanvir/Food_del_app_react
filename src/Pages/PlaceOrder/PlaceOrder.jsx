import { useFoodItem } from "@/Contex/StoreContex";
import React from "react";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useFoodItem();
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between justify-center items-center md:gap-40 gap-4 lg:my-28 my-6">
      <div className="lg:flex-[1] w-full">
        <h1 className="sm:text-3xl text-xl font-bold lg:mb-10 mb-6">
          Delivery Information
        </h1>
        <form className="flex flex-col gap-6  lg:max-w-[600px]">
          <div className="flex justify-between gap-3">
            <input
              className="h-10 lg:flex-[1] w-full px-3 py-1 border border-[#d8d6d6] rounded-md outline-none "
              type="text"
              placeholder="First Name"
            />
            <input
              className="h-10 px-3 lg:flex-[1] w-full py-1 border border-[#d8d6d6] rounded-md outline-none "
              type="text"
              placeholder="Last Name"
            />
          </div>

          <input
            className="h-10 px-3 py-1 border border-[#d8d6d6] rounded-md outline-none "
            type="text"
            placeholder="Email Address"
          />

          <input
            className="h-10 px-3 py-1 border border-[#d8d6d6] rounded-md outline-none "
            type="text"
            placeholder="Street"
          />

          <div className="flex gap-3 justify-between">
            <input
              className="h-10 px-3 py-1 lg:flex-[1] w-full border border-[#d8d6d6] rounded-md outline-none "
              type="text"
              placeholder="City"
            />
            <input
              className="h-10 px-3 py-1 lg:flex-[1] w-full border border-[#d8d6d6] rounded-md outline-none "
              type="text"
              placeholder="State"
            />
          </div>
          <div className="flex gap-3 justify-between">
            <input
              className="h-10 px-3 py-1 lg:flex-[1] w-full border border-[#d8d6d6] rounded-md outline-none "
              type="text"
              placeholder="Zip Code"
            />
            <input
              className="h-10 px-3 py-1 lg:flex-[1] w-full border border-[#d8d6d6] rounded-md outline-none "
              type="text"
              placeholder="Country"
            />
          </div>

          <input
            className="h-10 px-3 py-1 border border-[#d8d6d6] rounded-md outline-none "
            type="text"
            placeholder="Phone"
          />
        </form>
      </div>
      <div className="lg:flex-[1] w-full ">
        <div className="">
          <h1 className="text-2xl text-black font-semibold mb-4">
            Cart Totals
          </h1>
          <div className="flex justify-between">
            <h3 className="text-sm text-[#171717] ">Subtotal</h3>
            <p className="text-sm text-[#171717] ">${getTotalCartAmount()}</p>
          </div>
          <hr className="my-3" />
          <div className="flex justify-between">
            <h3 className="text-sm text-[#171717] ">Delivery Fee</h3>
            <p className="text-sm text-[#171717] ">
              ${getTotalCartAmount() > 0 ? 2 : 0}
            </p>
          </div>
          <hr className="my-3" />
          <div className="flex justify-between">
            <h3 className="text-black font-medium text-lg">Total</h3>
            <p className="text-black font-medium text-lg">
              ${getTotalCartAmount() > 0 ? getTotalCartAmount() + 2 : 0}
            </p>
          </div>

          <button className="bg-tomato px-8 mt-10 py-3 text-white text-sm rounded transition duration-300 ease-in-out hover:bg-[#f3493d]">
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
