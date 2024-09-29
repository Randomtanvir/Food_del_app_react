import { createContext, useContext, useEffect, useState } from "react";
import { food_list } from "../Assets/assets";

export const StoreContex = createContext(null);

// eslint-disable-next-line react/prop-types
const StoreContexProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (itemId) => {
    if (!cartItem[itemId]) {
      setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  useEffect(() => {
    console.log(cartItem);
  }, [cartItem]);

  const removeToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const contexValue = {
    food_list,
    addToCart,
    cartItem,
    removeToCart,
  };
  return (
    <StoreContex.Provider value={contexValue}>{children}</StoreContex.Provider>
  );
};

export const useFoodItem = () => {
  const value = useContext(StoreContex);
  return value;
};

export default StoreContexProvider;
