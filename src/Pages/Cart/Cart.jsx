import { assets } from "@/Assets/assets";
import { useFoodItem } from "@/Contex/StoreContex";

const Cart = () => {
  const { food_list, cartItem, removeToCart } = useFoodItem();

  return (
    <div className="mt-10">
      <div>
        <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr]">
          <p className="text-xs sm:text-sm">Item</p>
          <p className="text-xs sm:text-sm">Tittle</p>
          <p className="text-xs sm:text-sm">Price</p>
          <p className="text-xs sm:text-sm">Quantity</p>
          <p className="text-xs sm:text-sm">Total</p>
          <p className="text-tomato">❌</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          if (cartItem[item._id]) {
            return (
              <div key={item._id}>
                <div className="grid mt-5 grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr]">
                  <img
                    className="sm:w-14 w-12 mr-1 sm:mr-0"
                    src={item.image}
                    alt=""
                  />
                  <p className="text-xs sm:text-sm">{item.name}</p>
                  <p className="text-xs sm:text-sm">${item.price}</p>
                  <p className="text-xs sm:text-sm">{cartItem[item._id]}</p>
                  <p className="text-xs sm:text-sm">
                    ${item.price * cartItem[item._id]}
                  </p>
                  <p
                    className="cursor-pointer"
                    onClick={() => removeToCart(item._id)}
                  >
                    ❌
                  </p>
                </div>
                <hr className="my-5" />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Cart;
