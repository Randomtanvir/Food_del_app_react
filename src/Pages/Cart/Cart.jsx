import { assets } from "@/Assets/assets";
import { useFoodItem } from "@/Contex/StoreContex";

const Cart = () => {
  const { food_list, cartItem, removeToCart } = useFoodItem();

  return (
    <div className="mt-10">
      <div>
        <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_1fr]">
          <p>Item</p>
          <p>Tittle</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>
            <img src={assets.cross_icon} alt="" />
          </p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          if (cartItem[item._id]) {
            return (
              <div key={item._id}>
                <div className="grid mt-5 grid-cols-[1fr_1.5fr_1fr_1fr_1fr_1fr]">
                  <img className="w-14" src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItem[item._id]}</p>
                  <p>${item.price * cartItem[item._id]}</p>
                  <p>
                    <img
                      onClick={() => removeToCart(item._id)}
                      className="w-4 h-4 cursor-pointer"
                      src={assets.cross_icon}
                      alt=""
                    />
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
