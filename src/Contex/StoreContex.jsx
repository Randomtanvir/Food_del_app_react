import { createContext, useContext, useState } from "react";
import { food_list } from "../Assets/assets";
import { toast } from "react-toastify";

export const StoreContex = createContext(null);

// eslint-disable-next-line react/prop-types
const StoreContexProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState({});

  const addToCart = (itemId) => {
    if (!cartItem[itemId]) {
      setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
      toast.success("Item add successfully");
    } else {
      setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
      toast.success("Item add successfully");
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItem[item];
      }
    }
    return totalAmount;
  };

  const removeToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    toast.error("Item remove successfully");
  };
  const contexValue = {
    food_list,
    addToCart,
    cartItem,
    removeToCart,
    getTotalCartAmount,
  };
  return (
    <StoreContex.Provider value={contexValue}>{children}</StoreContex.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useFoodItem = () => {
  const value = useContext(StoreContex);
  return value;
};

export default StoreContexProvider;
